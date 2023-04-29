import fetch from "node-fetch";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const openSource = {
  githubConvertedToken: process.env.GITHUB_TOKEN,
  githubUserName: process.env.GITHUB_USERNAME,
};

const reposURL = "https://api.github.com/users/loinguyen3108/repos?per_page=100";

const headers_lang = {
  "Content-Type": "application/json",
  Authorization: "bearer " + openSource.githubConvertedToken,
};

const repos_lang_api = [];
const result_langs = [];

function sortLanguageFrequencies(result) {
  let languageFrequencies = {};

  for (let item of result) {
    for (let lang in item) {
      if (lang in languageFrequencies) {
        languageFrequencies[lang] += item[lang];
      } else {
        languageFrequencies[lang] = item[lang];
      }
    }
  }

  let sortedFrequencies = {};
  Object.keys(languageFrequencies)
    .sort((a, b) => languageFrequencies[b] - languageFrequencies[a])
    .forEach((key) => {
      sortedFrequencies[key] = languageFrequencies[key];
    });

  return sortedFrequencies;
}

function calcSumValue(obj) {
    let sum = 0;
    for (let key in obj) {
        sum += obj[key];
    }
    return sum;
}

const query_pr = {
  query: `
	query {
	  user(login: "${openSource.githubUserName}"){
	    pullRequests(last: 100, orderBy: {field: CREATED_AT, direction: DESC}){
      totalCount
      nodes{
        id
        title
        url
        state
	      mergedBy {
	          avatarUrl
	          url
	          login
	      }
	      createdAt
	      number
        changedFiles
	      additions
	      deletions
        baseRepository {
	          name
	          url
	          owner {
	            avatarUrl
	            login
	            url
	          }
	        }
      }
    }
	}
}
	`,
};

const query_issue = {
  query: `query{

		user(login: "${openSource.githubUserName}") {
    issues(last: 100, orderBy: {field:CREATED_AT, direction: DESC}){
      totalCount
      nodes{
      	id
        closed
        title
        createdAt
        url
        number
        assignees(first:100){
          nodes{
            avatarUrl
            name
            url
          }
        }
        repository{
          name
          url
          owner{
            login
            avatarUrl
            url
          }
        }
      }
    }
  }

	}`,
};

const baseUrl = "https://api.github.com/graphql";

const headers = {
  "Content-Type": "application/json",
  Authorization: "bearer " + openSource.githubConvertedToken,
};

fetch(baseUrl, {
  method: "POST",
  headers: headers,
  body: JSON.stringify(query_pr),
})
  .then((response) => response.text())
  .then((txt) => {
    const data = JSON.parse(txt);
    var cropped = { data: [] };
    cropped["data"] = data["data"]["user"]["pullRequests"]["nodes"];

    var open = 0;
    var closed = 0;
    var merged = 0;
    for (var i = 0; i < cropped["data"].length; i++) {
      if (cropped["data"][i]["state"] === "OPEN") open++;
      else if (cropped["data"][i]["state"] === "MERGED") merged++;
      else closed++;
    }

    cropped["open"] = open;
    cropped["closed"] = closed;
    cropped["merged"] = merged;

    console.log("Fetching the Pull Request Data.\n");
    fs.writeFile(
      "./src/shared/opensource/pull_requests.json",
      JSON.stringify(cropped),
      function (err) {
        if (err) {
          console.log(err);
        }
      }
    );
  })
  .catch((error) => console.log(JSON.stringify(error)));

fetch(baseUrl, {
  method: "POST",
  headers: headers,
  body: JSON.stringify(query_issue),
})
  .then((response) => response.text())
  .then((txt) => {
    const data = JSON.parse(txt);
    var cropped = { data: [] };
    cropped["data"] = data["data"]["user"]["issues"]["nodes"];

    var open = 0;
    var closed = 0;
    for (var i = 0; i < cropped["data"].length; i++) {
      if (cropped["data"][i]["closed"] === false) open++;
      else closed++;
    }

    cropped["open"] = open;
    cropped["closed"] = closed;

    console.log("Fetching the Issues Data.\n");
    fs.writeFile(
      "./src/shared/opensource/issues.json",
      JSON.stringify(cropped),
      function (err) {
        if (err) {
          console.log(err);
        }
      }
    );
  })
  .catch((error) => console.log(JSON.stringify(error)));

fetch(reposURL, {
  method: "GET",
  headers: headers_lang,
})
.then((response) => response.json()) // Parse response as JSON
.then((data) => {
  for (const repo of data) {
    const api_url = `https://api.github.com/repos/loinguyen3108/${repo.name}/languages`;
    repos_lang_api.push(api_url);
  }

  Promise.all(
    repos_lang_api.map((lang_api) =>
      fetch(lang_api, {
        method: "GET",
        headers: headers,
      }).then((response) => response.json())
    )
  )
    .then((results) => {
      result_langs.push(...results);
      console.log("Fetching Languages Data.\n");
      const sortedFrequencies = sortLanguageFrequencies(result_langs);
      const top5Langs = Object.keys(sortedFrequencies)
      .slice(0, 5)
      .reduce((obj, key) => {
          obj[key] = sortedFrequencies[key];
          return obj;
      }, {});
      fs.writeFile(
        "./src/shared/opensource/languages.json",
        JSON.stringify(top5Langs),
        function (err) {
          if (err) {
            console.log(err);
          }
        }
      );
    })
    .catch((error) => console.log(JSON.stringify(error)));
})
.catch((error) => console.log(JSON.stringify(error)));
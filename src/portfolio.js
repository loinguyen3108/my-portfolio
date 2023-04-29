/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Loi Nguyen Portfolio",
  description:
    "Big Data, Big Think",
  og: {
    title: "Loi Nguyen Portfolio",
    type: "website",
    url: "https://loinguyen3108.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Loi Nguyen",
  logo_name: "LoiNguyen",
  nickname: "louis_nguyen",
  subTitle:
    "I’m a Data Engineer with over two years of experience proficient in tools and programming languages such as Python, PostgreSQL, MongoDB, Docker, Git, Spark, Hive, Hadoop, and AWS. Being a person with high responsibility, hard-working at work, capable of learning new knowledge to serve the job. In the future, I am excited to improve my skills and knowledge about Data engineering and Cloud and learn job management skills so that I can contribute to the company's development.",
  resumeLink:
    "https://drive.google.com/file/d/1_2Vcv95FsXAwZT361D6bp5wTeG1Edfam/view",
  portfolio_repository: "https://github.com/loinguyen3108/my-portfolio",
  githubProfile: "https://github.com/loinguyen3108",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/loinguyen3108",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/l%E1%BB%A3i-nguy%E1%BB%85n-323080190/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:ntloic3tbt@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Data Engineer & Big Data",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Design and implement data pipeline",
        "⚡ Experience of working with intergrate ML, DL model into production",
        "⚡ Data modeling, setup, maintenance data lake and data warehouse",
      ],
      softwareSkills: [
        {
          skillName: "Apache Hadoop",
          fontAwesomeClassname: "devicon:hadoop-wordmark",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Apache Hive",
          fontAwesomeClassname: "simple-icons:apachehive",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Apache Spark",
          fontAwesomeClassname: "devicon:apachespark-wordmark",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Apache Airflow",
          fontAwesomeClassname: "devicon:apacheairflow-wordmark",
          style: {
            color: "#D00000",
          },
        },
        {
          skillName: "DBT",
          fontAwesomeClassname: "logos:dbt",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/ntloic3tbt/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/ntloic3tbt",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/BlackPig_3108",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/linguyn",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Industrial University of Ho Chi Minh city",
      subtitle: "Computer Science",
      logo_path: "iuh.png",
      alt_name: "IIITDM Kurnool",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, ML, DL etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science and Cloud Computing."
      ],
      website_link: "https://iuh.edu.vn/",
    }
  ],
};

const certifications = {
  certifications: [
    {
      title: "Deploying Machine Learning Models in Production",
      subtitle: "DeepLearning.AI",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/FCFNESSLNMZ5",
      alt_name: "DeepLearning.AI",
      color_code: "#8C151599",
    },
    {
      title: "Introduction to Machine Learning in Production",
      subtitle: "DeepLearning.AI",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/D5KZJ5V9Z2AC",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Machine Learning Data Lifecycle in Production",
      subtitle: "DeepLearning.AI",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/7BXUWTXH6F3X",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "dbt Fundamentals",
      subtitle: "dbt Labs",
      logo_path: "dbt_logo.png",
      certificate_link:
        "https://www.credential.net/77a322f1-a4a7-446e-98a4-8e23971d4136#gs.whrk2n",
      alt_name: "dbt Labs",
      color_code: "#1F70C199",
    },
    {
      title: "Building Resilient Streaming Analytics Systems on Google Cloud",
      subtitle: "Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/f306715c-afaf-4439-95c0-c71bc41ea0ef/badges/3522840",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Building Batch Data Pipelines on Google Cloud",
      subtitle: "Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/f306715c-afaf-4439-95c0-c71bc41ea0ef/badges/3516359",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Modernizing Data Lakes and Data Warehouses with Google Cloud",
      subtitle: "Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/f306715c-afaf-4439-95c0-c71bc41ea0ef/badges/3504792",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Preparing for the Google Cloud Professional Data Engineer Exam",
      subtitle: "Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/f306715c-afaf-4439-95c0-c71bc41ea0ef/badges/3483959",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Engineer Data in Google Cloud",
      subtitle: "Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/f306715c-afaf-4439-95c0-c71bc41ea0ef/badges/3483722",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Build and Optimize Data Warehouses with BigQuery",
      subtitle: "Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/f306715c-afaf-4439-95c0-c71bc41ea0ef/badges/3447081",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Automating Infrastructure on Google Cloud with Terraform",
      subtitle: "Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/f306715c-afaf-4439-95c0-c71bc41ea0ef/badges/3434124",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Build a Website on Google Cloud",
      subtitle: "Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/f306715c-afaf-4439-95c0-c71bc41ea0ef/badges/3406174",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Serverless Firebase Development",
      subtitle: "Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/f306715c-afaf-4439-95c0-c71bc41ea0ef/badges/3401822",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Perform Foundational Infrastructure Tasks in Google Cloud",
      subtitle: "Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/f306715c-afaf-4439-95c0-c71bc41ea0ef/badges/3396721",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Create and Manage Cloud Resources",
      subtitle: "Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "htthttps://www.cloudskillsboost.google/public_profiles/f306715c-afaf-4439-95c0-c71bc41ea0ef/badges/3394492",
      alt_name: "GCP",
      color_code: "#4285F499",
    }
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Data Engineer",
          company: "Weai. JSC.",
          company_url: "https://www.linkedin.com/company/eduplax/about/",
          logo_path: "eduplax_logo.jpeg",
          duration: "Sep 2019 - Jul 2022",
          location: "Ho Chi Minh, Vietnam",
          description:
            "⚡ Design data pipelines to ETL data from multiple sources (crawler, third-party, DBMS,...) to DataLake, Data Warehouse. Working as devops for R&D Team. Implement API for Data, R&D Team",
          color: "#0879bf",
        },
        {
          title: "Data Engineer",
          company: "Krom. Ltd.",
          company_url: "https://www.linkedin.com/company/kromlab/about/",
          logo_path: "kromlab_logo.jpeg",
          duration: "Jul 2022 - Present",
          location: "Ho Chi Minh, Vietnam",
          description:
            "⚡ Design, implement crawler to capture data from social network. Transform data to generate report. ETL data from crawler to Postgres and Elasticsearch. Implement Data API. Integreate ML/DL model to production",
          color: "#9b1578",
        }
      ],
    },
    {
      title: "Internships",
      experiences: [
        // {
        //   title: "Machine Learning Intern",
        //   company: "TikTok Inc.",
        //   company_url: "https://www.tiktok.com/en/",
        //   logo_path: "tiktok_logo.png",
        //   duration: "May 2022 - Aug 2022",
        //   location: "San Francisco, USA",
        //   description:
        //     "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
        //   color: "#000000",
        // },
        // {
        //   title: "Data Science Research Intern",
        //   company: "Delhivery Pvt. Ltd.",
        //   company_url: "https://www.delhivery.com/",
        //   logo_path: "delhivery_logo.png",
        //   duration: "May 2019 - Sept 2019",
        //   location: "Gurgaon, Haryana",
        //   description:
        //     "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
        //   color: "#ee3c26",
        // },
        // {
        //   title: "Data Science Intern",
        //   company: "Intel Indexer LLC",
        //   company_url:
        //     "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
        //   logo_path: "intel_logo.jpg",
        //   duration: "Nov 2018 - Dec 2018",
        //   location: "Work From Home",
        //   description:
        //     "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
        //   color: "#0071C5",
        // },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        // {
        //   title: "Google Explore ML Facilitator",
        //   company: "Google",
        //   company_url: "https://about.google/",
        //   logo_path: "google_logo.png",
        //   duration: "June 2019 - April 2020",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
        //   color: "#4285F4",
        // },
        // {
        //   title: "Microsoft Student Partner",
        //   company: "Microsoft",
        //   company_url: "https://www.microsoft.com/",
        //   logo_path: "microsoft_logo.png",
        //   duration: "Aug 2019 - May 2020",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
        //   color: "#D83B01",
        // },
        // {
        //   title: "Mozilla Campus Captain",
        //   company: "Mozilla",
        //   company_url: "https://www.mozilla.org/",
        //   logo_path: "mozilla_logo.png",
        //   duration: "Oct 2019 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
        //   color: "#000000",
        // },
        // {
        //   title: "Developer Students Club Member",
        //   company: "DSC IIITDM Kurnool",
        //   company_url:
        //     "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
        //   logo_path: "dsc_logo.png",
        //   duration: "Jan 2018 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
        //   color: "#0C9D58",
        // },
        // {
        //   title: "Developer Program Member",
        //   company: "Github",
        //   company_url: "https://github.com/",
        //   logo_path: "github_logo.png",
        //   duration: "July 2019 - PRESENT",
        //   location: "Work From Home",
        //   description:
        //     "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
        //   color: "#181717",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animation.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Data Engineer, Big Data, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://loinguyen318.wordpress.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ton That Thuyet, Ward 15, District 4, Ho Chi Minh City",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/8UkWCBT88QxHDAyy6",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};

import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import { Fade } from "react-reveal";
import "./PullRequestChart.css";
import PullRequestData from "../../shared/opensource/languages.json";

class PullRequestChart extends Component {
  render() {
    const data = {
      labels: Object.keys(PullRequestData),
      datasets: [
        {
          data: Object.values(PullRequestData),
          backgroundColor: ["#28a745", "#6f42c1", "#d73a49", "#ffc107", "#17a2b8"],
          hoverBackgroundColor: ["#28a745dd", "#6f42c1dd", "#d73a49dd", "#ffc107dd", "#17a2b8dd"]
        },
      ],
    };

    return (
      <div className="pr-chart">
        <Fade bottom duration={2000} distance="20px">
          <h2 className="pr-chart-header">Top Languages by My Repository</h2>
        </Fade>
        <Doughnut
          data={data}
          options={{
            padding: "0",
            margin: "0",
            responsive: true,
            maintainAspectRatio: true,
            animation: {
              duration: 4000,
            },
          }}
        />
      </div>
    );
  }
}

export default PullRequestChart;

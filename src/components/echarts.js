import React, { Component } from "react";
import * as echarts from "echarts";
export default class Chart extends Component {
  constructor() {
    super();
    window.addEventListener("resize", this.resize);
  }
  resize() {
    var myChart = echarts.getInstanceByDom(document.getElementById("main"));
    myChart.resize();
  }
  componentDidMount() {
    echarts.init(document.getElementById("main"));
    this.getOption();
  }
  componentDidUpdate() {
    this.getOption();
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
  }
  getOption = () => {
    var myChart = echarts.getInstanceByDom(document.getElementById("main"));
    myChart.setOption({
      tooltip: {
        trigger: "axis",
        position: function (pt) {
          return [pt[0], "10%"];
        },
      },
      title: {
        left: "center",
        text: "在线人数统计",
      },
      toolbox: {
        feature: {
          dataZoom: {
            yAxisIndex: "none",
          },
          restore: {},
          saveAsImage: {},
        },
      },
      xAxis: {
        type: "time",
        boundaryGap: false,
      },
      yAxis: {
        type: "value",
        boundaryGap: [0, "100%"],
      },
      dataZoom: [
        {
          type: "inside",
          start: 90,
          end: 100,
        },
        {
          start: 0,
          end: 100,
        },
      ],
      series: [
        {
          name: "在线人数",
          type: "line",
          smooth: false,
          symbol: "none",
          areaStyle: {},
          data: this.props.data,
        },
      ],
    });
  };

  render() {
    return (
        <div id="main" style={{height:"300px",marginLeft:"10px",marginTop:"10px",marginRight:"10px"}}></div>
    );
  }
}

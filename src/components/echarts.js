import React, { Component } from "react";
import * as echarts from "echarts";
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import { CardHeader } from "@material-ui/core";

export default class Chart extends Component {
  constructor(){
    super()

  }
  componentDidMount() {
    this.getOption();
  }
  getOption = () => {
    var myChart = echarts.init(document.getElementById("main"));
    myChart.setOption({
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        minInterval: 1,
        name: this.props.title,
        type: "value",
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line",
          areaStyle: {},
        },
      ],
    });
  };

  render() {
    return (
      <Card style={{"width":"60%","marginLeft":"20%","marginTop":"10px","marginBottom":"10px"}}>
        <CardHeader title={this.props.title}></CardHeader>
        <CardContent >
          <div id="main" style={{ height: "300px",width:"auto" }}></div>
        </CardContent>
      </Card>
    );
  }
}

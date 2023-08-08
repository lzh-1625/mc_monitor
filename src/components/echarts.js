import React, { Component } from "react";
import * as echarts from "echarts";
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import { CardHeader } from "@material-ui/core";



export default class Chart extends Component {
  constructor(){
    super()
    window.addEventListener('resize', this.resize)
  }
  resize(){
    var myChart = echarts.init(document.getElementById("main"));
    myChart.resize()
  }
  componentDidMount() {
    this.getOption();
  }
  componentDidUpdate(){
    this.getOption();
  }
  getOption = () => {
    var myChart = echarts.init(document.getElementById("main"));
    myChart.setOption({
      tooltip: {
        trigger: 'axis',
        position: function (pt) {
          return [pt[0], '10%'];
        }
      },
      title: {
        left: 'center',
        text: '在线人数统计'
      },
      toolbox: {
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          restore: {},
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'time',
        boundaryGap: false
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%']
      },
      dataZoom: [
        {
          type: 'inside',
          start: 90,
          end: 100
        },
        {
          start: 0,
          end: 100
        }
      ],
      series: [
        {
          name: '在线人数',
          type: 'line',
          smooth: false,
          symbol: 'none',
          areaStyle: {},
          data: this.props.data
        }
      ]
    });
  };

  render() {
    return (
      <Card style={{"width":"60%","marginLeft":"20%","marginTop":"10px","marginBottom":"10px"}}>
        <CardHeader ></CardHeader>
        <CardContent >
          <div id="main" style={{ height: "300px",width:"auto" }}></div>
        </CardContent>
      </Card>
    );
  }
}

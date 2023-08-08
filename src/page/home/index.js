import React, { Component } from "react";
import Chart from "../../components/echarts";
import { getEchartData } from "../../api/monitor";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  async componentDidMount() {
    let res = await getEchartData();
    this.setState({ data: res.data });
  }
  render() {
    return (
      <div>
        <Chart key={"chart"}
          data={this.state.data}
        ></Chart>
      </div>
    );
  }
}

export default Home;

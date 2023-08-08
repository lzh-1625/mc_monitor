import React, { Component } from "react";
import Chart from "../../components/echarts";
import { getEchartData } from "../../api/monitor";
import RecipeReviewCard from "../../components/descriptionCard"
import BasicTable from "../../components/detailsCard"
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
        <Chart key={"chart"} data={this.state.data}></Chart>
        <div style={{marginLeft:"10%",float:"left",marginTop:"30px"}}>
          <RecipeReviewCard></RecipeReviewCard>
        </div>
        <div style={{marginLeft:"5%",width:"auto",float:"left",marginTop:"30px"}}>
          <BasicTable></BasicTable>
        </div>
      </div>
    );
  }
}

export default Home;

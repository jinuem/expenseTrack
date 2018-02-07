import React, { Component } from 'react';
import {selectValues} from './App';
var PieChart = require("react-chartjs").Pie;
var data = [
    {
        value: 300,
        label:"#F7464A",

    },
    {
        value: 50,
        label: "#46BFBD",

    },
    {
        value: 100,
        label: "#FDB45C",

    }
]
class PieChartPage extends Component {
    
   constructor(props) {
    super(props);
    
  }


  render() {
    let piedata = this.props.data;
    return <PieChart data={piedata} width="600" height="250"/>

  }
}

export default PieChartPage;    

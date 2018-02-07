import React, { Component } from 'react';
import {selectValues} from './App';
var PieChart = require("react-chartjs").Pie;
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

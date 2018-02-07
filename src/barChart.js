import React, { Component } from 'react';
import {selectValues} from './App';
var BarChart = require("react-chartjs").Bar;
//mock Data
// var data = {
// 	labels: ["January", "February", "March", "April", "May", "June", "July"],
// 	datasets: [
// 		{
// 			label: "My First dataset",
// 			data: [65, 59, 80, 81, 56, 55, 40]
// 		}]
//     }

class PieChartPage extends Component {
    
   constructor(props) {
    super(props);
    
  }


  render() {
    let bardata = this.props.data;
    if (Object.keys(bardata).length !== 0) {
    return <BarChart data={bardata} width="600" height="250"/>
    } else {
        return(null)
    }
  }
}

export default PieChartPage;    

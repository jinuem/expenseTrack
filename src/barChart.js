import React, { Component } from 'react';
import {selectValues} from './App';
var BarChart = require("react-chartjs").Bar;
//mock Data
var data = {
	labels: ["January", "February", "March", "April", "May", "June", "July"],
	datasets: [
		{
			label: "My First dataset",
			fillColor: "rgba(220,220,220,0.5)",
			strokeColor: "rgba(220,220,220,0.8)",
			highlightFill: "rgba(220,220,220,0.75)",
			highlightStroke: "rgba(220,220,220,1)",
			data: [65, 59, 80, 81, 56, 55, 40]
		},
		{
			label: "My Second dataset",
			fillColor: "rgba(151,187,205,0.5)",
			strokeColor: "rgba(151,187,205,0.8)",
			highlightFill: "rgba(151,187,205,0.75)",
			highlightStroke: "rgba(151,187,205,1)",
			data: [28, 48, 40, 19, 86, 27, 90]
		}]
    }

class PieChartPage extends Component {
    
   constructor(props) {
    super(props);
    
  }


  render() {
    let piedata = this.props.data;
    return <BarChart data={data} width="600" height="250"/>

  }
}

export default PieChartPage;    

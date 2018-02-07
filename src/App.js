import React, { Component } from 'react';
import logo from './logo.png';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addExpense,updateExpense} from './action';
import Expense from './Expense';
import PieChartPage from './pieChart';
import BarChart from './barChart'
import './App.css';
import barChart from './barChart';

export const selectValues = ['Home','Transport','Movies','Food','Entertainment','Shopping']

class App extends Component {
  constructor(props) {
    super(props);
     this.state = {expenses:[],piedata:[],barData:{}};
     this.removeExpense = this.removeExpense.bind(this);
     this.updateExpense = this.updateExpense.bind(this);
     this.addNew = this.addNew.bind(this);
     this.piChartData = this.piChartData.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;

    this.setState({
      [name]: target.value
    });
  }
  
  ComponentWillReceiveProps(){
    this.piChartData();

  }
  render() {
    const {expenses} = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Expense Tracker</h1>
        </header>
        <div className="dataSection">
        <form onSubmit={this.addNew} className="form-style">
        <label>
          Expense Title:
          </label>
          <input name="title" type ="text" ref="title" required ></input> 
          
          <label>
           Amount:
        <input
            name="amount"
            type="number"
            ref= "amount"
            required
            //onChange={this.handleInputChange} 
            />
            </label>
            <label>
          Date:
        <input
            name="date"
            type="date"
            ref= "date"
            required
            />
            </label>
            <label>
          Category:
            <select required ref ="category">
            {selectValues.map((value,i)=>{
              return(
                <option key={i} value={value}>{value}</option>
              )
            })}
          </select>
          </label>

        <button className="button_green" type="submit" >Add New Expense</button>
        </form>
        {expenses.map((expense,i) => {
                                    return(
                                      <div>
                                        <h3>Expenses List</h3>
                                      <Expense key={i} index={i} 
                                      deleteFromApp={this.removeExpense}
                                       updateToApp={this.updateExpense} >
                                        {expense}
                                      </Expense>
                                      </div>
                                    ) 
                          })}
      </div>
      <div className="chartSection">
      <h3>Pie Chart Section (Category)</h3>
      <PieChartPage data={this.state.piedata}/>
      <h3>Bar Chart section (Date)</h3>
      <BarChart data={this.state.barData}/>
      </div>
      </div>
    );
  }

  piChartData (){
    let expenses = this.props.expenses;
    let CategoryTotal = {};
    expenses.map((expense,i)=>{
      selectValues.map((category,i)=>{
        if(!CategoryTotal[category] ){
          CategoryTotal[category] = {};
          CategoryTotal[category].value =0;
        }
        if(category === expense.category)
        CategoryTotal[category].value = CategoryTotal[category].value + expense.amount;
        CategoryTotal[category].label = category;
        return;
      })
      return;
    })

  //console.log(CategoryTotal);
  let piechartData= []

    piechartData = Object.values(CategoryTotal)
  
  console.log(piechartData);
  this.setState({piedata:piechartData});
  this.barChartData();
  }

  barChartData (){
    let expenses = this.props.expenses;
    let DateTotal = {};
    expenses.map((expense,i)=>{
      let date = expense.date;
        if(!DateTotal[date] ){
          DateTotal[date] = {};
          DateTotal[date].value =0;
        }
        if(date === expense.date)
        DateTotal[date].value = DateTotal[date].value + expense.amount;
        DateTotal[date].label = date;
        return;
      
      return;
    })

  console.log(DateTotal);
  let barchartData= []

    barchartData = Object.values(DateTotal)
  
  let labels = [];
  let amounts = [];

  barchartData.forEach(element => {
    labels.push (element.label)
    amounts.push(element.value);
  });
  let barDataStructure = {};
  barDataStructure.labels = labels;
  barDataStructure.datasets = [];
  let datasetStrucutre = {
    label: "Expense Dataset",
    data: amounts
  };
  barDataStructure.datasets[0]=datasetStrucutre;
  console.log(barDataStructure)
  this.setState({barData:barDataStructure});
  }

  removeExpense(i){
    let expCopy = this.props.expenses;
    expCopy.splice(i,1);
    this.props.updateExpense(expCopy);
    let expenseCopy =this.state.expenses;
    expenseCopy.splice(i,1);
    this.setState({expenses:expenseCopy})
    this.piChartData();
  }

  updateExpense(updateExpense,i){
            let expensesCopy = this.props.expenses;
            expensesCopy[i]= updateExpense;
            this.props.updateExpense(expensesCopy);
             let expenseStateCopy = this.state.expenses;
             expenseStateCopy[i] = updateExpense;
             this.setState({expenses:expenseStateCopy})
             this.piChartData();
    
  }
  addNew(event){
    event.preventDefault();
            let newExp =  {};
            newExp.title =   this.refs.title.value;
            this.refs.title.value = '';
            newExp.amount = parseInt(this.refs.amount.value);
            this.refs.amount.value = '';
            newExp.category = this.refs.category.value;
            this.refs.category.value = selectValues[0];
            newExp.date = this.refs.date.value;
            this.refs.date.value = '';
            this.props.addExpense(newExp);
            let expCopy = this.state.expenses;
            expCopy.push(newExp);
            this.setState({expenses:expCopy})
            this.piChartData();
  }
}

  
const mapDispatchToProps = dispatch => bindActionCreators({
  addExpense,
  updateExpense
  }, dispatch)


  const mapStateToProps = (state) => { 
    return { expenses: state.expenses };
  };
  
  export default connect(mapStateToProps,mapDispatchToProps)(App);

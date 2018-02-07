import React, { Component } from 'react';
import logo from './logo.svg';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addExpense} from './action';
import Expense from './Expense';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
     this.state = {expenses:[]};
     this.removeExpense = this.removeExpense.bind(this);
     this.updateExpense = this.updateExpense.bind(this);
     this.addNew = this.addNew.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    //const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: target.value
    });
  }
  
  ComponentWillReceiveProps(){


  }
  render() {
    const {expenses} = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Expense Tracker</h1>
        </header>
        <form onSubmit={this.addNew}>
        <input name="title" ref="title" required placeholder="Expense Title"></input> 
        <input
            name="amount"
            type="number"
            ref= "amount"
            
            //onChange={this.handleInputChange} 
            />
             <input
            name="date"
            type="date"
            ref= "date"
            />
            <select ref ="category">
            <option value="Home">Home</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Cinema">Cinema</option>
          </select>

        <button className="button_green" type="submit" >Add New Expense</button>
        </form>
        {expenses.map((expense,i) => {
                                    return(
                                      <Expense key={i} index={i} 
                                      deleteFromApp={this.removeExpense}
                                       updateToApp={this.updateExpense} >
                                        {expense}
                                      </Expense>
                                    ) 
                          })}

      </div>
    );
  }


  removeExpense(i){
    var expenseCopy =this.state.expense;
    expenseCopy.splice(i,1);
    this.setState({expense:expenseCopy})
  }

  updateExpense(updateExpense,i,id){

             var expenseCopy = this.state.expense;
             expenseCopy[i].TEXT = updateExpense;
             this.setState({expense:expenseCopy})
         
    
  }
  addNew(event){
    event.preventDefault();
            let newExp =  new Object();
            newExp.title =   this.refs.title.value;
            this.refs.title.value = '';
            newExp.amount = this.refs.amount.value;
            this.refs.amount.value = '';
            newExp.category = this.refs.category.value;
            this.refs.category.value = '';
            newExp.date = this.refs.date.value;
            this.refs.date.value = '';
            this.props.addExpense(newExp);
            let expCopy = this.state.expenses;
            expCopy.push(newExp);
            this.setState({expenses:expCopy})
  }
}

  
const mapDispatchToProps = dispatch => bindActionCreators({
  addExpense
  }, dispatch)


  const mapStateToProps = (state) => { 
    return { expenses: state.expenses };
  };
  
  export default connect(mapStateToProps,mapDispatchToProps)(App);

import React, { Component } from 'react';
import logo from './logo.svg';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addExpense} from './action';
import AddForm from './addForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={()=>this.props.addExpense('hello')}>Add Button</button>
      <AddForm/>
      </div>
    );
  }

}
// const mapDispatchToProps = dispatch => bindActionCreators({
//     //changePage: () => push('/about-us')
//     add:addExpense
//   }, dispatch);
  
const mapDispatchToProps = dispatch => bindActionCreators({
  addExpense
  }, dispatch)

  // function mapDispatchToProps(dispatch) {
  //   return { add: bindActionCreators(addExpense, dispatch) }
  // }

  const mapStateToProps = (state) => { 
    return { expense: state.expense };
  };
  
  export default connect(mapStateToProps,mapDispatchToProps)(App);

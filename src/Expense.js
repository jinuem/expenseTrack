import React, { Component } from 'react';
import {selectValues} from './App';
class Expense extends Component {
   constructor(props) {
    super(props);
    this.state = {editing: false};
    this.edit = this.edit.bind(this);
    this.remove = this.remove.bind(this);
    this.save = this.save.bind(this);
  }
  edit(){
    this.setState({editing:true})

  }
  remove(){
    this.props.deleteFromApp(this.props.index);
  }
  save(){


    this.setState({editing:false})

    let updateExp = {};
    updateExp.title =   this.refs.title.value;

    updateExp.amount = parseInt(this.refs.amount.value);
    
    updateExp.category = this.refs.category.value;
 
    updateExp.date = this.refs.date.value;
    this.props.updateToApp(updateExp,this.props.index)
  }

  editingMode(){
              return (
      <div className="expenseContainer" className="form-style">
        <input type="text" ref="title"  defaultValue={this.props.children.title}></input> 
        <input type="number" ref="amount"  defaultValue={this.props.children.amount}></input> 
        <input type="date" ref="date"  defaultValue={this.props.children.date}></input> 
        <select ref ="category" defaultValue={this.props.children.category}>
            {selectValues.map((value,i)=>{
              return(
                <option key={i} value={value}>{value}</option>
              )
            })}
          </select>
        <button onClick={this.save} className="button_green">Save</button> 
        
      </div>
      );
  }

  normalMode(){

        return (
      <div className="expenseContainer">
        <h4 className="expenseText">{this.props.children.title}</h4> 
        <h4 className="expenseText">{this.props.children.amount}</h4> 
        <h4 className="expenseText">{this.props.children.date}</h4> 
        <h4 className="expenseText">{this.props.children.category}</h4> 
        <button onClick={this.edit} className="button_red">Edit</button> 
        <button onClick={this.remove} className="button_red">Remove</button> 
      </div>
    );

  }
  render() {
    if(this.state.editing){
      return this.editingMode();
    } else{
      return this.normalMode()
    }

  }
}

export default Expense;    

import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './NewToDoForm.css';

class NewToDoForm extends Component{
  constructor(props){
    super(props);
    this.state = {todo: '', id: uuidv4(), active: true};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt){
    evt.preventDefault();
    if (this.state.todo) this.props.addToDo(this.state);
    this.setState({todo: '', id: uuidv4()});
  }

  handleChange(evt){
    this.setState({[evt.target.name] : evt.target.value});
  }

  render(){
    return(
      <div className='NewToDoForm'>
        <h2>New Todo</h2>
        <form onSubmit={this.handleSubmit}>
          <input type='text'
                name='todo' 
                id='todo' 
                placeholder='New Todo' 
                onChange={this.handleChange} 
                value={this.state.todo}/>
          <button>Add Todo</button>
        </form>
      </div>
    )
  }
}

export default NewToDoForm;
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import './ToDo.css';

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {todo: this.props.todo, edit: false};
    this.handleDeleteBtn = this.handleDeleteBtn.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.toggleActive(this.props.id)
  }

  toggleEdit(){
    this.setState({edit: !this.state.edit })
  }

  handleDeleteBtn(){
    this.props.removeTodo(this.props.id);
  }

  handleChange(evt){
    this.setState({[evt.target.name] : evt.target.value});
  }

  handleSubmit(evt){
    evt.preventDefault();
    this.props.editTodo({id: this.props.id, todo: this.state.todo})
    this.toggleEdit()
  }

  render() {
    if (this.state.edit) {
      return (
        <div>
          <form onSubmit={this.handleSubmit} className='editForm'>
            <input type='text' value={this.state.todo} onChange={this.handleChange} name='todo'/>
            <button>Save</button>
          </form>
        </div>
      )
    } else {
      return (
        <div className={`ToDo ${this.props.active}`} >
          <p onClick={this.handleClick}>{this.props.todo}</p>
          <div className='btns'>
            <button onClick={this.toggleEdit}><FontAwesomeIcon icon={faPen} /></button>
            <button onClick={this.handleDeleteBtn}><FontAwesomeIcon icon={faTrash} /></button>
          </div>
        </div>
      )
    }
  }
}

export default ToDo;

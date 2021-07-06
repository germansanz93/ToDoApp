import React, { Component } from 'react';
import NewToDoForm from './NewToDoForm';
import ToDo from './ToDo';
import './ToDoList.css';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.addToDo = this.addToDo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.toggleActive = this.toggleActive.bind(this);
  }

  toggleActive(id){
    const elIndex = this.state.todos.findIndex(todo => todo.id === id);
    const newState = {...this.state};
    newState.todos[elIndex].active = !this.state.todos[elIndex].active;
    this.setState(newState);
  }

  addToDo(todo) {
    this.setState({ todos: [...this.state.todos, todo] })
  }
  
  editTodo(editedTodo) {
    const elIndex = this.state.todos.findIndex(todo => todo.id === editedTodo.id);
    const newState = {...this.state};
    newState.todos[elIndex].todo = editedTodo.todo;
    this.setState(newState);
  }

  removeTodo(id) {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) })
  }

  renderToDos() {
    return <div>
      {this.state.todos.map(item => <ToDo 
        key={item.id}
        id={item.id}
        todo={item.todo}
        removeTodo={this.removeTodo}
        editTodo={this.editTodo}
        toggleActive={this.toggleActive}
        active={item.active ? 'active' : 'inactive'}/>
      )
      }
    </div>
  }
  render() {
    return (
      <div className='ToDoList'>
        <div className='title'>
          <h1>Todo List</h1>
          <small>A simple React Todo list app</small>
        </div>
        {this.renderToDos()}
        <NewToDoForm addToDo={this.addToDo} />
      </div>
    )
  }
}

export default ToDoList;
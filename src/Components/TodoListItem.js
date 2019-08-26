import React, {Component} from 'react';
// import axios from 'axios';

export default class TodoListItem extends Component {
  constructor (props) {
    super (props);
    this.todoCompleted = {
      textDecoration: props.todoItem.completed ? 'line-through' : null,
    };
    // this.toggleTodoStatus = this.toggleTodoStatus.bind (this);
  }

  toggleTodoStatus (e) {
    console.log (e.target.id);
  }

  render () {
    // console.log (this.props.todoItem);
    return (
      <li
        className="todoItem"
        style={this.todoCompleted}
        id={this.props.todoItem.id}
        onClick={this.toggleTodoStatus.bind (this)}
      >
        {this.props.todoItem.title}
      </li>
    );
  }
}

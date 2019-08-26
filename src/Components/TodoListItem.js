import React, {Component} from 'react';
import axios from 'axios';

export default class TodoListItem extends Component {
  constructor (props) {
    super (props);
    this.todoCompleted = {
      textDecoration: props.todoItem.completed ? 'line-through' : null,
    };
    this.server = 'https://koreanjson.com';
    // this.toggleTodoStatus = this.toggleTodoStatus.bind (this);
  }

  toggleTodoStatus (e) {
    console.log (this.server + '/todos/' + e.target.id);

    axios
      .put (this.server + '/todos/' + e.target.id, {
        completed: !this.props.todoItem.completed,
      })
      .then (res => {
        console.log (res);
      })
      .catch (err => {
        console.log (err);
      });
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

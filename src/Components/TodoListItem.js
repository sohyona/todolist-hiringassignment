import React, {Component} from 'react';

export default class TodoListItem extends Component {
  constructor (props) {
    super (props);
    this.todoCompleted = {
      textDecoration: props.todoItem.completed ? 'line-through' : 'none',
    };
  }

  render () {
    return (
      <li className="todoItem" style={this.todoCompleted}>
        {this.props.todoItem.title}
      </li>
    );
  }
}

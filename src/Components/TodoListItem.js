import React, {Component} from 'react';
// import axios from 'axios';

export default class TodoListItem extends Component {
  constructor (props) {
    super (props);
    this.server = 'https://koreanjson.com';
    // this.toggleTodoStatus = this.toggleTodoStatus.bind (this);
  }

  render () {
    console.log (this.props.todoitem);
    return (
      <span>
        {this.props.todoitem.title}
      </span>
    );
  }
}

import React from 'react';

export default function TodoListItem (props) {
  return <li className="todoItem">{props.todoItem.title}</li>;
}

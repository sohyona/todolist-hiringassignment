import React from 'react';
import {NONAME} from 'dns';

export default function TodoListItem (props) {
  const todoCompleted = {
    textDecoration: props.todoItem.completed ? 'line-through' : 'none',
  };
  return (
    <li className="todoItem" style={todoCompleted}>{props.todoItem.title}</li>
  );
}

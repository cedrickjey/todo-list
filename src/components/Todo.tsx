import React, { FC , useState } from 'react'
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri'
import {  TiEdit } from 'react-icons/ti'

interface  Props {
  todos: any;
  completeTodo: any;
  removeTodo: any;
  updatedTodo:any;
}
 
const Todo : FC <Props> = (props) => {

  const [ edit, setEdit ] = useState({
    id:null,
    value:''
  })

  //To click on submit update 
  const submitUpdate = value => {

    props.updatedTodo(edit.id, value);

    setEdit({
      id:null,
      value: ''
    });
  };
   

  if (edit.id) {

    return <TodoForm edit={edit} onSubmit={submitUpdate} />
  }

  return props.todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => props.completeTodo(todo.id)}>
        {todo.text}
      </div>

      <div className="icons">
        
        <RiCloseCircleLine onClick={ () => {props.removeTodo(todo.id);} } />

        <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} className="edit-icon"/>
      </div>
    </div>
  ));
}
 
export default Todo ;                                                                                                                                                                                                                                                                               
import React, { FC , useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';



interface Props {
  todo: any;
}

const TodoList :FC <Props> = (props) => {

      const [ todos, setTodos ] = useState([])

      //Create Todo ******/////\\\\
      const addTodo = (todo: any) => {

        if (!todo || /^\s*$/.test(todo.text) ) {
          return
        }

        const newsTodo: any = [ todo, ...todos ]

        setTodos(newsTodo)
      };
      console.log(addTodo);

      const completeTodo = id => {

        let updatedTodos = todos.map( todo => {
          if  (props.todo.id === id){
            props.todo.isComplete = !props.todo.isComplete
          } 
          return todo
        } )    
        setTodos(updatedTodos);
      }; 

      // Update Todo *****/////\\\\

      const updatedTodo = (todoId , newValue) => {

        if (!todoId || /^\s*$/.test(newValue.text) ) {
          return;
        }

          setTodos( (prev:any ) => prev.map( item => (item.id === todoId ? newValue : item) ))

      }
      
      //Delete Todo ******///\\\
      const removeTodo = id => {       
        const removeArr = todos.filter(todo => props.todo.id == id)
        setTodos(removeArr);
      }



      return (

        <div className='todo-list' >
          <h1> Tableau de liste des taches  </h1>
          <TodoForm edit={updatedTodo} onSubmit={addTodo} />                   
          <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updatedTodo={updatedTodo}  />
        </div>

      )
}

export default TodoList;
import React , { FC } from 'react';
import './App.css';
import TodoList from './components/TodoList';


interface Props {
  todo: any;
}

const App: FC  = (todo) => {

  return (
    <div className="todo-app">
      <TodoList  todo={todo} />
    </div>
  );
}

export default App;

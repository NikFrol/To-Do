import { useState } from 'react';

import Paragraph from './ Components/Paragraph/Paragraph';
import ToDoForm from './ Components/ToDoForm/ToDoForm';

import s from './App.module.css';

const App = () => {

  const [todos, setTodos] = useState([
    {
      text: "Ни о чем не забывай",
      isCompleted: false
    },
    {
      text: "Делай пометки",
      isCompleted: false
    },
    {
      text: "Учи React",
      isCompleted: false
    }
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className={s.app}>
      <div className={s.todolist}>
        <ToDoForm addTodo={addTodo} />
        {todos.map((todo, index) => (
          <Paragraph
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

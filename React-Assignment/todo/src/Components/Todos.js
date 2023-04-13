import React, { useState } from 'react';

export default function Todos(props) {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState('');

  const handleInputChange = (event) => {
        setCurrentTask(event.target.value);
      };

  const handleAddTask = () => {
    if (currentTask.trim() === "") {
            return;
          }
          setTasks((prevTodos) => [
            ...prevTodos,
            { text: currentTask, isChecked: false },
          ]);
          setCurrentTask("");
  };

  const handleDeleteTask = (index) => {
    if (!tasks[index].isChecked) {
            return;
          }
          setTasks((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };
  
  const handleToggleTodo = (index) => {
    setTasks((prevTodos) => {
      return prevTodos.map((todo, i) => {
        if (i === index) {
          return { ...todo, isChecked: !todo.isChecked };
        }
        return todo;
      });
    });
  };

  return (
    <div className='App'>
      <div className="todo">
        <h1>{props.title}</h1>
        <div className='input-container'>
          <input
            type='text'
            placeholder='Add Todo'
            value={currentTask}
            onChange={handleInputChange}
          />
          <button onClick={handleAddTask}>Add Task</button>
        </div>
        <div className='data'>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <div className='flex'>
              <input 
              type="checkbox"
              checked={task.isChecked}
              onChange={() => handleToggleTodo(index)}
              />
              <p>{task.text}</p>
              </div>
              <div>
              <i onClick={() => handleDeleteTask(index)} disabled={!task.isChecked}  className="fa-solid fa-trash-can"></i>
              </div>
            </li>
          ))}
        </ul>
        </div>
        </div>
      </div>
  );
}



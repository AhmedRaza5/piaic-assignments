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


// import React,{useState} from 'react'

// export default function Todos() {
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState("");

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleAddTodo = () => {
//     if (inputValue.trim() === "") {
//       return;
//     }
//     setTodos((prevTodos) => [
//       ...prevTodos,
//       { text: inputValue, isChecked: false },
//     ]);
//     setInputValue("");
//   };

//   const handleDeleteTodo = (index) => {
//     if (!todos[index].isChecked) {
//       return;
//     }
//     setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
//   };

//   const handleToggleTodo = (index) => {
//     setTodos((prevTodos) => {
//       const todoToUpdate = prevTodos[index];
//       const updatedTodo = { ...todoToUpdate, isChecked: !todoToUpdate.isChecked };
//       return [...prevTodos.slice(0, index), updatedTodo, ...prevTodos.slice(index + 1)];
//     });
//   };
//   return (
//     <div>
//        <div>
//         <input type="text" value={inputValue} onChange={handleInputChange} />
//         <button onClick={handleAddTodo}>Add Todo</button>
//       </div>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>
//             <input
//               type="checkbox"
//               checked={todo.isChecked}
//               onChange={() => handleToggleTodo(index)}
//             />
//             <span>{todo.text}</span>
//             <button onClick={() => handleDeleteTodo(index)} disabled={!todo.isChecked}>
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }
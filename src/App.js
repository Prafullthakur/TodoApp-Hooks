import React, { useState } from "react";
import "./App.css";
function Todos({ todo, index, onchange, del }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isComplete ? "line-through" : "none" }}
    >
      <p style={{ display: "flex" }}>
        <input type="checkbox" onChange={() => onchange(index)} /> {todo.text}{" "}
        <div>
          {" "}
          <button onClick={() => del(index)}>Delete</button>
        </div>
      </p>
    </div>
  );
}
function AddTodo({ newTodo }) {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    newTodo(value);
    setValue("");
  };
  return (
    <form className="form">
      <input
        type="text"
        placeholder="Add Todo..."
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

function App() {
  const [todos, setTodo] = useState([
    {
      text: "Create a todo",
      isComplete: false,
    },
    {
      text: "Create a android app",
      isComplete: false,
    },
    {
      text: "Create a python software",
      isComplete: false,
    },
  ]);

  const newTodo = (text) => {
    const New = [...todos, { text }];
    setTodo(New);
  };
  const onchange = (index) => {
    const newtodo = [...todos];
    if (newtodo[index].isComplete == true) {
      newtodo[index].isComplete = false;
    } else {
      newtodo[index].isComplete = true;
    }
    setTodo(newtodo);
  };
  const del = (index) => {
    const newtodo = [...todos];
    newtodo.splice(index, 1);
    setTodo(newtodo);
  };
  return (
    <div className="app">
      <div className="todo-list">
        <AddTodo newTodo={newTodo} />
        {todos.map((todo, index) => (
          <Todos
            key={index}
            index={index}
            todo={todo}
            onchange={onchange}
            del={del}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

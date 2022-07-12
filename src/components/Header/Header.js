import React, { useContext, useState } from "react";
import { Context } from "../context/context";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>Todo App</h1>
      <Form />
    </header>
  );
};

const Form = () => {
  const [todoList, addTodo] = useContext(Context);
  const [title, setTitle] = useState("");
  const [min, setMin] = useState("");
  const [sec, setSec] = useState("");

  const addNewTask = (key) => {
    if (key === "Enter") {
      if (title === "") return;
      addTodo([
        ...todoList,
        {
          id: Math.floor(Math.random() * 100) + 5,
          title,
          status: "active",
          timer: +min.replace(/[^\d]/g, '') * 60 + +sec.replace(/[^\d]/g, ''),
          done: false,
        },
      ]);
      setTitle("");
      setSec("");
      setMin("");
    }
  };

  return (
    <form className="new-todo-form" onKeyDown={(e) => addNewTask(e.key)}>
      <input
        value={title}
        className="new-todo"
        placeholder="Task"
        autoFocus
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        maxLength={2}
        value={min}
        className="new-todo-form__timer min"
        placeholder="Min"
        autoFocus
        onChange={(e) => setMin(e.target.value)}
      />
      <input
        type="number"
        maxLength={2}
        value={sec}
        className="new-todo-form__timer sec"
        placeholder="Sec"
        autoFocus
        onChange={(e) => setSec(e.target.value)}
      />
    </form>
  );
};

export default Header;

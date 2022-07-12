import React, { useContext } from "react";
import { Context } from "../context/context";
import "./Footer.css";

const Footer = ({ setFilterTodo }) => {
  const [todoList, addTodo] = useContext(Context);
  return (
    <footer className="footer">
      <span>{`${
        todoList.filter((item) => !item.done).length
      } items left`}</span>
      <TaskFilter setFilterTodo={setFilterTodo} />
      <button
        className="clear-completed"
        onClick={(e) => addTodo(todoList.filter((item) => !item.done))}
      >
        Clear completed
      </button>
    </footer>
  );
};

const TaskFilter = ({ setFilterTodo }) => {
  return (
    <ul className="filters">
      <li>
        <button onClick={() => setFilterTodo("all")}>All</button>
      </li>
      <li>
        <button onClick={() => setFilterTodo(false)}>Active</button>
      </li>
      <li>
        <button onClick={() => setFilterTodo(true)}>Completed</button>
      </li>
    </ul>
  );
};

export default Footer;

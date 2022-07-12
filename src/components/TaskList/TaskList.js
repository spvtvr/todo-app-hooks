import React from "react";
import CustomTimer from "../CustomTimer";
import "./TaskList.css";

const TaskList = ({ todoList, addTodo, filtered }) => {
  const toggleDoneTask = (id) => {
    const newArr = [...todoList].map((item) => {
      if (item.id === id) {
        return item.status === "active"
          ? { ...item, status: "completed", done: !item.done }
          : { ...item, status: "active", done: !item.done };
      }
      return item;
    });
    return addTodo(newArr);
  };

  const deleteTask = (id) =>
    addTodo([...todoList].filter((item) => item.id !== id));

  const toggleEditTask = (id) => {
    const newArr = [...todoList].map((item) =>
      item.id === id ? { ...item, status: "editing" } : item
    );
    return addTodo(newArr);
  };

  const editTask = (v, id) => {
    const newArr = [...todoList].map((item) =>
      item.id === id ? { ...item, title: v.target.value } : item
    );
    return addTodo(newArr);
  };

  const saveEditTask = (v, id) => {
    if (v.key === "Enter") {
      const newArr = [...todoList].map((item) => {
        if (item.id === id) {
          return item.done
            ? { ...item, status: "completed" }
            : { ...item, status: "active" };
        }
        return item;
      });
      return addTodo(newArr);
    }
    return;
  };

  return (
    <ul className="todo-list">
      {filtered.map((item) => {
        return (
          <li key={item.id} className={item.status}>
            <div className="view">
              <input
                defaultChecked={item.done}
                className="toggle"
                type="checkbox"
                onClick={() => toggleDoneTask(item.id)}
              />
              <label>
                <span className="title">{item.title}</span>
                <span className="description">
                  <CustomTimer 
                    minutes={Math.floor(item.timer / 60)} 
                    seconds={item.timer - Math.floor(item.timer / 60) * 60}/>
                </span>
                <span className="description">created 5 minutes ago</span>
              </label>
              <button
                className="icon icon-edit"
                onClick={() => toggleEditTask(item.id)}
              ></button>
              <button
                className="icon icon-destroy"
                onClick={() => deleteTask(item.id)}
              ></button>
            </div>
            <input
              type="text"
              className="edit"
              defaultValue={item.title}
              onChange={(v) => editTask(v, item.id)}
              onKeyDown={(v) => saveEditTask(v, item.id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;

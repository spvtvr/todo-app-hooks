import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Context } from "../context/context";
import "./App.css";

import Header from "../Header";
import TaskList from "../TaskList";
import Footer from "../Footer";

const App = () => {
  const [todoList, addTodo] = useState([
    {
      id: 1,
      title: "First task",
      status: "active",
      done: false,
      timer: 60,
    },
    {
      id: 2,
      title: "Second task",
      status: "active",
      done: false,
      timer: 60,
    },
    {
      id: 3,
      title: "Third task",
      status: "active",
      done: false,
      timer: 60,
    },
  ]);

  const [filtered, setFiltered] = useState(todoList);
  useEffect(() => setFiltered(todoList), [todoList])
  
  const setFilterTodo = e => {
    e === 'all' ? setFiltered(todoList)
    : setFiltered([...todoList].filter(elem => elem.done === e))
  }
  return (
    <Context.Provider value={[todoList, addTodo]}>
      <section className="todoapp">
        <Header />
        <section className="main">
          <TaskList todoList={todoList} addTodo={addTodo} filtered={filtered}/>
          <Footer setFilterTodo={setFilterTodo}/>
        </section>
      </section>
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

export default App;

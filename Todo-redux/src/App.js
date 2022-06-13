import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";
import { useSelector } from 'react-redux';
import { selectTodiList } from "./features/counter/todoSlice";





function App() {
  
 const todoList=useSelector(selectTodiList)
  return (
   
    <div className="App">
      
      <div className="app__container">
      <h1>To Do List</h1>
      <Input /><br/>
        <div className="app__todoContainer">
          {todoList.map((val) => (
            <TodoItem name={val.item} done={val.done} id={val.id} />
            ))}
        </div>
           
      </div>
    </div>
  );
}

export default App;

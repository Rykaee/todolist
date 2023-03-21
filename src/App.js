import React, { useState, useEffect } from "react";
import './App.css';

//Importing components ->
import Form from "./components/Form";
import TodoList from "./components/TodoList";


function App() {
  
  //STATES
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //USE EFFECTS

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status])
  
  //FUNCTIONS

  //filtherHandler checking which status each todo have and filters todos to that order.
  const filterHandler = () => {

    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;

      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      
      default: 
        setFilteredTodos(todos);
        break;
    }
  };

  //Save todos to local
  const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
  };

  //Get local todos
  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    }
    else{
     let todoLocal = JSON.parse(localStorage.getItem("todos"));
     setTodos(todoLocal);
    }
  };


  return (
    <div className="App">
     <header>
      <h1>Todo List</h1>
    </header>
    <Form 
      todos={todos} 
      setTodos={setTodos} 
      inputText={inputText} 
      setInputText={setInputText}
      setStatus={setStatus}
    />
    <TodoList 
      setTodos={setTodos} 
      todos={todos}
      filteredTodos={filteredTodos}
    />
    </div>
  );
}

export default App;

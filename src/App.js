import React, { useState, useEffect } from "react";
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import konnaLogo from "./img/konna2.png";

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

  /*useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status])*/
  
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
      
      case 'inprogress':
        setFilteredTodos(todos.filter(todo => todo.completed === false && todo.inprogress === true));
        break;

      default: 
        setFilteredTodos(todos);
        break;
    }
  };

  /*
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
*/

  return (
    <div className="App">
    <Navbar bg="dark" expand="lg" sticky="top">
    <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={konnaLogo}
              width="15%"
              height="10%"
              className="d-inline-block align-center"
              style={{left:0}}
            />{' '}
            <div className="custom d-inline-block align-center">
             <span>Test</span>&nbsp;Comp.
            </div>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container expand="lg">
        <div className="wrapper">
          <header>
            <h1><span>Todo</span>List</h1>
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
      </Container>
    </div>
  );
}

export default App;

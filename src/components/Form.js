import React from "react";


const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {

    const inputTextHandler = (e) => {
      console.log(e.target.value);
      setInputText(e.target.value);
    };


//submitTodoHandler handles inputs from form and put those to array.
const submitTodoHandler = (e) => {

  //Variable for id, it is just example how to do it.
  const id = Math.random() * 1000;
    e.preventDefault();
    setTodos([
      ...todos, {text: inputText, completed: false, id: id}
    ]);
    setInputText("");
};

//statusHandler will checking todo-items status.
const statusHandler = (e) => {
  setStatus(e.target.value);
};


    return (
        <form>
          <input 
            value={inputText} 
            onChange={inputTextHandler} 
            type="text" 
            className="todo-input" 
          />
          <button onClick={submitTodoHandler} className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
          </button>
          <div className="select">
            <select onChange={statusHandler} name="todos" className="filter-todo">
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
          </div>
        </form>
    );
}

export default Form;
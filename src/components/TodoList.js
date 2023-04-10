import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

//Importing Components
import Todo from './Todo'

const TodoList = ( { todos, setTodos, filteredTodos } ) => {
    return (
      <Container fluid="xs">
        <Row>
          <Col lg={12}>
            <div className="todo-container">
              <ul className="todo-list">
                {filteredTodos.map(todo => (
                  <Todo 
                    setTodos={setTodos} 
                    todos={todos} 
                    key={todo.id} 
                    todo={todo}
                    text={todo.text}
                  />
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>

    );
};

export default TodoList;
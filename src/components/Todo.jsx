import React, { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (xyz) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        value: xyz,
      },
    ]);
  };

  const deleteTodo = (value) => {
    setTodos(todos.filter((todo) => todo.value !== value));
  };
  return (
    <div>
      <h1>Todo App</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export { Todo };

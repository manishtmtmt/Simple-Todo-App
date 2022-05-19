import React from "react";
import { TodoItem } from "./TodoItem";

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div>
      <h3>Here is your Todo list</h3>
      <ul>
        {todos.map((data) => (
          <TodoItem key={data.id} value={data.value} deleteTodo={deleteTodo} />
        ))}
      </ul>
    </div>
  );
};

export { TodoList };

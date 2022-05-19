import React, { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [value, setValue] = useState("");
  return (
    <div>
      <input
        type="text"
        value={value}
        placeholder="New Todo Item"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          addTodo(value);
          setValue("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export { TodoInput };

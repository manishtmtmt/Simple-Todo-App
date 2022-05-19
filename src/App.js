import logo from './logo.svg';
import './App.css';
import {Counter} from "./components/Counter"
import { useState } from 'react';
import {Todo} from "./components/Todo"

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setToggle(!toggle)}>{toggle ? "Show Todo App" : "Show Counter App"}</button>
      {toggle ? <Counter /> : <Todo />}
    </div>
  );
}

export default App;

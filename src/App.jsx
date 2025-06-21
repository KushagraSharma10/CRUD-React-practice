
import React, { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Kaam Krle Bhai",
      isCompleted: false,
    },
  ]);



 

  return (
    <div className="w-full h-screen p-10 bg-zinc-900 text-white">
      <Create todos = {todos} setTodos = {setTodos} />
      <Read todos = {todos} setTodos = {setTodos}  />
    </div>
  );
};

export default App;

import { nanoid } from "nanoid";
import React, { useState } from "react";

const App = () => {

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Kaam Krle Bhai",
      isCompleted: false,
    },
  ]);



  const renderTodos = todos.map((todo) => {
    return <li key={todo.id}>{todo.title}</li>;
  });

  return (
    <div className="w-full h-screen p-10 bg-zinc-900 text-white">
      <hr />
      <h1 className="mt-5 text-xl">Pending Todos</h1>
      <ol className="list-decimal p-4">{renderTodos}</ol>
    </div>
  );
};

export default App;

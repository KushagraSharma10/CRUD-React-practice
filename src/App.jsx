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

  const [title, setTitle] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();

    const newTodo = {
      id: nanoid(),
      title: title,
      isCompleted: false,
    };

    console.log(newTodo);

    // let copytodos = [...todos];
    // copytodos.push(newTodo);
    // setTodos(copytodos);

    setTodos([...todos, newTodo]);
    setTitle("");
  };

  const renderTodos = todos.map((todo) => {
    return <li key={todo.id}>{todo.title}</li>;
  });

  return (
    <div className="w-full h-screen p-10 bg-zinc-900 text-white">
      <h1 className="text-lg">Create Tasks</h1>
      <form onSubmit={SubmitHandler}>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          className="bg-white text-black px-2 py-1.5 mt-2 rounded-lg outline-none"
          value={title}
          placeholder="Title"
        />
        <br />
        <br />
        <button className="bg-green-500 text-white p-2 rounded-lg font-semibold">
          Create TODO
        </button>
      </form>
      <hr />
      <h1 className="mt-5 text-xl">Pending Todos</h1>
      <ol className="list-decimal p-4">{renderTodos}</ol>
    </div>
  );
};

export default App;

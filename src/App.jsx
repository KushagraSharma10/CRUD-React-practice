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
  }

  console.log(title)

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
    </div>
  );
};

export default App;

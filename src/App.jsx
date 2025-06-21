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

  )

  return (
    <div>
      <h1>Create Tasks</h1>
      <form>
        <input type="text" />
        <br />
        <br />
        <button>Create TODO</button>
      </form>
    </div>
  );
};

export default App;

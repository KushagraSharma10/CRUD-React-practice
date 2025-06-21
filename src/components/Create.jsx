import { nanoid } from 'nanoid';
import React, { useState } from 'react'

const Create = () => {


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

  return (
    <div>
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
  )
}

export default Create
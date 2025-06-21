import { nanoid } from 'nanoid';
import React, { Fragment, useState } from 'react'

const Create = ({todos , setTodos}) => {


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
    <>
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
        <button className="bg-transparent border text-white px-3  py-1 rounded-lg ">
          Create Todo
        </button>
      </form>
    </>
  )
}

export default Create
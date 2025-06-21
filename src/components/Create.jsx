import { nanoid } from "nanoid";
import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Create = ({ todos, setTodos }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const SubmitHandler = (data) => {
    data.isCompleted = false;
    data.id = nanoid();
    console.log(data);

    const copyTodos = [...todos];
    copyTodos.push(data);
    setTodos(copyTodos);

    toast.success("Todo is created!")

    reset();
  };

  return (
    <>
      <h1 className="text-lg">Create Tasks</h1>
      <form onSubmit={handleSubmit(SubmitHandler)}>
        <input
          {...register("title", { required: "title can not be empty" })}
          className="bg-white block text-black px-2 py-1.5 mt-2 rounded-lg outline-none"
          type="text"
          placeholder="Title"
        />
        {<small className="text-sm text-red-500 ">{errors?.title?.message}</small>}
        <br />
        <br />

        <button className="bg-transparent border text-white px-3  py-1 rounded-lg ">
          Create Todo
        </button>
      </form>
    </>
  );
};

export default Create;

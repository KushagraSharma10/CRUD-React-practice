import React from "react";
import { toast } from "react-toastify";

const Read = ({ todos, setTodos }) => {
  const deleteHandler = (id) => {
    const filteredTodo = todos.filter((todo) => todo.id !== id)
    setTodos(filteredTodo)

    toast.error("Todo Deleted!")
  };

  const renderTodos = todos.map((todo) => {
    return (
      <li key={todo.id}>
        {todo.title} |{" "}
        <span onClick={() => deleteHandler(todo.id)} className="cursor-pointer">
          Delete
        </span>
      </li>
    );
  });

  return (
    <>
      <h1 className="mt-5 text-xl">Pending Todos</h1>
      <ol className="list-decimal p-4">{renderTodos}</ol>
    </>
  );
};

export default Read;

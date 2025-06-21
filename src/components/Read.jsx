import React from 'react'

const Read = ({todos}) => {

    const renderTodos = todos.map((todo) => {
        return <li key={todo.id}>{todo.title}</li>;
      });

  return (
    <div>
        <h1 className="mt-5 text-xl">Pending Todos</h1>
        <ol className="list-decimal p-4">{renderTodos}</ol>
    </div>
  )
}

export default Read
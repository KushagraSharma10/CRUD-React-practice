import React, { createContext, useState } from 'react'


export const todoContext = createContext(null)

const Wrapper = (props) => {

    const [todos, setTodos] = useState([
        {
          id: 1,
          title: "Kaam Krle Bhai",
          isCompleted: false,
        },
      ]);

  return (
    <div className=''>
        <todoContext.Provider value = {[todos, setTodos]} >
            {props.children}
        </todoContext.Provider>
    </div>
  )
}

export default Wrapper
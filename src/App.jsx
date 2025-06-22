import React from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  return (
    <div className="w-full h-screen p-10 bg-zinc-900 text-white">
      <Create />
      <Read />
    </div>
  );
};

export default App;

import React from "react";
import "./App.css";

import NotebookManager from "./components/NotebookManager";
import CellManager from "./components/CellManager";

function App() {
  
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">
        Interactive Model Analysis Workbench
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-6 gap-4 sm:columns-2 xs:columns-1 ">
        <div className="col-span-1 sm:col-span-2 xs:col-span-0 border-1 border-solid border-gray-500/50 p-2 bg-white"><NotebookManager /></div>
        <div className="col-span-1 sm:col-span-4 grid-s border-1 border-solid border-gray-500/50 p-2 bg-white"><CellManager/></div>        
      </div>
    </div>
  );
}

export default App;

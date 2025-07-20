import React,{useEffect} from "react";
import { useListEditor } from "./hooks/useListEditor";
import { SortableList } from "./components/SortableList";

const App = () => {
  const { items, addItem, updateItem, deleteItem, reorderItems } =
    useListEditor();     
  
  return (
    <div className="container mx-auto min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-bold ">Dynamic LLM Monitoring Dsashboard</h2>
      <div className="grid gap-4">
        <div className="text-right">

        <button
          onClick={addItem}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          + Add New Item
        </button>
        </div>

        <SortableList
          items={items}
          onEdit={updateItem}
          onDelete={deleteItem}
          onReorder={reorderItems}
        />
      </div>
    </div>
  );
};
export default App;

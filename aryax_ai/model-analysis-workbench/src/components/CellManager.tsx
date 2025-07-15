import React, { useEffect, useState } from "react";
import { useNotebookStore } from "../store/useNotebookStore";

import { SortableList } from "../SortableList";
import { createRange } from "../utilities";

import Toolbar from "./Toolbar";
import CodeCell from "./CodeCell";

const CellManager: React.FC = () => {
  const { notebooks, activeNotebookId } = useNotebookStore();
  // const [currNotBookData, setCurrNotBookData] = useState<Notebook>(notebooks || []);
   const [items, setItems] = useState<Object>([]); 
     const currNotBookData = notebooks.filter(
    (item) => item.id === activeNotebookId
  )[0] || [];

  useEffect(()=>{
    const cellItems  = currNotBookData.cells
    console.log("currNotBookData.cells: ",currNotBookData.cells)
    setItems(cellItems)
  },[currNotBookData.cells])

   console.log("items: ",items)
  return (
    <div>
      {activeNotebookId && (
        <>
          <h2 className="capitalize text-xl font-semibold mb-2 pt-2 pb-2 text">{currNotBookData.name}</h2>
          <Toolbar />
          <SortableList
            items={items||[]}
            onChange={setItems}
            renderItem={(item) => (
              <SortableList.Item id={item.id}>
                <div>
                <SortableList.DragHandle />
                </div>
                <div>
                <CodeCell notebookId={currNotBookData.id} cellId={item.id} />
                </div>
              </SortableList.Item>
            )}
          />
          {/* {currNotBookData.cells.map((cellId) => {
            
            return (
              <>
                <CodeCell notebookId={currNotBookData.id} cellId={cellId.id} />
              </>
            );
          })} */}
        </>
      )}
    </div>
  );
};

export default CellManager;

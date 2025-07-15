// File: model-analysis-workbench/src/components/Toolbar.tsx
import React from 'react';
import { useNotebookStore } from '../store/useNotebookStore';

const Toolbar: React.FC = () => {
  const activeNotebookId = useNotebookStore((state) => state.activeNotebookId);
  const addCell = useNotebookStore((state) => state.addCell);

  const handleAddCell = () => {
    if (activeNotebookId) {
      addCell(activeNotebookId);
    }
  };

  return (
    <div className="p-4 border-b border-gray-300 text-right ">
      <button
        onClick={handleAddCell}
        className="bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-500 cursor-pointer"
      >
        + Add Cell
      </button>
    </div>
  );
};

export default Toolbar;
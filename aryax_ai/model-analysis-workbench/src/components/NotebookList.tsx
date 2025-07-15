// File: model-analysis-workbench/src/components/NotebookList.tsx
import React from 'react';
import { useNotebookStore } from '../store/useNotebookStore';

const NotebookList: React.FC = () => {
  const notebooks = useNotebookStore((state) => state.notebooks);
  const activeNotebookId = useNotebookStore((state) => state.activeNotebookId);
  const setActiveNotebook = useNotebookStore((state) => state.setActiveNotebook);
  const addNotebook = useNotebookStore((state) => state.addNotebook);

  return (
    <div className="w-64 p-4 border-r border-gray-300 bg-white">
      <h2 className="text-lg font-semibold mb-4">Notebook List</h2>
      <button
        onClick={addNotebook}
        className="mb-4 w-full bg-sky-600 hover:bg-sky-500 text-white py-2 px-3 rounded"
      >
        + New Notebook
      </button>
      <ul>
        {notebooks.map((notebook) => (
          <li
            key={notebook.id}
            onClick={() => setActiveNotebook(notebook.id)}
            className={`cursor-pointer p-2 rounded hover:bg-gray-200 ${
              notebook.id === activeNotebookId ? 'bg-gray-100 font-bold' : ''
            }`}
          >
            ▸ {notebook.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotebookList;

// src/components/NotebookManager.tsx
import React, { useState, KeyboardEvent } from "react";
import { useNotebookStore } from "../store/useNotebookStore";
import { v4 as uuidv4 } from "uuid";

const NotebookManager: React.FC = () => {
  const {
    notebooks,
    activeNotebookId,
    createNotebook,
    setActiveNotebook,
  } = useNotebookStore();

  const [newNotebookName, setNewNotebookName] = useState("");

  const handleCreateNotebook = () => {
    if (!newNotebookName.trim()) return;
    createNotebook(newNotebookName.trim());
    setNewNotebookName("");
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
         handleCreateNotebook()
          // Perform desired action, e.g., submit a form, trigger a search, etc.
        }
      };

  return (
    <div className="bg-white shadow rounded p-4">
      <h2 className="text-xl font-semibold mb-2">Notebooks</h2>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newNotebookName}
          onChange={(e) => setNewNotebookName(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter notebook name"
          className="border focus-visible:border-gray-500/50 border-gray-500/50 px-2 py-1 rounded w-full"
        />
        <button
          onClick={handleCreateNotebook}
          className="bg-sky-600 text-white px-3 py-1 rounded hover:bg-sky-500 cursor-pointer"
        >
          Create
        </button>
      </div>

      {notebooks.length === 0 && (
        <p className="text-gray-500">No notebooks created yet.</p>
      )}

      <ul className="space-y-2">
        {notebooks.map((nb) => (
          <li
            key={nb.id}
            className={`p-2 border rounded capitalize cursor-pointer ${
              nb.id === activeNotebookId ? "bg-blue-100 border-blue-500" : "hover:bg-gray-100"
            }`}
            onClick={() => setActiveNotebook(nb.id)}
          >
            {nb.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotebookManager;

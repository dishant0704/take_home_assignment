import React, { useState } from 'react';
import { useNotebookStore } from '../store/useNotebookStore';
import { createRange } from "../utilities";
//import { useJupyter } from '../hooks/useJupyter';


interface CodeCellProps {
  notebookId: string;
  cellId: string;
}

function getMockItems() {
  return createRange(50, (index) => ({ id: index + 1 }));
}

const CodeCell: React.FC<CodeCellProps> = ({ notebookId, cellId }) => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
 
  //const { logs, sendCode } = useJupyter({ kernelId, token });

  const runCode = () => {
    // Simulated execution and real-time log update
    setOutput('Running...');
    setTimeout(() => setOutput('Executed Output for:\n' + code), 1000);
    //sendCode(code);
  }; 
  const removeCell = useNotebookStore((state) => state.removeCell);

  return (
    <div className="mb-4 border border-gray-500/50 rounded p-3 bg-gray-50">
      <div className="flex justify-between mb-2">
        <button
          className="bg-orange-600 hover:bg-orange-500 text-white px-3 py-1 rounded cursor-pointer"
          onClick={runCode}
        >
          Run
        </button>
        <button
          className="text-red-600 hover:text-red-500 cursor-pointer"
          onClick={() => removeCell(notebookId, cellId)}
        >
          ✖
        </button>
      </div>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="[Code Editor]"
        className="w-full h-24 border-gray-500/50 border p-2 rounded mb-2"
      />
      <div className="bg-white p-2 border border-gray-500/50 rounded text-sm whitespace-pre-wrap">
        Output: {output}
      </div>
    </div>
  );
};

export default CodeCell;
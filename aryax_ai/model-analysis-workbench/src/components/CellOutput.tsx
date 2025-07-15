// File: model-analysis-workbench/src/components/CellOutput.tsx
import React from 'react';

interface CellOutputProps {
  output: string;
}

const CellOutput: React.FC<CellOutputProps> = ({ output }) => {
  return (
    <div className="bg-white p-2 border rounded text-sm whitespace-pre-wrap">
      Output: {output || 'No output yet.'}
    </div>
  );
};

export default CellOutput;
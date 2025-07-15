// src/types/notebookTypes.ts

// --- Basic Types ---

export type CellType = "code";

export interface CodeCell {
  id: string; // unique ID for internal tracking
  type: CellType;
  source: string; // the code written in the cell
  output?: CellOutput[]; // execution result or stream
  executionCount?: number | null;
  status?: "idle" | "running" | "error" | "completed";
}

export interface CellOutput {
  name?: string;
  output_type: "stream" | "execute_result" | "error";
  text?: string; // for stream output
  data?: {
    "text/plain"?: string;
    [key: string]: any;
  }; // for execute_result
  ename?: string; // for error
  evalue?: string;
  traceback?: string[];
}

// --- Notebook ---

export interface Notebook {
  id: string; // unique internal ID
  name: string; // filename like "notebook1"
  kernelId?: string; // if kernel is started
  cells: CodeCell[];
  createdAt: string;
  updatedAt: string;
}

// --- Zustand Store Types ---

export interface NotebookStore {
  notebooks: Notebook[];
  activeNotebookId: string | null;

  createNotebook: (name?: string) => void;
  deleteNotebook: (id: string) => void;
  setActiveNotebook: (id: string) => void;

  addCell: (notebookId: string, cell?: Partial<CodeCell>) => void;
  updateCellCode: (notebookId: string, cellId: string, code: string) => void;
  updateCellOutput: (notebookId: string, cellId: string, output: CellOutput[]) => void;
  removeCell: (notebookId: string, cellId: string) => void;
  reorderCells: (notebookId: string, sourceIndex: number, destIndex: number) => void;

  setNotebookKernel: (notebookId: string, kernelId: string) => void;
}

// src/store/useNotebookStore.ts
import { create } from "zustand";
import type { Notebook, NotebookStore, CodeCell } from "../types/notebookTypes";
import { v4 as uuidv4 } from "uuid";

export const useNotebookStore = create<NotebookStore>((set) => ({
  notebooks: [],
  activeNotebookId: null,

  createNotebook: (name = "Untitled") => {
    const id = uuidv4();
    const newNotebook: Notebook = {
      id,
      name,
      cells: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    set((state) => ({
      notebooks: [...state.notebooks, newNotebook],
      activeNotebookId: id,
    }));
  },

  deleteNotebook: (id) => {
    set((state) => ({
      notebooks: state.notebooks.filter((nb) => nb.id !== id),
      activeNotebookId:
        state.activeNotebookId === id ? null : state.activeNotebookId,
    }));
  },

  setActiveNotebook: (id) => set({ activeNotebookId: id }),

  addCell: (notebookId, cell) => {
    set((state) => ({
      notebooks: state.notebooks.map((nb) =>
        nb.id === notebookId
          ? {
              ...nb,
              cells: [
                ...nb.cells,
                {
                  id: uuidv4(),
                  type: "code",
                  source: "",
                  ...cell,
                },
              ],
              updatedAt: new Date().toISOString(),
            }
          : nb
      ),
    }));
  },

  updateCellCode: (notebookId, cellId, code) => {
    set((state) => ({
      notebooks: state.notebooks.map((nb) =>
        nb.id === notebookId
          ? {
              ...nb,
              cells: nb.cells.map((cell) =>
                cell.id === cellId ? { ...cell, source: code } : cell
              ),
              updatedAt: new Date().toISOString(),
            }
          : nb
      ),
    }));
  },

  updateCellOutput: (notebookId, cellId, output) => {
    set((state) => ({
      notebooks: state.notebooks.map((nb) =>
        nb.id === notebookId
          ? {
              ...nb,
              cells: nb.cells.map((cell) =>
                cell.id === cellId ? { ...cell, output } : cell
              ),
              updatedAt: new Date().toISOString(),
            }
          : nb
      ),
    }));
  },

  removeCell: (notebookId, cellId) => {     
    set((state) => ({
      notebooks: state.notebooks.map((nb) =>
        nb.id === notebookId
          ? {
              ...nb,
              cells: nb.cells.filter((cell) => cell.id !== cellId),
              updatedAt: new Date().toISOString(),
            }
          : nb
      ),
    }));
  },

  reorderCells: (notebookId, fromIndex, toIndex) => {
    set((state) => ({
      notebooks: state.notebooks.map((nb) => {
        if (nb.id !== notebookId) return nb;
        const updatedCells = [...nb.cells];
        const [moved] = updatedCells.splice(fromIndex, 1);
        updatedCells.splice(toIndex, 0, moved);
        return {
          ...nb,
          cells: updatedCells,
          updatedAt: new Date().toISOString(),
        };
      }),
    }));
  },

  setNotebookKernel: (notebookId, kernelId) => {
    set((state) => ({
      notebooks: state.notebooks.map((nb) =>
        nb.id === notebookId ? { ...nb, kernelId } : nb
      ),
    }));
  },
}));

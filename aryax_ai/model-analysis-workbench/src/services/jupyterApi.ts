// src/services/jupyterApi.ts
import axios from "axios";

const BASE_URL = "http://localhost:8000/user/admin/api";
const TOKEN = "<YOUR_JUPYTER_TOKEN>"; // Replace with token from http://localhost:8000/hub/token

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `token ${TOKEN}`,
    "Content-Type": "application/json",
  },
});

export const createNotebook = async (name: string) => {
  const response = await axiosInstance.put(`/contents/${name}.ipynb`, {
    type: "notebook",
    format: "json",
    content: {
      cells: [],
      metadata: {},
      nbformat: 4,
      nbformat_minor: 2,
    },
  });
  return response.data;
};

export const updateCellInNotebook = async (
  notebookName: string,
  cellIndex: number,
  code: string
) => {
  const response = await axiosInstance.get(`/contents/${notebookName}.ipynb`);
  const notebook = response.data.content;

  notebook.cells[cellIndex] = {
    cell_type: "code",
    execution_count: null,
    metadata: {},
    outputs: [],
    source: code,
  };

  const updateResponse = await axiosInstance.put(
    `/contents/${notebookName}.ipynb`,
    {
      content: notebook,
      type: "notebook",
      format: "json",
    }
  );

  return updateResponse.data;
};

export const startKernel = async () => {
  const res = await axiosInstance.post(`/kernels`);
  return res.data; // includes id, name, etc.
};

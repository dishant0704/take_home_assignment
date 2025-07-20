import { useEffect, useState } from 'react';
import type { ListItemType } from '../types';
import { v4 as uuidv4 } from 'uuid';

export const useListEditor = () => {
  const [items, setItems] = useState<ListItemType[]>([]);
  
  useEffect(() => {
    const storedLists = localStorage.getItem("localStorItem");
    let initialLists = [];

    try {
      if (storedLists) {
        initialLists = JSON.parse(storedLists);
      }
    } catch (error) {
      console.error("Failed to parse editableLists from localStorage:", error);
      // Optionally clear the corrupted entry
      localStorage.removeItem("editableLists");
    }
    setItems(initialLists);
  }, []);

    useEffect(()=>{
      if(items.length === 0) return
      localStorage.setItem("localStorItem",JSON.stringify(items))
    },[items])

  const addItem = () => {
    const newItem: ListItemType = {
      id: uuidv4(),
      title: 'New Item',
      description: 'Description here',
      chartData: "tokenUsageData",
      chartName: "lineChart",
      // chart: function (chart: any): [any, any] {
      //   throw new Error('Function not implemented.');
      // }
    };
    setItems(prev => [...prev, newItem]);
  };

  const updateItem = (id: string, updates: Partial<ListItemType>) => {
    setItems(prev => prev.map(item => item.id === id ? { ...item, ...updates } : item));
  };

  const deleteItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const reorderItems = (newItems: ListItemType[]) => {
    setItems(newItems);
  };

  return { items, addItem, updateItem, deleteItem, reorderItems };
};

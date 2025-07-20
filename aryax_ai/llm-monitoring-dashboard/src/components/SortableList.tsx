import React from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { ListItemType } from "../types";
import { ListItem } from "./ListItem";

interface Props {
  items: ListItemType[];
  onEdit: (id: string, updates: Partial<ListItemType>) => void;
  onDelete: (id: string) => void;
  onReorder: (items: ListItemType[]) => void;
}

export const SortableList: React.FC<Props> = ({
  items,
  onEdit,
  onDelete,
  onReorder,
}) => {
  const DraggableItem = ({ id }: { id: string }) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
      useSortable({ id });

    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
    };

    const item = items.find((i) => i.id === id)!;

    return (
      <div ref={setNodeRef} style={style} {...attributes}>
        <ListItem
          item={item}
          onEdit={onEdit}
          onDelete={onDelete}
          dragHandleProps={listeners}
        />
      </div>
    );
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = items.findIndex((i) => i.id === active.id);
      const newIndex = items.findIndex((i) => i.id === over.id);
      const reordered = arrayMove(items, oldIndex, newIndex);
      onReorder(reordered);
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext
        items={items.map((i) => i.id)}
        strategy={verticalListSortingStrategy}
      >
        {items.map((i) => (
          <DraggableItem key={i.id} id={i.id} />
        ))}
      </SortableContext>
    </DndContext>
  );
};

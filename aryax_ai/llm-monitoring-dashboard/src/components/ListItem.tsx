import React, { useState } from "react";
import type { ListItemType } from "../types";

import PannHeader from "./PannHeader";
import Chart from "./Chart";

interface Props {
  item: ListItemType;
  onEdit: (id: string, updates: Partial<ListItemType>) => void;
  onDelete: (id: string) => void;
  dragHandleProps?: any;
}

export const ListItem: React.FC<Props> = ({
  item,
  onEdit,
  onDelete,
  dragHandleProps,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);
  const [chartName, setChartName] = useState(item.chartName);
  const [chartData, setChartData] = useState(item.chartData);

  const saveEdit = () => {
    onEdit(item.id, { title, description, chartName, chartData });
    setIsEditing(false);
  };

  const handleChartChange = (e: any) => {
    setChartName(e.target.value);
  };

  const handleDataChange = (e: any) => {
    setChartData(e.target.value);
  };

  return (
    <div className="border border-gray-500/50  p-4 mb-4 rounded bg-white shadow-sm justify-between items-start ">
      <div className="flex">
        <div
          {...dragHandleProps}
          className="size-5 flex-none cursor-move mt-2 text-gray-400"
        >
          ⠿
        </div>
        <div className="grow ">
          {isEditing ? (
            <div>
              {/* header */}
              <PannHeader
                item={item}
                setIsEditing={setIsEditing}
                isEditing={isEditing}
                onDelete={onDelete}
              />
              {/* Body */}
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="block w-full mb-1 border border-gray-500/50 px-2 py-1"
              />
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="block w-full mb-2 border border-gray-500/50 px-2 py-1"
              />
              <div className="flex gap-4 my-4 align-middle">
                <label className="flex gap-2">
                  <input
                    type="radio"
                    name={`myRadio_${item.id}`}
                    value="tokenUsageData"
                    checked={chartData === "tokenUsageData"}
                    onChange={(e) => handleDataChange(e)}
                  />
                  Token Usage
                </label>
                <label className="flex gap-2">
                  <input
                    type="radio"
                    name={`myRadio_${item.id}`}
                    value="latencyDistributionData"
                    checked={chartData === "latencyDistributionData"}
                    onChange={(e) => handleDataChange(e)}
                  />
                  Latency Disctibution
                </label>
                <label className="flex gap-2">
                  <input
                    type="radio"
                    name={`myRadio_${item.id}`}
                    value="costAnalysisData"
                    checked={chartData === "costAnalysisData"}
                    onChange={(e) => handleDataChange(e)}
                  />
                  Cost Analysis
                </label>
                <label>|</label>
                <label className="flex gap-2">
                  <b>Chart:</b>
                  <select
                    onChange={(e) => handleChartChange(e)}
                    className=" border border-gray-500/50 py-0 px-4"
                    name="selectedChart"
                    defaultValue={item.chartName}
                  >
                    <option value="lineChart">Line Chart</option>
                    <option value="barChart">Bar Chart</option>
                    <option value="piechart">Pie Chart</option>
                  </select>
                </label>
              </div>
              <button
                onClick={saveEdit}
                className="text-sm bg-green-600 text-white px-2 py-1 rounded"
              >
                Save
              </button>
            </div>
          ) : (
            <div className="">
              {/* header */}
              <PannHeader
                item={item}
                setIsEditing={setIsEditing}
                isEditing={isEditing}
                onDelete={onDelete}
              />
              {/* Body */}
              <div>
                <Chart data={item} />
              </div>
              {/* Footer */}
              <div>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

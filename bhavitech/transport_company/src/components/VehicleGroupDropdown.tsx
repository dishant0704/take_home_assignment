import { useMemo } from "react";
import { useVehicleContext } from "../context/VehicleContext";

const VehicleGroupDropdown = () => {
  const { vehicles, setSelectedGroup } = useVehicleContext();

  const groups = useMemo(
    () => [...new Set(vehicles.map((v) => v.group))],
    [vehicles],
  );

  return (
    <div className="grid justify-items-center gap-5">     
      <select
        className="block border rounded-md border-gray-300 px-3 py-2.5 bg-neutral-secondary-medium text-heading text-sm rounded-base focus:ring-brand focus:border-none shadow-xs placeholder:text-body"
        onChange={(e) => setSelectedGroup(e.target.value)}
      >
        <option defaultValue="">
          Select Group
        </option>

        {groups.map((group) => (
          <option key={group} value={group}>
            {group}
          </option>
        ))}
      </select>
    </div>
  );
};

export default VehicleGroupDropdown;

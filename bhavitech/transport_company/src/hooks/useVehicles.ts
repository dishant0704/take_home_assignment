import { useEffect, useState } from "react";
import type { Vehicle } from "../types/vehicle";
import type { ActiveVehicle } from "../types/vehicle";
import {
  fetchVehicles,
  subscribeToFuelUpdates,
} from "../services/vehicleService";

export const useVehicles = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [selectedGroup, setSelectedGroup] = useState<string>("");
  const [activeVehicle, setActiveVehicle] = useState<ActiveVehicle>([]);
  const [vehLength, setVehLength] = useState<number>(0); 

  // initial fetch
  useEffect(() => {
    const loadVehicles = async () => {
      const data = await fetchVehicles();
      setVehicles(data);
      setVehLength(data.length);
    };

    loadVehicles();
  }, []);

  // realtime updates
  useEffect(() => {
    const unsubscribe = subscribeToFuelUpdates(
      (update) => {
        setVehicles((prev) =>
          prev.map((v) =>
            v.id === update.id ? { ...v, fuel: update.fuel } : v,
          ),
        );
      },     
      vehLength,
    );

    return unsubscribe;
  }, [vehicles]);

  // compute active vehicle
  useEffect(() => {
    if (!selectedGroup) return;

    const newVehicle =
      vehicles.filter((v) =>
        v.group.toLocaleLowerCase().includes(selectedGroup.toLocaleLowerCase()),
      )|| [];
    setActiveVehicle(newVehicle);
  }, [selectedGroup, vehicles]);

  return {
    vehicles,
    selectedGroup,
    setSelectedGroup,
    activeVehicle,
  };
};

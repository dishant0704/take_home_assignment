import type { Vehicle, FuelUpdate } from "../types/vehicle"

export const fetchVehicles = async (): Promise<Vehicle[]> => {
  return [
    { id: 0, group: "Truck", name: "Truck 1", fuel: 70 },
    { id: 1, group: "Truck", name: "Truck 2", fuel: 50 },
    { id: 2, group: "Van", name: "Van 1", fuel: 90 },
    { id: 3, group: "Van", name: "Van 2", fuel: 85 },
    { id: 4, group: "Van", name: "Van 3", fuel: 90 },
    { id: 5, group: "Car", name: "Car 1", fuel: 40 },
    { id: 6, group: "Car", name: "Car 2", fuel: 90 },
    { id: 7, group: "Car", name: "Car 3", fuel: 55 },
  ]
}

export const subscribeToFuelUpdates = (
callback: (update: FuelUpdate) => void,  vehLength: number) => { 

  const setInt = setInterval(() => {
     const randomVehicleId = Math.floor(Math.random() * vehLength);
     const randomFuel = Math.floor(Math.random() * 100);    
    callback({
      id: randomVehicleId,
      fuel: randomFuel
    })
  }, 3000);

  return () => clearInterval(setInt)
}
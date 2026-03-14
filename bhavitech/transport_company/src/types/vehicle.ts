export interface Vehicle { 
  id: number
  group: string
  name: string
  fuel: number
}

export type ServiceVehicle = { id: 1, name: "Baroda High School", vehicleNumber: "ABC123", type: "School Bus" };

export type ServiceVehicleData = ServiceVehicle[];

export type ActiveVehicle = Vehicle[]

export interface FuelUpdate { 
  id: number 
  fuel: number
}

export interface VehicleContextType {
  setInt: any
  vehicles: Vehicle[]
  selectedGroup: string | null
  setSelectedGroup: (group: string) => void
  activeVehicle: ActiveVehicle | []
}
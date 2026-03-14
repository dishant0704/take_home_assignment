import { createContext, useContext, } from "react"
import type { VehicleContextType } from "../types/vehicle"
import { useVehicles } from "../hooks/useVehicles"

const VehicleContext = createContext<VehicleContextType | undefined>(undefined)

export const VehicleProvider = ({ children }: { children: React.ReactNode }) => {

  const vehicleState = useVehicles();

  return (
    <VehicleContext.Provider value={vehicleState}>
      {children}
    </VehicleContext.Provider>
  )
}

export const useVehicleContext = () => {

  const context = useContext(VehicleContext)

  if (!context) {
    throw new Error("useVehicleContext must be used within VehicleProvider")
  }

  return context
}
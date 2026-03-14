import ActiveVehicleCard from "./ActiveVehicleCard";
import VehicleGroupDropdown from "./VehicleGroupDropdown";

const FuelSection = () => {
  return (
    <div className="container mx-auto p-4">
      <section className="mb-4">
        <VehicleGroupDropdown />
      </section>
      <section className="mb-4">
        <ActiveVehicleCard />
      </section>
    </div>
  );
};

export default FuelSection;

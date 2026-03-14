import { useVehicleContext } from "../context/VehicleContext";

const ActiveVehicleCard = () => {
  const { activeVehicle, selectedGroup, vehicles } = useVehicleContext();
  if (!activeVehicle || selectedGroup === "") {    
    return <p>No vehicle selected</p>;    
  }

  console.log("ActiveVehicleCard - activeVehicle:", activeVehicle);
  console.log("vehicles:", vehicles);

  return (
    <div>      
      <div className="p-3">
        {activeVehicle.length > 0 ?(
          <>
            <h2>{selectedGroup}</h2>
            <ul className="list-none p-3 border border-gray-300">
              <li className="border-b border-gray-300 p-2 grid grid-cols-2 gap-4" key="header">
                <div className="text-left">Name</div>
                <div className="text-left">Fuel %</div>
              </li>
              {activeVehicle.map((item: any) => {
                const { name, fuel } = item;
                return (
                  <li
                    className="border-b border-gray-300 p-2 grid grid-cols-2 gap-4"
                    key={item.id}
                  >
                    <div className="text-left">{name}</div>
                    <div className="text-left">{fuel} </div>
                  </li>
                );
              })}
            </ul>
          </>
        ):null}
      </div>
    </div>
  );
};

export default ActiveVehicleCard;

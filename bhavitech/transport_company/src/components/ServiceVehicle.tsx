import { useState } from "react";

const ServiceVehicle = () => {
    const serviceVehicleData = [
        { id: 1, name: "Baroda High School", vehicleNumber: "ABC123", type: "School Bus" },
        { id: 2, name: "Apollo Tyres", vehicleNumber: "XYZ789", type: "Staff Bus" },
        { id: 3, name: "Ambey Travels", vehicleNumber: "LMN456", type: "Rental Bus" },
    ];

    const [serviceData, setServiceData] = useState(serviceVehicleData);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newVehicle = {
            id: serviceData.length + 1,
            name: formData.get('name') as string, 
            vehicleNumber: formData.get('vehicleNumber') as string,
            type: formData.get('type') as string,
        };
        setServiceData(prev => [...prev, newVehicle]);
        e.currentTarget.reset();
    }

  return (
    <div className="full-width mx-auto p-4">
        <h4 className="text-xl font-bold mb-4 py-2 text-left">Add Service Vehicle:</h4>
        <form onSubmit={handleSubmit} className="grid grid-cols-3 max-w-md mx-auto gap-2 pb-5 text-sm">
            <input type="text" name='name' placeholder='Client Name' className='border border-gray-300 p-1 rounded-md w-full mb-4'/>
            <input type="text" name='vehicleNumber' placeholder='Vehicle Number' className='border border-gray-300 p-1 rounded-md w-full mb-4'/>
            <select name="type" className='border border-gray-300 p-1 rounded-md w-full mb-4'>
                <option value="">Select Vehicle Type</option>
                <option value="school bus">School Bus</option>
                <option value="staff bus">Staff Bus</option>
                <option value="rental bus">Rental Bus</option>
            </select>
            <button type='submit' className='col-start-1 col-end-4 bg-blue-500 text-white px-4 py-1 rounded-md'>Add Vehicle</button>
        </form>
        <ul className="list-none p-3 border border-gray-300 text-sm">
              <li className="border-b border-gray-300 p-2 grid grid-cols-3 gap-4 font-bold" key="header">
                <div className="text-left">Client Name</div>
                <div className="text-center">Vehicle Number</div>
                <div className="text-center">Vehicle Type</div>
              </li>
              {serviceData.map((item: any) => {
                const { name, vehicleNumber, type } = item;
                return (
                  <li
                    className="border-b border-gray-300 p-2 grid grid-cols-3 gap-4 text-wrap"
                    key={item.id}
                  >
                    <div className="text-left ">{name}</div>
                    <div className="text-center">{vehicleNumber} </div>
                    <div className="text-center">{type} </div>
                  </li>
                );
              })}
            </ul>
      
    </div>
  )
}

export default ServiceVehicle

import Card from "./Card";
import FuelSection from "./FuelSection";
import ServiceVehicle from "./ServiceVehicle";

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome to the Transport Dashboard</h1>
      <p className="mt-2 text-gray-600">
        This is a simple application to manage vehicles and their fuel levels.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <Card title="Service Vehicle List">
         <ServiceVehicle />
        </Card>
        <Card title="Fuel Management">
          <FuelSection />
        </Card>
      </div>
      <div className="text-left p-5">
        <h3 className="py-5">Description:</h3>
        <p className=" text-gray-600">
          Create a custom hook that manages real-time data fetching and sharing,
          then use it to power two separate UI components that must stay in
          sync. <br/><br/>
          You are building a dashboard for a transport company. Component
          A: A dropdown to choose a "Vehicle Group." Component B: Displays the
          "Active Vehicle" and its "Fuel Level." The Problem: Both components
          need access to the same "Vehicle List," but we don't want to fetch the
          data twice or pass props through 10 layers of components. Do not use
          any State-management Library for this.
        </p>
        <h3 className="py-5">Stack:</h3>
        <ul className=" text-gray-600">
          <li>vite</li>
          <li>React</li>
          <li>Tailwind CSS</li>
          <li>TypeScript</li>
        </ul>
      </div>
    </div>
  );
};
export default Dashboard;

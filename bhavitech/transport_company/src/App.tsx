import "./App.css";
import { VehicleProvider } from "./context/VehicleContext";
import PageLayout from "./components/PageLayout";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <VehicleProvider>
        <PageLayout>
          <Dashboard />
        </PageLayout>        
      </VehicleProvider>
    </>
  );
}

export default App;

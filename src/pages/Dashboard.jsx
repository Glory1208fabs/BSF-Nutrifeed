import ProductionChart from "../components/ProductionChart";

const Dashboard = () => {

  return (

    <div className="p-8 bg-gray-100 min-h-screen">

      <h1 className="text-3xl font-bold mb-8">
        Dashboard Overview
      </h1>

      <div className="bg-white p-6 rounded-xl shadow">

        <h2 className="text-xl font-semibold mb-4">
          Weekly Feed Production
        </h2>

        <ProductionChart />

      </div>

    </div>
  );
};

export default Dashboard;




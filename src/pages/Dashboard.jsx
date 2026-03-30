import ProductionChart from "../components/ProductionChart";
  import StatCard from "../components/StatCard";
import ActivityTable from "../components/ActivityTable";

const Dashboard = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">

      <h1 className="text-3xl font-bold mb-8">
        Dashboard Overview
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mb-8">

        <StatCard title="Feed Production" value="120kg" />
        <StatCard title="Growth Rate" value="+15%" />
        <StatCard title="Active Farms" value="8" />

      </div>

      <ActivityTable />
      <ProductionChart />

    </div>
  );
};

export default Dashboard;
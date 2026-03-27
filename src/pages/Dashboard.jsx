import { logoutUser } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 hidden md:block">
        <h2 className="text-xl font-bold text-green-600 mb-8">
          BSF-Nutrifeed
        </h2>

        <nav className="space-y-4">
          <p className="font-medium">Dashboard</p>
          <p className="text-gray-500">Feed Production</p>
          <p className="text-gray-500">Reports</p>
        </nav>

        <button
          onClick={handleLogout}
          className="mt-10 text-red-500"
        >
          Logout
        </button>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6">

        <h1 className="text-3xl font-bold mb-6">
          Dashboard Overview
        </h1>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">Feed Production</p>
            <h2 className="text-2xl font-bold">120kg</h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">Growth Rate</p>
            <h2 className="text-2xl font-bold text-green-600">+15%</h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">Active Farms</p>
            <h2 className="text-2xl font-bold">8</h2>
          </div>

        </div>

        {/* Table */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold mb-4">Farm Activity</h2>

          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-500">
                <th>Farm</th>
                <th>Production</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Farm A</td>
                <td>50kg</td>
                <td className="text-green-600">Good</td>
              </tr>
              <tr>
                <td>Farm B</td>
                <td>30kg</td>
                <td className="text-yellow-500">Low</td>
              </tr>
            </tbody>
          </table>

        </div>

      </main>
    </div>
  );
};

export default Dashboard;
import { DollarSign, ShoppingBag, TrendingUp, Users } from "lucide-react";
import React from "react";
import { Card } from "../components/cards";
import {
  ProductPerformanceChart,
  SalesChart,
  TrafficSourcesChart,
  UserActivityChart,
} from "../components/charts";

const Dashboard: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Dashboard Overview
      </h2>

      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card
          title="Total Revenue"
          value="$24,680"
          icon={<DollarSign size={20} className="text-white" />}
          trend="+12.5%"
          color="bg-blue-600"
        />
        <Card
          title="Total Users"
          value="1,234"
          icon={<Users size={20} className="text-white" />}
          trend="+3.2%"
          color="bg-green-600"
        />
        <Card
          title="New Orders"
          value="450"
          icon={<ShoppingBag size={20} className="text-white" />}
          trend="-2.4%"
          color="bg-orange-600"
        />
        <Card
          title="Conversion Rate"
          value="3.54%"
          icon={<TrendingUp size={20} className="text-white" />}
          trend="+1.2%"
          color="bg-purple-600"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <SalesChart />
        <TrafficSourcesChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UserActivityChart />
        <ProductPerformanceChart />
      </div>
    </>
  );
};

export default Dashboard;

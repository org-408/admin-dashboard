import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { productPerformanceData } from "../../data/sampleData";

const ProductPerformanceChart: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
      <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4">
        Product Performance
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={productPerformanceData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#4F46E5" />
          <Bar dataKey="returns" fill="#F97316" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProductPerformanceChart;

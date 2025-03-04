import React from "react";
import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { trafficData } from "../../data/sampleData";

const TrafficSourcesChart: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
      <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4">
        Traffic Sources
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={trafficData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            dataKey="value"
            nameKey="name"
            label={({ name, percent }) =>
              `${name}: ${(percent * 100).toFixed(0)}%`
            }
          >
            {trafficData.map((entry, index) => (
              <Pie key={`traffic-${index}`} fill={entry.color} dataKey={""} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrafficSourcesChart;

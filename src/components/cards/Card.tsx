import React from "react";
import { CardProps } from "../../types/interfaces";

const Card: React.FC<CardProps> = ({ title, value, icon, trend, color }) => {
  const trendValue =
    typeof trend === "string" ? trend : `${trend > 0 ? "+" : ""}${trend}%`;
  const isPositive =
    trend.toString().startsWith("+") ||
    (typeof trend === "number" && trend > 0);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 transition-all">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {title}
          </h3>
          <p className="text-2xl font-bold mt-1 text-gray-800 dark:text-white">
            {value}
          </p>
        </div>
        <div className={`p-2 rounded-full ${color}`}>{icon}</div>
      </div>
      <div className="mt-2">
        <span
          className={`text-xs font-medium ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {trendValue}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
          vs last month
        </span>
      </div>
    </div>
  );
};

export default Card;

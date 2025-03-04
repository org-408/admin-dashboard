import React from "react";
import { OrderTable } from "../components/tables";

const Orders: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Order Management
      </h2>
      <OrderTable />
    </>
  );
};

export default Orders;

import React from "react";
import { ProductTable } from "../components/tables";

const Products: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Product Inventory
      </h2>
      <ProductTable />
    </>
  );
};

export default Products;

import React from "react";
import { UserTable } from "../components/tables";

const Users: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        User Management
      </h2>
      <UserTable />
    </>
  );
};

export default Users;

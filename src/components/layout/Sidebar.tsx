import {
  Activity,
  BarChart2,
  DollarSign,
  LogOut,
  Menu,
  ShoppingBag,
  Users,
  X,
} from "lucide-react";
import React from "react";
import { SidebarProps } from "../../types/interfaces";

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  toggleSidebar,
  activeTab,
  setActiveTab,
}) => {
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: BarChart2 },
    { id: "users", label: "Users", icon: Users },
    { id: "products", label: "Products", icon: ShoppingBag },
    { id: "orders", label: "Orders", icon: DollarSign },
    { id: "analytics", label: "Analytics", icon: Activity },
  ];

  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-20"
      } bg-white dark:bg-gray-800 shadow-md z-10 transition-all duration-300 transform ${
        isOpen ? "translate-x-0" : "-translate-x-0"
      } fixed h-full`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        {isOpen && (
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">
            AdminDash
          </h1>
        )}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
        >
          {isOpen ? (
            <X size={20} className="text-gray-500 dark:text-gray-400" />
          ) : (
            <Menu size={20} className="text-gray-500 dark:text-gray-400" />
          )}
        </button>
      </div>

      <nav className="mt-6 px-4">
        <ul className="space-y-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center w-full p-2 rounded-md ${
                    activeTab === item.id
                      ? "text-gray-800 dark:text-white bg-indigo-50 dark:bg-indigo-900"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  <Icon
                    size={20}
                    className={`${
                      activeTab === item.id
                        ? "text-indigo-600 dark:text-indigo-400"
                        : "text-gray-500 dark:text-gray-400"
                    }`}
                  />
                  {isOpen && <span className="ml-4">{item.label}</span>}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="absolute bottom-0 w-full p-4 border-t border-gray-200 dark:border-gray-700">
        <button className="flex items-center w-full p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
          <LogOut size={20} className="text-gray-500 dark:text-gray-400" />
          {isOpen && <span className="ml-4">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

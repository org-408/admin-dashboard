import { Bell, Moon, Search, Sun, User } from "lucide-react";
import React from "react";
import { HeaderProps } from "../../types/interfaces";

const Header: React.FC<HeaderProps> = ({
  sidebarOpen,
  darkMode,
  setDarkMode,
}) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm z-10 sticky top-0">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-md px-3 py-2 w-64">
          <Search size={20} className="text-gray-500 dark:text-gray-400" />
          <input
            className="ml-2 bg-transparent outline-none text-gray-700 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 w-full"
            type="text"
            placeholder="Search..."
          />
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 relative">
            <Bell size={20} className="text-gray-500 dark:text-gray-400" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {darkMode ? (
              <Sun size={20} className="text-gray-500 dark:text-gray-400" />
            ) : (
              <Moon size={20} className="text-gray-500 dark:text-gray-400" />
            )}
          </button>

          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
              <User
                size={16}
                className="text-indigo-600 dark:text-indigo-400"
              />
            </div>
            <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Admin User
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React, { useEffect, useState } from "react";
import { Header, Sidebar } from "./components/layout";
import { Analytics, Dashboard, Orders, Products, Users } from "./pages";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<string>("dashboard");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleSidebar = (): void => {
    setSidebarOpen(!sidebarOpen);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "users":
        return <Users />;
      case "products":
        return <Products />;
      case "orders":
        return <Orders />;
      case "analytics":
        return <Analytics />;
      default:
        return (
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Page not found
          </h2>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <Sidebar
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div
        className={`flex-1 flex flex-col ${
          sidebarOpen ? "ml-64" : "ml-20"
        } transition-all duration-300`}
      >
        <Header
          sidebarOpen={sidebarOpen}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <main className="flex-1 overflow-y-auto p-4 bg-gray-100 dark:bg-gray-900">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;

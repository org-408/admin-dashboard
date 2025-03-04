import {
  Activity,
  BarChart2,
  Bell,
  DollarSign,
  Edit,
  Eye,
  Filter,
  LogOut,
  Menu,
  Moon,
  Package,
  RefreshCw,
  Search,
  ShoppingBag,
  Sun,
  Trash2,
  TrendingUp,
  User,
  Users,
  X,
} from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Sample data for all sections
const salesData = [
  { name: "Jan", sales: 4000, expenses: 2400, profit: 1600 },
  { name: "Feb", sales: 3000, expenses: 1398, profit: 1602 },
  { name: "Mar", sales: 5000, expenses: 3400, profit: 1600 },
  { name: "Apr", sales: 2780, expenses: 2908, profit: -128 },
  { name: "May", sales: 1890, expenses: 1800, profit: 90 },
  { name: "Jun", sales: 2390, expenses: 2000, profit: 390 },
  { name: "Jul", sales: 3490, expenses: 2300, profit: 1190 },
];

const trafficData = [
  { name: "Direct", value: 400, color: "#4F46E5" },
  { name: "Organic", value: 300, color: "#F97316" },
  { name: "Referral", value: 300, color: "#10B981" },
  { name: "Social", value: 200, color: "#EC4899" },
];

const userActivityData = [
  { name: "Week 1", users: 500 },
  { name: "Week 2", users: 350 },
  { name: "Week 3", users: 600 },
  { name: "Week 4", users: 800 },
  { name: "Week 5", users: 750 },
];

const productPerformanceData = [
  { name: "Product A", sales: 2400, returns: 240 },
  { name: "Product B", sales: 1398, returns: 139 },
  { name: "Product C", sales: 9800, returns: 980 },
  { name: "Product D", sales: 3908, returns: 390 },
  { name: "Product E", sales: 4800, returns: 480 },
];

const usersData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
    lastLogin: "2023-03-01",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Editor",
    status: "Active",
    lastLogin: "2023-03-02",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    role: "Viewer",
    status: "Inactive",
    lastLogin: "2023-02-15",
  },
  {
    id: 4,
    name: "Sarah Williams",
    email: "sarah@example.com",
    role: "Editor",
    status: "Active",
    lastLogin: "2023-03-03",
  },
  {
    id: 5,
    name: "David Brown",
    email: "david@example.com",
    role: "Viewer",
    status: "Active",
    lastLogin: "2023-03-01",
  },
  {
    id: 6,
    name: "Emily Davis",
    email: "emily@example.com",
    role: "Admin",
    status: "Inactive",
    lastLogin: "2023-02-27",
  },
];

const productsData = [
  {
    id: 1,
    name: "Premium Headphones",
    category: "Electronics",
    price: 199.99,
    stock: 45,
    status: "In Stock",
  },
  {
    id: 2,
    name: "Wireless Keyboard",
    category: "Electronics",
    price: 59.99,
    stock: 12,
    status: "Low Stock",
  },
  {
    id: 3,
    name: "Office Chair",
    category: "Furniture",
    price: 149.99,
    stock: 28,
    status: "In Stock",
  },
  {
    id: 4,
    name: "Desk Lamp",
    category: "Home Goods",
    price: 29.99,
    stock: 0,
    status: "Out of Stock",
  },
  {
    id: 5,
    name: "Laptop Backpack",
    category: "Accessories",
    price: 79.99,
    stock: 35,
    status: "In Stock",
  },
  {
    id: 6,
    name: "Smart Watch",
    category: "Electronics",
    price: 249.99,
    stock: 8,
    status: "Low Stock",
  },
];

const ordersData = [
  {
    id: "ORD-001",
    customer: "John Doe",
    date: "2023-03-01",
    total: 259.98,
    status: "Delivered",
    items: 2,
  },
  {
    id: "ORD-002",
    customer: "Jane Smith",
    date: "2023-03-02",
    total: 149.99,
    status: "Processing",
    items: 1,
  },
  {
    id: "ORD-003",
    customer: "Mike Johnson",
    date: "2023-03-02",
    total: 329.97,
    status: "Shipped",
    items: 3,
  },
  {
    id: "ORD-004",
    customer: "Sarah Williams",
    date: "2023-03-03",
    total: 599.97,
    status: "Processing",
    items: 2,
  },
  {
    id: "ORD-005",
    customer: "David Brown",
    date: "2023-03-03",
    total: 109.98,
    status: "Delivered",
    items: 2,
  },
  {
    id: "ORD-006",
    customer: "Emily Davis",
    date: "2023-03-04",
    total: 249.99,
    status: "Processing",
    items: 1,
  },
];

const analyticsMetrics = [
  {
    metric: "Page Views",
    value: "1.2M",
    trend: "+12%",
    period: "vs last month",
  },
  {
    metric: "Bounce Rate",
    value: "42%",
    trend: "-3%",
    period: "vs last month",
  },
  {
    metric: "Avg. Session",
    value: "4m 12s",
    trend: "+8%",
    period: "vs last month",
  },
  {
    metric: "Conversion Rate",
    value: "3.2%",
    trend: "+0.8%",
    period: "vs last month",
  },
];

interface CardProps {
  title: string;
  value: string;
  icon: ReactNode;
  trend: string | number;
  color: string;
}

// Card component for dashboard stats
const Card = ({ title, value, icon, trend, color }: CardProps) => {
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

// Chart components
const SalesChart = () => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
    <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4">
      Revenue Overview
    </h3>
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={salesData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#F97316" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#F97316" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="sales"
          stroke="#4F46E5"
          fillOpacity={1}
          fill="url(#colorSales)"
        />
        <Area
          type="monotone"
          dataKey="expenses"
          stroke="#F97316"
          fillOpacity={1}
          fill="url(#colorExpenses)"
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

const TrafficSourcesChart = () => (
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

const UserActivityChart = () => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
    <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4">
      User Activity
    </h3>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={userActivityData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="users"
          stroke="#10B981"
          strokeWidth={2}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

const ProductPerformanceChart = () => (
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

// Common table footer component
const TableFooter = () => (
  <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
    <div className="text-sm text-gray-500 dark:text-gray-400">
      Showing <span className="font-medium">1</span> to{" "}
      <span className="font-medium">6</span> of{" "}
      <span className="font-medium">6</span> results
    </div>
    <div className="flex space-x-2">
      <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-sm text-gray-700 dark:text-gray-300">
        Previous
      </button>
      <button className="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm">
        Next
      </button>
    </div>
  </div>
);

// Table components
const UserTable = () => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
    <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
      <h3 className="text-lg font-medium text-gray-800 dark:text-white">
        Users
      </h3>
      <div className="flex space-x-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search users..."
            className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <Search className="absolute right-3 top-2.5 text-gray-500 dark:text-gray-400 h-4 w-4" />
        </div>
        <button className="bg-indigo-600 text-white px-3 py-2 rounded-md text-sm flex items-center">
          <Users className="h-4 w-4 mr-1" /> Add User
        </button>
      </div>
    </div>
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-700">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Role
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Last Login
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          {usersData.map((user) => (
            <tr key={user.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                    <User className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {user.name}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {user.email}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {user.role}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    user.status === "Active"
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                  }`}
                >
                  {user.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                {user.lastLogin}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <div className="flex justify-end space-x-2">
                  <button className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <TableFooter />
  </div>
);

const ProductTable = () => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
    <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
      <h3 className="text-lg font-medium text-gray-800 dark:text-white">
        Products
      </h3>
      <div className="flex space-x-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <Search className="absolute right-3 top-2.5 text-gray-500 dark:text-gray-400 h-4 w-4" />
        </div>
        <button className="bg-indigo-600 text-white px-3 py-2 rounded-md text-sm flex items-center">
          <Package className="h-4 w-4 mr-1" /> Add Product
        </button>
      </div>
    </div>
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-700">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Product
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Category
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Stock
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          {productsData.map((product) => (
            <tr key={product.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-md bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                    <Package className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {product.name}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {product.category}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  ${product.price.toFixed(2)}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {product.stock}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    product.status === "In Stock"
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      : product.status === "Low Stock"
                      ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                      : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                  }`}
                >
                  {product.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <div className="flex justify-end space-x-2">
                  <button className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <TableFooter />
  </div>
);

const OrderTable = () => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
    <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
      <h3 className="text-lg font-medium text-gray-800 dark:text-white">
        Orders
      </h3>
      <div className="flex space-x-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search orders..."
            className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <Search className="absolute right-3 top-2.5 text-gray-500 dark:text-gray-400 h-4 w-4" />
        </div>
        <button className="bg-indigo-600 text-white px-3 py-2 rounded-md text-sm flex items-center">
          <Filter className="h-4 w-4 mr-1" /> Filter
        </button>
      </div>
    </div>
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-700">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Order ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Customer
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Total
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Items
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          {ordersData.map((order) => (
            <tr key={order.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  {order.id}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900 dark:text-white">
                  {order.customer}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {order.date}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  ${order.total.toFixed(2)}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    order.status === "Delivered"
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      : order.status === "Shipped"
                      ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                      : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                  }`}
                >
                  {order.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {order.items}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <div className="flex justify-end space-x-2">
                  <button className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <TableFooter />
  </div>
);

const AnalyticsContent = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {analyticsMetrics.map((metric, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {metric.metric}
              </h3>
              <p className="text-2xl font-bold mt-1 text-gray-800 dark:text-white">
                {metric.value}
              </p>
            </div>
          </div>
          <div className="mt-2">
            <span
              className={`text-xs font-medium ${
                metric.trend.startsWith("+") ? "text-green-500" : "text-red-500"
              }`}
            >
              {metric.trend}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
              {metric.period}
            </span>
          </div>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
        <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4">
          Traffic Overview
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={[
              { month: "Jan", desktop: 2000, mobile: 1400, tablet: 400 },
              { month: "Feb", desktop: 2200, mobile: 1600, tablet: 500 },
              { month: "Mar", desktop: 2400, mobile: 1700, tablet: 600 },
              { month: "Apr", desktop: 2300, mobile: 1900, tablet: 700 },
              { month: "May", desktop: 2500, mobile: 2100, tablet: 800 },
              { month: "Jun", desktop: 2600, mobile: 2300, tablet: 900 },
            ]}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="desktop"
              stroke="#4F46E5"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="mobile"
              stroke="#F97316"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="tablet"
              stroke="#10B981"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
        <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4">
          Conversion Funnel
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            layout="vertical"
            data={[
              { stage: "Visited", value: 5200 },
              { stage: "Added to Cart", value: 3800 },
              { stage: "Checkout Started", value: 2400 },
              { stage: "Payment Made", value: 1600 },
              { stage: "Order Completed", value: 1400 },
            ]}
            margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="stage" type="category" />
            <Tooltip />
            <Bar
              dataKey="value"
              fill="#4F46E5"
              barSize={30}
              radius={[0, 4, 4, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>

    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Top Referrers
        </h3>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Last 30 days
          </span>
          <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
            <RefreshCw className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Source
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Visitors
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                New Users
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Bounce Rate
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Avg. Session
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {[
              {
                source: "Google",
                visitors: 12500,
                newUsers: 8400,
                bounceRate: "42%",
                avgSession: "3m 12s",
              },
              {
                source: "Facebook",
                visitors: 8200,
                newUsers: 4800,
                bounceRate: "38%",
                avgSession: "2m 24s",
              },
              {
                source: "Twitter",
                visitors: 6300,
                newUsers: 3700,
                bounceRate: "35%",
                avgSession: "2m 48s",
              },
              {
                source: "Instagram",
                visitors: 5400,
                newUsers: 3200,
                bounceRate: "30%",
                avgSession: "3m 44s",
              },
              {
                source: "LinkedIn",
                visitors: 4200,
                newUsers: 2400,
                bounceRate: "28%",
                avgSession: "4m 12s",
              },
            ].map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {item.source}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {item.visitors.toLocaleString()}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {item.newUsers.toLocaleString()}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {item.bounceRate}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {item.avgSession}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

// Main App component with routing
const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
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
      case "users":
        return <UserTable />;
      case "products":
        return <ProductTable />;
      case "orders":
        return <OrderTable />;
      case "analytics":
        return <AnalyticsContent />;
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
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-white dark:bg-gray-800 shadow-md z-10 transition-all duration-300 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-0"
        } fixed h-full`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          {sidebarOpen && (
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">
              AdminDash
            </h1>
          )}
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
          >
            {sidebarOpen ? (
              <X size={20} className="text-gray-500 dark:text-gray-400" />
            ) : (
              <Menu size={20} className="text-gray-500 dark:text-gray-400" />
            )}
          </button>
        </div>
        <nav className="mt-6 px-4">
          <ul className="space-y-4">
            <li>
              <button
                onClick={() => setActiveTab("dashboard")}
                className={`flex items-center w-full p-2 rounded-md ${
                  activeTab === "dashboard"
                    ? "text-gray-800 dark:text-white bg-indigo-50 dark:bg-indigo-900"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <BarChart2
                  size={20}
                  className={`${
                    activeTab === "dashboard"
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                />
                {sidebarOpen && <span className="ml-4">Dashboard</span>}
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("users")}
                className={`flex items-center w-full p-2 rounded-md ${
                  activeTab === "users"
                    ? "text-gray-800 dark:text-white bg-indigo-50 dark:bg-indigo-900"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <Users
                  size={20}
                  className={`${
                    activeTab === "users"
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                />
                {sidebarOpen && <span className="ml-4">Users</span>}
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("products")}
                className={`flex items-center w-full p-2 rounded-md ${
                  activeTab === "products"
                    ? "text-gray-800 dark:text-white bg-indigo-50 dark:bg-indigo-900"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <ShoppingBag
                  size={20}
                  className={`${
                    activeTab === "products"
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                />
                {sidebarOpen && <span className="ml-4">Products</span>}
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("orders")}
                className={`flex items-center w-full p-2 rounded-md ${
                  activeTab === "orders"
                    ? "text-gray-800 dark:text-white bg-indigo-50 dark:bg-indigo-900"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <DollarSign
                  size={20}
                  className={`${
                    activeTab === "orders"
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                />
                {sidebarOpen && <span className="ml-4">Orders</span>}
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("analytics")}
                className={`flex items-center w-full p-2 rounded-md ${
                  activeTab === "analytics"
                    ? "text-gray-800 dark:text-white bg-indigo-50 dark:bg-indigo-900"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <Activity
                  size={20}
                  className={`${
                    activeTab === "analytics"
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                />
                {sidebarOpen && <span className="ml-4">Analytics</span>}
              </button>
            </li>
          </ul>
        </nav>
        <div className="absolute bottom-0 w-full p-4 border-t border-gray-200 dark:border-gray-700">
          <button className="flex items-center w-full p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
            <LogOut size={20} className="text-gray-500 dark:text-gray-400" />
            {sidebarOpen && <span className="ml-4">Logout</span>}
          </button>
        </div>
      </div>

      {/* Main content */}
      <div
        className={`flex-1 flex flex-col ${
          sidebarOpen ? "ml-64" : "ml-20"
        } transition-all duration-300`}
      >
        {/* Top header */}
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
                  <Moon
                    size={20}
                    className="text-gray-500 dark:text-gray-400"
                  />
                )}
              </button>
              <div className="flex items-center">
                <img
                  className="h-8 w-8 rounded-full object-cover"
                  src="/api/placeholder/40/40"
                  alt="User avatar"
                />
                <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Admin User
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard content */}
        <main className="flex-1 overflow-y-auto p-4 bg-gray-100 dark:bg-gray-900">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;

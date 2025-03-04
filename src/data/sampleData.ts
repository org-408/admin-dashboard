import {
  AnalyticsMetric,
  Order,
  Product,
  ProductPerformanceDataPoint,
  SalesDataPoint,
  TrafficDataPoint,
  User,
  UserActivityDataPoint,
} from "../types/interfaces";

// Dashboard Charts Data
export const salesData: SalesDataPoint[] = [
  { name: "Jan", sales: 4000, expenses: 2400, profit: 1600 },
  { name: "Feb", sales: 3000, expenses: 1398, profit: 1602 },
  { name: "Mar", sales: 5000, expenses: 3400, profit: 1600 },
  { name: "Apr", sales: 2780, expenses: 2908, profit: -128 },
  { name: "May", sales: 1890, expenses: 1800, profit: 90 },
  { name: "Jun", sales: 2390, expenses: 2000, profit: 390 },
  { name: "Jul", sales: 3490, expenses: 2300, profit: 1190 },
];

export const trafficData: TrafficDataPoint[] = [
  { name: "Direct", value: 400, color: "#4F46E5" },
  { name: "Organic", value: 300, color: "#F97316" },
  { name: "Referral", value: 300, color: "#10B981" },
  { name: "Social", value: 200, color: "#EC4899" },
];

export const userActivityData: UserActivityDataPoint[] = [
  { name: "Week 1", users: 500 },
  { name: "Week 2", users: 350 },
  { name: "Week 3", users: 600 },
  { name: "Week 4", users: 800 },
  { name: "Week 5", users: 750 },
];

export const productPerformanceData: ProductPerformanceDataPoint[] = [
  { name: "Product A", sales: 2400, returns: 240 },
  { name: "Product B", sales: 1398, returns: 139 },
  { name: "Product C", sales: 9800, returns: 980 },
  { name: "Product D", sales: 3908, returns: 390 },
  { name: "Product E", sales: 4800, returns: 480 },
];

// Table Data
export const usersData: User[] = [
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

export const productsData: Product[] = [
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

export const ordersData: Order[] = [
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

// Analytics Data
export const analyticsMetrics: AnalyticsMetric[] = [
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

export const trafficOverviewData = [
  { month: "Jan", desktop: 2000, mobile: 1400, tablet: 400 },
  { month: "Feb", desktop: 2200, mobile: 1600, tablet: 500 },
  { month: "Mar", desktop: 2400, mobile: 1700, tablet: 600 },
  { month: "Apr", desktop: 2300, mobile: 1900, tablet: 700 },
  { month: "May", desktop: 2500, mobile: 2100, tablet: 800 },
  { month: "Jun", desktop: 2600, mobile: 2300, tablet: 900 },
];

export const conversionFunnelData = [
  { stage: "Visited", value: 5200 },
  { stage: "Added to Cart", value: 3800 },
  { stage: "Checkout Started", value: 2400 },
  { stage: "Payment Made", value: 1600 },
  { stage: "Order Completed", value: 1400 },
];

export const topReferrersData = [
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
];

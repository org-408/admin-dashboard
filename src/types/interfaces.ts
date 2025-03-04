import { ReactNode } from "react";

// Layout Component Interfaces
export interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export interface HeaderProps {
  sidebarOpen: boolean;
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

// Component Interfaces
export interface CardProps {
  title: string;
  value: string;
  icon: ReactNode;
  trend: string | number;
  color: string;
}

export interface TableFooterProps {
  currentPage?: number;
  totalPages?: number;
  onPreviousPage?: () => void;
  onNextPage?: () => void;
}

// Data Interfaces
export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  lastLogin: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: string;
}

export interface Order {
  id: string;
  customer: string;
  date: string;
  total: number;
  status: string;
  items: number;
}

export interface SalesDataPoint {
  name: string;
  sales: number;
  expenses: number;
  profit: number;
}

export interface TrafficDataPoint {
  name: string;
  value: number;
  color: string;
}

export interface UserActivityDataPoint {
  name: string;
  users: number;
}

export interface ProductPerformanceDataPoint {
  name: string;
  sales: number;
  returns: number;
}

export interface AnalyticsMetric {
  metric: string;
  value: string;
  trend: string;
  period: string;
}

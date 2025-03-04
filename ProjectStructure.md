# Admin Dashboard Project Structure

```
admin-dashboard/
├── public/                   # Static files
│   ├── index.html           # HTML entry point
│   └── favicon.ico          # Site favicon
├── src/                      # Source code
│   ├── App.tsx              # Main application component
│   ├── index.tsx            # Application entry point
│   ├── index.css            # Global styles (including Tailwind imports)
│   ├── components/          # Reusable UI components
│   │   ├── layout/          # Layout components
│   │   │   ├── Sidebar.tsx  # Navigation sidebar
│   │   │   ├── Header.tsx   # Application header
│   │   │   └── index.ts     # Layout exports
│   │   ├── cards/           # Card components
│   │   │   ├── Card.tsx     # Statistical card component
│   │   │   └── index.ts     # Card exports
│   │   ├── charts/          # Chart components
│   │   │   ├── SalesChart.tsx         # Revenue/expenses chart
│   │   │   ├── TrafficSourcesChart.tsx # Traffic sources pie chart
│   │   │   ├── UserActivityChart.tsx   # User activity line chart
│   │   │   ├── ProductPerformanceChart.tsx # Product performance bar chart
│   │   │   └── index.ts                # Chart exports
│   │   └── tables/          # Table components
│   │       ├── UserTable.tsx          # Users data table
│   │       ├── ProductTable.tsx       # Products data table
│   │       ├── OrderTable.tsx         # Orders data table
│   │       ├── TableFooter.tsx        # Common table footer
│   │       └── index.ts               # Table exports
│   ├── pages/               # Page components
│   │   ├── Dashboard.tsx    # Dashboard page
│   │   ├── Users.tsx        # Users page
│   │   ├── Products.tsx     # Products page
│   │   ├── Orders.tsx       # Orders page
│   │   ├── Analytics.tsx    # Analytics page
│   │   └── index.ts         # Page exports
│   ├── data/                # Data models and sample data
│   │   └── sampleData.ts    # Mock data for demonstration
│   ├── types/               # TypeScript type definitions
│   │   └── interfaces.ts    # Interface definitions
│   └── utils/               # Utility functions
│       └── formatters.ts    # Data formatting helpers
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Project dependencies and scripts
├── README.md                # Project documentation
├── LICENSE.md               # MIT license
├── CONTRIBUTING.md          # Contributing guidelines
└── PROJECT_STRUCTURE.md     # Detailed project structure documentation
```

This structure follows best practices for React/TypeScript applications:

1. **Component Organization**: Components are grouped by type/function for easy maintenance
2. **Page Separation**: Each page has its own component, making routing and navigation clear
3. **Type Safety**: Dedicated types directory ensures consistent TypeScript interfaces
4. **Data Management**: Sample data is centralized and easily replaceable with API calls
5. **Documentation**: Comprehensive documentation files for onboarding and contribution

# Contributing to Admin Dashboard

Thank you for your interest in contributing to the Admin Dashboard project. This document provides guidelines and instructions for contributing.

## Table of Contents

- [Contributing to Admin Dashboard](#contributing-to-admin-dashboard)
  - [Table of Contents](#table-of-contents)
  - [Code of Conduct](#code-of-conduct)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
  - [Development Workflow](#development-workflow)
  - [Pull Request Process](#pull-request-process)
  - [Coding Standards](#coding-standards)
    - [TypeScript](#typescript)
    - [React](#react)
    - [Styling](#styling)
    - [Naming Conventions](#naming-conventions)
  - [Testing](#testing)
  - [Documentation](#documentation)

## Code of Conduct

This project adheres to a Code of Conduct that all contributors are expected to follow. By participating, you are expected to uphold this code.

- Be respectful and inclusive
- Focus on constructive feedback
- Maintain a harassment-free experience for everyone
- Exercise empathy and kindness

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm or yarn
- Git

### Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/admin-dashboard.git
   cd admin-dashboard
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
4. Create a new branch for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

1. Make your changes to the codebase
2. Run the development server to test your changes:
   ```bash
   npm start
   # or
   yarn start
   ```
3. Ensure your code follows the project's coding standards
4. Write or update tests as necessary
5. Update documentation to reflect your changes
6. Commit your changes with clear, descriptive commit messages

## Pull Request Process

1. Update your fork to include the latest changes from the main repository
2. Push your changes to your fork
3. Create a Pull Request (PR) to the main repository
4. Provide a clear description of the changes in your PR
5. Reference any related issues
6. Wait for maintainers to review your PR
7. Address any feedback or requested changes
8. Once approved, your PR will be merged

## Coding Standards

This project follows specific coding standards to maintain consistency:

### TypeScript

- Use TypeScript for all new code
- Define interfaces for all props and state
- Use proper type annotations
- Avoid using `any` type

### React

- Use functional components with hooks
- Keep components focused on a single responsibility
- Use proper prop destructuring
- Follow React best practices for performance

### Styling

- Use Tailwind CSS for styling
- Follow the project's existing design system
- Ensure responsive design for all components
- Support both light and dark themes

### Naming Conventions

- Use PascalCase for component names
- Use camelCase for variables, functions, and props
- Use descriptive names that indicate purpose

## Testing

- Write tests for new functionality
- Run tests before submitting a PR:
  ```bash
  npm test
  # or
  yarn test
  ```
- Ensure all tests pass
- Aim for reasonable test coverage

## Documentation

- Update documentation to reflect your changes
- Use clear, concise language
- Include examples where appropriate
- Document props and interfaces
- Update the README if necessary

---

Thank you for contributing to Admin Dashboard! Your efforts help improve the project for everyone.

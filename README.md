# Shopping Cart Application

A web application for managing an e-commerce shopping cart, built with **React**, **TypeScript**, and **Vite**, and connected to a backend API.

## Features

- **Add to Cart**: Users can add items to the shopping cart.
- **Remove from Cart**: Users can remove items from the cart.
- **Update Quantity**: Users can modify the quantity of items in the cart.
- **Cart Summary**: View a detailed summary of the cart (total items, price, etc.).
- **API Integration**: The app communicates with a REST API for fetching product data.

## Technologies Used

- **React**: For building the user interface.
- **TypeScript**: For type safety and enhanced development experience.
- **Vite**: For fast development and bundling.
- **Axios**: For handling API requests.
- **Styled Components**: For styling components with ease.
- **React Context API**: For global state management of the shopping cart.

# Installation

Follow these steps to get the project running locally.

### Prerequisites

- Node.js >= 16.x
- Yarn or npm

# Clone the repository
```bash
git clone https://github.com/username/shopping-cart-app.git
cd shopping-cart-app
```

# Install dependencies

### with yarn

```bash
yarn install
```

### or with npm
```bash
npm install
```

### Running the app

 Start the development server
```bash
    yarn dev
```
or with npm
```bash
    npm run dev
```

The app will be available at http://localhost:5173. If needed you can choose the port with --port or -p.

### Building for production

```bash
yarn build
```
# Running tests

### Run all tests
```bash
yarn test
```
# API Endpoints

    //soon

# Folder Structure

```php
├── public            # Public assets
├── src
│   ├── components    # Reusable components
│   ├── hooks         # Custom hooks
│   ├── styles        # Global and component-specific styles
│   ├── App.tsx       # TypeScript component with all Bussiness rules 
│   ├── main.tsx      # Main TypeScript function 
│   └── vite-env.d.ts # Vite global variables 
└── README.md
```
# Contributing

Feel free to submit issues or pull requests. Contributions are welcome!
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import OrderList from './pages/OrderList';
import { 
  action as loginAction, 
  Login 
} from './pages/Login';
import Order from './pages/Order';
import Profile from './pages/Profile';
import { 
  action as registerAction,
  Register } from './pages/Register';
import { Root } from './pages/Root';
import ProductCategory from './pages/ProductCategory';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/biscuits",
        element: <ProductCategory categoryId={1} title="Les Biscuits" />,
      },
      {
        path: "/pastries",
        element: <ProductCategory categoryId={2} title="Les Pâtisseries Orientales" />,
      },
      {
        path: "/login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "/register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/orderlist",
        element: <OrderList />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />;
};

export default App;
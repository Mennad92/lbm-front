import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Pastries from './pages/Pastries';
import Biscuits from './pages/Biscuits';
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
        path: "/pastries",
        element: <Pastries />,
      },
      {
        path: "/biscuits",
        element: <Biscuits />,
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
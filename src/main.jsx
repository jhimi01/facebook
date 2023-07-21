import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainLayout from './MainLayout/MainLayout.jsx';
import Home from './pages/Home/Home.jsx';
import Users from './pages/Users/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {path: '/' , element: <Home>home</Home>},
      {path: '/user' , element: <Users>user</Users>},
      {path: '/media' , element: <p>media</p>},
      {path: '/play' , element: <p>play</p>},
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)

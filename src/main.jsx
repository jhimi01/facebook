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
import Login from './pages/Login/Login.jsx';
import SignUp from './pages/SignUp/SignUp.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {path: '/' , element: <Home>home</Home>},
      {path: '/user' , element: <Users>user</Users>},
      {path: '/media' , element: <p>media</p>},
      {path: '/play' , element: <p>play</p>},
      {path: '*', element: <ErrorPage></ErrorPage>},
    
    ]
  },
  {path:'/login' , element: <Login></Login>},
  {path:'/signup' , element: <SignUp></SignUp>},
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)

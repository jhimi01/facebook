import React from 'react'
import ReactDOM from 'react-dom/client'
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
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AuthProvider from './Provider/AuthProvider.jsx';
import AllUsers from './pages/Users/AllUsers.jsx';
import PrivateRoute from './Routes/PrivateRoute';

// Create a client
const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {path: '/' , element: <PrivateRoute><Home></Home></PrivateRoute>},
      {path: '/user/users' , element: <Users></Users>,
    children:[
      {path:'/user/users', element: <AllUsers></AllUsers>}
    ]},
      {path: '/media' , element: <p>media</p>},
      {path: '/play' , element: <p>play</p>},
      {path:'/login' , element: <Login></Login>},
      {path:'/signup' , element: <SignUp></SignUp>},
      {path: '*', element: <ErrorPage></ErrorPage>},
    
    ]
  }
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </AuthProvider>
  </React.StrictMode>,
)

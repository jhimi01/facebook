import React from 'react';
import Navigationbar from '../component/Navigationbar/Navigationbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <>
         <Navigationbar />
         <Outlet></Outlet>   
        </>
    );
};

export default MainLayout;
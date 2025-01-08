import React from 'react';
import Navigationbar from '../component/Navigationbar/Navigationbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <>
         <Navigationbar />
         <div className='bg-[#f0f2f5] h-[100%] md:px-0 px-1'>
         <Outlet></Outlet>   
         </div>
        </>
    );
};

export default MainLayout;
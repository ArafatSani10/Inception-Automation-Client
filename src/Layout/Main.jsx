import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar/Navbar';

const Main = () => {
    return (
        <div className='max-w-7xl mx-auto mt-6 space-y-5  '>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;
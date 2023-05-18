import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
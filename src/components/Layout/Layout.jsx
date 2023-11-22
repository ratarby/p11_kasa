import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.module.css";



const Layout = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
      <Footer />
      
    </div>
    
  );
};

export default Layout;

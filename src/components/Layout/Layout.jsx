import React from "react";
import Header from "../Header/Header";
import Router from "../Router/Router";
import Footer from "../Footer/Footer";
import "./Layout.css";



const Layout = () => {
  return (
    <div className="container">
      <Header />
      <Router />
      <Footer />
    </div>
    
  );
};

export default Layout;

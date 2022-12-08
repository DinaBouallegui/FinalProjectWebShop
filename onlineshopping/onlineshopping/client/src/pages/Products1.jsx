import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
  
const Products1 = () => {
  return (
    <div>
     
      <Navbar />
      <Announcement />
      
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Products1;

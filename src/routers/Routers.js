import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import SignIn from "../pages/SignIn";
import Register from "../pages/Register";
import PaymentPage from '../components/PaymentPage';
import DriverForm from "../components/DriverForm";

const Routers = () => {
  return (
    
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    <Route path="/signin" element={<SignIn/>}/>
    <Route path="/register" element={<Register/>}/>
   <Route path="/driver" element={<DriverForm/>}/>
    <Route path="/payment" element={<PaymentPage/>} />
            </Routes>
        
  );
};

export default Routers;

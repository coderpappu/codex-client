import Aos from "aos";
import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import WhatsappButton from "../components/ContactUs/Whatsapp";
import Footer from "../components/Shared/Footer/Footer";
import Navbar from "../components/Shared/Navbar/Navbar";
import About from "../Pages/About/About";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";
import BlogEditPage from "../Pages/BlogEditPage/BlogEditPage";
import Blogs from "../Pages/Blogs/Blogs";
import Contact from "../Pages/Contact/Contact";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import FeaturedProduct from "../Pages/FeaturedProduct/FeaturedProduct";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MeetTeam from "../Pages/MeetTeam/MeetTeam";
import Portfolio from "../Pages/Portfolio/Portfolio";
import ClearancePage from "../Pages/Products/Clearance/Clearance";
import Register from "../Pages/Register/Register";
import Service from "../Pages/Service/Service";
import PrivateRoute from "./privateRoute/PrivateRoute";

const Routers = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <HelmetProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blogs" element={<Blogs />} />
            {/* 
          <Route path="/blogDetails" element={<SingleBlogDetails />} />
        */}
            <Route path="/featured-product" element={<FeaturedProduct />} />
            <Route path="/clearance" element={<ClearancePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/meetOutTeam" element={<MeetTeam />} />
            <Route
              path="/services/:category/:subcategoryID"
              element={<Service />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/blogEditor" element={<BlogEditPage />} />
            <Route path="/blogDetails/:blogId" element={<BlogDetails />} />
            <Route path="/dashboard" element={<PrivateRoute />}>
              <Route path="" element={<Dashboard />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </Router>
      </HelmetProvider>
      <WhatsappButton />
      <Toaster />
    </>
  );
};

export default Routers;

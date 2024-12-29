import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import FeaturedProduct from "../Pages/FeaturedProduct/FeaturedProduct";
import Contact from "../Pages/Contact/Contact";
import MeetTeam from "../Pages/MeetTeam/MeetTeam";
import About from "../Pages/About/About";
import Service from "../Pages/Service/Service";
import Blogs from "../Pages/Blogs/Blogs";
import BlogEditPage from "../Pages/BlogEditPage/BlogEditPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivateRoute from "./privateRoute/PrivateRoute";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import Aos from "aos";
const Routers = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          {/* 
          <Route path="/blogDetails" element={<SingleBlogDetails />} />
        */}
          <Route path="/featuredProduct" element={<FeaturedProduct />} />
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
      <Toaster />
    </>
  );
};

export default Routers;

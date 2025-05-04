import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";
import Navbar from "../components/Shared/Navbar/Navbar";
// import { call } from '../assets/Home/Common SVG Images/svg';

const Layout = () => {
  return (
    <div className="">
      <Navbar />
      <div className="md:min-h-[calc(100vh-341px)]">
        <Outlet> </Outlet>
        {/* <div className='fixed right-[30px] bottom-[30px] z-50'>
          <span  className='rotate-6 bg-[#6f4fff]'>{call}</span>
        </div> */}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;

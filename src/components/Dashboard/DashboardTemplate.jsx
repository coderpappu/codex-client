import { useState } from 'react';
import DashboardAside from './DashboardAside';
import DashboardNavbar from './DashboardNavbar';
import DashboardOverview from './DashboardOverview';
import Calender from './Calender';
import EditBlog from './EditBlog';
import AllBlogs from './AllBlogs/AllBlogs';
import DashboardUsers from './DashboardUsers';
import AddBlog from './AddBlog';

const DashboardTemplate = () => {
  const [toggleSubCat, setToggleSubCat] = useState('dashboard');
  const menuTitle = toggleSubCat.toLocaleLowerCase();
  return (
    <section className='grid grid-cols-12 overflow-hidden'>
      <DashboardAside
        setToggleSubCat={setToggleSubCat}
        toggleSubCat={toggleSubCat}
      />
      <div className='col-span-10 mx-5 bg-[#EBEFF2] overflow-hidden'>
        <DashboardNavbar />
        {(menuTitle === 'dashboard' || menuTitle === 'blog') && (
          <DashboardOverview />
        )}
        {menuTitle === 'calender' && <Calender />}
        {menuTitle === 'edit blog' && <EditBlog />}
        {menuTitle === 'all blogs' && <AllBlogs />}
        {menuTitle === 'users' && <DashboardUsers />}
        {menuTitle === 'add blog' && <AddBlog />}
        {}
      </div>
    </section>
  );
};

export default DashboardTemplate;

import { Fragment } from 'react';
import avatar from '../../assets/Dashboard/avater.svg';
import codexLogo from '../../assets/Home/Logos/logo.svg';
import dashboardMenuData from './dashboardMenuData';
import { Link } from 'react-router-dom';
import { useStore } from '../../app/store';

const DashboardAside = ({ toggleSubCat, setToggleSubCat }) => {
  const { user } = useStore();
  const { image, name, role } = user?.apiData || {};
  const handleToggle = (categoryId) => {
    setToggleSubCat(categoryId);
  };

  return (
    <aside className='col-span-2 grid justify-items-center mt-8'>
      <div>
        <img draggable={false} className='w-[70%]' src={codexLogo} alt='' />
        <div className='grid justify-items-center'>
          <img
            draggable={false}
            className='rounded-full w-14 h-14 mt-4'
            src={image || avatar}
            alt=''
          />
          <h5 className='font-bold mt-2'>{name}</h5>
          <span>{role || 'pending'}</span>
        </div>
      </div>
      <div className='w-full pl-8'>
        {dashboardMenuData.map((m) => (
          <Fragment key={m?.id}>
            <button className='capitalize font-bold'>{m.title}</button>
            <ul className='w-full pl-3'>
              {m?.subCategories?.map((subM) => (
                <li key={subM?.id} className='w-full py-3'>
                  <button
                    onClick={() => handleToggle(subM?.title)}
                    className='capitalize flex'
                  >
                    <span className='pr-3 getSvg'>{subM?.icon}</span>
                    <span>
                      {subM.title == 'home' ? (
                        <Link to={'/'}>{subM.title}</Link>
                      ) : (
                        subM.title
                      )}
                    </span>
                  </button>
                  <ul
                    className={` duration-700 ease-in-out overflow-hidden ${
                      toggleSubCat === subM?.title ? 'h-full' : 'h-0'
                    }`}
                  >
                    {subM?.itemCategory?.map((itemC) => (
                      <li
                        key={itemC?.id}
                        className='w-full pt-3'
                        onClick={() => handleToggle(itemC?.title)}
                      >
                        <button className='capitalize flex'>
                          <span className='px-2 getSvg'>{itemC.icon}</span>
                          <span>{itemC.title}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </Fragment>
        ))}
      </div>
    </aside>
  );
};

export default DashboardAside;

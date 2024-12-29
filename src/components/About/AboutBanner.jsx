import SharedBanner from '../Shared/Banner/SharedBanner';
import { Link } from 'react-router-dom';
import { greaterThanArrowAbout } from '../../assets/Home/Common SVG Images/svg';

const AboutBanner = () => {
  return (
    <>
      <SharedBanner bg={false} title={'About Us'}>
        {' '}
        <nav>
          <ul className='hidden items-center mt-[42px] md:flex justify-center'>
            <li>
              <Link to='/' className=''>
                Home
              </Link>
            </li>
            <li className='mx-[10px]'>{greaterThanArrowAbout}</li>
            <li className='font-bold'>
              <Link to='/aboutUs'>About</Link>
            </li>
          </ul>
        </nav>
      </SharedBanner>
    </>
  );
};

export default AboutBanner;

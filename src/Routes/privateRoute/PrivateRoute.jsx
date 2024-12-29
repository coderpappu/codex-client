import axios from '../../helper/api';
import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const PrivateRoute = () => {
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  useEffect(() => {
    const authCheck = async () => {
      try {
        const response = await axios.get('/user-auth');

        if (response?.data === 'Ok') {
          setStatus(true);
        } else {
          setStatus(false);
        }
      } catch (error) {
        toast('Error checking authentication:', {
          icon: '❌',
        });
      }
    };

    if (token) {
      authCheck();
    } else {
      navigate('/login');
    }
  }, [token, navigate]);

  if (status) {
    return <Outlet />;
  }
};

export default PrivateRoute;

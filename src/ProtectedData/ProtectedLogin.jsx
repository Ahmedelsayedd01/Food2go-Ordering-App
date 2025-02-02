import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../Context/Auth';

const ProtectedLogin = () => {
       const auth = useAuth();
       const navigate = useNavigate();
       const location = useLocation();
       const user = auth.user;

       const [isToastShown, setIsToastShown] = useState(false);

       useEffect(() => {
              const isAuth = location.pathname === '/auth/login' || location.pathname === '/auth/sign_up';
              const profile = location.pathname === '/profile';
              const favorites = location.pathname === '/favorites';
              const checkOut = location.pathname === '/check_out';
              const orders = location.pathname === '/orders';
              const ordersHistory = location.pathname === '/orders/history';
              const orderTraking = location.pathname === '/orders/order_traking';

              if (user && isAuth) {
                     navigate('/', { replace: true });
                     return;
              }

              if (!user && (profile || favorites || checkOut || orders || ordersHistory || orderTraking)) {
                     if (!isToastShown) {
                            // auth.toastError('You must be logged in to continue');
                            setIsToastShown(true);
                     }
                     navigate('/auth/login', { replace: true });
              }
       }, [user, location.pathname, isToastShown, navigate, auth]);

       return <Outlet />;
};

export default ProtectedLogin;


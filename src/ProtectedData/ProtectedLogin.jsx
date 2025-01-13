import React, { useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../Context/Auth';

const ProtectedLogin = () => {
       const auth = useAuth();
       const navigate = useNavigate();
       const location = useLocation();
       const user = auth.user;
       useEffect(() => {
              const isAuth = location.pathname === '/auth/login' || location.pathname === '/auth/sign_up';
              const profile = location.pathname === '/profile';
              const favorites = location.pathname === '/favorites';

              if (user && isAuth) {
                     navigate('/', { replace: true });
              }
              if (!user && profile) {
                     navigate('/', { replace: true });
              }
              if (!user && favorites) {
                     navigate('/', { replace: true });
              }
              // Otherwise, allow the requested route to render
       }, [user, location.pathname]);

       return <Outlet />;
};

export default ProtectedLogin;

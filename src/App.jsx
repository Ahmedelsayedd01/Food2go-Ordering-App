import { Footer, LoaderLogin, Navbar } from './Components/Components';
import './index.css';
import { Outlet } from 'react-router-dom';

import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import { useGet } from './Hooks/useGet';
import { useDispatch } from 'react-redux';
import { setCategories, setProducts, setProductsDiscount, setProductsDiscountFilter, setProductsFilter, setSignUpType } from './Store/CreateSlices';
import { useEffect } from 'react';
import { MaintenancePage } from './Pages/page';

const App = () => {
  const dispatch = useDispatch();

  const { refetch: refetchSignUp, loading: loadingSignUp, data: dataSignUp } = useGet({
    url: 'https://bcknd.food2go.online/api/customer_login',
  });
  const { refetch: refetchMaintenance, loading: loadingMaintenance, data: dataMaintenance } = useGet({
    url: 'https://bcknd.food2go.online/api/business_setup',
  });

  const { refetch: refetchProducts, loading: loadingProducts, data: dataProducts } = useGet({
    url: 'https://bcknd.food2go.online/customer/home/web_products',
  });

  useEffect(() => {
    refetchSignUp();
  }, [refetchSignUp]);

  useEffect(() => {
    refetchMaintenance();
  }, [refetchMaintenance]);

  useEffect(() => {
    refetchProducts();
  }, [refetchProducts]);


  useEffect(() => {
    if (dataSignUp && dataSignUp.customer_login) {
      dispatch(setSignUpType(dataSignUp.customer_login));
      console.log('Fetched song from API At App:', dataSignUp.customer_login);
    }
  }, [dataSignUp, dispatch]);

  useEffect(() => {
    if (dataMaintenance && dataMaintenance) {
      // dispatch(setSignUpType(dataMaintenance));
      console.log('Fetched Maintenance:', dataMaintenance);
    }
  }, [dataMaintenance]);

  useEffect(() => {
    if (dataProducts && dataProducts.products) {

      dispatch(setProducts(dataProducts?.products || null));
      dispatch(setProductsFilter(dataProducts?.products || null));
      dispatch(setCategories(dataProducts?.categories || null));
      dispatch(setProductsDiscount(dataProducts?.discounts || null));
      dispatch(setProductsDiscountFilter(dataProducts?.discounts || null));

      // console.log('Fetched ProddataProducts:', dataProducts);
    }
  }, [dataProducts]);


  return (
    <PrimeReactProvider>
      {loadingSignUp || loadingProducts ? (
        <div className="w-full h-screen flex justify-center items-center">
          <LoaderLogin />
        </div>
      ) : (
        <div className='relative w-full bg-white flex flex-col items-center justify-between h-screen overflow-y-scroll scrollPage'>
          <div className="sticky top-0 w-full z-30">
            <Navbar />
          </div>
          {/* Main Content Area */}
          <div className="w-full">
            <Outlet />
          </div>
          <Footer />
        </div>
      )}
    </PrimeReactProvider>
    // <MaintenancePage />
  );
};

export default App;

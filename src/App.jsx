import { Footer, LoaderLogin, Navbar } from './Components/Components';
import './index.css';
import { Outlet, useLocation } from 'react-router-dom';

import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import { useGet } from './Hooks/useGet';
import { useDispatch, useSelector } from 'react-redux';
import { setCategories, setCheckOutDetails, setProducts, setProductsDiscount, setProductsDiscountFilter, setProductsFilter, setSignUpType, setTaxType ,setBanners} from './Store/CreateSlices';
import { useEffect, useRef } from 'react';
import { MaintenancePage } from './Pages/page';

const App = () => {

  const user = useSelector((state) => state?.user?.data || null);
  const dispatch = useDispatch();
  const location = useLocation();

  const scrollContainerRef = useRef(null); // Ref for the scrollable container

  const { refetch: refetchSignUp, loading: loadingSignUp, data: dataSignUp } = useGet({
    url: 'https://bcknd.food2go.online/api/customer_login',
  });
  const { refetch: refetchMaintenance, loading: loadingMaintenance, data: dataMaintenance } = useGet({
    url: 'https://bcknd.food2go.online/api/business_setup',
  });

  const { refetch: refetchProducts, loading: loadingProducts, data: dataProducts } = useGet({
    url: 'https://bcknd.food2go.online/customer/home/web_products',
  });

  const { refetch: refetchCheckOutDetails, loading: loadingCheckOutDetails, data: dataCheckOutDetails } = useGet({
    url: 'https://bcknd.food2go.online/customer/order_type',
    required: true,
  });

  const { refetch: refetchBannerData, loading: loadingBannerData, data: dataBanner } = useGet({
    url: 'https://bcknd.food2go.online/customer/home/slider',
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
    if (user) {
      console.log('User authenticated, triggering refetch:', user);
      refetchCheckOutDetails();
    } else {
      console.log('User is not authenticated, skipping refetch');
    }
  }, [user, refetchCheckOutDetails]);

  useEffect(() => {
    refetchBannerData();
  }, [refetchBannerData]);

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
console.log(dataProducts)
      dispatch(setTaxType(dataProducts?.tax || null));
      dispatch(setProducts(dataProducts?.products || null));
      dispatch(setProductsFilter(dataProducts?.products || null));
      dispatch(setCategories(dataProducts?.categories || null));
      dispatch(setProductsDiscount(dataProducts?.discounts || null));
      dispatch(setProductsDiscountFilter(dataProducts?.discounts || null));

      // console.log('Fetched ProddataProducts:', dataProducts);
    }
  }, [dataProducts]);

  useEffect(() => {
    if (dataCheckOutDetails && dataCheckOutDetails.payment_methods) {

      dispatch(setCheckOutDetails(dataCheckOutDetails));

      console.log('Fetched dataCheckOutDetails:', dataCheckOutDetails);
    }
  }, [dataCheckOutDetails]);

  /* Scroll to Top when page changes */
  useEffect(() => {
    if (location.pathname && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, [location.pathname]);

  useEffect(() => {
    if (dataBanner && dataBanner.banners) {
      dispatch(setBanners(dataBanner?.banners));
      console.log('Fetched Banners:', dataBanner);
    }
  }, [dataBanner]);

  return (
    <PrimeReactProvider>
      {loadingSignUp || loadingProducts || loadingCheckOutDetails || loadingBannerData ? (
        <div className="w-full h-screen flex justify-center items-center">
          <LoaderLogin />
        </div>
      ) : (
        <div
          ref={scrollContainerRef}
          className='relative w-full bg-white flex flex-col items-center justify-between h-screen overflow-y-scroll scrollPage'>
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

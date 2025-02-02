import React, { useEffect } from 'react'
import { HeaderNavigate } from '../../Components/Components'
import OrderImage from '../../assets/Images/OrderImage'
import { Link, Outlet, useLocation } from 'react-router-dom'

const OrdersPage = () => {
       const location = useLocation();

       useEffect(() => {

              console.log(location.pathname)
       }, [location.pathname])
       return (
              <>
                     <div className="w-11/12 mx-auto flex flex-col items-start justify-start gap-y-4 pt-4">
                            <HeaderNavigate
                                   title={location.pathname === '/orders' || location.pathname === '/orders/history' ? 'Orders' : 'Order Traking'}
                            />

                            <div className="w-full flex items-center justify-center mx-auto  overflow-hidden pb-5">
                                   <div className="w-11/12 flex items-start justify-between">

                                          <div className="sm:w-full xl:w-5/12 flex flex-col justify-start items-center overflow-hidden min-h-[75vh]">
                                                 {/* Navbar orders */}
                                                 {(location.pathname === '/orders' || location.pathname === '/orders/history') && (

                                                        <div className="w-full flex items-center justify-between mb-4">
                                                               <Link to="/orders"
                                                                      className={`text-2xl font-TextFontRegular py-2 w-5/12 text-center rounded-2xl border-2 border-mainColor
                                                                      transition-all ease-in-out duration-300 
                                                               ${location.pathname === '/orders' ? 'bg-mainColor text-white' : 'bg-white text-mainColor hover:bg-mainColor hover:text-white'}`}
                                                               >
                                                                      Orders
                                                               </Link>
                                                               <Link to="/orders/history"
                                                                      className={`text-2xl font-TextFontRegular py-2 w-5/12 text-center rounded-2xl border-2 border-mainColor
                                                                      transition-all ease-in-out duration-300 
                                                                      ${location.pathname === '/orders/history' ? 'bg-mainColor text-white' : 'bg-white text-mainColor hover:bg-mainColor hover:text-white'}`}
                                                               >
                                                                      History
                                                               </Link>
                                                        </div>
                                                 )}
                                                 {/* {location.pathname === '/orders' || location.pathname === '/orders/history' && ( */}
                                                 {/* <div className="w-full min-h-[75vh]"> */}
                                                 <Outlet />
                                                 {/* </div> */}
                                          </div>

                                          <div className="sm:hidden xl:flex w-2/4 items-center justify-center h-[75vh]">
                                                 <OrderImage height='100%' />
                                          </div>
                                   </div>
                            </div>
                     </div>
              </>
       )
}

export default OrdersPage
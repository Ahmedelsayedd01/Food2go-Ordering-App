import React, { useEffect, useState } from 'react'
import { useGet } from '../../../Hooks/useGet';
import { LinkButton, LoaderLogin } from '../../../Components/Components';
import EmptyOrdersIcon from '../../../assets/Icons/EmptyOrdersIcon';

const HistoryOrders = () => {
       const { refetch: refetchOrdersHistory, loading: loadingOrdersHistory, data: dataOrdersHistory } = useGet({
              url: 'https://bcknd.food2go.online/customer/orders/history',
       });

       const [ordersHistory, setOrdersHistory] = useState([]);


       useEffect(() => {
              refetchOrdersHistory();
       }, [refetchOrdersHistory]);

       useEffect(() => {
              if (dataOrdersHistory && dataOrdersHistory.orders) {
                     setOrdersHistory(dataOrdersHistory.orders)
              }
              console.log('dataOrdersHistory', dataOrdersHistory);
              console.log('orders', ordersHistory);
       }, [dataOrdersHistory]);

       return (
              <>
                     {loadingOrdersHistory ? (
                            <div className="w-full h-full flex justify-center items-center mt-16">
                                   <LoaderLogin />
                            </div>
                     ) : (
                            <div className="w-full h-[65vh] overflow-y-scroll rounded-xl scrollPage px-1 pb-2 shadow-md flex flex-col items-center justify-start gap-2">
                                   {ordersHistory.length === 0 ? (
                                          <div className='mt-16'>
                                                 <EmptyOrdersIcon />
                                                 <span className='text-2xl font-TextFontRegular text-thirdColor'>No Ode History</span>
                                                 <span className='text-xl font-TextFontLight text-secoundColor'>You Haven't Made Any Purchase Yet</span>
                                                 <div className="mt-8">
                                                        <LinkButton
                                                               text={'Explore Menu'}
                                                               to={'/menu'}
                                                        />
                                                 </div>
                                          </div>
                                   ) : (
                                          <ul className='w-full flex flex-col items-center justify-center text-xl font-TextFontLight text-secoundColor gap-5 shadow-sm'>
                                                 {ordersHistory.map(order => (
                                                        <li
                                                               key={order.id}
                                                               className='w-full flex bg-secoundBgColor pl-4 rounded-xl overflow-hidden'
                                                        >
                                                               {/* Deatils */}
                                                               <div className="w-6/12 pb-4 pt-4 flex flex-col items-start justify-center gap-2">
                                                                      <span className='text-secoundColor sm:text-lg xl:text-xl font-TextFontRegular'>
                                                                             {order?.order_date} {new Date(order?.order_date + ' ' + order?.date).toLocaleTimeString('en-US', { hour12: true })}
                                                                      </span>
                                                                      <p className='text-secoundColor sm:text-lg xl:text-xl font-TextFontRegular'>Order <span className='text-mainColor sm:text-xl xl:text-2xl font-TextFontMedium'>#{order?.order_number}</span> </p>
                                                                      <span className='text-secoundColor sm:text-lg xl:text-xl font-TextFontRegular'>{order?.amount} $</span>
                                                                      <span className='text-mainColor sm:text-lg xl:text-xl font-TextFontRegular'>{order?.payment_method?.name}</span>
                                                               </div>
                                                               {/* images */}
                                                               <div className="w-6/12 flex flex-col items-end justify-between gap-2">
                                                                      <div className="flex items-center justify-center gap-10">
                                                                             <span className=' text-white bg-mainColor p-4 rounded-bl-xl shadow-md text-2xl font-TextFontRegular'>
                                                                                    {order?.order_type?.replace('_', ' ').replace(/^./, c => c.toUpperCase())}
                                                                             </span>
                                                                      </div>
                                                                      <div className='w-full px-4 py-2 rounded-tl-xl bg-mainColor flex items-center justify-center gap-5'>
                                                                             <img src="/src/assets/Images/OrderImg1.png" alt="order" />
                                                                             <img src="/src/assets/Images/OrderImg2.png" alt="order" />
                                                                             <img src="/src/assets/Images/OrderImg3.png" alt="order" />
                                                                      </div>
                                                               </div>

                                                        </li>
                                                 ))}
                                          </ul>
                                   )}
                            </div>
                     )}
              </>
       )
}

export default HistoryOrders
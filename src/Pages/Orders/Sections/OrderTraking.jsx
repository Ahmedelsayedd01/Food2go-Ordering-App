import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGet } from '../../../Hooks/useGet';
import { LoaderLogin } from '../../../Components/Components';
import { CookingIcon, OrderConfirmedIcon, OrderDeliveredIcon, OrderOnWayIcon, OrderPlacedIcon } from '../../../assets/Icons/Icons';
import { GiCancel } from 'react-icons/gi';

const OrderTraking = () => {
       const { orderId } = useParams();
       const { refetch: refetchOrders, loading: loadingOrders, data: dataOrder } = useGet({
              url: `https://bcknd.food2go.online/customer/orders/order_status/${orderId}}`,
       });

       const [orderStatus, setOrderStatus] = useState('');

       useEffect(() => {
              refetchOrders();
       }, [orderId])
       useEffect(() => {
              if (dataOrder && dataOrder.status) {
                     console.log('dataOrder', dataOrder)
                     setOrderStatus(dataOrder.status)
              }
       }, [dataOrder])

       return (
              <>
                     {loadingOrders ? (
                            <div className="w-full h-full flex justify-center items-center mt-16">
                                   <LoaderLogin />
                            </div>
                     ) : (
                            <>
                                   <span>
                                          {/* {orderStatus} */}
                                   </span>
                                   <div className="w-full h-full flex flex-col items-start justify-start gap-4">

                                          {orderStatus === 'canceled' ?
                                                 (
                                                        <>
                                                               {/* Cancelled */}
                                                               <div className="w-full flex items-center justify-center gap-x-4 mt-20">
                                                                      <GiCancel
                                                                             className='text-mainColor text-4xl'
                                                                      />
                                                                      <span className='sm:text-2xl xl:text-4xl text-mainColor font-TextFontRegular'>Order Is Cancelled</span>
                                                               </div>
                                                        </>
                                                 ) : (
                                                        <>
                                                               {/* Order Placed */}
                                                               <div className="w-full flex items-start justify-start gap-10">
                                                                      <div className="flex flex-col items-center justify-start gap-3">
                                                                             <OrderPlacedIcon
                                                                                    width='35'
                                                                                    height='35'
                                                                                    isActive={true}
                                                                             />
                                                                             <span className='border-mainColor h-16 border-2 border-dashed'></span>
                                                                      </div>
                                                                      <span className='sm:text-2xl xl:text-4xl text-mainColor font-TextFontRegular'>Order Placed</span>
                                                               </div>
                                                               {/* Pending */}
                                                               <div className="w-full flex items-start justify-start gap-10">
                                                                      <div className="flex flex-col items-center justify-start gap-3">
                                                                             <OrderConfirmedIcon
                                                                                    width='35'
                                                                                    height='35'
                                                                                    isActive={
                                                                                           orderStatus === 'pending' ||
                                                                                           orderStatus === 'processing' ||
                                                                                           orderStatus === 'out_for_delivery' ||
                                                                                           orderStatus === 'delivered' && true
                                                                                    }
                                                                             />
                                                                             <span className={`${orderStatus === 'pending' ||
                                                                                    orderStatus === 'processing' ||
                                                                                    orderStatus === 'out_for_delivery' ||
                                                                                    orderStatus === 'delivered' ?
                                                                                    'border-mainColor' : 'border-secoundColor'} h-16 border-2 border-dashed`}></span>
                                                                      </div>
                                                                      <span className={`${orderStatus === 'pending' ||
                                                                             orderStatus === 'processing' ||
                                                                             orderStatus === 'out_for_delivery' ||
                                                                             orderStatus === 'delivered' ?
                                                                             'text-mainColor' : 'text-secoundColor'} sm:text-2xl xl:text-4xl font-TextFontRegular`}
                                                                      >
                                                                             Confirmed
                                                                      </span>
                                                               </div>
                                                               {/* Processing */}
                                                               <div className="w-full flex items-start justify-start gap-10">
                                                                      <div className="flex flex-col items-center justify-start gap-3">
                                                                             <CookingIcon
                                                                                    width='35'
                                                                                    height='35'
                                                                                    isActive={
                                                                                           orderStatus === 'processing' ||
                                                                                           orderStatus === 'out_for_delivery' ||
                                                                                           orderStatus === 'delivered' && true
                                                                                    }
                                                                             />
                                                                             <span className={`${orderStatus === 'processing' ||
                                                                                    orderStatus === 'out_for_delivery' ||
                                                                                    orderStatus === 'delivered' ?
                                                                                    'border-mainColor' : 'border-secoundColor'} h-16 border-2 border-dashed`}></span>
                                                                      </div>
                                                                      <span className={`${orderStatus === 'processing' ||
                                                                             orderStatus === 'out_for_delivery' ||
                                                                             orderStatus === 'delivered' ?
                                                                             'text-mainColor' : 'text-secoundColor'} sm:text-2xl xl:text-4xl font-TextFontRegular`}
                                                                      >
                                                                             Cooking
                                                                      </span>
                                                               </div>
                                                               {/* Out for delivery */}
                                                               <div className="w-full flex items-start justify-start gap-10">
                                                                      <div className="flex flex-col items-center justify-start gap-3">
                                                                             <OrderOnWayIcon
                                                                                    width='35'
                                                                                    height='35'
                                                                                    isActive={
                                                                                           orderStatus === 'out_for_delivery' ||
                                                                                           orderStatus === 'delivered' && true}
                                                                             />
                                                                             <span className={`${orderStatus === 'out_for_delivery' ||
                                                                                    orderStatus === 'delivered' ?
                                                                                    'border-mainColor' : 'border-secoundColor'} h-16 border-2 border-dashed`}></span>
                                                                      </div>
                                                                      <span className={`${orderStatus === 'out_for_delivery' ||
                                                                             orderStatus === 'delivered' ?
                                                                             'text-mainColor' : 'text-secoundColor'} sm:text-2xl xl:text-4xl font-TextFontRegular`}
                                                                      >
                                                                             Order Is On The Way
                                                                      </span>
                                                               </div>
                                                               {/* Delivered */}
                                                               <div className="w-full flex items-center justify-start gap-10">
                                                                      <OrderDeliveredIcon
                                                                             width='35'
                                                                             height='35'
                                                                             isActive={orderStatus === 'delivered' && true}
                                                                      />
                                                                      <span className={`${orderStatus === 'delivered' ? 'text-mainColor' : 'text-secoundColor'} sm:text-2xl xl:text-4xl font-TextFontRegular`}>Order Delivered</span>
                                                               </div>
                                                        </>
                                                 )}
                                   </div>
                            </>
                     )}
              </>
       )
}

export default OrderTraking
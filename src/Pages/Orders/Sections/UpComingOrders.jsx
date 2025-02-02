import React, { useEffect, useState } from 'react'
import { useGet } from '../../../Hooks/useGet';
import { LinkButton, LoaderLogin } from '../../../Components/Components';
import EmptyOrdersIcon from '../../../assets/Icons/EmptyOrdersIcon';
import { Link } from 'react-router-dom';
import { MdAutoDelete } from 'react-icons/md';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import Warning from '../../../assets/Icons/WarningIcon';
import { useChangeState } from '../../../Hooks/useChangeState';

const UpComingOrders = () => {
  const { refetch: refetchOrders, loading: loadingOrders, data: dataOrders } = useGet({
    url: 'https://bcknd.food2go.online/customer/orders',
  });
  const { changeState: cancelOrder, loadingChange: loadingCancel, responseChange: responseCancel } = useChangeState();

  const [orders, setOrders] = useState([]);
  const [cancelledTime, setCancelledTime] = useState('');

  const [openDeleteOrder, setOpenDeleteOrder] = useState(null);

  useEffect(() => {
    refetchOrders();
  }, [refetchOrders, responseCancel]);

  useEffect(() => {
    if (dataOrders && dataOrders.orders) {
      setCancelledTime(dataOrders.cancel_time);
      setOrders(dataOrders.orders);
    }

  }, [dataOrders]);


  const handleOpenDelete = (orderId) => {
    setOpenDeleteOrder(orderId);
  };

  const handleCloseDelete = () => {
    setOpenDeleteOrder(null);
  };

  // Cancelled Order
  const handleCancelOrder = async (id, name, status) => {
    const response = await cancelOrder(
      `https://bcknd.food2go.online/customer/orders/cancel/${id}`,
      `${name} is Cancelled.`,
      { status }
    );

    if (response) {
      setCategories(openDeleteOrder(null));
    }

  };

  return (
    <>
      {loadingOrders || loadingCancel ? (
        <div className="w-full h-full flex justify-center items-center mt-16">
          <LoaderLogin />
        </div>
      ) : (
        <div className="w-full h-[65vh] overflow-y-scroll rounded-xl scrollPage px-1 pb-2 shadow-md flex flex-col items-center justify-start gap-2">
          {orders.length === 0 ? (
            <div className='mt-16'>
              <EmptyOrdersIcon />
              <span className='text-2xl font-TextFontRegular text-thirdColor'>No Ode Orders</span>
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
              {orders.map(order => (
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
                  <br />
                  <div className="w-6/12 flex flex-col items-end justify-between gap-2">
                    <div className="flex items-center justify-center gap-10">
                      {((new Date().getTime() - new Date(order.order_date + 'T' + order.date).getTime()) <= (parseInt(cancelledTime.split(':')[0], 10) * 3600 * 1000) + (parseInt(cancelledTime.split(':')[1], 10) * 60 * 1000) + (parseInt(cancelledTime.split(':')[2], 10) * 1000)) && (
                        <MdAutoDelete
                          className='text-4xl text-mainColor cursor-pointer'
                          onClick={() => handleOpenDelete(order.id)}
                        />
                      )}
                      <span className=' text-white bg-mainColor p-4 rounded-bl-xl shadow-md text-2xl font-TextFontRegular'>
                        {order?.order_type?.replace('_', ' ').replace(/^./, c => c.toUpperCase())}
                      </span>

                      {openDeleteOrder === order.id && (
                        <Dialog open={true} onClose={handleCloseDelete} className="relative z-10" aria-labelledby="dialog-title">
                          <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                          <div className="fixed inset-0 z-10 overflow-y-auto">
                            <div className="flex items-center justify-center min-h-screen">
                              <DialogPanel className="relative rounded-2xl bg-white shadow-xl sm:w-10/12 sm:max-w-lg">
                                <div className="px-4 sm:p-6">
                                  <Warning
                                    // height="[5px]"
                                    aria-hidden="true"
                                  />
                                  <div className="flex items-center justify-center">
                                    <span className='text-secoundColor sm:text-lg xl:text-xl font-TextFontRegular'>
                                      You Will Delete This Order
                                    </span>
                                  </div>
                                </div>
                                <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                  <button className="inline-flex w-full justify-center rounded-md bg-mainColor px-6 py-3 text-sm font-TextFontSemiBold text-white shadow-sm sm:ml-3 sm:w-auto" onClick={() => handleCancelOrder(order.id, "Order", '')}>
                                    Delete
                                  </button>

                                  <button
                                    type="button"
                                    data-autofocus
                                    onClick={handleCloseDelete}
                                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-6 py-3 text-sm font-TextFontMedium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:mt-0 sm:w-auto"
                                  >
                                    Cancel
                                  </button>
                                </div>
                                {/* <div className="px-4 pb-3 sm:flex sm:flex-row-reverse gap-x-4">
                                  <button
                                    type="button"
                                    onClick={handleCloseDelete}
                                    className="mt-3 sm:mt-0 sm:w-auto rounded-md border-2 border-secoundColor px-4 py-2 text-sm font-TextFontMedium text-secoundColor bg-white hover:bg-gray-50"
                                  >
                                    Close
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => handleCancelOrder(order.id)}
                                    className="mt-3 sm:mt-0 sm:w-auto rounded-md border-2 border-mainColor px-4 py-2 text-sm font-TextFontMedium text-white bg-mainColor hover:bg-white hover:text-mainColor transition-all duration-300"
                                  >
                                    Delete
                                  </button>
                                </div> */}
                              </DialogPanel>
                            </div>
                          </div>
                        </Dialog>
                      )}

                    </div>
                    <Link
                      to={`order_traking/${order.id}`}
                      className='flex items-center justify-center gap-2 text-secoundColor sm:text-lg xl:text-xl font-TextFontRegular'>
                      Order Tracking <span className='text-mainColor sm:text-lg xl:text-2xl font-TextFontMedium'>{'>>'}</span>
                    </Link>
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
  );
};

export default UpComingOrders;

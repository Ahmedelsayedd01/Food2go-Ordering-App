import React, { useEffect, useState } from 'react'
import { FiHome } from "react-icons/fi";
import { MdWork } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux'
import { UpdateOrder } from '../../../Store/CreateSlices';

const Locations = () => {

       const dispatch = useDispatch();
       const order = useSelector(state => state?.order?.data || {});
       const products = useSelector(state => state?.productsCard?.data || []);
       const total = useSelector(state => state?.totalPrice?.data || 0);

       const orderTypes = useSelector(state => state.checkOutDetails?.data?.order_types || []);
       const allBranches = useSelector(state => state.checkOutDetails?.data?.branches || []);
       const allLocations = useSelector(state => state.user?.data?.addresses || []);
       const [orderTypeSelected, setOrderTypeSelected] = useState(orderTypes[0]?.type || '');
       const [orderTypeId, setOrderTypeId] = useState(orderTypes[0]?.id || null);

       const [brancheId, setBrancheId] = useState('');
       const [locationId, setLocationId] = useState('');
       const [deliveryPrice, setDeliveryPrice] = useState('');


       useEffect(() => {
              if (orderTypes.length > 0) {
                     setOrderTypeSelected(orderTypes[0].type);
                     setOrderTypeId(orderTypes[0].id);
              }
       }, [orderTypes]);


       useEffect(() => { console.log('orderTypeSelected', orderTypeSelected) }, [orderTypeSelected])
       useEffect(() => { console.log('orderTypeId', orderTypeId) }, [orderTypeId])
       useEffect(() => { console.log('brancheId', brancheId) }, [brancheId])
       useEffect(() => { console.log('locationId', locationId) }, [locationId])

       useEffect(() => {
              dispatch(UpdateOrder({ ...order, order_type: /* orderTypeId */orderTypeSelected, branch_id: brancheId, address_id: locationId, delivery_price: deliveryPrice, amount: Number(total) + Number(deliveryPrice || 0), }))
       }, [orderTypeId, brancheId, locationId]);

       return (
              /* Take Away, Dine In, Delivery */
              <>
                     <div className="w-full flex flex-col border-mainColor border-[3px] gap-y-4 rounded-2xl p-3">
                            {/* Navbar Type Order */}
                            <div className="w-full flex items-center justify-center gap-x-3">
                                   {orderTypes.map((type) => (
                                          type.status === 1 && (
                                                 <span
                                                        key={type.id}
                                                        className={`text-xl font-TextFontRegular px-3 py-2 rounded-full cursor-pointer  border-2 border-mainColor transition-all ease-in-out duration-300
                                                                ${orderTypeSelected === type.type ? 'text-white bg-mainColor ' : 'text-mainColor bg-white hover:bg-mainColor hover:text-white'}
                                                                `}
                                                        onClick={() => {
                                                               setOrderTypeSelected(type.type)
                                                               setOrderTypeId(type.id)
                                                        }}
                                                 >
                                                        {type.type.charAt(0).toUpperCase() + type.type.slice(1)}
                                                 </span>
                                          )
                                   ))}
                            </div>
                            {/* Locations */}
                            {orderTypeId === 3 && (
                                   <div className="w-full flex flex-wrap items-start justify-evenly gap-3">

                                          {
                                                 allLocations.map((location) => (
                                                        <div
                                                               key={location.id}
                                                               className={`sm:w-full lg:w-5/12 flex items-center justify-start gap-x-2 text-xl font-TextFontRegular px-3 py-2 rounded-xl cursor-pointer  border-2 border-mainColor transition-all ease-in-out duration-300
                                                         ${locationId === location.id ? 'text-white bg-mainColor ' : 'text-mainColor bg-white hover:bg-mainColor hover:text-white'}
                                                         `}
                                                               onClick={() => {
                                                                      setLocationId(location.id)
                                                                      setBrancheId('')
                                                                      setDeliveryPrice(location?.zone?.price || '')
                                                               }}
                                                        >
                                                               {location.type === 'Home' ? (
                                                                      <span className='p-1 rounded-full bg-white text-mainColor'>
                                                                             <FiHome className='w-20 h-[4rem]' />
                                                                      </span>
                                                               ) : (
                                                                      <span className='p-1 rounded-full bg-white text-mainColor'>
                                                                             <MdWork className='w-20 h-[4rem]' />
                                                                      </span>
                                                               )}
                                                               <div
                                                                      className="flex flex-col items-start justify-center gap-y-2"
                                                               >
                                                                      <span className='sm:text-xl xl:text-2xl font-TextFontRegular'>
                                                                             Address: {location.address.charAt(0).toUpperCase() + location.address.slice(1)}
                                                                      </span>
                                                                      <span className='sm:text-xl xl:text-2xl font-TextFontRegular'>
                                                                             Building Num: {location.building_num.charAt(0).toUpperCase() + location.building_num.slice(1)}
                                                                      </span>
                                                                      <span className='sm:text-xl xl:text-2xl font-TextFontRegular'>
                                                                             Floor Num: {location.floor_num.charAt(0).toUpperCase() + location.floor_num.slice(1)}
                                                                      </span>
                                                                      <span className='sm:text-xl xl:text-2xl font-TextFontRegular'>
                                                                             Apartment: {location.apartment.charAt(0).toUpperCase() + location.apartment.slice(1)}
                                                                      </span>
                                                                      <span className='sm:text-xl xl:text-2xl font-TextFontRegular'>
                                                                             Additional Data: {location.additional_data.charAt(0).toUpperCase() + location.additional_data.slice(1)}
                                                                      </span>
                                                               </div>
                                                        </div>
                                                 ))
                                          }
                                   </div>
                            )}

                            {/* Branches */}
                            {(orderTypeId === 1 || orderTypeId === 2) && (
                                   <div className="w-full flex flex-wrap items-start justify-evenly gap-3">

                                          {
                                                 allBranches.map((branche) => (
                                                        <div
                                                               key={branche.id}
                                                               className={`sm:w-full lg:w-5/12 flex items-center justify-start gap-x-2 text-xl font-TextFontRegular px-3 py-2 rounded-xl cursor-pointer  border-2 border-mainColor transition-all ease-in-out duration-300
                                                                ${brancheId === branche.id ? 'text-white bg-mainColor ' : 'text-mainColor bg-white hover:bg-mainColor hover:text-white'}
                                                                `}
                                                               onClick={() => {
                                                                      setBrancheId(branche.id)
                                                                      setDeliveryPrice('')
                                                                      setLocationId('')
                                                               }}
                                                        >
                                                               <img
                                                                      src={branche?.image_link || ''}
                                                                      alt={branche?.name || 'Branch Image'}
                                                                      className={`w-20 h-20 rounded-full  ${brancheId === branche?.id ? 'border-2 border-white' : 'border-2 border-mainColor'
                                                                             } object-cover object-center`}
                                                               />

                                                               <div className="flex flex-col items-start justify-center">
                                                                      <span className='sm:text-2xl xl:text-3xl font-TextFontMedium'>
                                                                             {branche.name.charAt(0).toUpperCase() + branche.name.slice(1)}
                                                                      </span>
                                                                      <span className='sm:text-xl xl:text-2xl font-TextFontRegular'>
                                                                             {branche.address.charAt(0).toUpperCase() + branche.address.slice(1)}
                                                                      </span>
                                                               </div>
                                                        </div>
                                                 ))
                                          }
                                   </div>
                            )}
                     </div>
              </>
       )
}

export default Locations
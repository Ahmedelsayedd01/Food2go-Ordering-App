import React, { useEffect, useState } from 'react'
import { HeaderNavigate, LoaderLogin, SubmitButton } from '../../Components/Components'
import Locations from './Sections/Locations'
import PaymentMethods from './Sections/PaymentMethods'
import DetailsOrder from './Sections/DetailsOrder'
import { useDispatch, useSelector } from 'react-redux'
import { usePost } from '../../Hooks/usePost'
import { removeAllProductsCard, removeCheckOutDetails, removeOrder, removeProductsCard, removeTotlePrice, UpdateOrder } from '../../Store/CreateSlices'
import { useNavigate } from 'react-router-dom'

const CheckOutPage = () => {
       const order = useSelector(state => state?.order?.data || {});
       const dispatch = useDispatch();
       const navigate = useNavigate();

       const allProducts = useSelector(state => state?.productsCard?.data || []);

       useEffect(() => {
              dispatch(UpdateOrder(
                     {
                            ...order,
                            products: allProducts.map(product => ({
                                   product_id: product.productId,
                                   count: product.count,
                                   addons: (product?.addons || []).map(addon => ({
                                          addon_id: addon.id,
                                          count: addon.count
                                   })),
                                   variation: (product.variations || []).map(variation => ({
                                          variation_id: variation.variation_id,
                                          option_id: (product?.options || []).filter(option => option.variation_id === variation.variation_id).map(option => option.id)
                                   })),
                                   extra_id: [...product?.extraProduct.map((ex) => (ex.id)), ...product?.extraOptions.map((ex) => (ex.id))],
                                   exclude_id: product?.excludes,
                            }))
                     }
              ))
       }, [allProducts]);

       const { postData: postOrder, loadingPost: loadingOrder, response: responseOrder } = usePost({ url: 'https://bcknd.food2go.online/customer/make_order', type: true });

       const handleSendOrder = () => {
              postOrder(order, 'Order Placed Successfully')
       };
       useEffect(() => {
              if (responseOrder) {
                     dispatch(removeOrder());
                     dispatch(removeTotlePrice());
                     dispatch(removeCheckOutDetails());
                     dispatch(removeAllProductsCard());
                     navigate(`/orders/order_traking/${responseOrder?.data?.success}`, { replace: true });
              }
       }, [responseOrder])
       return (
              <>
                     {loadingOrder ?
                            (
                                   <div className="w-full h-screen flex justify-center items-center">
                                          <LoaderLogin />
                                   </div>
                            ) : (


                                   <div className="w-11/12 mx-auto flex flex-col items-start justify-start gap-y-4 pt-4">
                                          <HeaderNavigate
                                                 title={'Checkout'}
                                          />
                                          <Locations />
                                          <DetailsOrder />
                                          <PaymentMethods />
                                          <div className="w-full flex items-center justify-end">
                                                 <div className="">
                                                        <SubmitButton text={'Place Order'} handleClick={handleSendOrder} />
                                                 </div>
                                          </div>
                                   </div>
                            )}
              </>
       )
}

export default CheckOutPage
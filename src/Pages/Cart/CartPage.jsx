import React from 'react'
import { TitlePage } from '../../Components/Components'
import Carts from './Sections/Carts'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { UpdateOrder } from '../../Store/CreateSlices'
import { useAuth } from '../../Context/Auth'

const CartPage = () => {
       const auth = useAuth();
       const navigate = useNavigate();

       const dispatch = useDispatch();
       const order = useSelector(state => state?.order?.data || {});
       const productsSelected = useSelector((state) => state?.productsCard?.data || []);
       const handleOrder = () => {
              console.log('productsSelected.length', productsSelected.length)
              if (productsSelected.length === 0) {
                     auth.toastError('Your cart is empty')
              } else {
                     if (!auth.user) {
                            auth.toastError('You must be logged in to continue.')
                            navigate('/auth/login', { replace: true })
                            return;
                     } else {
                            navigate('/check_out', { replace: true })
                            dispatch(UpdateOrder({ ...order, products: productsSelected }));
                     }
              }
              // productsSelected.length === 0 || !auth.user ? auth.toastError('Your cart is empty') : dispatch(UpdateOrder({ ...order, products: productsSelected }));
       }
       return (
              <>
                     <div className="w-11/12 mx-auto flex flex-col items-center justify-center gap-y-4">
                            <TitlePage title='Cart' />
                            <Carts />
                            {/* Buttons */}
                            <div className="w-full flex sm:flex-col lg:flex-row items-center justify-end gap-5">
                                   <span
                                          className='sm:w-full lg:w-auto sm:text-xl xl:text-2xl text-center text-white bg-mainColor px-16
                                                 py-2 rounded-2xl hover:bg-transparent hover:text-mainColor border-2
                                                 border-mainColor transition-all ease-in-out duration-300 cursor-pointer'
                                          onClick={handleOrder}
                                   >
                                          Checkout
                                   </span>
                                   <Link to={'/'} className='sm:w-full lg:w-auto sm:text-xl xl:text-2xl text-center text-mainColor bg-transparent px-16
                                                 py-2 rounded-2xl hover:bg-mainColor hover:text-white border-2
                                                 border-mainColor transition-all ease-in-out duration-300'
                                   >
                                          Buy More
                                   </Link>
                            </div>
                     </div>
              </>
       )
}

export default CartPage
import React from 'react'
import { TitlePage } from '../../Components/Components'
import Carts from './Sections/Carts'
import { Link } from 'react-router-dom'

const CartPage = () => {
       return (
              <>
                     <div className="w-11/12 mx-auto flex flex-col items-center justify-center gap-y-7 pt-1">
                            <TitlePage title='Cart' />
                            <Carts />
                            {/* Buttons */}
                            <div className="w-full flex items-center justify-start gap-x-5">
                                   <Link to={'/check_out'} className='sm:text-xl xl:text-2xl text-center text-white bg-mainColor px-16
                                                 py-2 rounded-2xl hover:bg-transparent hover:text-mainColor border-2
                                                 border-mainColor transition-all ease-in-out duration-300'
                                   >
                                          Checkout
                                   </Link>
                                   <Link to={'/menu'} className='sm:text-xl xl:text-2xl text-center text-mainColor bg-transparent px-16
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
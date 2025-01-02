import React from 'react'
import DeleteIcon from '../../../assets/Icons/DeleteIcon'
import { IoAddCircleSharp } from 'react-icons/io5'
import { IoIosRemoveCircle } from 'react-icons/io'

const Cart = () => {
       return (
              <>
                     <div className="relative w-full h-64 flex flex-row items-center justify-between gap-x-3  bg-mainBgColor p-3 rounded-xl shadow-md">
                            {/* cart image */}
                            <div className="sm:w-3/12 xl:w-3/12">
                                   <img
                                          src="/src/assets/Images/cartImage.png"
                                          className="rounded-xl w-full h-50 object-center object-cover"
                                          alt="item"
                                   />
                            </div>
                            {/* cart Details */}
                            <div className="sm:w-4/12 xl:w-7/12 h-full flex flex-col items-start justify-start gap-y-6">


                                   {/* cart name */}
                                   <span className='text-4xl text-thirdColor font-TextFontRegular'>
                                          Pasta
                                   </span>

                                   {/* cart description */}
                                   <p className="w-full text-2xl text-secoundColor font-TextFontRegular line-clamp-3">
                                          Pasta, basil, cheese Pasta, basil, cheese Pasta, basil, cheese Pasta, basil, cheese Pasta, basil, cheesesdfsfsdsdfsdf
                                   </p>

                                   {/* cart amount */}
                                   <span className="text-3xl text-mainColor font-TextFontMedium">
                                          150$
                                   </span>
                            </div>
                            {/* cart Action */}
                            <div className="sm:w-4/12 xl:w-3/12 h-full flex flex-col sm:items-center xl:items-end justify-end gap-3">
                                   <div className="flex items-center justify-center gap-4 py-2">
                                          <IoAddCircleSharp className='text-mainColor text-4xl cursor-pointer' />
                                          <span className='text-mainColor text-3xl font-TextFontRegular'>1</span>
                                          <IoIosRemoveCircle className='text-mainColor text-4xl cursor-pointer' />
                                   </div>
                                   <button className='sm:text-xl text-xl text-center text-white bg-mainColor px-8
                                          py-2 rounded-2xl hover:bg-transparent hover:text-mainColor border-2 border-mainColor
                                          transition-all ease-in-out duration-300'
                                   >
                                          Add Note
                                   </button>
                            </div>

                            <div className="absolute top-3 right-3 cursor-pointer">
                                   <DeleteIcon
                                          width={'30'}
                                          height={'30'}
                                   />
                            </div>
                     </div>
              </>
       )
}

export default Cart
import React, { useState } from 'react'
import { LuTimer } from 'react-icons/lu';
import { TbTruckDelivery } from 'react-icons/tb';
import { useParams } from 'react-router-dom'
import { TriStateCheckbox } from 'primereact/tristatecheckbox';
import { Checkbox, SubmitButton } from '../../Components/Components';
import { IoAddCircleSharp } from 'react-icons/io5';
import { IoIosRemoveCircle } from 'react-icons/io';

const ProductDetails = () => {
       const [check1, setCheck1] = useState(0)
       const [check2, setCheck2] = useState(1)
       const [check3, setCheck3] = useState(0)

       const productId = useParams();
       return (
              <>
                     <div className="w-full flex sm:flex-col-reverse xl:flex-row sm:h-auto xl:h-[91vh] items-start justify-between gap-7 ">
                            {/* Details Side */}
                            <div className="sm:w-full xl:w-6/12 h-full sm:pl-8 xl:pl-12 flex flex-col gap-y-10  xl:mt-12 overflow-y-scroll scrollPage">
                                   {/* Title && Price */}
                                   <div className="w-full flex items-center justify-between">
                                          <span className='w-6/12 text-5xl font-TextFontMedium text-mainColor'>Pasta</span>
                                          <span className='w-6/12 text-center text-5xl font-TextFontRegular text-mainColor'>150 Egp</span>
                                   </div>
                                   {/* Details && Description */}
                                   <div className="w-full flex flex-col items-start justify-start gap-y-4">
                                          <p className='text-2xl text-secoundColor font-TextFontRegular'>
                                                 <span className='text-mainColor font-TextFontMedium mr-1'>Ingridents:</span>
                                                 Pasta, basil, cheese.
                                          </p>
                                          <p className='text-2xl text-secoundColor font-TextFontRegular '>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                   </div>
                                   {/* Time && Type */}
                                   <div className="w-full flex items-center justify-start gap-x-3">
                                          <div className="flex items-center gap-2">
                                                 <TbTruckDelivery className=' text-3xl text-mainColor' />
                                                 <span className=' text-secoundColor text-3xl'>Free</span>
                                          </div>
                                          <div className="flex items-center gap-2">
                                                 <LuTimer className='text-mainColor text-3xl' />
                                                 <span className='text-secoundColor text-3xl'>20 min</span>
                                          </div>
                                   </div>
                                   {/* Extra */}
                                   <div className="w-full flex flex-col items-start justify-start gap-3">
                                          <span className='text-mainColor text-3xl font-TextFontRegular'>Extra:</span>
                                          <div className="w-full flex items-center flex-wrap justify-start gap-3">
                                                 <div className="flex items-center justify-center">
                                                        <Checkbox checked={check1} />
                                                        <span className='text-xl font-TextFontRegular text-secoundColor mt-3'>check1</span>
                                                 </div>
                                                 <div className="flex items-center justify-center">
                                                        <Checkbox checked={check2} />
                                                        <span className='text-xl font-TextFontRegular text-secoundColor mt-3'>check2</span>
                                                 </div>
                                                 <div className="flex items-center justify-center">
                                                        <Checkbox checked={check3} />
                                                        <span className='text-xl font-TextFontRegular text-secoundColor mt-3'>check3</span>
                                                 </div>
                                          </div>
                                   </div>
                                   {/* Size */}
                                   <div className="w-full flex items-start justify-start gap-3">
                                          <span className='text-mainColor text-3xl font-TextFontRegular'>Size:</span>
                                          <div className="w-full flex items-center flex-wrap justify-start gap-3">
                                                 <span className='text-mainColor bg-transparent border-2 border-mainColor text-2xl font-TextFontRegular rounded-full px-2 cursor-pointer'>S</span>
                                                 <span className='text-white bg-mainColor border-2 border-mainColor text-2xl font-TextFontRegular rounded-full px-2 cursor-pointer'>M</span>
                                          </div>
                                   </div>
                                   {/* Add Product */}
                                   <div className="w-full flex items-center justify-between">
                                          <div className="w-8/12">
                                                 <SubmitButton text='Add To Card' handleClick={() => { }} />
                                          </div>
                                          <div className="w-3/12 flex items-start justify-start gap-4">
                                                 <IoAddCircleSharp className='text-mainColor text-4xl cursor-pointer' />
                                                 <span className='text-mainColor text-3xl font-TextFontRegular'>1</span>
                                                 <IoIosRemoveCircle className='text-mainColor text-4xl cursor-pointer' />
                                          </div>
                                   </div>
                            </div>
                            {/* Image Side */}
                            <div className="sm:w-full xl:w-6/12 h-full flex items-center justify-center overflow-hidden bg-mainColor sm:rounded-tl-none xl:rounded-tl-full rounded-bl-full sm:rounded-br-full xl:rounded-br-none sm:p-6 xl:p-0">
                                   <img src="/src/assets/Images/product.png" className='sm:w-[20rem] xl:w-[25rem] sm:h-[25rem] xl:h-[30rem] rounded-full object-cover object-center' alt="product" />
                            </div>
                     </div>
              </>
       )
}

export default ProductDetails
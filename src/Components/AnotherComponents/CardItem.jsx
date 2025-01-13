import React from 'react'
import { FaHeart, FaPlus } from 'react-icons/fa'
import SupTitle from './SupTitle'
import { LinkButton } from '../Components'

const CardItem = () => {
       return (
              <div
                     className="flex flex-col min-h-[330px] max-h-[425] items-start justify-between gap-y-2 bg-thirdBgColor rounded-2xl p-3 shadow-md sm:w-full md:w-[48%] lg:w-[48%] xl:w-[23%]"
              >
                     {/* Image */}
                     <div className="relative min-h-58 max-h-60 w-full overflow-hidden">
                            <img
                                   src="/src/assets/Images/ItemImage.png"
                                   className="rounded-xl w-full h-full object-center object-cover"
                                   alt="item"
                            />
                            {/* Favorite Icon */}
                            <button className="absolute top-4 right-5 shadow-md">
                                   <FaHeart className="text-mainColor text-2xl" />
                            </button>
                            <span className='absolute top-5 -left-28 -rotate-45 text-center w-full bg-thirdBgColor text-mainColor text-xl font-TextFontMedium'>20%</span>
                     </div>

                     {/* Item Name */}
                     <span className='text-2xl text-thirdColor font-TextFontRegular'>
                            Cheese burger
                     </span>

                     {/* Item Description */}
                     <p className='w-full text-sm text-secoundColor font-TextFontRegular text-ellipsis overflow-hidden ...'>
                            Tomato, meat, cheese, lettuce, cucumbersdfsdfssssssssssssssssssssssssdfsdfsdf
                     </p>
                     {/* <SupTitle
                            size={"3xl"}
                            text={"Tomato, meat, cheese, lettuce, cucumber"}
                     /> */}

                     {/* Item Amount */}
                     <span className="text-xl text-mainColor font-TextFontMedium">
                            150$
                     </span>

                     {/* Buttons */}
                     <div className="flex items-center justify-between w-full gap-3">
                            <div className="w-10/12 flex items-center justify-center">
                                   <LinkButton width={true} to="/menu" text="Order Now" />
                            </div>
                            <button
                                   type="button"
                                   className="text-mainColor rounded-lg p-3 border-2 border-mainColor hover:bg-mainColor hover:text-white transition-all ease-in-out duration-300"
                            >
                                   <FaPlus />
                            </button>
                     </div>
              </div>
       )
}

export default CardItem
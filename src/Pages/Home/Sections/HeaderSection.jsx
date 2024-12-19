import React from 'react'
import { Link } from 'react-router-dom'

const HeaderSection = () => {
       return (
              <div className='relative overflow-hidden h-[90vh] flex flex-col gap-y-12 px-12 sm:pt-12 xl:pt-24'>
                     <span className='mt-15 text-mainColor sm:text-3xl xl:text-5xl font-TextFontMedium sm:leading-relaxed xl:leading-relaxed'>Food2go - Fresh Flavors, Unique <br className='sm:hidden xl:block' />
                            Experience
                     </span>
                     <p className=' text-secoundColor text-2xl font-TextFontMedium leading-relaxed'>Welcome to Food2go, where fresh ingredients <br />
                            meet delicious dishes in a cozy atmosphere.
                     </p>
                     <div className="">
                            <Link to={'/menu'}
                                   className='text-2xl text-white bg-mainColor px-8
                                    py-2 rounded-2xl'
                            >
                                   Order Your Favorite Meal
                            </Link>
                     </div>
                     <img src="/src/assets/Images/pizza.png"
                            alt=""
                            className="sm:hidden xl:block absolute right-0 -bottom-15"
                     />
                     <img src="/src/assets/Images/burger.png"
                            alt=""
                            className="sm:hidden xl:block absolute right-0 top-10"
                     />
              </div>
       )
}

export default HeaderSection
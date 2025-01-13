import React from 'react'
import { Link } from 'react-router-dom'
import { LinkButton } from '../../../Components/Components'

const HeaderSection = () => {
       return (
              <div className='relative overflow-hidden h-[90vh] flex flex-col sm:items-center xl:items-start sm:gap-y-20 xl:gap-y-12 px-12 sm:pt-12 xl:pt-24'>
                     <span className='mt-15 sm:text-center xl:text-start text-mainColor sm:text-3xl xl:text-5xl font-TextFontMedium sm:leading-relaxed xl:leading-relaxed'>Food2go - Fresh Flavors, Unique <br className='sm:hidden xl:block' />
                            Experience
                     </span>
                     <p className=' text-secoundColor sm:text-center xl:text-start text-2xl font-TextFontMedium sm:leading-loose xl:leading-relaxed'>Welcome to Food2go, where fresh ingredients <br />
                            meet delicious dishes in a cozy atmosphere.
                     </p>
                     {/* <div className=""> */}
                            <LinkButton
                                   to={'/favorites'}
                                   text={'Order Your Favorite Meal'}
                            />
                     {/* </div> */}
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
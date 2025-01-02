import React, { useState } from 'react'
import RedLogo from '../../Assets/Images/RedLogo'
import { Links } from '../Components'
import { Link, NavLink } from 'react-router-dom'
import { MdRestaurantMenu } from 'react-icons/md'
import CartIcon from '../../assets/Icons/CartIcon'

const Navbar = () => {
       const [toggleOpen, setToggleOpen] = useState(false);
       return (
              <nav className='relative w-full flex align-center justify-between  py-3 sm:px-5 xl:px-10 bg-white shadow-md'>
                     <Link to={''} className="sm:w-6/12 xl:w-3/12 flex items-center justify-start gap-x-2 z-10">
                            <RedLogo width={45} />
                            <span className='text-3xl text-mainColor font-TextFontRegular'>Food2go</span>
                     </Link>
                     <div className="sm:hidden xl:flex w-5/12  items-center"><Links /></div>
                     <div className="sm:hidden xl:flex w-3/12  items-center justify-end gap-x-4">
                            <Link to={'/cart'}
                            >
                                   <CartIcon />
                            </Link>
                            <Link to={'/login'}
                                   className='text-xl text-mainColor border-2 border-mainColor font-TextFontRegular px-5 py-1 rounded-full '
                            >
                                   Login
                            </Link>
                            <Link to={'/sign_up'}
                                   className='text-xl text-white bg-mainColor border-2 border-mainColor font-TextFontRegular px-5 py-1  rounded-full'
                            >
                                   SignUp
                            </Link>
                     </div>
                     <div className="xl:hidden flex items-center justify-center">
                            <MdRestaurantMenu
                                   onClick={() => setToggleOpen(!toggleOpen)}
                                   className='text-mainColor text-4xl cursor-pointer z-10'
                            />
                     </div>

                     <div
                            className={`w-full absolute ${toggleOpen ? 'top-16' : '-top-72'} transition-all duration-300 left-0 bg-white shadow-md sm:flex xl:hidden flex-col items-center justify-center px-4 pb-3 rounded-br-3xl rounded-bl-3xl z-20`}
                     >
                            <div className="w-full flex flex-col">
                                   <NavLink to={''}
                                          className='w-full text-xl font-TextFontMedium text-mainColor border-b-2 p-3 pb-1'
                                          onClick={() => setToggleOpen(!toggleOpen)}
                                   >
                                          Home
                                   </NavLink>
                                   <NavLink to={'/menu'}
                                          className='w-full text-xl font-TextFontMedium text-mainColor border-b-2 p-3 pb-1'
                                          onClick={() => setToggleOpen(!toggleOpen)}
                                   >
                                          Menu
                                   </NavLink>
                                   <NavLink to={'/contact_us'}
                                          className='w-full text-xl font-TextFontMedium text-mainColor border-b-2 p-3 pb-1'
                                          onClick={() => setToggleOpen(!toggleOpen)}
                                   >
                                          Contact Us
                                   </NavLink>
                            </div>

                            <div className="flex flex-col w-full items-center justify-Center gap-y-2 mt-2">
                                   <Link to={'/login'}
                                          onClick={() => setToggleOpen(!toggleOpen)}
                                          className='w-full text-center text-xl text-mainColor border-2 border-mainColor font-TextFontRegular px-5 py-1 rounded-full '
                                   >
                                          Login
                                   </Link>
                                   <Link to={'/sign_up'}
                                          onClick={() => setToggleOpen(!toggleOpen)}
                                          className='w-full text-center text-xl text-white bg-mainColor border-2 border-mainColor font-TextFontRegular px-5 py-1  rounded-full'
                                   >
                                          SignUp
                                   </Link>
                            </div>

                     </div>

              </nav>
       )
}

export default Navbar
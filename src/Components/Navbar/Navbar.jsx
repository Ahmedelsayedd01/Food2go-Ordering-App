import React, { useState } from 'react';
import RedLogo from '../../assets/Images/RedLogo';
import { Links } from '../Components';
import { Link, useLocation } from 'react-router-dom';
import { MdFavoriteBorder, MdRestaurantMenu } from 'react-icons/md';
import CartIcon from '../../assets/Icons/CartIcon';
import { LuUserRound } from 'react-icons/lu';
import { useSelector } from 'react-redux';

const Navbar = () => {
       const location = useLocation();
       const user = useSelector(state => state.user?.data);
       const [pages] = useState(['/auth/login', '/auth/sign_up', '/auth/login/forgot_password', '/auth/otp_verification']);
       const [toggleOpen, setToggleOpen] = useState(false);

       return (
              <>
                     {pages.some(page => location.pathname === page) ? (
                            ''
                     ) : (
                            <nav className='relative w-full flex align-center justify-between py-3 sm:px-5 xl:px-10 bg-white shadow-md'>
                                   <div className='sm:w-6/12 xl:w-3/12 flex items-center justify-start gap-x-2 z-10'>
                                          <Link to={'/'} className="flex items-center justify-start gap-x-2">
                                                 <RedLogo width={45} />
                                                 <span className='text-3xl text-mainColor font-TextFontRegular'>Food2go</span>
                                          </Link>
                                   </div>
                                   <div className='sm:hidden xl:flex w-5/12 items-center'>
                                          <Links />
                                   </div>
                                   <div className='sm:hidden xl:flex w-3/12 items-center justify-end gap-x-4'>

                                          {user ? (
                                                 <>
                                                        <Link to={'/favorites'}>
                                                               <MdFavoriteBorder className='text-mainColor text-3xl' />
                                                        </Link>
                                                        <Link to={'/cart'}>
                                                               <CartIcon />
                                                        </Link>
                                                        <Link to={'/profile'}>
                                                               <LuUserRound className='text-mainColor text-3xl' />
                                                        </Link>
                                                 </>
                                          ) : (
                                                 <>

                                                        <Link
                                                               to={'/auth/login'}
                                                               className='text-xl text-mainColor border-2 border-mainColor font-TextFontRegular px-5 py-1 rounded-full'
                                                        >
                                                               Login
                                                        </Link>
                                                        <Link
                                                               to={'/auth/sign_up'}
                                                               className='text-xl text-white bg-mainColor border-2 border-mainColor font-TextFontRegular px-5 py-1 rounded-full'
                                                        >
                                                               SignUp
                                                        </Link>
                                                 </>
                                          )}
                                   </div>
                                   <div className='xl:hidden flex items-center justify-center'>
                                          <MdRestaurantMenu
                                                 onClick={() => setToggleOpen(!toggleOpen)}
                                                 className='text-mainColor text-4xl cursor-pointer z-10'
                                          />
                                   </div>

                                   {/* Mobile Navbar  */}
                                   <div
                                          className={`w-full absolute ${toggleOpen ? 'top-16' : '-top-72'
                                                 } transition-all duration-300 left-0 bg-white shadow-md sm:flex xl:hidden flex-col items-center justify-center px-4 pb-3 rounded-br-3xl rounded-bl-3xl z-20`}
                                   >
                                          <div className='w-full flex flex-col'>
                                                 <Link
                                                        to={'menu'}
                                                        className='w-full text-xl font-TextFontMedium text-mainColor border-b-2 p-3 pb-1'
                                                        onClick={() => setToggleOpen(false)}
                                                 >
                                                        Menu
                                                 </Link>
                                                 <Link
                                                        to={'branches'}
                                                        className='w-full text-xl font-TextFontMedium text-mainColor border-b-2 p-3 pb-1'
                                                        onClick={() => setToggleOpen(false)}
                                                 >
                                                        Branch
                                                 </Link>
                                                 <Link
                                                        to={'/contact_us'}
                                                        className='w-full text-xl font-TextFontMedium text-mainColor border-b-2 p-3 pb-1'
                                                        onClick={() => setToggleOpen(false)}
                                                 >
                                                        Contact Us
                                                 </Link>
                                          </div>
                                          <div className='flex flex-col w-full items-center justify-center gap-y-2'>
                                                 {user ? (

                                                        <div className='w-full flex flex-col items-center justify-center gap-x-3'>
                                                               <Link
                                                                      to={'/favorites'}
                                                                      className='w-full flex items-center gap-3 text-xl font-TextFontMedium text-mainColor border-b-2 p-3 pb-1'
                                                                      onClick={() => setToggleOpen(false)}
                                                               >
                                                                      <MdFavoriteBorder className='text-mainColor text-2xl' /> Favorites
                                                               </Link>
                                                               <Link
                                                                      to={'/cart'}
                                                                      className='w-full flex items-center gap-3 text-xl font-TextFontMedium text-mainColor border-b-2 p-3 pb-1'
                                                                      onClick={() => setToggleOpen(false)}
                                                               >
                                                                      <CartIcon /> Cart
                                                               </Link>
                                                               <Link
                                                                      to={'/profile'}
                                                                      className='w-full flex items-center gap-3 text-xl font-TextFontMedium text-mainColor border-b-2 p-3 pb-1'
                                                                      onClick={() => setToggleOpen(false)}
                                                               >
                                                                      <LuUserRound className='text-mainColor text-2xl' /> Profile
                                                               </Link>
                                                        </div>
                                                 ) : (
                                                        <>

                                                               <Link
                                                                      to={'/auth/login'}
                                                                      onClick={() => setToggleOpen(false)}
                                                                      className='w-full text-center text-xl text-mainColor border-2 border-mainColor font-TextFontRegular px-5 py-1 rounded-full'
                                                               >
                                                                      Login
                                                               </Link>
                                                               <Link
                                                                      to={'/auth/sign_up'}
                                                                      onClick={() => setToggleOpen(false)}
                                                                      className='w-full text-center text-xl text-white bg-mainColor border-2 border-mainColor font-TextFontRegular px-5 py-1 rounded-full'
                                                               >
                                                                      SignUp
                                                               </Link>
                                                        </>
                                                 )}
                                          </div>
                                   </div>
                            </nav>
                     )}
              </>
       );
};

export default Navbar;

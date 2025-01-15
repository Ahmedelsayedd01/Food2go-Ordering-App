import React from 'react'
import { SubmitButton, TitleSection } from '../../Components/Components'
import { useAuth } from '../../Context/Auth'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProfilePage = () => {
       const auth = useAuth();
       const navigate = useNavigate();

       const user = useSelector(state => state.user.data);

       const handleLogout = () => {
              auth.logout();
              navigate('/', { replace: true })
       }
       return (
              <>
                     <div className="w-full flex h-[90vh] flex-col items-center justify-start gap-y-7 pt-5 px-12">
                            <div>
                                   <TitleSection
                                          size={'5xl'}
                                          text={'Profile'}
                                   />
                            </div>
                            <div className="w-full h-5/6 flex sm:flex-col xl:flex-row sm:gap-y-10 xl:justify-between gap-3">
                                   {/* Profile Image */}
                                   <div className="sm:w-full flex items-center justify-center xl:w-6/12">
                                          <img src="/src/assets/Images/profilePhoto.jpeg" className='sm:w-52 sm:h-52 xl:w-96 xl:h-96 border-4 border-mainColor p-1 object-cover object-center sm:rounded-full xl:rounded-2xl' alt="photo" />
                                   </div>
                                   {/* Profile Details */}
                                   <div className="sm:w-full xl:w-6/12 flex flex-col items-center justify-center gap-5">

                                          <div className="w-full flex flex-col gap-2">
                                                 <div className="w-full flex sm:flex-row xl:flex-col items-start justify-start gap-1">
                                                        <span className='text-2xl font-TextFontRegular text-gray-700'>Name:</span>
                                                        <span className='text-2xl font-TextFontRegular text-secoundColor'>{user?.name || ''}</span>
                                                 </div>
                                                 <div className="w-full flex sm:flex-row xl:flex-col items-start justify-start gap-1">
                                                        <span className='text-2xl font-TextFontRegular text-gray-700'>email:</span>
                                                        <span className='text-2xl font-TextFontRegular text-secoundColor'>{user?.email || ''}</span>
                                                 </div>
                                                 <div className="w-full flex sm:flex-row xl:flex-col items-start justify-start gap-1">
                                                        <span className='text-2xl font-TextFontRegular text-gray-700'>phone Number:</span>
                                                        <span className='text-2xl font-TextFontRegular text-secoundColor'>{user?.phone || ''}</span>
                                                 </div>
                                                 <div className="w-full flex sm:flex-row xl:flex-col items-start justify-start gap-1">
                                                        <span className='text-2xl font-TextFontRegular text-gray-700'>Address:</span>
                                                        <span className='text-2xl font-TextFontRegular text-secoundColor'>{user?.address || ''}</span>
                                                 </div>
                                          </div>
                                          <div className="w-full flex items-end justify-end text-end mt-2">
                                                 <div className="">

                                                        <SubmitButton text={'Logout'} handleClick={handleLogout} />
                                                 </div>
                                          </div>
                                   </div>
                            </div>

                     </div>
              </>
       )
}

export default ProfilePage
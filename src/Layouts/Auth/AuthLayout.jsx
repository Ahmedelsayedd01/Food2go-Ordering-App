import React from 'react'
import LoginBackground from '../../assets/Images/LoginBackground'
import { Outlet } from 'react-router-dom'
import ProtectedLogin from '../../ProtectedData/ProtectedLogin'

const AuthLayout = () => {
       return (
              <>

                     <div className="w-full flex items-center justify-center mx-auto h-screen overflow-hidden">
                            <div className="w-11/12 flex items-start justify-between h-5/6">

                                   <div className="sm:w-full xl:w-5/12 ">
                                          <Outlet />
                                   </div>

                                   <div className="sm:hidden xl:flex w-2/4  items-center justify-center h-full">
                                          <LoginBackground height='100%' />
                                   </div>
                            </div>
                     </div>
              </>
       )
}

export default AuthLayout
import React from 'react'
import { PulseLoader } from 'react-spinners'
import RedLogo from '../../assets/Images/RedLogo'
import mainLogo from '../../assets/Images/mainLogo.jpeg'
const LoaderLogin = () => {
       return (
              <>
              <div>
                     <div className={`w-full h-full flex flex-col justify-center items-center`}>
                            <RedLogo width={250} height={250} />
                            <PulseLoader color='#9E090F' size={20} />
                     </div>

                      <div className="flex items-center justify-center mt-10 gap-2 py-4 border-t border-gray-300">
                            <h1 className="text-gray-600">Powered by</h1>
                            <img src={mainLogo} className="w-24 h-24" alt="Main Logo" />
                     </div>

              </div>
              </>
       )
}

export default LoaderLogin
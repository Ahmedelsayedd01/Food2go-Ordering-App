import React from 'react'
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const HeaderNavigate = ({ title, handleNavigate }) => {
       const navigate = useNavigate();

       const handleBack = () => {
              if (handleNavigate) {
                     handleNavigate();  // Execute handleNavigate if provided
              } else {
                     navigate(-1, { replace: true });  // Fallback to navigating back
              }
       };

       return (
              <>
                     <div className="w-full text-5xl font-TextFontRegular text-mainColor flex items-center justify-start">
                            <IoIosArrowBack
                                   className='cursor-pointer'
                                   onClick={handleBack}
                            />
                            <span className='w-11/12 text-center'>{title}</span>
                     </div>
              </>
       )
}

export default HeaderNavigate
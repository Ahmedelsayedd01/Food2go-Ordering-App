import React, { useEffect, useState } from 'react';
import LinkButton from '../../Components/Buttons/LinkButton';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setBranch } from '../../Store/CreateSlices';
import { FaMapMarkerAlt, FaPhoneAlt, FaHome } from "react-icons/fa";
import { MdOutlineDirections } from "react-icons/md";

const Branch=()=>{

     const dispatch = useDispatch();
    const branches = useSelector(state => state.branch?.data);
    const [branchData, setBranchData] = useState([]);
    useEffect(() => {
        setBranchData(branches);
        }, [branches]);
    return(
        // <div className="flex flex-col p-4 md:p-6 gap-5">
        //     {branchData.map((branch,index) => (
        //         <div key={index} className="w-full flex flex-col lg:flex-row gap-5 p-4 md:p-6 bg-secoundBgColor rounded-3xl">
        //                 <img 
        //                 src={branch.image_link} 
        //                 className="w-48 h-48 object-fit rounded-md max-h-96" 
        //                 // alt={banner.alt} 
        //                 />

        //                 <div className='flex flex-col justify-between'>

        //                     <div className='flex flex-col gap-5'>
        //                         <h1 className='text-2xl font-semibold'>{branch.name}</h1>

        //                         <div className='flex flex-col lg:flex-row gap-5'>
        //                             <h1>{branch.address}</h1>
        //                             <h1>{branch.phone}</h1>
        //                         </div>
        //                     </div>

        //                     <div className='w-full md:w-1/4'>
        //                     <LinkButton text={'Direction'} to={branch.map} />
        //                     </div>

        //                 </div>
        //         </div>
        //         ))}    
        // </div>

        <div className="flex flex-col p-4 md:p-6 gap-6">
        {branchData.map((branch, index) => (
          <div
            key={index}
            className="w-full flex flex-col lg:flex-row gap-6 p-6 bg-secoundBgColor rounded-3xl shadow-lg hover:shadow-xl transition duration-300"
          >
            {/* Image Section */}
            <img
              src={branch.image_link}
              className="md:w-64 h-48 w-full object-cover rounded-xl shadow-md"
              alt={branch.name}
            />
  
            {/* Content Section */}
            <div className="w-full flex flex-col justify-between">

            <div className='flex flex-col gap-5'>
              {/* Branch Name */}
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-500 text-lg" />
                <h1 className="text-2xl font-bold text-primaryColor">{branch.name}</h1>
              </div>
  
              {/* Address & Phone */}
              <div className="flex flex-col gap-5 text-gray-700">
                <div className="flex items-center gap-2">
                  <FaHome className="text-red-500 text-lg" />
                  <span>{branch.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaPhoneAlt className="text-green-500 text-lg" />
                  <span>{branch.phone}</span>
                </div>
              </div>
            </div>
            
  
              {/* Direction Button */}
              <div className='mt-5'>
                <Link target='-blank' className='flex w-full md:w-2/4 xl:w-1/4 gap-2 items-center justify-center text-white bg-mainColor px-8
                    py-2 rounded-2xl hover:bg-transparent hover:text-mainColor border-2 border-mainColor transition-all ease-in-out duration-300' to={branch.map}> <MdOutlineDirections className="text-lg" />Get Directions
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
}

export default Branch;
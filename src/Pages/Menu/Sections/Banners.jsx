import { Splide, SplideSlide } from '@splidejs/react-splide';

// Default theme
import React, { useEffect, useState } from 'react';
import '@splidejs/react-splide/css';
import { LinkButton } from '../../../Components/Components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setBanners } from '../../../Store/CreateSlices';

const Banners = () => {

       const dispatch = useDispatch();
       const banners = useSelector(state => state.banner?.data);
       const [bannerData, setBannerData] = useState([]);
       useEffect(() => {
              setBannerData(banners);
           }, [banners]);
       return (
              <div className="w-full pt-0 px-2 py-8 text-white flex flex-col items-center justify-start space-y-4">
                    {/* Splide Carousel */}
                     <Splide
                         key={bannerData.length} // Forces re-initialization
                            options={{
                                   type   : 'loop',
                                   autoplay: true,
                                   // padding:'3%',
                                   interval: 3000,
                                   perPage: 1,
                                   pauseOnHover: true,
                                   arrows: false,
                                   pagination: true, // Enables pagination
                                   gap: '1rem',
                                   // perMove: 1, // Move 2 at a time          
                            }}
                            // aria-label="Banners Images"
                     >
                         {bannerData.map((banner,index) => (
                            <SplideSlide key={index} className="w-full overflow-hidden rounded-3xl ">
                                   <img 
                                   src={banner.image_link} 
                                   className="w-full h-full object-fit max-h-80 md:max-h-96 rounded-3xl" 
                                   // alt={banner.alt} 
                                   />
                            </SplideSlide>
                            ))}

                     </Splide>
              </div >
       );
};

export default Banners;
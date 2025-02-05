import { Splide, SplideSlide } from '@splidejs/react-splide';

// Default theme
import '@splidejs/react-splide/css';
import { LinkButton } from '../../../Components/Components';
import { Link } from 'react-router-dom';

const BannerSection = () => {
       return (
              <div className="w-full bg-mainColor px-12 py-8 text-white flex flex-col items-center justify-start space-y-4">
                     {/* Banner Section */}
                     <h1 className="w-full text-start sm:text-2xl xl:text-4xl font-TextFontMedium leading-relaxed">
                            Don't Miss Our Special Deals This Week!
                     </h1>
                     <p className='w-full text-start sm:text-xl xl:text-3xl font-TextFontRegular py-8'>
                            Enjoy up to 30% off on the most delicious dishes. Order now
                            and savor an unforgettable dining experience!
                     </p>

                     {/* Splide Carousel */}
                     <Splide
                            options={{
                                   type: 'loop',
                                   padding: '20%',
                                   autoplay: true,
                                   interval: 3000,
                                   perPage: 1,
                                   pauseOnHover: true,
                                   arrows: false,
                                   pagination: true, // Enables pagination
                                   gap: '1rem',
                            }}
                            aria-label="Banners Images"

                     >
                            <SplideSlide className='w-full overflow-hidden rounded-3xl'>
                                   <img src="/src/assets/Images/bannerImage1.png"
                                          className='w-full object-cover max-h-96'
                                          alt="banner" />
                            </SplideSlide>
                            <SplideSlide className='w-full overflow-hidden rounded-3xl'>
                                   <img src="/src/assets/Images/bannerImage1.png"
                                          className='w-full object-cover max-h-96'
                                          alt="banner" />
                            </SplideSlide>
                            <SplideSlide className='w-full overflow-hidden rounded-3xl'>
                                   <img src="/src/assets/Images/bannerImage1.png"
                                          className='w-full object-cover max-h-96'
                                          alt="banner" />
                            </SplideSlide>
                     </Splide>
                     {/* <div className="w-full flex justify-start items-start pt-5">
                            <Link to={'/'}
                                   className='sm:text-xl xl:text-2xl text-center text-mainColor bg-white px-8 py-2 rounded-2xl hover:bg-transparent hover:text-white border-2 border-mainColor hover:border-white transition-all ease-in-out duration-300'
                            >
                                   Browse Deals
                            </Link>
                     </div> */}
              </div >
       );
};

export default BannerSection;
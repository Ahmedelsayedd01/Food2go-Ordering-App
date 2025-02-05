// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { setProducts, setProductsFilter } from '../../../Store/CreateSlices';

// const CategoriesScrollSection = () => {
//        const dispatch = useDispatch();

//        const categories = useSelector(state => state.categories?.data);
//        const products = useSelector(state => state.products?.data);

//        const [activeTab, setActiveTab] = useState('All');
//        const [categoriesFilter, setCategoriesFilter] = useState([]);


//        console.log('categories', categories)
//        console.log('categories Filter', categoriesFilter)

//        useEffect(() => {
//               setCategoriesFilter(categories)
//        }, [categories])

//        const handleClick = (tabName, id) => {
//               setActiveTab(tabName);
//               filterProduct(id);
//        };

//        const filterProduct = (categoryId) => {
//               if (!categoryId) {

//                      dispatch(setProductsFilter(products))
//               } else {

//                      const newProduct = products.filter((product) => categoryId === product.category_id);
//                      dispatch(setProductsFilter(newProduct))
//                      console.log('newProduct', newProduct)
//               }
//               console.log('categoryId', categoryId)
//        }
//        return (
//               <>
//                      <div className="w-full flex flex-wrap items-center justify-start gap-3 p-12">
//                             <div
//                                    onClick={() => handleClick('All', '')}
//                                    className={`w-auto min-w-36 h-auto min-h-36 border-2 border-mainColor transition-all ease-in-out duration-300 cursor-pointer ${activeTab === 'All' ? 'bg-mainColor text-white' : 'bg-white text-mainColor'} hover:bg-mainColor hover:text-white  flex flex-col justify-center items-center gap-4 px-1 py-1 rounded-3xl`}>
//                                         <div className={`w-16 h-16 rounded-full flex items-center justify-center ${activeTab === 'All' ?'bg-white' : 'bg-mainColor'}`}>
//                                             <img src="/src/assets/Images/IconNavFilter.png"
//                                                     className='w-16 h-16 rounded-full'
//                                                     alt="category"
//                                             loading='lazy'
//                                     />
//                                    </div>
            
//                                    <span className='text-lg'>All</span>
//                             </div>
//                             {categoriesFilter.map((category, index) => (
//                                    <div
//                                           key={index}
//                                           onClick={() => handleClick(category?.name, category?.id)}
//                                           className={`w-auto min-w-36 h-auto min-h-36 border-2 border-mainColor transition-all ease-in-out duration-300 cursor-pointer ${activeTab === category?.name ? 'bg-mainColor text-white' : 'bg-[#FFFFFF] text-mainColor'} hover:bg-mainColor hover:text-white  flex flex-col justify-center items-center gap-4 px-1 py-1 rounded-3xl`}>
//                                             <div className={`w-16 h-16 rounded-full flex items-center justify-center ${activeTab === category?.name ? 'bg-white' : 'bg-mainColor'}`}>
//                                             <img src={category.image_link}
//                                                     className='w-16 h-16 rounded-full'
//                                                     alt="category"
//                                             />
//                                             </div>
//                                           <span className='text-lg'>{category?.name || '-'}</span>
//                                    </div>
//                             ))}


//                      </div>
//               </>
//        )
// }

// export default CategoriesScrollSection;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; // Import Splide styles
import { setProducts, setProductsFilter } from '../../../Store/CreateSlices';
// import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const CategoriesScrollSection = () => {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories?.data);
    const products = useSelector(state => state.products?.data);
    const [activeTab, setActiveTab] = useState('All');
    const [categoriesFilter, setCategoriesFilter] = useState([]);

    useEffect(() => {
        setCategoriesFilter(categories);
    }, [categories]);

    const handleClick = (tabName, id) => {
        setActiveTab(tabName);
        filterProduct(id);
    };

    const filterProduct = (categoryId) => {
        if (!categoryId) {
            dispatch(setProductsFilter(products));
        } else {
            const newProduct = products.filter((product) => categoryId === product.category_id);
            dispatch(setProductsFilter(newProduct));
        }
    };

    return (
        <div className="w-screen flex flex-col items-center gap-4 p-4 md:p-8">
            <Splide
                options ={{
                // type: 'slide',
                perPage: 8, // Show 4 categories at a time on large screens
                perMove: 2, // Move 2 at a time
                pagination: true,
                arrows: true,
                gap: '1rem',
                padding: '3%',
                // autoplay: true,
                // interval: 6000,
                // pauseOnHover: true,

                // type   : 'loop',
                // drag   : 'free',
                // focus  : 'center',
                // perPage: 3,
                // autoScroll: {
                //   speed: 1,
                // },
                breakpoints: {
                    1024: { perPage: 3 }, // Show 3 items on tablets
                    768: { perPage: 2 },  // Show 2 items on smaller tablets
                    480: { perPage: 1 } ,  // Show 1 item on mobile
            }}}         
                className="w-full"
            >
                {/* 'All' Category */}
                <SplideSlide>
                    <div
                        onClick={() => handleClick('All', '')}
                        className={`w-auto min-w-36 h-auto min-h-36 border-2 border-mainColor transition-all ease-in-out duration-300 cursor-pointer ${
                            activeTab === 'All' ? 'bg-mainColor text-white' : 'bg-white text-mainColor'
                        } hover:bg-mainColor hover:text-white flex flex-col justify-center items-center gap-4 px-1 py-1 rounded-3xl`}
                    >
                        <div className={`w-20 h-20 rounded-full flex items-center justify-center ${activeTab === 'All' ? 'bg-white' : 'bg-mainColor'}`}>
                            <img src="/src/assets/Images/IconNavFilter.png" className="w-20 h-20 rounded-full" alt="category" loading="lazy" />
                        </div>
                        <span className="text-lg">All</span>
                    </div>
                </SplideSlide>

                {/* Category List */}
                {categoriesFilter.map((category, index) => (
                    <SplideSlide key={index}>
                        <div
                            onClick={() => handleClick(category?.name, category?.id)}
                            className={`w-auto min-w-36 h-auto min-h-36 border-2 border-mainColor transition-all ease-in-out duration-300 cursor-pointer ${
                                activeTab === category?.name ? 'bg-mainColor text-white' : 'bg-[#FFFFFF] text-mainColor'
                            } hover:bg-mainColor hover:text-white flex flex-col justify-center items-center gap-4 px-1 py-1 rounded-3xl`}
                        >
                            <div className={`w-20 h-20 rounded-full flex items-center justify-center ${activeTab === category?.name ? 'bg-white' : 'bg-mainColor'}`}>
                                <img src={category.image_link} className="w-20 h-20 rounded-full" alt="category" />
                            </div>
                            <span className="text-lg">{category?.name || '-'}</span>
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default CategoriesScrollSection;

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setProducts, setProductsFilter } from '../../../Store/CreateSlices';

const CategoriesNavSection = () => {
       const dispatch = useDispatch();

       const categories = useSelector(state => state.categories?.data);
       const products = useSelector(state => state.products?.data);

       const [activeTab, setActiveTab] = useState('All');
       const [categoriesFilter, setCategoriesFilter] = useState([]);


       console.log('categories', categories)
       console.log('categories Filter', categoriesFilter)

       useEffect(() => {
              setCategoriesFilter(categories)
       }, [categories])

       const handleClick = (tabName, id) => {
              setActiveTab(tabName);
              filterProduct(id);
       };

       const filterProduct = (categoryId) => {
              if (!categoryId) {

                     dispatch(setProductsFilter(products))
              } else {

                     const newProduct = products.filter((product) => categoryId === product.category_id);
                     dispatch(setProductsFilter(newProduct))
                     console.log('newProduct', newProduct)
              }
              console.log('categoryId', categoryId)
       }
       return (
              <>
                     <div className="w-full flex flex-wrap items-center justify-start gap-3">
                            <div
                                   onClick={() => handleClick('All', '')}
                                   className={`w-auto border-2 border-mainColor transition-all ease-in-out duration-300 cursor-pointer ${activeTab === 'All' ? 'bg-mainColor text-white' : 'bg-white text-mainColor'} hover:bg-mainColor hover:text-white  flex justify-between items-center gap-4 px-3 py-1 rounded-full`}>
                                   <img src="/src/assets/Images/IconNavFilter.png"
                                          className='w-10 h-10 rounded-full'
                                          alt="category"
                                          loading='lazy'
                                   />
                                   <span className='text-xl'>All</span>
                            </div>
                            {categoriesFilter.map((category, index) => (
                                   <div
                                          key={index}
                                          onClick={() => handleClick(category?.name, category?.id)}
                                          className={`w-auto border-2 border-mainColor transition-all ease-in-out duration-300 cursor-pointer ${activeTab === category?.name ? 'bg-mainColor text-white' : 'bg-white text-mainColor'} hover:bg-mainColor hover:text-white  flex justify-between items-center gap-4 px-3 py-1 rounded-full`}>
                                          <img src={category.image_link}
                                                 className='w-10 h-10 rounded-full'
                                                 alt="category"
                                          />
                                          <span className='text-xl'>{category?.name || '-'}</span>
                                   </div>
                            ))}


                     </div>
              </>
       )
}

export default CategoriesNavSection
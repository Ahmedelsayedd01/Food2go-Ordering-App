import React from 'react'
import { FaHeart, FaPlus } from 'react-icons/fa'
import { LinkButton } from '../Components'
import { useAuth } from '../../Context/Auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setProductsFilter } from '../../Store/CreateSlices'

const CardItem = ({ product, index }) => {
       const auth = useAuth();
       const navigate = useNavigate();

       const dispatch = useDispatch();
       const products = useSelector(state => state.productsFilter.data);

       const handleFavorite = (id) => {
              if (!auth.user) {
                     navigate('/auth/login', { replace: true })
              } else {
                     const updatedProducts = products.map((p) =>
                            p.id === id ? { ...p, favourite: !p.favourite } : p
                     );
                     dispatch(setProductsFilter(updatedProducts));
                     console.log('updatedProducts', updatedProducts);
                     console.log('id', id);
              }
       }
       return (
              <div
                     className="flex flex-col min-h-[425px] max-h-[425px] items-start justify-between gap-y-2 bg-thirdBgColor rounded-2xl p-3 shadow-md sm:w-full md:w-[48%] lg:w-[48%] xl:w-[23%]"
                     key={index}
              >
                     {/* Image */}
                     <div className="relative rounded-xl min-h-56 max-h-56  w-full overflow-hidden shadow-md">
                            <img
                                   src={product?.image_link || '/src/assets/Images/RedLogo.jsx'}
                                   className=" w-full h-full object-cover object-center"
                                   alt="item"
                                   loading='lazy'
                            />
                            {/* Favorite Icon */}
                            <button className="absolute top-4 right-5">
                                   <FaHeart className={`${product.favourite ? 'text-mainColor' : 'text-white'} hover:text-mainColor transition-all duration-200 text-2xl`} onClick={() => handleFavorite(product.id)} />
                            </button>
                            {product.discount && (

                                   product.discount?.type === 'precentage' ? (
                                          <span className='absolute top-5 -left-28 -rotate-45 shadow-md text-center w-full bg-thirdBgColor text-mainColor text-xl font-TextFontMedium'>{product.discount?.amount || '0'}%</span>
                                   ) : (
                                          <span className='absolute top-5 -left-28 -rotate-45 shadow-md text-center w-full bg-thirdBgColor text-mainColor text-xl font-TextFontMedium'>{product.discount?.amount || '0'}$</span>
                                   )
                            )}
                     </div>

                     {/* Item Name */}
                     <span className='text-xl font-TextFontMedium text-mainColor '>
                            {product?.name || '-'}
                     </span>

                     {/* Item Description */}
                     <p className='w-full text-sm text-secoundColor font-TextFontRegular text-ellipsis overflow-hidden ...'>
                            {product.description}
                     </p>

                     {/* Item Amount */}
                     <div className="w-full flex items-center justify-start gap-x-2 ">
                            {product?.discount?.type === 'precentage' ? (
                                   <>
                                          <span className="text-xl text-mainColor font-TextFontMedium">
                                                 {(product.price - (product.price * (product.discount?.amount || 0) / 100)).toFixed(2)}$
                                          </span>
                                          <span className="text-xl text-secoundColor font-TextFontMedium line-through decoration-secoundColor">
                                                 {product?.price?.toFixed(2) || '0.00'}$
                                          </span>
                                   </>
                            ) : (
                                   <span className="text-xl text-mainColor font-TextFontMedium">
                                          {product?.price?.toFixed(2) || '0.00'}$
                                   </span>
                            )}

                     </div>


                     {/* Buttons */}
                     <div className="flex items-center justify-between w-full gap-3">
                            <div className="w-full flex items-center justify-center">
                                   <LinkButton width={true} to={`/product/${product.id}`} text="Order Now" />
                            </div>
                            {/* <button
                                   type="button"
                                   className="text-mainColor rounded-lg p-3 border-2 border-mainColor hover:bg-mainColor hover:text-white transition-all ease-in-out duration-300"
                            >
                                   <FaPlus />
                            </button> */}
                     </div>
              </div>
       )
}

export default CardItem
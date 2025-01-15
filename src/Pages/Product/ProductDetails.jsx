import React, { useEffect, useState } from 'react'
import { LuTimer } from 'react-icons/lu';
import { TbTruckDelivery } from 'react-icons/tb';
import { useParams } from 'react-router-dom'
import { TriStateCheckbox } from 'primereact/tristatecheckbox';
import { Checkbox, SubmitButton } from '../../Components/Components';
import { IoAddCircleSharp } from 'react-icons/io5';
import { IoIosRemoveCircle } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { setProductsCard } from '../../Store/CreateSlices';

const ProductDetails = () => {
       /* Product Id = 64 */
       const { productId } = useParams();
       const dispatch = useDispatch();
       const products = useSelector(state => state.productsFilter.data)
       const product = products.find((product) => product.id === Number(productId))

       const [productCard, setProductCard] = useState({})

       // State to track checked Exclude
       const [checkedExclude, setCheckedExclude] = useState([]);
       // State to track checked Extra
       const [checkedExtra, setCheckedExtra] = useState([]);
       // State to track checked Addons
       const [checkedAddons, setCheckedAddons] = useState([]);

       // State to track Varition Option
       const [options, setOptions] = useState([]);

       const handleCheckedExclude = (excludeId) => {
              setCheckedExclude((prev) => {
                     // Check if the Exclude is already selected
                     if (prev.includes(excludeId)) {
                            // If yes, remove it from the array
                            return prev.filter((id) => id !== excludeId);
                     } else {
                            // If not, add it to the array
                            return [...prev, excludeId];
                     }
              });
       };

       const handleCheckedExtra = (extraId, extraPrice) => {
              setCheckedExtra((prev) => {
                     const existingExtra = prev.find((extra) => extra.id === extraId);
                     if (existingExtra) {
                            // Remove the extra if it's already selected
                            return prev.filter((extra) => extra.id !== extraId);
                     } else {
                            // Add the extra with its price
                            return [...prev, { id: extraId, price: extraPrice }];
                     }
              });
       };

       const handleCheckedAddons = (addonId, addonPrice) => {
              setCheckedAddons((prev) => {
                     const existingAddon = prev.find((addon) => addon.id === addonId);
                     if (existingAddon) {
                            // Remove addon if it is already selected
                            return prev.filter((addon) => addon.id !== addonId);
                     } else {
                            // Add addon with an initial count of 1 and price
                            return [...prev, { id: addonId, count: 1, price: addonPrice }];
                     }
              });
       };

       const incrementCount = (addonId) => {
              setCheckedAddons((prev) =>
                     prev.map((addon) =>
                            addon.id === addonId ? { ...addon, count: addon.count + 1 } : addon
                     )
              );
       };

       const decrementCount = (addonId) => {
              setCheckedAddons((prev) =>
                     prev.reduce((result, addon) => {
                            if (addon.id === addonId) {
                                   // If count is greater than 1, decrement the count
                                   if (addon.count > 1) {
                                          result.push({ ...addon, count: addon.count - 1 });
                                   }
                                   // If count is 1, do not include the addon (remove it)
                            } else {
                                   // Keep all other addons unchanged
                                   result.push(addon);
                            }
                            return result;
                     }, [])
              );
       };

       const handleSetOption = (selectedOption) => {
              setOptions((prev) => {
                     const exists = prev.find((option) => option.id === selectedOption.id);
                     if (exists) {
                            // Remove the option if it already exists
                            return prev.filter((option) => option.id !== selectedOption.id);
                     } else {
                            // Add the option if it doesn't exist
                            return [...prev, selectedOption];
                     }
              });
       };

       // Calculate the total addon price
       const totalAddonPrice = checkedAddons.reduce(
              (total, addon) => total + addon.price * addon.count,
              0
       );
       // Calculate the total extra price
       const totalExtraPrice = checkedExtra.reduce((total, extra) => total + extra.price, 0);

       // Calculate the total option price
       const totalOptionsPrice = options.reduce((total, option) => total + option.price, 0);


       // Calculate the final product price including discounts and addons
       const discountedPrice = product?.discount?.type === 'precentage'
              ? product?.price - (product?.price * (product?.discount?.amount || 0)) / 100
              : product?.price;

       const finalPrice = (discountedPrice + totalAddonPrice + totalExtraPrice + totalOptionsPrice).toFixed(2);


       useEffect(() => { console.log('checkedExclude', checkedExclude) }, [checkedExclude])
       useEffect(() => { console.log('checkedExtra', checkedExtra) }, [checkedExtra])
       useEffect(() => { console.log('checkedAddons', checkedAddons) }, [checkedAddons])

       useEffect(() => { console.log('products', products) }, [products])
       useEffect(() => { console.log('product', product) }, [product])

       useEffect(() => { console.log('options', options) }, [options])

       const handleAddProduct = (product) => {

              const newProduct = {
                     id: product.id,
                     name: product.name,
                     description: product.description,
                     image: product.image_link,
                     extra: checkedExtra,
                     excludes: checkedExclude,
                     addons: checkedAddons,
                     total: finalPrice,
              };


              dispatch(setProductsCard(newProduct))
       }

       useEffect(() => { console.log('productCard', productCard) }, [productCard])

       return (
              <>
                     <div className="w-full flex sm:flex-col-reverse xl:flex-row sm:h-full items-start justify-between gap-7 ">
                            {/* Details Side */}
                            <div className="sm:w-full xl:w-6/12 sm:h-auto xl:h-full sm:pl-5 xl:pl-8 sm:pr-5 xl:pr-0 flex flex-col gap-y-6 xl:mt-12 ">
                                   {/* Title && Price */}
                                   <div className="w-full flex flex-col items-start gap-y-5">
                                          <span className='w-full sm:text-3xl xl:text-5xl font-TextFontMedium text-mainColor'>{product?.name || ''}</span>
                                          <div className="w-full flex items-center justify-start gap-x-2 ">
                                                 {product?.discount?.type === 'precentage' ? (
                                                        <>
                                                               <span className="sm:text-3xl lg:text-5xl text-mainColor font-TextFontMedium">
                                                                      {finalPrice}$
                                                               </span>
                                                               <span className="sm:text-3xl lg:text-5xl text-secoundColor font-TextFontMedium line-through decoration-secoundColor">
                                                                      {product?.price?.toFixed(2) || '0.00'}$
                                                               </span>
                                                        </>
                                                 ) : (
                                                        <span className="sm:text-3xl lg:text-5xl text-mainColor font-TextFontMedium">
                                                               {finalPrice}$
                                                        </span>
                                                 )}
                                          </div>
                                   </div>
                                   {/* Details && Description */}
                                   <div className="w-full flex flex-col items-start justify-start gap-y-4">
                                          <p className='text-2xl text-secoundColor font-TextFontRegular'>
                                                 <span className='text-mainColor font-TextFontMedium mr-1'>Ingridents:</span>
                                                 {product?.description}
                                          </p>
                                          {/* <p className='text-2xl text-secoundColor font-TextFontRegular '>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> */}
                                   </div>
                                   {/* Time && Type */}
                                   <div className="w-full flex items-center justify-start gap-x-3">
                                          <div className="flex items-center gap-2">
                                                 <TbTruckDelivery className=' text-3xl text-mainColor' />
                                                 <span className=' text-secoundColor text-3xl'>Free</span>
                                          </div>
                                          <div className="flex items-center gap-2">
                                                 <LuTimer className='text-mainColor text-3xl' />
                                                 <span className='text-secoundColor text-3xl'>20 min</span>
                                          </div>
                                   </div>
                                   {/* Extras */}
                                   {product?.extra?.length !== 0 && (
                                          <div className="w-full flex flex-col items-start justify-start ">
                                                 <span className='text-mainColor text-3xl font-TextFontRegular'>Extra:</span>
                                                 <div className="w-full flex items-center flex-wrap justify-start gap-3">
                                                        {product?.extra?.map((x, index) => (
                                                               <div className="flex items-center justify-center" key={index}>
                                                                      <Checkbox
                                                                             handleChecked={() => handleCheckedExtra(x.id, x.price)}
                                                                             isChecked={checkedExtra.some((extra) => extra.id === x.id)}
                                                                      />
                                                                      <span className="text-xl font-TextFontRegular text-secoundColor mt-3">
                                                                             {x?.name} - {x?.price?.toFixed(2)}$
                                                                      </span>
                                                               </div>
                                                        ))}

                                                 </div>
                                          </div>
                                   )}

                                   {/* Excludes */}
                                   {product?.excludes?.length !== 0 && (
                                          <div className="w-full flex flex-col items-start justify-start ">
                                                 <span className='text-mainColor text-3xl font-TextFontRegular'>Exclude:</span>
                                                 <div className="w-full flex items-center flex-wrap justify-start gap-3">
                                                        {product?.excludes?.map((exclude, index) => (

                                                               <div className="flex items-center justify-center"
                                                                      key={index}
                                                               >
                                                                      <Checkbox
                                                                             handleChecked={() => handleCheckedExclude(exclude.id)}
                                                                             isChecked={checkedExclude.includes(exclude.id)}
                                                                      />
                                                                      <span className='text-xl font-TextFontRegular text-secoundColor mt-3'>{exclude?.name}</span>
                                                               </div>
                                                        ))}
                                                 </div>
                                          </div>
                                   )}
                                   {/* Addons */}
                                   {product?.addons?.length !== 0 && (
                                          <div className="w-full flex flex-col items-start justify-start ">
                                                 <span className='text-mainColor text-3xl font-TextFontRegular'>Addons:</span>
                                                 <div className="w-full flex items-start flex-col justify-start gap-3">
                                                        {product?.addons.map((addon) => (
                                                               <div key={addon.id} className=" flex items-center justify-start gap-2">
                                                                      <Checkbox
                                                                             handleChecked={() => handleCheckedAddons(addon.id, addon.price)}
                                                                             isChecked={!!checkedAddons.find((item) => item.id === addon.id)}
                                                                      />

                                                                      <span className="text-xl font-TextFontRegular text-secoundColor mt-3">
                                                                             {addon?.name} - {addon?.price?.toFixed(2)}$
                                                                      </span>

                                                                      {checkedAddons.find((item) => item.id === addon.id) && (
                                                                             <div className="flex items-center justify-center mt-2 gap-2">
                                                                                    <IoAddCircleSharp
                                                                                           className="text-mainColor text-3xl cursor-pointer"
                                                                                           onClick={() => incrementCount(addon.id)}
                                                                                    />
                                                                                    <span className="text-mainColor text-2xl font-TextFontRegular">
                                                                                           {checkedAddons.find((item) => item.id === addon.id).count}
                                                                                    </span>
                                                                                    <IoIosRemoveCircle
                                                                                           className="text-mainColor text-3xl cursor-pointer"
                                                                                           onClick={() => decrementCount(addon.id)}
                                                                                    />
                                                                             </div>
                                                                      )}
                                                               </div>
                                                        ))}
                                                 </div>
                                          </div>
                                   )}
                                   {/* Variations */}
                                   {product?.variations?.length !== 0 && (
                                          <div className="w-full flex flex-col items-start justify-start gap-3">

                                                 {product?.variations.map((variation, index) => (
                                                        <div className="w-full flex items-center justify-start flex-wrap gap-2"
                                                               key={index}
                                                        >
                                                               <span className='text-mainColor text-3xl font-TextFontRegular'>{variation?.name}:</span>
                                                               <div className="w-full flex items-center flex-wrap justify-start gap-3">
                                                                      {variation?.options.map((option) => (
                                                                             <span
                                                                                    key={option.id}
                                                                                    className={`text-2xl font-TextFontRegular  border-2 border-mainColor rounded-xl py-2 px-3 cursor-pointer ${options.some((opt) => opt.id === option.id)
                                                                                           ? 'bg-mainColor text-white'
                                                                                           : 'bg-white text-mainColor '
                                                                                           }`}
                                                                                    onClick={() => handleSetOption(option)}
                                                                             >
                                                                                    {option.name}
                                                                             </span>
                                                                      ))}

                                                               </div>
                                                        </div>
                                                 ))}


                                          </div>
                                   )}
                                   {/* Add Product */}
                                   <div className="w-full flex items-center justify-between">
                                          <div className="w-8/12">
                                                 <SubmitButton text='Add To Card' handleClick={() => handleAddProduct(product)} />
                                          </div>

                                          {/* <div className="w-3/12 flex items-start justify-start gap-4">
                                                 <IoAddCircleSharp className='text-mainColor text-4xl cursor-pointer' />
                                                 <span className='text-mainColor text-3xl font-TextFontRegular'>1</span>
                                                 <IoIosRemoveCircle className='text-mainColor text-4xl cursor-pointer' />
                                          </div> */}

                                   </div>
                            </div>
                            {/* Image Side */}
                            <div className="mx-auto sm:w-11/12 lg:w-7/12 xl:w-6/12 sm:h-[61vh] xl:h-[91vh] flex items-center justify-center overflow-hidden bg-mainColor sm:rounded-tl-none xl:rounded-tl-full rounded-bl-full sm:rounded-br-full xl:rounded-br-none sm:px-6 xl:p-0">
                                   {/* <img src="/src/assets/Images/product?.png" className='sm:w-[20rem] xl:w-[25rem] sm:h-[25rem] xl:h-[30rem] rounded-full object-cover object-center' alt="product" /> */}
                                   <img src={product?.image_link} className='sm:w-[25rem] xl:w-[30rem] sm:h-[25rem] xl:h-[30rem] rounded-full object-cover object-center border-dashed border-4 border-white p-2' alt="product" />
                            </div>
                     </div>
              </>
       )
}

export default ProductDetails
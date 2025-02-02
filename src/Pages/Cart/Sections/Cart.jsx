import { useEffect, useState } from "react";
import DeleteIcon from "../../../assets/Icons/DeleteIcon";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { InputTextarea } from "primereact/inputtextarea";
import { useDispatch, useSelector } from "react-redux";
import { UpdateProductCard } from "../../../Store/CreateSlices";

const Cart = ({
       // id,
       suppId,
       image,
       name,
       description,
       note,
       productPriceBase,
       productPrice,
       passProductPrice,
       tax,
       discount,
       addons,
       options,
       taxType,
       onDelete,
}) => {
       const [openNote, setOpenNote] = useState(null);
       const [noteDes, setNoteDes] = useState('');

       const items = useSelector((state) => state?.productsCard?.data || []);
       const dispatch = useDispatch();


       const handleOpenNote = (id) => {
              setOpenNote(id);
              setNoteDes('');
       };
       const handleCloseNote = () => {
              setOpenNote(null);
              setNoteDes('');
       };
       const handleAddNote = () => {
              const updatedItems = items.map((item) =>
                     item.suppId === suppId ? { ...item, note: noteDes } : item
              );
              // Dispatch an action to update the state with updatedItems
              dispatch(UpdateProductCard(updatedItems));

              setOpenNote(null);
              setNoteDes('');
       };

       // useEffect(() => {
       //        {
       //               const updatedItems = items.map((item) =>
       //                      item.key === key ? { ...item, note: noteDes } : item
       //               );
       //               // Dispatch an action to update the state with updatedItems
       //               dispatch(UpdateProductCard(updatedItems));
       //        }
       // }, [noteDes])


       // // Calculate Total Food Price
       // const addonsPrice = addons.reduce((acc, addon) => acc + (Number(addon.price) || 0), 0);
       // // Calculate Total Food Price
       // const optionsPrice = options.reduce((acc, option) => acc + (Number(option.price) || 0), 0);

       // console.log('addonsPrice', addonsPrice)
       return (
              <div className="relative w-full sm:h-52 xl:h-60 flex flex-col sm:flex-row items-center gap-4 bg-mainBgColor p-4 rounded-xl shadow-md"
                     key={suppId}
              >
                     {/* Cart Image */}
                     <div className="relative h-full w-3/12 overflow-hidden rounded-xl shadow-md">
                            <img
                                   src={image || '/src/assets/Images/RedLogo.jsx'}
                                   className="w-full h-full object-cover object-center"
                                   alt="item"
                                   loading='lazy'
                            />
                            {/* Favorite Icon */}
                            {discount && (
                                   discount.type === 'precentage' ? (
                                          <span className='absolute top-6 -left-28 -rotate-45 text-center w-full bg-mainBgColor shadow-md text-mainColor sm:text-xl xl:text-2xl font-TextFontMedium'>{discount.amount || '0'}%</span>
                                   ) : (
                                          <span className='absolute top-7 -left-32 -rotate-45 text-center w-full bg-mainBgColor shadow-md text-mainColor sm:text-xl xl:text-2xl font-TextFontMedium'>{discount.amount || '0'}$</span>
                                   )
                            )}
                     </div>

                     {/* Cart Details */}
                     <div className="h-full w-6/12 flex flex-col items-start justify-between">
                            <span className="sm:text-xl lg:text-2xl xl:text-5xl text-mainColor sm:font-TextFontMedium">{name || 'No name available'}</span>
                            <p className="text-base sm:text-lg lg:text-xl text-secoundColor font-TextFontRegular line-clamp-3">
                                   {description || 'No description available.'}
                            </p>
                            <div className="flex items-center justify-start gap-2">
                                   <span className="sm:text-2xl lg:text-3xl text-mainColor font-TextFontSemiBold">
                                          {passProductPrice}$
                                   </span>
                            </div>
                     </div>

                     {/* Cart Actions */}
                     <div className="flex items-end justify-end sm:w-4/12 h-full">
                            <button
                                   className="w-full sm:w-auto sm:text-lg lg:text-xl text-white bg-mainColor px-6 py-2 rounded-2xl hover:bg-transparent hover:text-mainColor border-2 border-mainColor transition-all ease-in-out duration-300"
                                   onClick={() => handleOpenNote(suppId)}
                            >
                                   Add Note
                            </button>
                            {openNote === suppId && (
                                   <Dialog open={true} onClose={handleCloseNote} className="relative z-10" aria-labelledby="dialog-title">
                                          <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                                          <div className="fixed inset-0 z-10 overflow-y-auto">
                                                 <div className="flex items-center justify-center min-h-screen">
                                                        <DialogPanel className="relative rounded-2xl bg-white shadow-xl sm:w-10/12 sm:max-w-lg">
                                                               <div className="px-4 sm:p-6">
                                                                      <h2 id="dialog-title" className="sm:text-2xl xl:text-3xl font-TextFontMedium text-mainColor">
                                                                             Add Your Note
                                                                      </h2>
                                                                      <InputTextarea
                                                                             placeholder="Note ..." rows={4} cols={30}
                                                                             className="w-full mt-2 border-2 border-secoundColor rounded-xl p-2 focus:border-mainColor outline-none text-xl text-secoundColor sm:font-TextFontRegular xl:font-TextFontMedium"
                                                                             unstyled
                                                                             value={note || noteDes}
                                                                             onChange={(e) => setNoteDes(e.target.value)}
                                                                      />
                                                               </div>
                                                               <div className="px-4 pb-3 sm:flex sm:flex-row-reverse gap-x-4">
                                                                      <button
                                                                             type="button"
                                                                             onClick={handleCloseNote}
                                                                             className="mt-3 sm:mt-0 sm:w-auto rounded-md border-2 border-secoundColor px-4 py-2 text-sm font-TextFontMedium text-secoundColor bg-white hover:bg-gray-50"
                                                                      >
                                                                             Close
                                                                      </button>
                                                                      <button
                                                                             type="button"
                                                                             onClick={handleAddNote}
                                                                             className="mt-3 sm:mt-0 sm:w-auto rounded-md border-2 border-mainColor px-4 py-2 text-sm font-TextFontMedium text-white bg-mainColor hover:bg-white hover:text-mainColor transition-all duration-300"
                                                                      >
                                                                             Add
                                                                      </button>
                                                               </div>
                                                        </DialogPanel>
                                                 </div>
                                          </div>
                                   </Dialog>
                            )}
                     </div>

                     {/* Delete Icon */}
                     <div className="absolute top-3 right-3 cursor-pointer" onClick={() => onDelete(suppId)}>
                            <DeleteIcon width={40} height={40} />
                     </div>
                     {taxType === 'excluded' && tax && (
                            <div className="flex items-center absolute top-20 right-0 rounded-tl-2xl rounded-bl-2xl px-4 py-1 bg-mainColor ">
                                   <span className="sm:text-xl lg:text-2xl  text-white font-TextFontMedium">
                                          Tax: {tax.type === 'precentage' ? `${tax.amount}%` : `${tax.amount}$`}
                                   </span>
                            </div>
                     )}

              </div>
       );
};

export default Cart;

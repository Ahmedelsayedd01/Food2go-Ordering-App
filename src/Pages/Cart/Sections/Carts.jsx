import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import { useDispatch, useSelector } from 'react-redux';
import { removeProductsCard, setTotalPrice, UpdateOrder } from '../../../Store/CreateSlices';

const Carts = () => {

       const items = useSelector((state) => state?.productsCard?.data || []);
       const taxType = useSelector((state) => state?.taxType?.data || ''); // Check if tax is included or excluded
       const order = useSelector(state => state?.order?.data || {});
       const dispatch = useDispatch();

       const [totalFoodPrice, setTotalFoodPrice] = useState(0);
       const [tax, setTax] = useState(0);
       const [discount, setDiscount] = useState(0);

       // Handle item deletion
       const handleDelete = (productId) => {
              dispatch(removeProductsCard(productId));
       };

       // Calculate totals, discounts, and tax
       useEffect(() => {
              if (!items.length) {
                     setTotalFoodPrice(0);
                     setDiscount(0);
                     setTax(0);
                     return;
              }

              const calculateTotalPriceAddons = (items, key = 'price') =>
                     items.reduce((total, item) => total + (item?.[key] || 0) * item.count, 0);


              // Calculate Total Food Price
              const total = items.reduce((acc, item) => acc + (Number(item.passProductPrice) || 0), 0);


              // Calculate Tax (Percentage or Value)
              const calculatedTax = items.reduce((acc, item) => {
                     // Calculate the item's price and option and extra option 
                     const prices = item.passProductPrice;

                     if (item.tax?.type === 'precentage') {
                            return acc + (prices * (item.tax.amount / 100));
                     } else if (item.tax?.type === 'value') {
                            return acc + (Number(item.tax.amount) || 0);
                     }
                     return acc;
              }, 0);

              const calculatedDiscount = items.reduce((acc, item) => {
                     // Calculate the item's price without addons
                     const priceWithoutAddons = item.passProductPrice - calculateTotalPriceAddons(item.addons || []);

                     console.log('priceWithoutAddons', priceWithoutAddons)
                     if (item.discount?.type === 'precentage') {
                            // Apply percentage discount to the price without addons
                            return acc + (priceWithoutAddons * (item.discount.amount / 100));
                     } else if (item.discount?.type === 'value') {
                            // Add fixed value discount
                            return acc + (Number(item.discount.amount) || 0);
                     }
                     return acc; // No discount
              }, 0);


              // Round Tax
              const roundedTax = Math.round(calculatedTax * 100) / 100;

              // Update States
              setTotalFoodPrice(total);
              setTax(roundedTax);
              setDiscount(calculatedDiscount);
       }, [items]);

       const calculateTotal = () => {
              const baseTotal = (totalFoodPrice);
              // return taxType === 'excluded' ? baseTotal + tax : baseTotal;
              return taxType === 'excluded' ? (baseTotal + tax) - discount : baseTotal;
       };

       useEffect(() => {
              dispatch(UpdateOrder({ ...order, amount: calculateTotal(), total_tax: tax, total_discount: discount }))
       }, [items, tax, discount]);

       useEffect(() => {
              dispatch(setTotalPrice(calculateTotal()))
       }, [calculateTotal])

       return (
              <div className="w-full flex flex-col items-center justify-center gap-y-7">
                     {items.length > 0 ? (
                            items.map((item, index) => (
                                   <Cart
                                          id={item.id}
                                          suppId={item.numberId}
                                          key={item.numberId} // Key applied here
                                          image={item.image || "/assets/Images/RedLogo.png"}
                                          name={item.name}
                                          description={item.description}
                                          note={item.note}
                                          productPriceBase={item.passPrice}
                                          productPrice={item.total}
                                          passProductPrice={item.passProductPrice}
                                          discount={item.discount}
                                          tax={item.tax}
                                          addons={item.addons}
                                          options={item.options}
                                          taxType={taxType}
                                          onDelete={() => handleDelete(item.numberId)}
                                   />
                            ))
                     ) : (
                            <span className="text-mainColor text-2xl font-TextFontMedium">Your cart is empty</span>
                     )}

                     <div className="w-full flex flex-col items-start justify-start gap-3">
                            <span className="w-full text-3xl font-TextFontMedium text-mainColor">
                                   Total Food: {totalFoodPrice.toFixed(2)}$
                            </span>

                            {taxType === 'excluded' && (
                                   <span className="w-full text-3xl font-TextFontMedium text-mainColor">
                                          Tax: {tax.toFixed(2)}$
                                   </span>
                            )}

                            <span className="w-full text-3xl font-TextFontMedium text-mainColor">
                                   Discount: {discount.toFixed(2)}$
                            </span>

                            <div className="w-full py-3 border-t-2 border-mainColor">
                                   <span className="w-full text-4xl font-TextFontSemiBold text-mainColor">
                                          Total: {calculateTotal().toFixed(2)}$
                                   </span>
                            </div>
                     </div>
              </div>
       );
};

export default Carts;

import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { UploadInput } from '../../../Components/Components';

const PaymentMethods = () => {
       const ReciptRef = useRef(null);
       const CreditCards = useSelector(state => state.checkOutDetails.data.payment_methods);

       const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
       const [recipt, setRecipt] = useState('');
       const [reciptFile, setReciptFile] = useState(null);

       const handleReciptChange = (e) => {
              const file = e.target.files[0];
              if (file) {
                     setRecipt(file.name); // Set the file object in state
                     convertFileToBase64(file); // Convert file to Base64 and update `recipt`
              }
       };

       const handleReciptClick = () => {
              if (ReciptRef.current) {
                     ReciptRef.current.click(); // Trigger file input click
              }
       };

       const convertFileToBase64 = (file) => {
              const reader = new FileReader();
              reader.onloadend = () => {
                     const base64data = reader.result;
                     setReciptFile(base64data); // Update `recipt` with Base64 string
              };
              reader.readAsDataURL(file); // Read the file as a Base64 string
       };




       useEffect(() => { console.log('selectedPaymentMethod', selectedPaymentMethod) }, [selectedPaymentMethod])
       useEffect(() => { console.log('recipt', recipt) }, [recipt])
       useEffect(() => { console.log('reciptFile', reciptFile) }, [reciptFile])


       return (
              <>
                     <div className="w-full flex sm:flex-col xl:flex-row items-center justify-between border-mainColor border-[3px] rounded-2xl p-3">
                            <div className="sm:w-full xl:w-6/12">
                                   <p className="text-secoundColor text-3xl font-TextFontRegular mb-2">
                                          Choose Your Preferred <span className="text-mainColor">Payment Method</span>
                                   </p>
                                   <div className="">

                                          {CreditCards.map((card, index) => (
                                                 <div className="flex items-center justify-start gap-x-2 mb-2"
                                                        key={card.id}
                                                 >
                                                        <input
                                                               type="radio"
                                                               name="payment"
                                                               id={card.id}
                                                               style={{
                                                                      accentColor: '#9E090F',
                                                                      width: '20px',
                                                                      height: '20px',
                                                               }}
                                                               onChange={() => setSelectedPaymentMethod(card.id)}
                                                        />
                                                        <img src={card.logo_link} alt={card.name} className='w-10 h-10 object-cover object-center rounded-full' />
                                                        <label
                                                               htmlFor={card.id}
                                                               className="text-secoundColor text-2xl font-TextFontRegular"
                                                        >
                                                               {card.name}
                                                        </label>
                                                 </div>
                                          ))}

                                   </div>

                            </div>
                            <div className="sm:w-full xl:w-6/12">
                                   <div className="sm:w-full xl:w-3/4 flex sm:flex-col xl:flex-row sm:items-start xl:items-center justify-center gap-2">
                                          <span className="w-8/12 text-2xl font-TextFontRegular text-mainColor">Recipt Upload:</span>
                                          <UploadInput
                                                 value={recipt}
                                                 uploadFileRef={ReciptRef}
                                                 placeholder="Recipt Image"
                                                 handleFileChange={handleReciptChange}
                                                 onChange={(e) => setRecipt(e.target.value)}
                                                 onClick={() => handleReciptClick(ReciptRef)}
                                          />
                                   </div>
                            </div>
                     </div>
              </>
       )
}

export default PaymentMethods
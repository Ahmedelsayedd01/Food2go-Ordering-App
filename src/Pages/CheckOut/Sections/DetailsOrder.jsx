import { InputTextarea } from 'primereact/inputtextarea';
import React, { useEffect, useState } from 'react'
import { Checkbox, TimeInput } from '../../../Components/Components';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateOrder } from '../../../Store/CreateSlices';

const DetailsOrder = () => {

       const dispatch = useDispatch();
       const order = useSelector(state => state?.order?.data || {});

       const [note, setNote] = useState('');
       const [deliveryTime, setDeliveryTime] = useState('');
       const [checkedTimeNow, setCheckedTimeNow] = useState(false);

       const handleDeliveryTime = (e) => {
              const time = e.target.value;
              const [hour, minute, second = '00'] = time.split(':').map(Number);
              if (hour < 0 || hour > 23 || minute < 0 || minute > 59 || second < 0 || second > 59) {
                     console.error('The specified value "' + time + '" does not conform to the required format.');
                     return;
              }
              setCheckedTimeNow(false);
              setDeliveryTime(time);
              console.log(time);
       };

       const handleCheckedTimeNow = () => {
              const time = new Date();
              const hour = String(time.getHours()).padStart(2, '0');
              const minute = String(time.getMinutes()).padStart(2, '0');
              const second = String(time.getSeconds()).padStart(2, '0');

              setCheckedTimeNow(!checkedTimeNow);
              setDeliveryTime(`${hour}:${minute}:${second}`);
              console.log(`${hour}:${minute}:${second}`);
       };

       useEffect(() => {
              dispatch(UpdateOrder({ ...order, notes: note, date: deliveryTime }))
       }, [note, deliveryTime])

       return (
              <>
                     <div className="w-full flex sm:flex-col xl:flex-row items-center justify-between gap-5 border-mainColor border-[3px] rounded-2xl p-3">
                            <div className="sm:w-full xl:w-6/12 flex flex-col items-start justify-start gap-1">
                                   <span className="text-secoundColor text-3xl font-TextFontRegular mb-2">
                                          Note
                                   </span>
                                   <InputTextarea
                                          placeholder="Your Note ..." rows={4} cols={30}
                                          className="w-full mt-2 border-2 border-secoundColor rounded-xl p-2 focus:border-mainColor outline-none text-xl text-secoundColor sm:font-TextFontRegular xl:font-TextFontMedium"
                                          unstyled
                                          value={note}
                                          onChange={(e) => setNote(e.target.value)}
                                   />

                            </div>
                            <div className="sm:w-full xl:w-6/12 flex flex-col items-start justify-center gap-3">
                                   {/* <span className="text-secoundColor text-3xl font-TextFontRegular mb-2">
                                          Contact information
                                   </span>
                                   <div className="">


                                   </div> */}
                                   <div className="w-full flex items-center justify-between gap-2">
                                          <span className='w-4/12  text-secoundColor text-2xl font-TextFontRegular'>Delivery Time:</span>
                                          <TimeInput
                                                 value={deliveryTime}
                                                 onChange={handleDeliveryTime}
                                          />
                                   </div>

                                   <div className="w-full flex items-center justify-end">
                                          <Checkbox
                                                 handleChecked={handleCheckedTimeNow}
                                                 isChecked={checkedTimeNow}
                                          />
                                          <span className='mt-3 text-secoundColor text-2xl font-TextFontRegular'>Delivery Now</span>

                                   </div>
                            </div>
                     </div>
              </>
       )
}

export default DetailsOrder
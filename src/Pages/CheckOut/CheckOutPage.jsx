import React, { useState } from 'react'
import { EmailInput, HeaderNavigate, NumberInput, Switch, TextInput } from '../../Components/Components'
import { Checkbox } from 'primereact/checkbox';
import { SiVisa, SiVodafone } from 'react-icons/si';
import FawryIcon from '../../assets/Icons/FawryIcon';
import { RadioButton } from 'primereact/radiobutton';
import { MdOutlineEmail } from 'react-icons/md';
import { CiUser } from 'react-icons/ci';
import { FiPhone } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import ButtonAdd from '../../Components/Buttons/AddButton';

const CheckOutPage = () => {
       // const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

       // const paymentMethods = [
       //        { id: 'visa', label: 'Visa', icon: <SiVisa className='text-mainColor' /> },
       //        { id: 'vodafone', label: 'Vodafone Cash', icon: <SiVodafone className='text-mainColor' /> },
       //        { id: 'fawry', label: 'Fawry', icon: <FawryIcon /> },
       // ];

       const categories = [
              { name: 'Visa', key: 'V', icon: <SiVisa className='text-mainColor' /> },
              { name: 'Vodafone', key: 'Vo', icon: <SiVodafone className='text-mainColor' /> },
              { name: 'Fawry', key: 'F', icon: <FawryIcon /> },
       ];
       const [cardNum, setCardNum] = useState('')
       const [cardHolder, setCardHolder] = useState('')
       const [expiryDate, setExpiryDate] = useState('')
       const [securityCode, setSecurityCode] = useState('')
       const [checked, setChecked] = useState(0)

       const [userName, setUserName] = useState('')
       const [userEmail, setUserEmail] = useState('')
       const [userPhone, setUserPhone] = useState('')

       const [deliveryTime, setDeliveryTime] = useState(0)
       const [deliveryNow, setDeliveryNow] = useState(0)

       const [selectedCategory, setSelectedCategory] = useState(categories[1]);

       const [orderTypes, setOrderTypes] = useState(['Dine In', 'Delivery', 'Take Away']);

       const [selectedOrderType, setSelectedOrderType] = useState("Dine In");
       const [selectedBranch, setSelectedBranch] = useState("miami");
       const [selectedLocation, setSelectedLocation] = useState("home");
       const [deliveryToHome, setDeliveryToHome] = useState(true);

       const branches = [
              { id: "miami", name: "Miami", address: "2464 Royal Ln. Mesa, New Jersey 45463", icon: "fa-solid fa-store" },
              { id: "sumuhih", name: "Sumuhih", address: "3891 Ranchview Dr. Richardson, California 62639", icon: "fa-solid fa-store" },
       ];

       const locations = [
              { id: "home", name: "Home", address: "2464 Royal Ln. Mesa, New Jersey 45463", icon: "fa-solid fa-house" },
              { id: "work", name: "Work", address: "3891 Ranchview Dr. Richardson, California 62639", icon: "fa-solid fa-briefcase" },
       ];

       return (
              <>
                     <div className="w-11/12 mx-auto pt-5">
                            <HeaderNavigate
                                   title={'Checkout'}
                            />
                            <div className="w-full flex flex-col items-center gap-y-4">
                                   {/* Payment Type */}
                                   <div className="w-full p-5 flex items-start justify-between rounded-xl border-2 border-mainColor mt-8">
                                          {/* Types */}
                                          <div className="sm:w-full xl:w-6/12 flex flex-col gap-y-3">
                                                 <p className="text-secoundColor text-3xl font-TextFontRegular mb-2">
                                                        Choose Your Preferred <span className="text-mainColor">Payment Method</span>
                                                 </p>
                                                 {/* Payment Method */}

                                                 {/* <div className="flex flex-col gap-4">
                                                        {paymentMethods.map((method) => (
                                                               <div key={method.id} className="flex items-center gap-2">
                                                                      <input
                                                                             type="radio"
                                                                             id={method.id}
                                                                             name="paymentMethod"
                                                                             value={method.id}
                                                                             checked={selectedPaymentMethod === method.id}
                                                                             onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                                                                             className="cursor-pointer"
                                                                      />
                                                                      <label htmlFor={method.id} className="flex items-center gap-2 cursor-pointer">
                                                                             <span className='text-4xl'>{method.icon}</span>
                                                                             <span className={`${selectedPaymentMethod === method.id ? 'font-TextFontSemiBold' : ''} text-3xl font-TextFontRegular text-mainColor`}>
                                                                                    {method.label}
                                                                             </span>
                                                                      </label>
                                                               </div>
                                                        ))}
                                                 </div> */}

                                                 <div className="flex justify-start">
                                                        <div className="flex flex-col gap-3">
                                                               {categories.map((category) => {
                                                                      return (
                                                                             <div key={category.key} className="flex items-center gap-x-5">
                                                                                    <div className="border-2 border-mainColor rounded-full flex justify-center ">
                                                                                           <RadioButton inputId={category.key} name="category" value={category} onChange={(e) => setSelectedCategory(e.value)} checked={selectedCategory.key === category.key} />
                                                                                    </div>
                                                                                    {category.icon}
                                                                                    <label htmlFor={category.key} className="ml-2">{category.name}</label>
                                                                             </div>
                                                                      );
                                                               })}
                                                        </div>
                                                 </div>

                                          </div>
                                          {/* Details */}
                                          <div className="sm:w-full xl:w-4/12 flex flex-col gap-y-3">
                                                 <span className='text-secoundColor text-3xl font-TextFontRegular mb-2'>Enter Payment Details</span>
                                                 <div className="w-full flex flex-col items-center gap-y-5">
                                                        <TextInput
                                                               onChange={e => setCardNum(e.target.vale)}
                                                               placeholder='Card Number'
                                                        />
                                                        <TextInput
                                                               onChange={e => setCardHolder(e.target.vale)}
                                                               placeholder='Card Holder'
                                                        />
                                                        <div className="w-full flex sm:flex-col xl:flex-row  justify-between items-center gap-3">
                                                               <TextInput
                                                                      onChange={e => setExpiryDate(e.target.vale)}
                                                                      placeholder='Expiry Date'
                                                               />
                                                               <TextInput
                                                                      onChange={e => setSecurityCode(e.target.vale)}
                                                                      placeholder='Security Code'
                                                               />

                                                        </div>
                                                        <div className="w-full flex items-center justify-center gap-4">
                                                               <Switch
                                                                      handleClick={e => setChecked(e.checked)}
                                                                      checked={checked}
                                                               />

                                                               <span className='mt-2 text-2xl text-mainColor font-TextFontRegular'>Save wallet information</span>
                                                        </div>
                                                 </div>
                                          </div>
                                   </div>
                                   {/* Order Type */}
                                   <div className="w-full p-5 flex flex-col items-center justify-center rounded-xl border-2 border-mainColor">
                                          <div className="w-full flex items-center justify-center gap-4">
                                                 {orderTypes.map((orderType) => (
                                                        <span key={orderType} className={`${selectedOrderType == orderType ? ('bg-mainColor text-white ') : ('bg-white text-mainColor hover:text-white hover:bg-mainColor')} text-2xl font-TextFontRegular px-4 py-2 rounded-full cursor-pointer border-2 border-mainColor
                                                          transition-all duration-200`}
                                                               onClick={() => setSelectedOrderType(orderType)}
                                                        >{orderType}</span>
                                                 ))}
                                          </div>
                                          <div className="w-full p-5 flex items-start justify-between gap-5">

                                                 {/* Nearest Branch Section */}
                                                 <div className="flex-1">
                                                        <span className="text-secoundColor text-3xl font-TextFontRegular mb-2">Choose The Nearest Branch</span>
                                                        <div className="flex flex-col gap-4 mt-2 ">
                                                               {branches.map((branch) => (
                                                                      <div
                                                                             key={branch.id}
                                                                             className={`p-4 rounded-lg border-2 cursor-pointer ${selectedBranch === branch.id ? "bg-mainColor text-white" : "border-mainColor"
                                                                                    }`}
                                                                             onClick={() => setSelectedBranch(branch.id)}
                                                                      >
                                                                             <div className="flex items-center gap-2">
                                                                                    <i className={`${branch.icon} text-2xl`}></i>
                                                                                    <div>
                                                                                           <h4 className="font-bold">{branch.name}</h4>
                                                                                           <p className="text-sm">{branch.address}</p>
                                                                                    </div>
                                                                             </div>
                                                                      </div>
                                                               ))}
                                                        </div>
                                                        <div className="mt-4">
                                                               <input
                                                                      type="checkbox"
                                                                      id="deliveryToHome"
                                                                      className="mr-2"
                                                                      checked={deliveryToHome}
                                                                      onChange={(e) => setDeliveryToHome(e.target.checked)}
                                                               />
                                                               <label htmlFor="deliveryToHome" className="text-xl font-TextFontRegular text-mainColor">Delivery To My Home</label>
                                                        </div>
                                                 </div>

                                                 {/* Delivery Location Section */}
                                                 <div className="flex-1">
                                                        <span className="text-secoundColor text-3xl font-TextFontRegular mb-2">Choose Delivery Location</span>
                                                        <div className="flex flex-col gap-4 mt-2">
                                                               {locations.map((location) => (
                                                                      <div
                                                                             key={location.id}
                                                                             className={`p-4 rounded-lg border-2 cursor-pointer ${selectedLocation === location.id ? "bg-mainColor text-white" : "border-mainColor"
                                                                                    }`}
                                                                             onClick={() => setSelectedLocation(location.id)}
                                                                      >
                                                                             <div className="flex items-center justify-between">
                                                                                    <div className="flex items-center gap-2">
                                                                                           <i className={`${location.icon} text-2xl`}></i>
                                                                                           <div>
                                                                                                  <h4 className="font-bold">{location.name}</h4>
                                                                                                  <p className="text-sm">{location.address}</p>
                                                                                           </div>
                                                                                    </div>
                                                                                    <div className="flex gap-2">
                                                                                           <button className="text-gray-300">
                                                                                                  <i className="fa-solid fa-pen"></i>
                                                                                           </button>
                                                                                           <button className="text-gray-300">
                                                                                                  <i className="fa-solid fa-trash"></i>
                                                                                           </button>
                                                                                    </div>
                                                                             </div>
                                                                      </div>
                                                               ))}
                                                               <div className="flex justify-end">

                                                                      <ButtonAdd
                                                                      text='Add Another Location'
                                                                             BgColor='mainColor'
                                                                             Color='white'
                                                                             iconColor='white'
                                                                      />
                                                               </div>
                                                        </div>
                                                 </div>
                                          </div>
                                   </div>
                                   {/* Contact information */}
                                   <div className="w-full p-5 flex items-start justify-between rounded-xl border-2 border-mainColor ">
                                          {/* Information */}
                                          <div className="sm:w-full xl:w-6/12 flex flex-col gap-y-3">
                                                 <span className="text-secoundColor text-3xl font-TextFontRegular mb-2">
                                                        Contact Information
                                                 </span>

                                                 <div className="w-full  flex flex-col items-center justify-center gap-y-5">
                                                        <div className='w-8/12 flex items-center justify-start gap-4'>
                                                               <CiUser className='text-mainColor text-4xl' />
                                                               <TextInput
                                                                      onChange={e => setUserName(e.target.value)}
                                                                      placeholder='User Name'
                                                               />
                                                        </div>
                                                        <div className='w-8/12 flex items-center justify-start gap-4'>
                                                               <MdOutlineEmail className='text-mainColor text-4xl' />
                                                               <EmailInput
                                                                      onChange={e => setUserEmail(e.target.value)}
                                                                      placeholder='User Email'
                                                               />
                                                        </div>
                                                        <div className='w-8/12 flex items-center justify-start gap-4'>
                                                               <FiPhone className='text-mainColor text-4xl' />
                                                               <NumberInput
                                                                      backgound='secoundBgColor'
                                                                      onChange={e => setUserPhone(e.target.value)}
                                                                      placeholder='User Phone'
                                                               />
                                                        </div>
                                                 </div>


                                          </div>
                                          {/* Commint */}
                                          <div className="sm:w-full xl:w-4/12 flex flex-col gap-y-3">
                                                 <span className='text-secoundColor text-3xl font-TextFontRegular mb-2'>Note</span>
                                                 <div className="w-full flex flex-col items-center gap-y-5">
                                                        <TextInput
                                                               onChange={e => setNote(e.target.vale)}
                                                               placeholder='Note'
                                                        />
                                                        <TextInput
                                                               onChange={e => setDeliveryTime(e.target.vale)}
                                                               placeholder='Delivery Time'
                                                        />
                                                        <div className="w-full flex items-center justify-start gap-4">
                                                               <Switch
                                                                      handleClick={e => setDeliveryNow(e.checked)}
                                                                      checked={deliveryNow}
                                                               />

                                                               <span className='mt-2 text-2xl text-mainColor font-TextFontRegular'>Delivery Now</span>
                                                        </div>
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                     </div >
              </>
       )
}

export default CheckOutPage
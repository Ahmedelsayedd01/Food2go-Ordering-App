import React, { useState } from 'react';
import { GiSettingsKnobs } from 'react-icons/gi';

const DealsOfferSection = () => {
       const [activeTab, setActiveTab] = useState('Deals');

       const handleClick = (tabName) => {
              setActiveTab(tabName);
       };

       return (
              <div className="w-full flex flex-wrap items-center justify-start gap-5">
                     <div
                            className={`w-auto border-2 border-mainColor hover:bg-mainColor hover:text-white transition-all ease-in-out duration-300 cursor-pointer px-3 py-2 rounded-full flex justify-between items-center gap-4 ${activeTab === 'Deals' ? 'bg-mainColor text-white' : 'bg-white text-mainColor'
                                   }`}
                            onClick={() => handleClick('Deals')}
                     >
                            <GiSettingsKnobs
                                   className='text-2xl transform rotate-90'
                            />
                            <span className="text-2xl">Deals</span>
                     </div>
                     <div
                            className={`w-auto border-2 border-mainColor hover:bg-mainColor hover:text-white transition-all ease-in-out duration-300 cursor-pointer px-3 py-2 rounded-full flex justify-between items-center gap-4 ${activeTab === 'Bestsellers' ? 'bg-mainColor text-white' : 'bg-white text-mainColor'
                                   }`}
                            onClick={() => handleClick('Bestsellers')}
                     >
                            <GiSettingsKnobs
                                   className='text-2xl transform rotate-90'
                            />
                            <span className="text-2xl">Bestsellers</span>
                     </div>
                     <div
                            className={`w-auto border-2 border-mainColor hover:bg-mainColor hover:text-white transition-all ease-in-out duration-300 cursor-pointer px-3 py-2 rounded-full flex justify-between items-center gap-4 ${activeTab === 'Highest To Lowest Rating' ? 'bg-mainColor text-white' : 'bg-white text-mainColor'
                                   }`}
                            onClick={() => handleClick('Highest To Lowest Rating')}
                     >
                            <GiSettingsKnobs
                                   className='text-2xl transform rotate-90'
                            />
                            <span className="text-2xl">Highest To Lowest Rating</span>
                     </div>
                     <div
                            className={`w-auto border-2 border-mainColor hover:bg-mainColor hover:text-white transition-all ease-in-out duration-300 cursor-pointer px-3 py-2 rounded-full flex justify-between items-center gap-4 ${activeTab === 'Lowest To Highest Rating' ? 'bg-mainColor text-white' : 'bg-white text-mainColor'
                                   }`}
                            onClick={() => handleClick('Lowest To Highest Rating')}
                     >
                            <GiSettingsKnobs
                                   className='text-2xl transform rotate-90'
                            />
                            <span className="text-2xl">Lowest To Highest Rating</span>
                     </div>
                     <div
                            className={`w-auto border-2 border-mainColor hover:bg-mainColor hover:text-white transition-all ease-in-out duration-300 cursor-pointer px-3 py-2 rounded-full flex justify-between items-center gap-4 ${activeTab === 'Lowest To Highest Price' ? 'bg-mainColor text-white' : 'bg-white text-mainColor'
                                   }`}
                            onClick={() => handleClick('Lowest To Highest Price')}
                     >
                            <GiSettingsKnobs
                                   className='text-2xl transform rotate-90'
                            />
                            <span className="text-2xl">Lowest To Highest Price</span>
                     </div>
                     <div
                            className={`w-auto border-2 border-mainColor hover:bg-mainColor hover:text-white transition-all ease-in-out duration-300 cursor-pointer px-3 py-2 rounded-full flex justify-between items-center gap-4 ${activeTab === 'Highest To Lowest Price' ? 'bg-mainColor text-white' : 'bg-white text-mainColor'
                                   }`}
                            onClick={() => handleClick('Highest To Lowest Price')}
                     >
                            <GiSettingsKnobs
                                   className='text-2xl transform rotate-90'
                            />
                            <span className="text-2xl">Highest To Lowest Price</span>
                     </div>
              </div>
       );
};

export default DealsOfferSection;

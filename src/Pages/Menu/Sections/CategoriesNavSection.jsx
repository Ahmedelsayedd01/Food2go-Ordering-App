import React, { useState } from 'react'

const CategoriesNavSection = () => {
       const [activeTab, setActiveTab] = useState('All');

       const handleClick = (tabName) => {
              setActiveTab(tabName);
       };
       return (
              <>
                     <div className="w-full flex flex-wrap items-center justify-start gap-5">
                            <div
                                   onClick={() => handleClick('All')}
                                   className={`w-auto border-2 border-mainColor transition-all ease-in-out duration-300 cursor-pointer ${activeTab === 'All' ? 'bg-mainColor text-white' : 'bg-white text-mainColor'} hover:bg-mainColor hover:text-white  flex justify-between items-center gap-4 px-3 py-2 rounded-full`}>
                                   <img src="/src/assets/Images/IconNavFilter.png"
                                          className='w-10 h-10'
                                          alt="category"
                                   />
                                   <span className='text-2xl'>All</span>
                            </div>
                            <div
                                   onClick={() => handleClick('Burger')}
                                   className={`w-auto border-2 border-mainColor transition-all ease-in-out duration-300 cursor-pointer ${activeTab === 'Burger' ? 'bg-mainColor text-white' : 'bg-white text-mainColor'} hover:bg-mainColor hover:text-white  flex justify-between items-center gap-4 px-3 py-2 rounded-full`}>
                                   <img src="/src/assets/Images/IconNavFilter.png"
                                          className='w-10 h-10'
                                          alt="category"
                                   />
                                   <span className='text-2xl'>Burger</span>
                            </div>
                            <div
                                   onClick={() => handleClick('Pastries')}
                                   className={`w-auto border-2 border-mainColor transition-all ease-in-out duration-300 cursor-pointer ${activeTab === 'Pastries' ? 'bg-mainColor text-white' : 'bg-white text-mainColor'} hover:bg-mainColor hover:text-white  flex justify-between items-center gap-4 px-3 py-2 rounded-full`}>
                                   <img src="/src/assets/Images/IconNavFilter.png"
                                          className='w-10 h-10'
                                          alt="category"
                                   />
                                   <span className='text-2xl'>Pastries</span>
                            </div>
                            <div
                                   onClick={() => handleClick('Candies')}
                                   className={`w-auto border-2 border-mainColor transition-all ease-in-out duration-300 cursor-pointer ${activeTab === 'Candies' ? 'bg-mainColor text-white' : 'bg-white text-mainColor'} hover:bg-mainColor hover:text-white  flex justify-between items-center gap-4 px-3 py-2 rounded-full`}>
                                   <img src="/src/assets/Images/IconNavFilter.png"
                                          className='w-10 h-10'
                                          alt="category"
                                   />
                                   <span className='text-2xl'>Candies</span>
                            </div>
                            <div
                                   onClick={() => handleClick('Pasta')}
                                   className={`w-auto border-2 border-mainColor transition-all ease-in-out duration-300 cursor-pointer ${activeTab === 'Pasta' ? 'bg-mainColor text-white' : 'bg-white text-mainColor'} hover:bg-mainColor hover:text-white  flex justify-between items-center gap-4 px-3 py-2 rounded-full`}>
                                   <img src="/src/assets/Images/IconNavFilter.png"
                                          className='w-10 h-10'
                                          alt="category"
                                   />
                                   <span className='text-2xl'>Pasta</span>
                            </div>
                            <div
                                   onClick={() => handleClick('Pizza')}
                                   className={`w-auto border-2 border-mainColor transition-all ease-in-out duration-300 cursor-pointer ${activeTab === 'Pizza' ? 'bg-mainColor text-white' : 'bg-white text-mainColor'} hover:bg-mainColor hover:text-white  flex justify-between items-center gap-4 px-3 py-2 rounded-full`}>
                                   <img src="/src/assets/Images/IconNavFilter.png"
                                          className='w-10 h-10'
                                          alt="category"
                                   />
                                   <span className='text-2xl'>Pizza</span>
                            </div>
                            <div
                                   onClick={() => handleClick('Meat')}
                                   className={`w-auto border-2 border-mainColor transition-all ease-in-out duration-300 cursor-pointer ${activeTab === 'Meat' ? 'bg-mainColor text-white' : 'bg-white text-mainColor'} hover:bg-mainColor hover:text-white  flex justify-between items-center gap-4 px-3 py-2 rounded-full`}>
                                   <img src="/src/assets/Images/IconNavFilter.png"
                                          className='w-10 h-10'
                                          alt="category"
                                   />
                                   <span className='text-2xl'>Meat</span>
                            </div>
                            <div
                                   onClick={() => handleClick('Chickens')}
                                   className={`w-auto border-2 border-mainColor transition-all ease-in-out duration-300 cursor-pointer ${activeTab === 'Chickens' ? 'bg-mainColor text-white' : 'bg-white text-mainColor'} hover:bg-mainColor hover:text-white  flex justify-between items-center gap-4 px-3 py-2 rounded-full`}>
                                   <img src="/src/assets/Images/IconNavFilter.png"
                                          className='w-10 h-10'
                                          alt="category"
                                   />
                                   <span className='text-2xl'>Chickens</span>
                            </div>


                     </div>
              </>
       )
}

export default CategoriesNavSection
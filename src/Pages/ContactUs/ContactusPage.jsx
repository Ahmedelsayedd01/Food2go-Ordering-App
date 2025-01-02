import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import image from '../../assets/Images/contact.png'

const ContactusPage = () => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [describtion ,setDescribtion]= useState('')
  return (
<div className="flex flex-wrap min-h-screen items-center justify-center">
  
  <div className="contact-left w-full md:w-1/2 flex flex-col p-10">
    <div className="title mb-8">
      <h2 className="text-3xl font-bold">We are happy to answer your</h2>
      <h2 className="text-3xl font-bold">questions at any time.</h2>
    </div>
    <form action="" className="flex flex-col space-y-6">
      <input 
        type="text" 
        placeholder="Full Name" 
        className="bg-gray-200 p-4 rounded-lg w-[60%] focus:outline-none focus:ring-2 focus:ring-mainColor" 
      />
      <input 
        type="email" 
        placeholder="Email" 
        className="bg-gray-200 p-4 rounded-lg w-[60%] focus:outline-none focus:ring-2 focus:ring-mainColor" 
      />
      <input 
        type="text" 
        placeholder="Description" 
        className="bg-gray-200 p-4 rounded-lg w-[60%] focus:outline-none focus:ring-2 focus:ring-mainColor" 
      />
      <Link 
        to={''} 
        className='self-start sm:text-xl xl:text-2xl text-center w-[60%] text-white bg-mainColor px-16
                    py-2 rounded-2xl hover:bg-transparent hover:text-mainColor border-2
                    border-mainColor transition-all ease-in-out duration-300'>
        Send
      </Link>
    </form>
  </div>

 
  <div className="contact-right w-full md:w-1/2 flex items-center justify-center p-10">
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
      <img 
        src={image}
        alt="Contact Us" 
        className="w-full h-full object-cover rounded-lg" 
      />
    </div>
  </div>
</div>
  )
}

export default ContactusPage
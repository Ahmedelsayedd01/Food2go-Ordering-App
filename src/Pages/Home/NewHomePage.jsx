import React from "react";
import RedLogo from '../../assets/Images/RedLogo'
import MenuIcon from "../../assets/Icons/MenuIcon";
import DashIcon from "../../assets/Icons/DashIcon";
import AppleIcon from "../../assets/Icons/AppleIcon";
import GooglePlayIcon from "../../assets/Icons/GooglePlayIcon";
import mainLogo from '../../assets/Images/mainLogo.jpeg'
import { Link } from "react-router-dom";
const NewHomePage=()=>{
    return(
        <div>
         <div className={`w-full h-full flex flex-col md:flex-row pb-0 p-2 md:p-6 justify-center`}>

            <div className={`w-full md:w-1/2 h-full flex flex-col items-center`}>
                <RedLogo width={180} height={180} />
                {/* <h1 className="text-2xl font-semibold text-mainColor">Food2go</h1> */}
                 <div className="flex items-center justify-center gap-2">
                    <h1 className="text-mainColor font-semibold text-2xl">Food2go</h1>
                    {/* <img src={mainLogo} className="w-24 h-24" alt="Main Logo" /> */}
                </div>
            </div>

            <div className={`w-full md:w-1/2 h-full flex flex-col gap-3 p-4 items-center justify-center`}>
                <div className="flex gap-5">
                    <Link to="/menu" className="bg-[#9E090F1A] flex flex-col gap-3  items-center justify-center rounded-xl p-2 md:p-6">
                        <MenuIcon/>
                        <h1 className="text-2xl text-mainColor">Menu</h1>
                    </Link>
                    <Link to="/menu" className="bg-[#9E090F1A] flex flex-col gap-3  items-center justify-center rounded-xl p-2 md:p-6">
                        <DashIcon/>
                        <h1 className="text-2xl text-mainColor">Order Now</h1>
                    </Link>      
                </div>

                <div className="flex gap-1 p-4">
                    <Link>
                        <GooglePlayIcon/>
                        {/* <h1 className="text-2xl text-mainColor">Menu</h1> */}
                    </Link>
                    <Link>
                        <AppleIcon/>
                        {/* <h1 className="text-2xl text-mainColor">Order Now</h1> */}
                    </Link>      
                </div>
            </div>
        </div>

        <Link to="https://food2go.online/" target="_blank" className="flex items-center justify-center gap-2">
            <h1 className="text-gray-600">Powered by</h1>
            <img src={mainLogo} className="w-16 h-16" alt="Main Logo" />
        </Link>
        </div>
    )
}

export default NewHomePage;
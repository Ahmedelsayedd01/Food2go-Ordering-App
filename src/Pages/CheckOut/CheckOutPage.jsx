import React, { useState } from 'react'
import { HeaderNavigate, SubmitButton } from '../../Components/Components'
import Locations from './Sections/Locations'
import PaymentMethods from './Sections/PaymentMethods'
import DetailsOrder from './Sections/DetailsOrder'

const CheckOutPage = () => {

       const handleSendOrder = () => { };
       return (
              <>
                     <div className="w-11/12 mx-auto flex flex-col items-start justify-start gap-y-4 pt-4">
                            <HeaderNavigate
                                   title={'Checkout'}
                            />
                            <PaymentMethods />
                            <Locations />
                            <DetailsOrder />
                            <div className="w-full flex items-center justify-end">
                                   <div className="">
                                          <SubmitButton text={'Place Order'} handleClick={handleSendOrder} />
                                   </div>
                            </div>
                     </div>
              </>
       )
}

export default CheckOutPage
import React from 'react'
import Cart from './Cart'

const Carts = () => {
       return (
              <>
                     <div className='w-full flex flex-col items-center justify-center gap-y-7'>
                            <Cart />
                            <Cart />
                            <span className='w-full text-5xl font-TextFontMedium text-mainColor rounded-full'>Total: 25$</span>
                     </div>
              </>
       )
}

export default Carts
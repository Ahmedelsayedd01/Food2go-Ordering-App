import React from 'react'
import { Link } from 'react-router-dom'

const LinkButton = ({ to, size = '2xl', text, width = false }) => {
       return (
              <>
                     <Link to={to}
                            className={`sm:text-xl ${width ? 'w-full' : ''} xl:text-${size} text-center text-white bg-mainColor px-8
            py-2 rounded-2xl hover:bg-transparent hover:text-mainColor border-2 border-mainColor transition-all ease-in-out duration-300`}
                     >
                            {text}
                     </Link>
              </>
       )
}

export default LinkButton
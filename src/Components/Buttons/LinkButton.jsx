import React from 'react'
import { Link } from 'react-router-dom'

const LinkButton = ({ to, size = '2xl', text }) => {
       return (
              <>
                     <Link to={to}
                            className={`sm:text-xl xl:text-${size} text-white bg-mainColor px-8
            py-2 rounded-2xl`}
                     >
                            {text}
                     </Link>
              </>
       )
}

export default LinkButton
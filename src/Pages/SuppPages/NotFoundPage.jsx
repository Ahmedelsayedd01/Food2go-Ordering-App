import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
       return (
              <>
                     <section className="bg-white h-[100vh] flex justify-center">
                            <div className="m-auto max-w-screen-xl">
                                   <div className="mx-auto max-w-screen text-center">
                                          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-[#D01025]">404</h1>
                                          <p className="ltr mb-4 text-3xl tracking-tight font-bold  md:text-4xl">Not Found Page</p>
                                   </div>
                            </div>
                     </section>
              </>
       )
}

export default NotFoundPage
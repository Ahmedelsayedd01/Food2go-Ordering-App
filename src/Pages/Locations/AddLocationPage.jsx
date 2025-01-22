import React from 'react'
import OrderImage from '../../assets/Images/OrderImage'
import MapDetailsPage from './MapDetailsPage'

const AddLocationPage = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center mx-auto  overflow-hidden py-5">
        <div className="w-11/12 flex items-start justify-between">

          <div className="sm:w-full xl:w-5/12 overflow-hidden">
            <MapDetailsPage />
          </div>

          <div className="sm:hidden xl:flex w-2/4 items-center justify-center h-[85vh]">
            <OrderImage height='100%' />
          </div>
        </div>
      </div>
    </>
  )
}

export default AddLocationPage
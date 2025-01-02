import React from 'react'
import { TitleSection } from '../../Components/Components'
import CategoriesNavSection from './Sections/CategoriesNavSection'
import CategoriesOfferSection from './Sections/CategoriesOfferSection'
import ItemsMenuSection from './Sections/ItemsMenuSection'

const MenuPage = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center gap-y-7 pt-5 px-12">
        <TitleSection
          size={'5xl'}
          text={'Categories'}
        />
        <CategoriesNavSection />
        {/* <span className='w-full h-1 bg-mainColor rounded-full'></span> */}
        <CategoriesOfferSection />
        <ItemsMenuSection />
      </div>
    </>
  )
}

export default MenuPage
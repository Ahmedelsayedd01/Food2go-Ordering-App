import React from 'react'
import { TitleSection } from '../../Components/Components'
import CategoriesNavSection from './Sections/CategoriesNavSection'
import CategoriesOfferSection from './Sections/CategoriesOfferSection'
import ItemsMenuSection from './Sections/ItemsMenuSection'
import BannerSection from '../Home/Sections/BannerSection'

const MenuPage = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center gap-y-7">
        {/* <TitleSection
          size={'5xl'}
          text={'Categories'}
        /> */}
        <CategoriesNavSection />
        {/* <CategoriesOfferSection /> */}
        <ItemsMenuSection />
      </div>
    </>
  )
}

export default MenuPage
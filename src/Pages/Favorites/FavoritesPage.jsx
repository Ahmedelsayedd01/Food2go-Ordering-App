import React from 'react'
import { TitleSection } from '../../Components/Components'
import FavoritesNavSection from './Sections/FavoritesNavSection'
import FavoritesOfferSection from './Sections/FavoritesOfferSection'
import ItemsFavoritesSection from './Sections/ItemsFavoritesSection'

const FavoritesPage = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center gap-y-7 pt-5 px-12">
        <TitleSection
          size={'5xl'}
          text={'Favorites'}
        />
        <FavoritesNavSection />
        <FavoritesOfferSection />
        <ItemsFavoritesSection />
      </div>
    </>
  )
}

export default FavoritesPage
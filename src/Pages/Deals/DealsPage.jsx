import React from 'react'
import { TitleSection } from '../../Components/Components'
import DealsNavSection from './Sections/DealsNavSection'
import DealsOfferSection from './Sections/DealsOfferSection'
import ItemsDealsSection from './Sections/ItemsDealsSection'

const DealsPage = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center gap-y-7 pt-5 px-12">
        <TitleSection
          size={'5xl'}
          text={'Deals'}
        />
        <DealsNavSection />
        <DealsOfferSection />
        <ItemsDealsSection />
      </div>
    </>
  )
}

export default DealsPage
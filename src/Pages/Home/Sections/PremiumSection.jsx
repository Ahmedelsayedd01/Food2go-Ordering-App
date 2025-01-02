import React from 'react'
import { CardItem, LinkButton, SupTitle, TitleSection } from '../../../Components/Components'

const PremiumSection = () => {
  return (
    <>
      <div className="flex flex-col sm:items-center xl:items-start justify-center w-full gap-y-6 px-12">
        <TitleSection
          size={'5xl'}
          text={'Enjoy our premium dishes'}
        />
        <SupTitle
          size={'4xl'}
          text={'Order now and enjoy fast delivery to your doorstep'}
        />
        <div className="flex flex-wrap items-center justify-start gap-3 w-full sm:flex-col sm:gap-5 lg:flex-row">
          {Array(6).fill(null).map((_, index) => (
            <CardItem key={index} />
          ))}

        </div>
        <LinkButton
          to={'/menu'}
          text={'Order from our premium dishes'}
        />
      </div>
    </>
  )
}

export default PremiumSection
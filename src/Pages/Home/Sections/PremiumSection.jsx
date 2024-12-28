import React from 'react'
import { LinkButton, SupTitle, TitleSection } from '../../../Components/Components'
import { Link } from 'react-router-dom'

const PremiumSection = () => {
  return (
    <>
      <div className="flex flex-col sm:items-center xl:items-start justify-center w-full gap-y-6">
        <TitleSection
          size={'5xl'}
          text={'Enjoy our premium dishes'}
        />
        <SupTitle
          size={'4xl'}
          text={'Order now and enjoy fast delivery to your doorstep'}
        />

        <div className="flex flex-col items-start gap-y-4 bg-slate-300 rounded-xl p-5">
          {/* Image */}
          <div className="">
            <img
              src="/src/assets/Images/ItemImage.png"
            className=''

            alt="item" />
          </div>
          {/* Item Name*/}
          <SupTitle
            size={'4xl'}
            text={'Cheese burger'}
          />
          {/* Item Discraption*/}
          <SupTitle
            size={'3xl'}
            text={'Tomato, meat, cheese, lettuce, cucumber'}
          />
          {/* Item Amount*/}
          <span className='text-xl text-mainColor font-TextFontRegular'>150 eg</span>
          {/* Item Order button*/}
          <div className="">

          </div>
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
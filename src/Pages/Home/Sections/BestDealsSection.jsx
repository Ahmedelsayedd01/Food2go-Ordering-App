import React from 'react'
import { CardItem, LinkButton, SupTitle, TitleSection } from '../../../Components/Components'

const BestDealsSection = () => {
       return (
              <>
                     <div className="w-full flex flex-col items-start justify-start  gap-y-6 px-12">
                            <div className="w-full text-center">
                                   <TitleSection
                                          size={'5xl'}
                                          text={'Enjoy Our Best Deals'}
                                   />
                            </div>
                            <p className='w-full text-center sm:text-2xl xl:text-4xl font-TextFontMedium text-secoundColor'>
                                   Don't Miss The Chance To Savor <span className='text-mainColor'>Delicious</span> Dishes
                            </p>
                            <p className='w-full text-center sm:text-2xl xl:text-4xl font-TextFontMedium text-secoundColor'>
                                   At Great Prices! <span className='text-mainColor'>Special Offers For A Limited Time</span>
                            </p>
                            <div className="flex flex-wrap items-center justify-start gap-3 w-full sm:flex-col sm:gap-5 lg:flex-row">
                                   {Array(6).fill(null).map((_, index) => (
                                          <CardItem key={index} />
                                   ))}

                            </div>
                            <LinkButton
                                   to={'/deals'}
                                   text={'View All Discounts'}
                            />
                     </div>
              </>
       )
}

export default BestDealsSection
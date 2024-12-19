import React from 'react'
import HeaderSection from './Sections/HeaderSection'
import ReviewSection from './Sections/ReviewSection'
import BestDealsSection from './Sections/BestDealsSection'
import BannerSection from './Sections/BannerSection'
import PremiumSection from './Sections/PremiumSection'

const HomePage = () => {
       return (
              <>
                     <div className="w-full">
                            <HeaderSection />
                            <div className="w-full px-12">
                                   <PremiumSection />
                                   <BannerSection />
                                   <BestDealsSection />
                                   <ReviewSection />
                            </div>
                     </div>
              </>
       )
}

export default HomePage
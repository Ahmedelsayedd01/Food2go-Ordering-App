import React from 'react'
import { CardItem } from '../../../Components/Components'

const ItemsFavoritesSection = () => {
       return (
              <>
                     <div className="flex flex-wrap items-center justify-between gap-3 w-full sm:flex-col sm:gap-5 lg:flex-row mb-8">
                            {Array(8).fill(null).map((_, index) => (
                                   <CardItem key={index} />
                            ))}

                     </div>
              </>
       )
}

export default ItemsFavoritesSection
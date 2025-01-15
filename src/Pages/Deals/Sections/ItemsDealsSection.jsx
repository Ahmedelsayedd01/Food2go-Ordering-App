import React from 'react'
import { CardItem } from '../../../Components/Components'
import { useSelector } from 'react-redux'

const ItemsMenuSection = () => {
       const productsDiscountFilter = useSelector(state => state.productsDiscountFilter?.data);

       return (
              <>
                     <div className="flex flex-wrap items-center justify-center gap-3 w-full sm:flex-col sm:gap-5 lg:flex-row mb-8">
                            {productsDiscountFilter.map((product, index) => (
                                   <CardItem key={index} product={product} />
                            ))}

                     </div>
              </>
       )
}

export default ItemsMenuSection
import React from 'react'
import { CardItem } from '../../../Components/Components'
import { useSelector } from 'react-redux'

const ItemsMenuSection = () => {
       const productsFilter = useSelector(state => state.productsFilter?.data);

       return (
              <>
                     <div className="flex p-4 lg:p-8 flex-wrap items-center justify-start gap-3 w-full sm:flex-col sm:gap-5 lg:flex-row mb-8">
                     {productsFilter.length > 0 ? (
                            productsFilter.map((product, index) => (
                                   <CardItem key={index} product={product} />
                            ))
                            ) : (
                            <p className="w-full text-center text-mainColor font-semibold text-lg">No products in this category.</p>
                     )}

                     </div>
              </>
       )
}

export default ItemsMenuSection
// 'use client'
// import React from 'react'
// import Title from './Title'
// import ProductCard from './ProductCard'
// import { useSelector } from 'react-redux'

// const LatestProducts = () => {

//     const displayQuantity = 4
//     const products = useSelector(state => state.product.list)

//     return (
//         <div className='px-6 my-30 max-w-6xl mx-auto'>
//             <Title title='Latest Products' description={`Showing ${products.length < displayQuantity ? products.length : displayQuantity} of ${products.length} products`} href='/shop' />
//             <div className='mt-12 grid grid-cols-2 sm:flex flex-wrap gap-6 justify-between'>
//                 {products.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, displayQuantity).map((product, index) => (
//                     <ProductCard key={index} product={product} />
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default LatestProducts

'use client'

import React from 'react'
import Title from './Title'
import ProductCard from './ProductCard'
import { useSelector } from 'react-redux'

const LatestProducts = () => {

    const displayQuantity = 4
    const products = useSelector(state => state.product.list)

    return (
        <section className="px-6 py-20 max-w-7xl mx-auto">

            <Title
                title="New Arrivals"
                // description="Discover our latest collection of premium leather bags, wallets, belts and accessories crafted with timeless elegance."
                description="Explore our newest handcrafted leather bags, wallets, belts and accessories designed with premium quality and timeless craftsmanship."
                href="/shop"
            />

            <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-6">

                {products
                    .slice()
                    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                    .slice(0, displayQuantity)
                    .map((product, index) => (
                        <ProductCard
                            key={index}
                            product={product}
                        />
                    ))}

            </div>

        </section>
    )
}

export default LatestProducts
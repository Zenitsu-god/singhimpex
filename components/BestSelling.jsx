'use client'

import Title from './Title'
import ProductCard from './ProductCard'
import { useSelector } from 'react-redux'

const BestSelling = () => {

    const displayQuantity = 8
    const products = useSelector(state => state.product.list)

    return (
        <section className="px-6 py-20 max-w-7xl mx-auto">

            <Title
                title="Best Sellers"
                description="Our most-loved leather products, trusted by customers for exceptional craftsmanship, durability and timeless style."
                href="/shop"
            />

            <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-6">

                {products
                    .slice()
                    .sort((a, b) => b.rating.length - a.rating.length)
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

export default BestSelling
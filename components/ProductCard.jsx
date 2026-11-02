// 'use client'
// import { StarIcon } from 'lucide-react'
// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'

// const ProductCard = ({ product }) => {

//     const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '$'

//     // calculate the average rating of the product
//     const rating = Math.round(product.rating.reduce((acc, curr) => acc + curr.rating, 0) / product.rating.length);

//     return (
//         <Link href={`/product/${product.id}`} className=' group max-xl:mx-auto'>
//             <div className='bg-[#F5F5F5] h-40  sm:w-60 sm:h-68 rounded-lg flex items-center justify-center'>
//                 <Image width={500} height={500} className='max-h-30 sm:max-h-40 w-auto group-hover:scale-115 transition duration-300' src={product.images[0]} alt="" />
//             </div>
//             <div className='flex justify-between gap-3 text-sm text-slate-800 pt-2 max-w-60'>
//                 <div>
//                     <p>{product.name}</p>
//                     <div className='flex'>
//                         {Array(5).fill('').map((_, index) => (
//                             <StarIcon key={index} size={14} className='text-transparent mt-0.5' fill={rating >= index + 1 ? "#00C950" : "#D1D5DB"} />
//                         ))}
//                     </div>
//                 </div>
//                 <p>{currency}{product.price}</p>
//             </div>
//         </Link>
//     )
// }

// export default ProductCard



'use client'

import { StarIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const ProductCard = ({ product }) => {

    const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '₹'

    const rating =
        product.rating.length > 0
            ? Math.round(
                  product.rating.reduce((acc, curr) => acc + curr.rating, 0) /
                      product.rating.length
              )
            : 0

    return (
        <Link
            href={`/product/${product.id}`}
            className="group block rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300"
        >
            {/* Product Image */}
            <div className="bg-gradient-to-br from-stone-50 to-amber-50 h-56 flex items-center justify-center overflow-hidden">

                <Image
                    width={500}
                    height={500}
                    src={product.images[0]}
                    alt={product.name}
                    className="max-h-44 w-auto object-contain group-hover:scale-110 transition duration-500"
                />

            </div>

            {/* Product Info */}
            <div className="p-5">

                <h3 className="font-semibold text-slate-800 line-clamp-2 min-h-[48px]">
                    {product.name}
                </h3>

                <div className="flex items-center gap-1 mt-3">

                    {Array(5)
                        .fill("")
                        .map((_, index) => (
                            <StarIcon
                                key={index}
                                size={16}
                                className="text-transparent"
                                fill={
                                    rating >= index + 1
                                        ? "#D97706"
                                        : "#D1D5DB"
                                }
                            />
                        ))}

                    <span className="text-xs text-slate-500 ml-2">
                        ({product.rating.length})
                    </span>

                </div>

                <div className="flex items-center justify-between mt-5">

                    <p className="text-2xl font-bold text-amber-700">
                        {currency}
                        {product.price}
                    </p>

                    <span className="text-sm font-medium text-amber-700 group-hover:translate-x-1 transition">
                        View →
                    </span>

                </div>

            </div>

        </Link>
    )
}

export default ProductCard
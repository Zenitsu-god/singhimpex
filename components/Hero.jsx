'use client'
import { assets } from '@/assets/assets'
import { ArrowRightIcon, ChevronRightIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import CategoriesMarquee from './CategoriesMarquee'
import Link from "next/link";

const Hero = () => {

    const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '₹'

    return (
        <div className='mx-6'>
            <div className='flex max-xl:flex-col gap-8 max-w-7xl mx-auto my-10'>
                <div className='relative flex-1 flex flex-col bg-gradient-to-br from-amber-50 to-orange-100 rounded-3xl xl:min-h-100 group'>
                    <div className='p-5 sm:p-16'>
                        <div className='inline-flex items-center gap-3 bg-amber-100 text-amber-800 pr-4 p-1 rounded-full text-xs sm:text-sm'>
                            <span className='bg-amber-700 px-3 py-1 max-sm:ml-1 rounded-full text-white text-xs'>NEW COLLECTION</span>Free Shipping Across India on Selected Orders <ChevronRightIcon className='group-hover:ml-2 transition-all' size={16} />
                        </div>
                        <h2 className="text-3xl sm:text-5xl leading-[1.15] my-5 font-semibold bg-gradient-to-r from-slate-800 to-amber-700 bg-clip-text text-transparent max-w-xl">
                            Premium Leather Products
                            <br />
                            Crafted for Everyday Elegance
                        </h2>

                        <div className='text-slate-800 text-sm font-medium mt-4 sm:mt-8'>
                            <p>Starting From</p>
                            <p className='text-3xl'>{currency}999</p>
                        </div>
                        {/* <button className='bg-amber-700 text-white text-sm py-2.5 px-7 sm:py-5 sm:px-12 mt-4 sm:mt-10 rounded-md hover:bg-amber-800 hover:scale-103 active:scale-95 transition'>SHOP NOW</button> */}
                        <div className="flex flex-wrap gap-4 mt-8">

                            <Link
                                href="/shop"
                                className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-lg transition font-medium"
                            >
                                Shop Now
                            </Link>

                            <Link
                                href="/shop"
                                className="border border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white px-8 py-4 rounded-lg transition font-medium"
                            >
                                Explore Collection
                            </Link>

                        </div>
                    </div>
                    <Image className="sm:absolute bottom-0 right-0 md:right-6 w-full sm:max-w-md" src={assets.hero_model_img} alt="" />
                </div>
                <div className='flex flex-col md:flex-row xl:flex-col gap-5 w-full xl:max-w-sm text-sm text-slate-600'>
                    <Link href="/shop" className="flex-1 flex items-center justify-between w-full bg-gradient-to-br from-orange-50 to-amber-100 rounded-3xl p-6 px-8 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    {/* <div className='flex-1 flex items-center justify-between w-full bg-gradient-to-br from-orange-50 to-amber-100 rounded-3xl p-6 px-8 group'> */}
                        <div>
                            <p className='text-3xl font-medium bg-gradient-to-r from-slate-800 to-[#FFAD51] bg-clip-text text-transparent max-w-40'>Premium Collection</p>
                            <p className='flex items-center gap-1 mt-4'>Explore  <ArrowRightIcon className='group-hover:ml-2 transition-all' size={18} /> </p>
                        </div>
                        <Image className='w-42' src={assets.hero_product_img1} alt="" />
                    {/* </div> */}
                    </Link>
                    <Link href="/shop" className="flex-1 flex items-center justify-between w-full bg-gradient-to-br from-stone-50 to-amber-100 rounded-3xl p-6 px-8 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    {/* <div className='flex-1 flex items-center justify-between w-full bg-gradient-to-br from-stone-50 to-amber-100 rounded-3xl p-6 px-8 group'> */}
                        <div>
                            <p className='text-3xl font-medium bg-gradient-to-r from-slate-800 to-[#78B2FF] bg-clip-text text-transparent max-w-40'>New Arrivals</p>
                            <p className='flex items-center gap-1 mt-4'>Shop Now  <ArrowRightIcon className='group-hover:ml-2 transition-all' size={18} /> </p>
                        </div>
                        <Image className='w-51' src={assets.hero_product_img2} alt="" />
                    {/* </div> */}
                    </Link>
                </div>
            </div>
            <CategoriesMarquee />
        </div>

    )
}

export default Hero
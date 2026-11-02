'use client'
import { ArrowRight, StarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const ProductDescription = ({ product }) => {

    const [selectedTab, setSelectedTab] = useState('Description')

    return (
        <div className="my-18 text-sm text-slate-600">

            {/* Tabs */}
            <div className="flex gap-3 border-b border-amber-100 mb-8">
                {['Description', 'Reviews'].map((tab, index) => (
                    <button className={`px-5 py-3 transition font-medium ${tab === selectedTab
                        ? "border-b-2 border-amber-700 text-amber-700"
                        : "text-slate-500 hover:text-amber-700"
                        }`} key={index} onClick={() => setSelectedTab(tab)}>
                        {tab}
                    </button>
                ))}
            </div>

            {/* Description */}
            {selectedTab === "Description" && (
                <div className="space-y-6 max-w-3xl">

                    <p className="leading-8 text-slate-600">
                        {product.description}
                    </p>

                    <div className="rounded-2xl bg-amber-50 border border-amber-100 p-6">

                        <h3 className="text-lg font-semibold text-slate-800 mb-4">
                            Why You'll Love It
                        </h3>

                        <ul className="space-y-2 text-slate-600 list-disc pl-5">

                            <li>Premium quality leather with elegant craftsmanship.</li>

                            <li>Designed for everyday comfort and durability.</li>

                            <li>Stylish finish suitable for casual and formal use.</li>

                            <li>Carefully inspected for long-lasting performance.</li>

                            <li>Made with attention to every detail.</li>

                        </ul>

                    </div>

                </div>
            )}

            {/* Reviews */}
            {selectedTab === "Reviews" && (
                <div className="flex flex-col gap-3 mt-14">
                    {product.rating.map((item, index) => (
                        <div key={index} className="flex gap-5 rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                            <Image src={item.user.image} alt="" className="size-10 rounded-full" width={100} height={100} />
                            <div>
                                <div className="flex items-center" >
                                    {Array(5).fill('').map((_, index) => (
                                        <StarIcon key={index} size={18} className='text-transparent mt-0.5' fill={item.rating >= index + 1 ? "#B45309" : "#D1D5DB"} />
                                    ))}
                                </div>
                                <p className="text-sm max-w-lg my-4">{item.review}</p>
                                <p className="font-semibold text-slate-800">{item.user.name}</p>
                                <p className="mt-3 text-xs text-slate-400">{new Date(item.createdAt).toDateString()}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Store Page */}
            <div className="mt-16 flex items-center gap-5 rounded-2xl border border-amber-100 bg-gradient-to-r from-stone-50 to-amber-50 p-6">
                <Image src={product.store.logo} alt="" className="size-14 rounded-full border-2 border-amber-200 object-cover" width={100} height={100} />
                <div>
                    <p className="font-semibold text-slate-800">Product by {product.store.name}</p>
                    <Link href={`/shop/${product.store.username}`} className="mt-2 inline-flex items-center gap-2 text-amber-700 font-medium hover:text-amber-800 transition"> view store <ArrowRight size={14} /></Link>
                </div>
            </div>
        </div>
    )
}

export default ProductDescription
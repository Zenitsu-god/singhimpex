// 'use client'
// import { Suspense } from "react"
// import ProductCard from "@/components/ProductCard"
// import { MoveLeftIcon } from "lucide-react"
// import { useRouter, useSearchParams } from "next/navigation"
// import { useSelector } from "react-redux"

//  function ShopContent() {

//     // get query params ?search=abc
//     const searchParams = useSearchParams()
//     const search = searchParams.get('search')
//     const router = useRouter()

//     const products = useSelector(state => state.product.list)

//     const filteredProducts = search
//         ? products.filter(product =>
//             product.name.toLowerCase().includes(search.toLowerCase())
//         )
//         : products;

//     return (
//         <div className="min-h-[70vh] mx-6">
//             <div className=" max-w-7xl mx-auto">
//                 <h1 onClick={() => router.push('/shop')} className="text-2xl text-slate-500 my-6 flex items-center gap-2 cursor-pointer"> {search && <MoveLeftIcon size={20} />}  All <span className="text-slate-700 font-medium">Products</span></h1>
//                 <div className="grid grid-cols-2 sm:flex flex-wrap gap-6 xl:gap-12 mx-auto mb-32">
//                     {filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
//                 </div>
//             </div>
//         </div>
//     )
// }


// export default function Shop() {
//   return (
//     <Suspense fallback={<div>Loading shop...</div>}>
//       <ShopContent />
//     </Suspense>
//   );
// }


'use client'

import { Suspense } from "react";
import ProductCard from "@/components/ProductCard";
import { MoveLeftIcon, SearchX } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";

function ShopContent() {

    const searchParams = useSearchParams();
    const search = searchParams.get("search");
    const router = useRouter();

    const products = useSelector((state) => state.product.list);

    const filteredProducts = search
        ? products.filter((product) =>
              product.name.toLowerCase().includes(search.toLowerCase())
          )
        : products;

    return (
        <section className="px-6 py-10 min-h-screen">

            <div className="max-w-7xl mx-auto">

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                    <span
                        onClick={() => router.push("/")}
                        className="cursor-pointer hover:text-amber-700 transition"
                    >
                        Home
                    </span>

                    <span>/</span>

                    <span className="text-slate-700 font-medium">
                        Shop
                    </span>
                </div>

                {/* Heading */}

                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-12">

                    <div>

                        <h1
                            onClick={() => search && router.push("/shop")}
                            className="flex items-center gap-3 text-4xl font-bold text-slate-800 cursor-pointer"
                        >
                            {search && (
                                <MoveLeftIcon
                                    size={26}
                                    className="text-amber-700"
                                />
                            )}

                            {search ? `Results for "${search}"` : "Shop Leather Collection"}

                        </h1>

                        <p className="mt-3 text-slate-500 max-w-2xl leading-7">
                            Discover handcrafted genuine leather bags,
                            wallets, belts and accessories made with
                            exceptional craftsmanship and timeless elegance.
                        </p>

                    </div>

                    <div className="bg-amber-50 text-amber-800 px-5 py-3 rounded-xl font-semibold">

                        {filteredProducts.length} Product{filteredProducts.length !== 1 ? "s" : ""}

                    </div>

                </div>

                {/* Products */}

                {filteredProducts.length > 0 ? (

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pb-20">

                        {filteredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}

                    </div>

                ) : (

                    <div className="flex flex-col items-center justify-center py-24">

                        <SearchX
                            size={70}
                            className="text-slate-300"
                        />

                        <h2 className="text-2xl font-semibold text-slate-700 mt-6">
                            No Products Found
                        </h2>

                        <p className="text-slate-500 mt-3 text-center max-w-md">
                            We couldn't find any leather products matching your search.
                            Try another keyword or browse our complete collection.
                        </p>

                        <button
                            onClick={() => router.push("/shop")}
                            className="mt-8 bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-lg transition"
                        >
                            View All Products
                        </button>

                    </div>

                )}

            </div>

        </section>
    );
}

export default function Shop() {
    return (
        <Suspense
            fallback={
                <div className="flex justify-center items-center min-h-screen">
                    Loading...
                </div>
            }
        >
            <ShopContent />
        </Suspense>
    );
}
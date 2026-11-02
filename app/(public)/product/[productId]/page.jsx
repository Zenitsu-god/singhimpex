'use client'

import ProductDescription from "@/components/ProductDescription";
import ProductDetails from "@/components/ProductDetails";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Product() {

    const { productId } = useParams();

    const [product, setProduct] = useState();

    const products = useSelector(state => state.product.list);

    useEffect(() => {

        if (products.length > 0) {
            const foundProduct = products.find(
                (item) => item.id === productId
            );

            setProduct(foundProduct);
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

    }, [productId, products]);

    return (

        <section className="px-6 py-10">

            <div className="max-w-7xl mx-auto">

                {/* Breadcrumb */}

                <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500 mb-8">

                    <Link
                        href="/"
                        className="hover:text-amber-700 transition"
                    >
                        Home
                    </Link>

                    <ChevronRight size={15} />

                    <Link
                        href="/shop"
                        className="hover:text-amber-700 transition"
                    >
                        Shop
                    </Link>

                    {product?.category && (
                        <>
                            <ChevronRight size={15} />

                            <span className="text-slate-700">
                                {product.category}
                            </span>
                        </>
                    )}

                    {product?.name && (
                        <>
                            <ChevronRight size={15} />

                            <span className="font-medium text-amber-700">
                                {product.name}
                            </span>
                        </>
                    )}

                </div>

                {/* Product */}

                {product && (
                    <ProductDetails product={product} />
                )}

                {/* Description */}

                {product && (
                    <ProductDescription product={product} />
                )}

            </div>

        </section>
    );
}
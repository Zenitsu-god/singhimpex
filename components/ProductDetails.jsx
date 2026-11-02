'use client'

import { addToCart } from "@/lib/features/cart/cartSlice";
import {
    StarIcon,
    TagIcon,
    ShieldCheck,
    CreditCard,
    Truck,
    BadgeCheck
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Counter from "./Counter";
import { useDispatch, useSelector } from "react-redux";

const ProductDetails = ({ product }) => {

    const productId = product.id;
    const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || "₹";

    const dispatch = useDispatch();
    const router = useRouter();

    const cart = useSelector(state => state.cart.cartItems);

    const [mainImage, setMainImage] = useState(product.images[0]);

    const addToCartHandler = () => {
        dispatch(addToCart({ productId }));
    };

    const averageRating =
        product.rating.length > 0
            ? product.rating.reduce((acc, item) => acc + item.rating, 0) /
              product.rating.length
            : 0;

    const discount =
        (((product.mrp - product.price) / product.mrp) * 100).toFixed(0);

    return (
        <div className="grid lg:grid-cols-2 gap-16">

            {/* LEFT SIDE */}

            <div className="flex flex-col-reverse md:flex-row gap-5">

                {/* Thumbnails */}

                <div className="flex md:flex-col gap-4">

                    {product.images.map((image, index) => (

                        <button
                            key={index}
                            onClick={() => setMainImage(image)}
                            className={`w-24 h-24 rounded-xl border transition flex items-center justify-center bg-stone-50
                                ${
                                    mainImage === image
                                        ? "border-amber-700"
                                        : "border-slate-200 hover:border-amber-300"
                                }`}
                        >
                            <Image
                                src={image}
                                alt=""
                                width={70}
                                height={70}
                                className="object-contain"
                            />
                        </button>

                    ))}

                </div>

                {/* Main Image */}

                <div className="flex-1 bg-gradient-to-br from-stone-50 to-amber-50 rounded-3xl flex items-center justify-center p-12">

                    <Image
                        src={mainImage}
                        alt={product.name}
                        width={450}
                        height={450}
                        className="object-contain hover:scale-105 transition duration-500"
                    />

                </div>

            </div>

            {/* RIGHT SIDE */}

            <div>

                <span className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold">
                    Genuine Leather
                </span>

                <h1 className="text-4xl font-bold text-slate-800 mt-5">
                    {product.name}
                </h1>

                {/* Rating */}

                <div className="flex items-center gap-3 mt-5">

                    <div className="flex">

                        {Array(5)
                            .fill("")
                            .map((_, index) => (

                                <StarIcon
                                    key={index}
                                    size={18}
                                    className="text-transparent"
                                    fill={
                                        averageRating >= index + 1
                                            ? "#D97706"
                                            : "#D1D5DB"
                                    }
                                />

                            ))}

                    </div>

                    <span className="text-slate-500">
                        ({product.rating.length} Reviews)
                    </span>

                </div>

                {/* Price */}

                <div className="flex items-end gap-5 mt-8">

                    <span className="text-4xl font-bold text-amber-700">
                        {currency}
                        {product.price}
                    </span>

                    <span className="text-2xl line-through text-slate-400">
                        {currency}
                        {product.mrp}
                    </span>

                </div>

                <div className="flex items-center gap-2 text-green-700 font-medium mt-4">

                    <TagIcon size={18} />

                    Save {discount}% on this product

                </div>

                {/* Description */}

                <p className="mt-8 leading-8 text-slate-600">
                    {product.description}
                </p>

                {/* Buttons */}

                <div className="flex flex-wrap items-end gap-5 mt-10">

                    {cart[productId] && (

                        <div>

                            <p className="font-semibold mb-3">
                                Quantity
                            </p>

                            <Counter productId={productId} />

                        </div>

                    )}

                    <button
                        onClick={() =>
                            !cart[productId]
                                ? addToCartHandler()
                                : router.push("/cart")
                        }
                        className="bg-amber-700 hover:bg-amber-800 text-white px-10 py-4 rounded-xl font-semibold transition"
                    >
                        {!cart[productId]
                            ? "Add to Cart"
                            : "View Cart"}
                    </button>

                    <button
                        onClick={() => router.push("/shop")}
                        className="border border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white px-10 py-4 rounded-xl font-semibold transition"
                    >
                        Continue Shopping
                    </button>

                </div>

                {/* Trust Section */}

                <div className="mt-12 border rounded-2xl p-6 bg-stone-50 space-y-5">

                    <div className="flex items-center gap-3 text-slate-700">

                        <Truck className="text-amber-700" />

                        <span>Fast & Secure Delivery Across India</span>

                    </div>

                    <div className="flex items-center gap-3 text-slate-700">

                        <CreditCard className="text-amber-700" />

                        <span>100% Secure Online Payments</span>

                    </div>

                    <div className="flex items-center gap-3 text-slate-700">

                        <ShieldCheck className="text-amber-700" />

                        <span>Premium Genuine Leather Guarantee</span>

                    </div>

                    <div className="flex items-center gap-3 text-slate-700">

                        <BadgeCheck className="text-amber-700" />

                        <span>Trusted Quality & Export Craftsmanship</span>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default ProductDetails;
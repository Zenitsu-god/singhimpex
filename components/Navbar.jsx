// 'use client'
// import { Search, ShoppingCart } from "lucide-react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { useSelector } from "react-redux";

// const Navbar = () => {

//     const router = useRouter();

//     const [search, setSearch] = useState('')
//     const cartCount = useSelector(state => state.cart.total)

//     const handleSearch = (e) => {
//         e.preventDefault()
//         router.push(`/shop?search=${search}`)
//     }

//     // return (
//     //     <nav className="relative bg-white">
//     //         <div className="mx-6">
//     //             <div className="flex items-center justify-between max-w-7xl mx-auto py-4  transition-all">

//     //                 <Link href="/" className="flex flex-col leading-tight">
//     //                     <span className="text-3xl font-bold text-slate-800">
//     //                         <span className="text-amber-700">Singh</span>Impex
//     //                     </span>

//     //                     <span className="text-xs tracking-wide text-slate-500 uppercase">
//     //                         Premium Leather Goods
//     //                     </span>
//     //                 </Link>

//     //                 {/* Desktop Menu */}
//     //                 <div className="hidden sm:flex items-center gap-4 lg:gap-8 text-slate-600">
//     //                     <Link href="/">Home</Link>
//     //                     <Link href="/shop">Shop</Link>
//     //                     <Link href="/">About</Link>
//     //                     <Link href="/">Contact</Link>

//     //                     <form onSubmit={handleSearch} className="hidden xl:flex items-center w-xs text-sm gap-2 bg-slate-100 px-4 py-3 rounded-full">
//     //                         <Search size={18} className="text-slate-600" />
//     //                         <input className="w-full bg-transparent outline-none placeholder-slate-600" type="text" placeholder="Search products" value={search} onChange={(e) => setSearch(e.target.value)} required />
//     //                     </form>

//     //                     <Link href="/cart" className="relative flex items-center gap-2 text-slate-600">
//     //                         <ShoppingCart size={18} />
//     //                         Cart
//     //                         <button className="absolute -top-1 left-3 text-[8px] text-white bg-slate-600 size-3.5 rounded-full">{cartCount}</button>
//     //                     </Link>

//     //                     <button className="px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full">
//     //                         Login
//     //                     </button>

//     //                 </div>

//     //                 {/* Mobile User Button  */}
//     //                 <div className="sm:hidden">
//     //                     <button className="px-7 py-1.5 bg-indigo-500 hover:bg-indigo-600 text-sm transition text-white rounded-full">
//     //                         Login
//     //                     </button>
//     //                 </div>
//     //             </div>
//     //         </div>
//     //         <hr className="border-gray-300" />
//     //     </nav>
//     // )
//     // return (
//     //     <nav className="relative bg-white">
//     //         <div className="mx-6">
//     //             <div className="flex items-center justify-between max-w-7xl mx-auto py-4">

//     //                 {/* Logo */}
//     //                 <Link href="/" className="text-3xl font-bold text-slate-700">
//     //                     <span className="text-green-600">Singh</span> Impex
//     //                 </Link>

//     //                 {/* Desktop Menu */}
//     //                 <div className="hidden sm:flex items-center gap-8 text-slate-600">

//     //                     <Link href="/">Home</Link>
//     //                     <Link href="/products">Products</Link>
//     //                     <Link href="/orders">Orders</Link>
//     //                     <Link href="/contact">Contact</Link>

//     //                     <button className="px-8 py-2 bg-green-600 hover:bg-green-700 transition text-white rounded-full">
//     //                         Login
//     //                     </button>

//     //                 </div>

//     //                 {/* Mobile */}
//     //                 <div className="sm:hidden">
//     //                     <button className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full">
//     //                         Login
//     //                     </button>
//     //                 </div>

//     //             </div>
//     //         </div>

//     //         <hr className="border-gray-300" />
//     //     </nav>
//     // );

// }

// export default Navbar


'use client'

import { Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {

    const router = useRouter();

    const [search, setSearch] = useState('');
    const cartCount = useSelector(state => state.cart.total);

    const handleSearch = (e) => {
        e.preventDefault();
        router.push(`/shop?search=${search}`);
    };

    return (
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-amber-100">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <Link href="/" className="flex flex-col leading-tight">
                        <span className="text-3xl font-bold tracking-wide text-slate-800">
                            <span className="text-amber-700">Singh</span>{" "}
                            Impex
                        </span>

                        <span className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                            Premium Leather Goods
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8 font-medium text-slate-700">

                        <Link
                            href="/"
                            className="transition hover:text-amber-700"
                        >
                            Home
                        </Link>

                        <Link
                            href="/shop"
                            className="transition hover:text-amber-700"
                        >
                            Shop
                        </Link>

                        <Link
                            href="/shop"
                            className="transition hover:text-amber-700"
                        >
                            Collections
                        </Link>

                        <Link
                            href="/"
                            className="transition hover:text-amber-700"
                        >
                            About Us
                        </Link>

                        <Link
                            href="/"
                            className="transition hover:text-amber-700"
                        >
                            Contact
                        </Link>

                    </div>

                    {/* Right Side */}
                    <div className="hidden lg:flex items-center gap-5">

                        {/* Search */}
                        <form
                            onSubmit={handleSearch}
                            className="flex items-center gap-2 bg-amber-50 border border-amber-100 rounded-full px-4 py-2"
                        >
                            <Search
                                size={18}
                                className="text-amber-700"
                            />

                            <input
                                type="text"
                                placeholder="Search leather products..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                required
                                className="bg-transparent outline-none w-56 placeholder:text-slate-500 text-sm"
                            />
                        </form>

                        {/* Cart */}
                        <Link
                            href="/cart"
                            className="relative flex items-center gap-2 text-slate-700 hover:text-amber-700 transition"
                        >
                            <ShoppingCart size={20} />

                            <span>Cart</span>

                            <span className="absolute -top-2 left-3 flex items-center justify-center w-5 h-5 rounded-full bg-amber-700 text-white text-[10px] font-semibold">
                                {cartCount}
                            </span>
                        </Link>

                        {/* Login */}
                        <button className="px-6 py-2.5 rounded-full bg-amber-700 text-white font-medium transition hover:bg-amber-800 shadow-sm">
                            Login
                        </button>

                    </div>

                    {/* Mobile Login */}
                    <div className="lg:hidden">
                        <button className="px-5 py-2 rounded-full bg-amber-700 text-white text-sm">
                            Login
                        </button>
                    </div>

                </div>

            </div>
        </nav>
    );
};

export default Navbar;
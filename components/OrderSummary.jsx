// import { PlusIcon, SquarePenIcon, XIcon } from 'lucide-react';
// import React, { useState } from 'react'
// import AddressModal from './AddressModal';
// import { useSelector } from 'react-redux';
// import toast from 'react-hot-toast';
// import { useRouter } from 'next/navigation';

// const OrderSummary = ({ totalPrice, items }) => {

//     const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '₹';

//     const router = useRouter();

//     const addressList = useSelector(state => state.address.list);

//     const [paymentMethod, setPaymentMethod] = useState('COD');
//     const [selectedAddress, setSelectedAddress] = useState(null);
//     const [showAddressModal, setShowAddressModal] = useState(false);
//     const [couponCodeInput, setCouponCodeInput] = useState('');
//     const [coupon, setCoupon] = useState('');

//     const handleCouponCode = async (event) => {
//         event.preventDefault();

//     }

//     const handlePlaceOrder = async (e) => {
//         e.preventDefault();

//         router.push('/orders')
//     }

//     return (
//         <div className='w-full max-w-lg lg:max-w-[360px] bg-gradient-to-br from-stone-50 to-amber-50 border border-amber-100 rounded-2xl p-7 shadow-sm text-slate-600 text-sm'>
//             <h2 className='text-2xl font-bold text-slate-800'>
//                 Order Summary
//             </h2>

//             <p className='text-sm text-slate-500 mt-1'>
//                 Secure checkout for your premium leather products.
//             </p>
//             <p className='text-slate-400 text-xs my-4'>Payment Method</p>
//             <div className='flex gap-2 items-center'>
//                 <input type="radio" id="COD" onChange={() => setPaymentMethod('COD')} checked={paymentMethod === 'COD'} className='accent-gray-500' />
//                 <label htmlFor="COD" className='cursor-pointer'>COD</label>
//             </div>
//             <div className='flex gap-2 items-center mt-1'>
//                 <input type="radio" id="STRIPE" name='payment' onChange={() => setPaymentMethod('STRIPE')} checked={paymentMethod === 'STRIPE'} className='accent-gray-500' />
//                 <label htmlFor="STRIPE" className='cursor-pointer'>Stripe Payment</label>
//             </div>
//             <div className='my-4 py-4 border-y border-slate-200 text-slate-400'>
//                 <p>Address</p>
//                 {
//                     selectedAddress ? (
//                         <div className='flex gap-2 items-center'>
//                             <p>{selectedAddress.name}, {selectedAddress.city}, {selectedAddress.state}, {selectedAddress.zip}</p>
//                             <SquarePenIcon onClick={() => setSelectedAddress(null)} className='cursor-pointer' size={18} />
//                         </div>
//                     ) : (
//                         <div>
//                             {
//                                 addressList.length > 0 && (
//                                     <select className='border border-slate-400 p-2 w-full my-3 outline-none rounded' onChange={(e) => setSelectedAddress(addressList[e.target.value])} >
//                                         <option value="">Select Address</option>
//                                         {
//                                             addressList.map((address, index) => (
//                                                 <option key={index} value={index}>{address.name}, {address.city}, {address.state}, {address.zip}</option>
//                                             ))
//                                         }
//                                     </select>
//                                 )
//                             }
//                             <button className='flex items-center gap-1 text-slate-600 mt-1' onClick={() => setShowAddressModal(true)} >Add Address <PlusIcon size={18} /></button>
//                         </div>
//                     )
//                 }
//             </div>
//             <div className='pb-4 border-b border-slate-200'>
//                 <div className='flex justify-between'>
//                     <div className='flex flex-col gap-1 text-slate-400'>
//                         <p>Subtotal:</p>
//                         <p>Shipping:</p>
//                         {coupon && <p>Coupon:</p>}
//                     </div>
//                     <div className='flex flex-col gap-1 font-medium text-right'>
//                         <p>{currency}{totalPrice.toLocaleString()}</p>
//                         <p>Free</p>
//                         {coupon && <p>{`-${currency}${(coupon.discount / 100 * totalPrice).toFixed(2)}`}</p>}
//                     </div>
//                 </div>
//                 {
//                     !coupon ? (
//                         <form onSubmit={e => toast.promise(handleCouponCode(e), { loading: 'Checking Coupon...' })} className='flex justify-center gap-3 mt-3'>
//                             <input onChange={(e) => setCouponCodeInput(e.target.value)} value={couponCodeInput} type="text" placeholder='Coupon Code' className='border border-slate-400 p-1.5 rounded w-full outline-none' />
//                             <button className='bg-slate-600 text-white px-3 rounded hover:bg-slate-800 active:scale-95 transition-all'>Apply</button>
//                         </form>
//                     ) : (
//                         <div className='w-full flex items-center justify-center gap-2 text-xs mt-2'>
//                             <p>Code: <span className='font-semibold ml-1'>{coupon.code.toUpperCase()}</span></p>
//                             <p>{coupon.description}</p>
//                             <XIcon size={18} onClick={() => setCoupon('')} className='hover:text-red-700 transition cursor-pointer' />
//                         </div>
//                     )
//                 }
//             </div>
//             <div className='flex justify-between py-4'>
//                 <p>Total:</p>
//                 <p className='font-medium text-right'>{currency}{coupon ? (totalPrice - (coupon.discount / 100 * totalPrice)).toFixed(2) : totalPrice.toLocaleString()}</p>
//             </div>
//             <button onClick={e => toast.promise(handlePlaceOrder(e), { loading: 'placing Order...' })} className='w-full bg-slate-700 text-white py-2.5 rounded hover:bg-slate-900 active:scale-95 transition-all'>Place Order</button>

//             {showAddressModal && <AddressModal setShowAddressModal={setShowAddressModal} />}

//         </div>
//     )
// }

// export default OrderSummary



'use client'

import { PlusIcon, SquarePenIcon, XIcon } from 'lucide-react';
import React, { useState } from 'react';
import AddressModal from './AddressModal';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const OrderSummary = ({ totalPrice, items }) => {

    const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '₹';

    const router = useRouter();

    const addressList = useSelector(state => state.address.list);

    const [paymentMethod, setPaymentMethod] = useState('COD');
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [showAddressModal, setShowAddressModal] = useState(false);
    const [couponCodeInput, setCouponCodeInput] = useState('');
    const [coupon, setCoupon] = useState('');

    const handleCouponCode = async (event) => {
        event.preventDefault();

        // Coupon logic here
    };

    const handlePlaceOrder = async (e) => {
        e.preventDefault();

        router.push('/orders');
    };

    return (
        <div className="w-full max-w-lg lg:max-w-[360px] rounded-2xl border border-amber-100 bg-gradient-to-br from-stone-50 to-amber-50 p-7 shadow-sm">

            {/* Heading */}

            <h2 className="text-2xl font-bold text-slate-800">
                Order Summary
            </h2>

            <p className="mt-1 text-sm text-slate-500">
                Secure checkout for your premium leather products.
            </p>

            {/* Payment */}

            <div className="mt-6">

                <p className="mb-3 text-sm font-medium text-slate-700">
                    Choose Payment Method
                </p>

                <div className="space-y-3">

                    <label className="flex items-center gap-3 cursor-pointer">
                        <input
                            type="radio"
                            id="COD"
                            checked={paymentMethod === 'COD'}
                            onChange={() => setPaymentMethod('COD')}
                            className="accent-amber-700"
                        />
                        <span>Cash on Delivery (COD)</span>
                    </label>

                    <label className="flex items-center gap-3 cursor-pointer">
                        <input
                            type="radio"
                            id="STRIPE"
                            name="payment"
                            checked={paymentMethod === 'STRIPE'}
                            onChange={() => setPaymentMethod('STRIPE')}
                            className="accent-amber-700"
                        />
                        <span>Secure Online Payment</span>
                    </label>

                </div>

            </div>

            {/* Address */}

            <div className="my-6 border-y border-amber-100 py-5">

                <p className="font-medium text-slate-700">
                    Delivery Address
                </p>

                {selectedAddress ? (

                    <div className="mt-3 flex items-center gap-2">

                        <p className="text-sm text-slate-600">
                            {selectedAddress.name}, {selectedAddress.city}, {selectedAddress.state}, {selectedAddress.zip}
                        </p>

                        <SquarePenIcon
                            size={17}
                            onClick={() => setSelectedAddress(null)}
                            className="cursor-pointer text-amber-700 hover:text-amber-800"
                        />

                    </div>

                ) : (

                    <div>

                        {addressList.length > 0 && (

                            <select
                                className="mt-3 w-full rounded-lg border border-amber-200 bg-white p-2 outline-none focus:border-amber-600"
                                onChange={(e) =>
                                    setSelectedAddress(addressList[e.target.value])
                                }
                            >
                                <option value="">
                                    Select Address
                                </option>

                                {addressList.map((address, index) => (

                                    <option key={index} value={index}>
                                        {address.name}, {address.city}, {address.state}, {address.zip}
                                    </option>

                                ))}

                            </select>

                        )}

                        <button
                            onClick={() => setShowAddressModal(true)}
                            className="mt-3 flex items-center gap-2 font-medium text-amber-700 transition hover:text-amber-800"
                        >
                            Add Address
                            <PlusIcon size={18} />
                        </button>

                    </div>

                )}

            </div>

            {/* Price */}

            <div className="space-y-2">

                <div className="flex justify-between">

                    <span className="text-slate-500">
                        Products
                    </span>

                    <span className="font-medium">
                        {currency}{totalPrice.toLocaleString()}
                    </span>

                </div>

                <div className="flex justify-between">

                    <span className="text-slate-500">
                        Shipping
                    </span>

                    <span className="text-green-600 font-medium">
                        Free
                    </span>

                </div>

                {coupon && (

                    <div className="flex justify-between">

                        <span>
                            Coupon
                        </span>

                        <span>
                            -{currency}
                            {(coupon.discount / 100 * totalPrice).toFixed(2)}
                        </span>

                    </div>

                )}

            </div>

            {/* Coupon */}

            {!coupon ? (

                <form
                    onSubmit={(e) =>
                        toast.promise(handleCouponCode(e), {
                            loading: 'Checking Coupon...'
                        })
                    }
                    className="mt-5 flex gap-3"
                >

                    <input
                        type="text"
                        placeholder="Coupon Code"
                        value={couponCodeInput}
                        onChange={(e) =>
                            setCouponCodeInput(e.target.value)
                        }
                        className="w-full rounded-lg border border-amber-200 bg-white p-2 outline-none focus:border-amber-600"
                    />

                    <button className="rounded-lg bg-amber-700 px-4 text-white transition hover:bg-amber-800">
                        Apply
                    </button>

                </form>

            ) : (

                <div className="mt-4 flex items-center justify-center gap-2 text-xs">

                    <p>
                        Code:
                        <span className="ml-1 font-semibold">
                            {coupon.code.toUpperCase()}
                        </span>
                    </p>

                    <p>
                        {coupon.description}
                    </p>

                    <XIcon
                        size={17}
                        onClick={() => setCoupon('')}
                        className="cursor-pointer text-red-500"
                    />

                </div>

            )}

            {/* Total */}

            <div className="mt-6 flex justify-between border-t border-amber-100 pt-5">

                <span className="text-lg font-semibold text-slate-700">
                    Total
                </span>

                <span className="text-2xl font-bold text-amber-700">

                    {currency}

                    {coupon
                        ? (
                            totalPrice -
                            (coupon.discount / 100) * totalPrice
                        ).toFixed(2)
                        : totalPrice.toLocaleString()}

                </span>

            </div>

            {/* Checkout */}

            <button
                onClick={(e) =>
                    toast.promise(handlePlaceOrder(e), {
                        loading: 'Placing Order...'
                    })
                }
                className="mt-6 w-full rounded-xl bg-amber-700 py-3 font-semibold text-white transition hover:bg-amber-800"
            >
                Place Order
            </button>

            {showAddressModal && (
                <AddressModal
                    setShowAddressModal={setShowAddressModal}
                />
            )}

        </div>
    );
};

export default OrderSummary;
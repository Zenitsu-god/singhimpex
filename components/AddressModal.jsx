'use client'

import { XIcon, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "react-hot-toast";

const AddressModal = ({ setShowAddressModal }) => {

    const [address, setAddress] = useState({
        name: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        phone: ''
    });

    const handleAddressChange = (e) => {
        setAddress({
            ...address,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Save Address Logic

        setShowAddressModal(false);
    };

    return (
        <form
            onSubmit={e =>
                toast.promise(handleSubmit(e), {
                    loading: 'Saving Address...'
                })
            }
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-5"
        >

            <div className="relative w-full max-w-xl rounded-3xl bg-white shadow-2xl border border-amber-100 p-8">

                {/* Close */}

                <button
                    type="button"
                    onClick={() => setShowAddressModal(false)}
                    className="absolute top-5 right-5 text-slate-500 hover:text-red-500 transition"
                >
                    <XIcon size={24} />
                </button>

                {/* Heading */}

                <div className="flex items-center gap-3 mb-8">

                    <div className="bg-amber-100 p-3 rounded-xl">
                        <MapPin className="text-amber-700" size={24} />
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-800">
                            Delivery Address
                        </h2>

                        <p className="text-sm text-slate-500">
                            Enter your shipping information.
                        </p>
                    </div>

                </div>

                {/* Form */}

                <div className="space-y-4">

                    <input
                        name="name"
                        value={address.name}
                        onChange={handleAddressChange}
                        type="text"
                        placeholder="Full Name"
                        required
                        className="w-full rounded-xl border border-amber-200 px-4 py-3 outline-none focus:border-amber-700"
                    />

                    <input
                        name="email"
                        value={address.email}
                        onChange={handleAddressChange}
                        type="email"
                        placeholder="Email Address"
                        required
                        className="w-full rounded-xl border border-amber-200 px-4 py-3 outline-none focus:border-amber-700"
                    />

                    <input
                        name="street"
                        value={address.street}
                        onChange={handleAddressChange}
                        type="text"
                        placeholder="Street Address"
                        required
                        className="w-full rounded-xl border border-amber-200 px-4 py-3 outline-none focus:border-amber-700"
                    />

                    <div className="grid grid-cols-2 gap-4">

                        <input
                            name="city"
                            value={address.city}
                            onChange={handleAddressChange}
                            type="text"
                            placeholder="City"
                            required
                            className="rounded-xl border border-amber-200 px-4 py-3 outline-none focus:border-amber-700"
                        />

                        <input
                            name="state"
                            value={address.state}
                            onChange={handleAddressChange}
                            type="text"
                            placeholder="State"
                            required
                            className="rounded-xl border border-amber-200 px-4 py-3 outline-none focus:border-amber-700"
                        />

                    </div>

                    <div className="grid grid-cols-2 gap-4">

                        <input
                            name="zip"
                            value={address.zip}
                            onChange={handleAddressChange}
                            type="number"
                            placeholder="PIN Code"
                            required
                            className="rounded-xl border border-amber-200 px-4 py-3 outline-none focus:border-amber-700"
                        />

                        <input
                            name="country"
                            value={address.country}
                            onChange={handleAddressChange}
                            type="text"
                            placeholder="Country"
                            required
                            defaultValue="India"
                            className="rounded-xl border border-amber-200 px-4 py-3 outline-none focus:border-amber-700"
                        />

                    </div>

                    <input
                        name="phone"
                        value={address.phone}
                        onChange={handleAddressChange}
                        type="tel"
                        placeholder="Mobile Number"
                        required
                        className="w-full rounded-xl border border-amber-200 px-4 py-3 outline-none focus:border-amber-700"
                    />

                </div>

                {/* Buttons */}

                <div className="flex justify-end gap-4 mt-8">

                    <button
                        type="button"
                        onClick={() => setShowAddressModal(false)}
                        className="px-6 py-3 rounded-xl border border-slate-300 text-slate-600 hover:bg-slate-100 transition"
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="px-8 py-3 rounded-xl bg-amber-700 text-white font-semibold hover:bg-amber-800 transition"
                    >
                        Save Address
                    </button>

                </div>

            </div>

        </form>
    );
};

export default AddressModal;
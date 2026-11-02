'use client'

import PageTitle from "@/components/PageTitle";
import { useEffect, useState } from "react";
import OrderItem from "@/components/OrderItem";
import { orderDummyData } from "@/assets/assets";

export default function Orders() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        setOrders(orderDummyData);
    }, []);

    return (
        <div className="min-h-[75vh] bg-gradient-to-b from-stone-50 via-white to-amber-50">

            {orders.length > 0 ? (

                <div className="mx-6 py-16 max-w-7xl mx-auto">

                    <PageTitle
                        heading="My Orders"
                        text={`You have placed ${orders.length} order${orders.length > 1 ? "s" : ""}`}
                        linkText="Continue Shopping"
                    />

                    <div className="mt-10 overflow-x-auto rounded-2xl border border-amber-100 bg-white shadow-sm">

                        <table className="w-full table-auto">

                            <thead className="bg-amber-50">

                                <tr className="text-slate-700 max-md:hidden">

                                    <th className="text-left px-6 py-4 font-semibold">
                                        Product
                                    </th>

                                    <th className="text-center px-6 py-4 font-semibold">
                                        Total
                                    </th>

                                    <th className="text-left px-6 py-4 font-semibold">
                                        Delivery Address
                                    </th>

                                    <th className="text-left px-6 py-4 font-semibold">
                                        Order Status
                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                {orders.map((order) => (

                                    <OrderItem
                                        key={order.id}
                                        order={order}
                                    />

                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

            ) : (

                <div className="flex min-h-[80vh] flex-col items-center justify-center text-center">

                    <h1 className="text-4xl font-bold text-slate-800">
                        No Orders Yet
                    </h1>

                    <p className="mt-3 text-slate-500 max-w-md">
                        Your premium leather products will appear here after your first purchase.
                    </p>

                    <a
                        href="/shop"
                        className="mt-8 rounded-xl bg-amber-700 px-8 py-3 font-semibold text-white transition hover:bg-amber-800"
                    >
                        Explore Collection
                    </a>

                </div>

            )}

        </div>
    );
}
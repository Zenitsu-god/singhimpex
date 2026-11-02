// import React from 'react'
// import Title from './Title'

// const Newsletter = () => {
//     return (
//         <div className='flex flex-col items-center mx-4 my-36'>
//             <Title title="Join Newsletter" description="Subscribe to get exclusive deals, new arrivals, and insider updates delivered straight to your inbox every week." visibleButton={false} />
//             <div className='flex bg-slate-100 text-sm p-1 rounded-full w-full max-w-xl my-10 border-2 border-white ring ring-slate-200'>
//                 <input className='flex-1 pl-5 outline-none' type="text" placeholder='Enter your email address' />
//                 <button className='font-medium bg-green-500 text-white px-7 py-3 rounded-full hover:scale-103 active:scale-95 transition'>Get Updates</button>
//             </div>
//         </div>
//     )
// }

// export default Newsletter


import React from 'react'
import Title from './Title'

const Newsletter = () => {
    return (
        <section className="px-6 py-20 max-w-7xl mx-auto">

            <div className="bg-gradient-to-r from-amber-700 via-amber-800 to-stone-900 rounded-3xl overflow-hidden">
            {/* <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-orange-700 rounded-3xl overflow-hidden"> */}

                <div className="max-w-3xl mx-auto text-center px-8 py-16">

                    <span className="uppercase tracking-[0.25em] text-amber-200 text-sm font-semibold">
                        Stay Connected
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
                        Join the Singh Impex Newsletter
                    </h2>

                    <p className="text-amber-100 mt-5 leading-7">
                        Be the first to discover our latest leather collections,
                        exclusive offers, seasonal discounts and premium product launches.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-10 bg-white rounded-xl p-3 shadow-xl">

                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-1 px-5 py-4 rounded-lg outline-none text-slate-700"
                        />

                        <button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                        {/* <button className="bg-slate-900 hover:bg-black text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"> */}
                            Subscribe
                        </button>

                    </div>

                    <p className="text-amber-200 text-sm mt-5">
                        No spam. Unsubscribe anytime.
                    </p>

                </div>

            </div>

        </section>
    )
}

export default Newsletter

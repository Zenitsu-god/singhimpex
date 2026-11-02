// import React from 'react'
// import Title from './Title'
// import { ourSpecsData } from '@/assets/assets'

// const OurSpecs = () => {

//     return (
//         <div className='px-6 my-20 max-w-6xl mx-auto'>
//             <Title visibleButton={false} title='Why Choose Singh Impex"' description="Every product reflects our commitment to genuine leather, exceptional craftsmanship and customer satisfaction. Experience quality you can trust." />

//             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 gap-y-10 mt-26'>
//                 {
//                     ourSpecsData.map((spec, index) => {
//                         return (
//                             <div className='relative h-44 px-8 flex flex-col items-center justify-center w-full text-center border rounded-lg group' style={{ backgroundColor: spec.accent + 10, borderColor: spec.accent + 30 }} key={index}>
//                                 <h3 className='text-slate-800 font-medium'>{spec.title}</h3>
//                                 <p className='text-sm text-slate-600 mt-3'>{spec.description}</p>
//                                 <div className='absolute -top-5 text-white size-10 flex items-center justify-center rounded-md group-hover:scale-105 transition' style={{ backgroundColor: spec.accent }}>
//                                     <spec.icon size={20} />
//                                 </div>
//                             </div>
//                         )
//                     })
//                 }
//             </div>

//         </div>
//     )
// }

// export default OurSpecs


import React from 'react'
import Title from './Title'
import { ourSpecsData } from '@/assets/assets'

const OurSpecs = () => {

    return (
        <section className="px-6 py-20 max-w-7xl mx-auto">

            <Title
                visibleButton={false}
                title="Why Choose Singh Impex"
                description="Every product reflects our commitment to genuine leather, exceptional craftsmanship and customer satisfaction. Experience quality you can trust."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

                {ourSpecsData.map((spec, index) => (

                    <div
                        key={index}
                        className="relative bg-white border border-slate-200 rounded-2xl p-8 pt-14 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                    >

                        {/* Icon */}
                        <div
                            className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-all duration-300"
                            style={{ backgroundColor: spec.accent }}
                        >
                            <spec.icon size={24} />
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-semibold text-slate-800">
                            {spec.title}
                        </h3>

                        {/* Description */}
                        <p className="text-slate-500 leading-7 mt-4">
                            {spec.description}
                        </p>

                    </div>

                ))}

            </div>

        </section>
    )
}

export default OurSpecs
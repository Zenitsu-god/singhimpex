// import { categories } from "@/assets/assets";

// const CategoriesMarquee = () => {

//     return (
//         <div className="overflow-hidden w-full relative max-w-7xl mx-auto select-none group sm:my-20">
//             <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
//             <div className="flex min-w-[200%] animate-[marqueeScroll_10s_linear_infinite] sm:animate-[marqueeScroll_40s_linear_infinite] group-hover:[animation-play-state:paused] gap-4" >
//                 {[...categories, ...categories, ...categories, ...categories].map((company, index) => (
//                     <button key={index} className="px-5 py-2 bg-slate-100 rounded-lg text-slate-500 text-xs sm:text-sm hover:bg-slate-600 hover:text-white active:scale-95 transition-all duration-300">
//                         {company}
//                     </button>
//                 ))}
//             </div>
//             <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
//         </div>
//     );
// };

// export default CategoriesMarquee;


import { categories } from "@/assets/assets";

const CategoriesMarquee = () => {
    return (
        <section className="max-w-7xl mx-auto my-16 px-4">

            <div className="text-center mb-8">

                <p className="text-amber-700 font-semibold tracking-[0.2em] uppercase text-sm">
                    Explore Categories
                </p>

                <h3 className="text-3xl font-bold text-slate-800 mt-2">
                    Shop by Collection
                </h3>

                {/* <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
                    Discover premium handcrafted leather products designed for
                    everyday elegance and lasting durability.
                </p> */}

            </div>

            <div className="overflow-hidden relative group">

                <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

                <div className="flex gap-5 min-w-[200%] animate-[marqueeScroll_35s_linear_infinite] group-hover:[animation-play-state:paused]">

                    {[...categories, ...categories, ...categories].map((category, index) => (

                        <button
                            key={index}
                            className="whitespace-nowrap px-7 py-3 rounded-full bg-amber-50 border border-amber-200 text-slate-700 font-medium hover:bg-amber-700 hover:text-white hover:border-amber-700 transition-all duration-300"
                        >
                            {category}
                        </button>

                    ))}

                </div>

                <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            </div>

        </section>
    );
};

export default CategoriesMarquee;
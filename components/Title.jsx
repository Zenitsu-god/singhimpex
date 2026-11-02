'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const Title = ({
    title,
    description,
    visibleButton = true,
    href = ''
}) => {

    return (
        <div className="flex flex-col items-center text-center mb-14">

            {/* Small Label */}
            <span className="uppercase tracking-[0.25em] text-amber-700 text-sm font-semibold">
                Singh Impex Collection
            </span>

            {/* Heading */}
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-800">
                {title}
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-2xl text-slate-500 leading-7">
                {description}
            </p>

            {/* Button */}
            {visibleButton && (
                <Link
                    href={href}
                    className="group mt-7 inline-flex items-center gap-2 text-amber-700 font-semibold hover:text-amber-800 transition"
                >
                    View All Products

                    <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition"
                    />
                </Link>
            )}

        </div>
    )
}

export default Title
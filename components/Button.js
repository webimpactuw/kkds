import React from 'react';
import Link from 'next/link';

export default function Button({children}) {
    return (
        <button className="bg-[#830033] text-white font-bold text-[20px] leading-none rounded-[10px] w-50 h-16 pt-1.25 pb-1.25 pr-12.5 pl-12.5 gap-2.5">
            {children}
        </button>
    )
}
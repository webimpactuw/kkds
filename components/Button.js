import React from 'react';
import Link from 'next/link';

export default function Button({text, link}) {
    return (
        <Link 
            href={link}
            className="flex items-center justify-center bg-[#830033] text-white font-bold text-[24px] rounded-[15px] w-fit h-18.75 px-12.5 py-1.25 transition-transform duration-200 hover:scale-105"
        >
            {text}
        </Link>
    )
}
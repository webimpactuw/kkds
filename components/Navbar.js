import React from 'react';
import Link from 'next/link';

function Navbar(){
    return (
        <nav className="flex items-center justify-between p-5 bg-[#830033] text-[#FFFAEE]">
            <div className="flex item-center gap-2.5">
                <div className="w-10 h-10 bg-[#ccc] rounded-full"></div>
                <div className="flex flex-col justify-center leading-[1.1]">
                    <span className="brand-title">Kalamandapam</span>
                    <span className="brand-subtitle">Kuchipudi Dance School</span> 
                </div>
            </div>
            <ul className="flex gap-5 list-none">
                <li><Link href="/" className="hover:text-[#FFE299] transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-[#FFE299] transition-colors">About Us</Link></li>
                <li><Link href="/dancers" className="hover:text-[#FFE299] transition-colors">Dancers</Link></li>
                <li><Link href="/events" className="hover:text-[#FFE299] transition-colors">Events & Workshops</Link></li>
                <li><Link href="/gallery" className="hover:text-[#FFE299] transition-colors">Gallery</Link></li>
                <li><Link href="/contact" className="hover:text-[#FFE299] transition-colors">Contact Us</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;
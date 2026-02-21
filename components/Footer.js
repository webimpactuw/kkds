import Link from 'next/link';
import React from 'react';

export default function Footer() {
    return (
        <footer className="flex justify-between items-center px-16 py-4 bg-[#830033] text-[#FFFAEE]">
            
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#D9D9D9] rounded-full"></div>
                <div className="flex flex-col leading-tight">
                    <span className="text">Kalamandapam</span>
                    <span className="text">Kuchipudi Dance</span> 
                    <span className="text">School</span>
                </div>
            </div>

            <ul className="flex flex-col gap-0.4 list-none">
                <li><Link href="/" className="hover:text-[#FFE299]">Home</Link></li>
                <li><Link href="/about" className="hover:text-[#FFE299]">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-[#FFE299]">Contact</Link></li>
            </ul>

            <div className="flex flex-col gap-1 text-sm">
                <p><strong>Hours:</strong></p>
                <p><strong>Location: [Address]</strong></p>
            </div>

            <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#D9D9D9] rounded-full"></div>
                <div className="w-10 h-10 bg-[#D9D9D9] rounded-full"></div>
                <div className="w-10 h-10 bg-[#D9D9D9] rounded-full"></div>
            </div>
               
        </footer>
    );
}
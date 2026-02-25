import React from 'react';
import Link from 'next/link';

const logoImg = "https://www.figma.com/api/mcp/asset/809058b5-b17c-463a-aad6-1d86efc7986d";

function Navbar() {
  return (
    <nav
      className="flex flex-col items-start justify-center bg-[#830033] px-[60px] py-6 text-white"
      style={{ fontFamily: 'var(--font-rambla), sans-serif' }}
    >
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="relative h-[62px] w-[62px] shrink-0 overflow-hidden rounded-full">
            <img
              alt=""
              className="absolute inset-0 block h-full w-full object-cover"
              src={logoImg}
            />
          </div>
          <div className="flex flex-col justify-center text-xl font-bold leading-normal">
            <span className="block">Kalamandapam</span>
            <span className="block">Kuchipudi Dance School</span>
          </div>
        </div>
        <div className="flex items-center gap-[39px] text-xl font-bold leading-normal">
          <Link href="/" className="hover:text-[#FFE299] transition-colors">Home</Link>
          <Link href="/about" className="hover:text-[#FFE299] transition-colors">About Us</Link>
          <Link href="/dancers" className="hover:text-[#FFE299] transition-colors">Dancers</Link>
          <Link href="/classes" className="hover:text-[#FFE299] transition-colors">Classes</Link>
          <Link href="/events" className="hover:text-[#FFE299] transition-colors">Events &amp; Workshops</Link>
          <Link href="/gallery" className="hover:text-[#FFE299] transition-colors">Gallery</Link>
          <Link href="/contact" className="hover:text-[#FFE299] transition-colors">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

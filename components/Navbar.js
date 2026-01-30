import React from 'react';
import Link from 'next/link';

function Navbar(){
    return (
        <nav className='navbar'>
            <ul className='navbar-links'>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About page</Link></li>
                <li><Link href="/introducing-dancers">Introducing the Dancers</Link></li>
                <li><Link href="/events">Events and workshops</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;
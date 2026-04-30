import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import NavLinks from './NavLinks';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
            <header className="flex h-16 items-center justify-between px-6">
                <div className="flex items-center gap-1">
                    <div className="w-12 h-12  bg-green-800  rounded-full flex items-center justify-center">
                        <Image
                            src={"/logo.png"}
                            alt="logo"
                            loading="eager"
                            width={30}
                            height={30}
                            className="object-cover h-auto w-auto "
                        />
                    </div>
                    <h3 className="font-black text-green-800 text-xl">Qurbani Hat</h3>
                </div>
                <ul className="flex items-center gap-4 font-semibold">
                    <li><NavLinks href="/">Home</NavLinks></li>
                    <li><NavLinks href="/animals">All Animals</NavLinks></li>
                </ul>
                <div className='space-x-2'>
                    <Button><Link href={'/login'}>Login</Link></Button>
                    <Button><Link href={'/register'}>Register</Link></Button>
                </div>
            </header>
        </nav >
    );
};

export default Navbar;
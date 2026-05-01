"use client"
import { Avatar, Button, Spinner } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import NavLinks from './NavLinks';
import Image from 'next/image';
import { authClient } from '@/lib/auth-client';
import { FiLogOut } from 'react-icons/fi';
import logo from '@/assets/user.png'

const Navbar = () => {
    const { data, isPending } = authClient.useSession()
    const user = data?.user;
    const handelLogout = async () => {
        await authClient.signOut();
    }

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
                    <li><NavLinks href="/profile">Profile</NavLinks></li>
                </ul>
                <div className='space-x-2'>
                    {isPending ? <div className="flex items-center gap-4">
                        <Spinner />
                    </div> :
                        user ? <div className='flex items-center gap-4'>
                            {user.name}
                            {/* <Image
                                src={user?.image || logo }
                                alt={user.name}
                                width={30}
                                height={30} 
                                className='rounded-full'/> */}
                            <Avatar>
                                <Avatar.Image
                                    alt={user.name}
                                    src={user?.image}
                                    referrerPolicy='no-referrer'
                                />
                                <Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
                            </Avatar>
                            <Button variant='danger-soft' onClick={handelLogout}>
                                <FiLogOut />
                            </Button>
                        </div> : <div className="flex items-center gap-4">
                            <Button><Link href={'/login'}>Login</Link></Button>
                            <Button><Link href={'/register'}>Register</Link></Button>
                        </div>}
                </div>
            </header>
        </nav >
    );
};

export default Navbar;
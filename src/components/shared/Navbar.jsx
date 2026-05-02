"use client"
import { Avatar, Button, Spinner } from '@heroui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import NavLinks from './NavLinks';
import Image from 'next/image';
import { authClient } from '@/lib/auth-client';
import { FiLogOut } from 'react-icons/fi';
import { TiThMenu } from 'react-icons/ti';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
    const [status, setStatus] = useState(false)
    const { data, isPending } = authClient.useSession()
    const user = data?.user;
    const handelLogout = async () => {
        await authClient.signOut();
    }
    const links = <>
        <li><NavLinks href="/">Home</NavLinks></li>
        <li><NavLinks href="/animals">All Animals</NavLinks></li>
        <li><NavLinks href="/my-profile">Profile</NavLinks></li>
    </>
    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
            <header className="flex h-16 items-center justify-between px-6">
                <div className="flex items-center gap-1">
                    <div className='md:hidden cursor-pointer' onClick={() => setStatus(!status)}>
                        {status ?  <IoMdClose size={30}  /> : <TiThMenu size={30}  />}
                       
                    </div>
                    <ul className={`z-10  font-semibold  space-y-3 md:hidden bg-background/70 backdrop-blur-lg p-3 absolute duration-1000 ${status ? 'top-15 left-0 ' : 'top-15  -left-50'} `}>
                        {links}
                    </ul>
                    <div className='hidden md:flex items-center gap-1 '>
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
                    <h3 className="font-black text-green-800 text-lg md:text-xl">Qurbani Hat</h3>
                    </div>
                </div>
                <ul className="hidden md:flex items-center gap-4 font-semibold ">
                    {links}
                </ul>
                <div className='space-x-2'>
                    {isPending ? <div className="flex items-center gap-4">
                        <Spinner />
                    </div> :
                        user ? <div className='flex items-center gap-4'>
                            <p className='hidden md:flex'>{user.name}</p>

                            {/* <Image
                                src={user?.image || logo }
                                alt={user.name}
                                width={30}
                                height={30} 
                                className='rounded-full'/> */}
                            <Avatar>
                                <Avatar.Image
                                    alt={user?.name}
                                    src={user?.image}
                                    referrerPolicy='no-referrer'
                                />
                                <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
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
"use client"

import { authClient } from '@/lib/auth-client';
import { Avatar, Card, Spinner } from '@heroui/react';
import React from 'react';
import EditProfile from '@/components/profile/EditProfile';

const ProfilePage = () => {
    const { data, isPending } = authClient.useSession()
    const user = data?.user;
    // console.log(data);

    if (isPending) {
        return (
            <div className="flex items-center gap-4 min-h-[60vh] justify-center">
                <Spinner size='50' />
            </div>
        )
    }

    return (
        <div className='min-h-[60vh] flex items-center'>
            <Card className='w-md mx-auto p-10 text-center grid justify-center '>
                {/* <Image
                    src={user?.image || logo}
                    alt={user.name}
                    width={200}
                    height={200}
                    className='rounded-full mx-auto' /> */}
                <Avatar className='h-40 w-40 mx-auto'>
                    <Avatar.Image
                        alt={user?.name}
                        src={user?.image}
                        referrerPolicy='no-referrer'
                    />
                    <Avatar.Fallback className='text-5xl'>{user?.name[0]}</Avatar.Fallback>
                </Avatar>
                <h2 className='text-2xl font-bold '>Name : {user?.name}</h2>
                <h2 className=' '>Email : {user?.email}</h2>
                <div className='flex justify-center'>

                    <EditProfile />
                </div>
            </Card>
        </div>
    );
};

export default ProfilePage;
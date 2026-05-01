import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import React from 'react';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const LoginWith = () => {
    const handelGoggleSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }

    const handelGithubSignIn = () => {
        // 
    }

    return (
        <div>
            <div className='space-y-1'>
                <Button onClick={handelGoggleSignin} variant='outline' className='flex gap-2 items-center  text-green-800 w-full'>
                    <FcGoogle size={25} />
                    <p>Login with Google</p>
                </Button>
                {/* <Button onClick={handelGithubSignIn} variant='outline' className='flex gap-2 items-center  w-full '>
                    <FaGithub size={25} />
                    <p>Login with Github</p>
                </Button>
                <Button variant='outline' className='flex gap-2 items-center text-blue-500 w-full'>
                    <FaFacebook size={25} />
                    <p>Login with Facebook</p>
                </Button> */}
            </div>
        </div>
    );
};

export default LoginWith;
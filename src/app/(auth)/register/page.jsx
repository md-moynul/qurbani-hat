"use client";

import LoginWith from "@/components/shared/LoginWith";
import { authClient } from "@/lib/auth-client";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function RegisterPage() {
    const router = useRouter()
    const [isVisible, setIsVisible] = useState(false)
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const { name, email, image, password } = Object.fromEntries(formData.entries())

        const { data, error } = await authClient.signUp.email({
            email,
            password,
            name,
            image,
        })
        if (data){
            toast.success('Sign In successful')
            router.push('/login')
        }
        if(error){
            toast.error(`${error.message}`)
        }
    }

    return (
        <div className="min-h-[75vh] flex items-center pt-15" >
            <Form
                className="flex flex-col space-y-4 shadow  p-5 pb-10 rounded-2xl mx-auto w-md hover:shadow-2xl hover:shadow-emerald-400  hover:scale-101 transition-all duration-500 shadow-green-300"
                onSubmit={onSubmit}
            >
                <Label className="text-center font-bold text-3xl">Please Register</Label>
                <TextField isRequired className="w-full " name="name">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                </TextField>
                <TextField className="w-full " name="image" type="url">
                    <Label>Image URL</Label>
                    <Input placeholder="Enter image url" />
                </TextField>
                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }

                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="Enter your email" />
                    <FieldError />
                </TextField>

                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type={`${isVisible ? "text" : "password"}`}
                    className={'relative'}
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }

                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                    <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                    <FieldError />
                    <span onClick={() => { setIsVisible(!isVisible) }} className="absolute top-8 right-3 cursor-pointer">{isVisible ? <Eye className="size-5" /> : <EyeSlash className="size-5" />}</span>
                </TextField>
                <Button className={'w-full'} type="submit">Register</Button>
                <p className="text-center text-gray-500 ">Already Have An Account ? <span className="text-red-500 cursor-pointer font-bold"><Link href={'/login'}>Login</Link></span></p>
                <LoginWith/>
            </Form>
        </div >
    );
}
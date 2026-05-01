import { Button } from "@heroui/react";
import Link from "next/link";

const ButtonCategory = ({href , children ,}) => {
    
    return (
        <div>
            <Link href={href}><Button variant="outline" className={'text-green-800'}>{children}</Button></Link>
        </div>
    );
};

export default ButtonCategory;
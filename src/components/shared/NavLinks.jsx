'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";


const NavLinks = ({href , children , className}) => {
      const pathName = usePathname();
      console.log(pathName);
      const isActive = pathName === href;
    
    return (
        <div>
            <Link href={href} className={`${className} ${isActive ? 'text-green-700 border-b-2 p-1 border-green-700' : ""}`}>{children}</Link>
        </div>
    );
};

export default NavLinks;
'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";


const NavLinks = ({href , children , className}) => {
      const pathName = usePathname();
      console.log(pathName);
      const isActive = pathName === href;
    
    return (
        <div>
            <Link href={href} className={`${className} ${isActive ? 'text-green-700' : ""}`}>{children}</Link>
        </div>
    );
};

export default NavLinks;
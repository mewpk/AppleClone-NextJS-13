import Link from "next/link"
import Image from "next/image"

import CustomButton  from "./CustomButton"
import { navbarList } from "@/constants"

const Navbar = () => {
  return (
    <header className="w-full sticky top-0 z-10">
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-white align-middle rounded-full">
            <Link href="/" >
                <Image src="/logo-apple.svg" alt="logo" width={12} height={12} className="object-contain"></Image>
            </Link>
            {navbarList.map((item,index)=>(
                <Link href={item} key={index}>
                    <span className="max-md:hidden text-xs">{item}</span>
                </Link>
            ))}
            <CustomButton 
                title="Sign In"
                customBtn="bg-black rounded-full text-white text-xs py-1 w-[60px]"/>
        </nav>

    </header>
  )
}

export default Navbar
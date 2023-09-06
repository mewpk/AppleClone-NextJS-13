import Link from "next/link"
import Image from "next/image"

import CustomButton  from "./CustomButton"

const Navbar = () => {
  return (
    <header className="w-full absolute z-10 ">
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-white align-middle rounded-full">
            <Link href="/" >
                <Image src="/logo-apple.svg" alt="logo" width={12} height={12} className="object-contain"></Image>
            </Link>
            
            <Link href="/">
                <span className="max-md:hidden text-xs">Store</span>
            </Link>

            <Link href="/">
                <span className="max-md:hidden text-xs">Mac</span>
            </Link>
            <Link href="/">
                <span className="max-md:hidden text-xs">iPad</span>
            </Link>
            <Link href="/">
                <span className="max-md:hidden text-xs">iPhone</span>
            </Link>
            <Link href="/">
                <span className="max-md:hidden text-xs">Watch</span>
            </Link>
            <Link href="/">
                <span className="max-md:hidden text-xs">Vision</span>
            </Link>
            <Link href="/">
                <span className="max-md:hidden text-xs">AirPods</span>
            </Link>
            <Link href="/">
                <span className="max-md:hidden text-xs">TV & Home</span>
            </Link>
            <Link href="/">
                <span className="max-md:hidden text-xs">Entertainment</span>
            </Link>
            <Link href="/">
                <span className="max-md:hidden text-xs">Accessories</span>
            </Link>
            <Link href="/">
                <span className="max-md:hidden text-xs">Support</span>
            </Link>
            <CustomButton 
                title="Sign In"
                customBtn="bg-black rounded-full text-white text-xs py-1 w-[60px]"/>
        </nav>

    </header>
  )
}

export default Navbar
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="grid grid-cols-3 items-center border-b border-black px-6 py-2">
            
            {/* Logo */}
            <div className="justify-self-start">
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={100} height={100} />
                </Link>
            </div>

            {/* Search bar */}
            <div className="justify-self-center">
                <p>[barre de recherche]</p>
            </div>

            {/* Nothing */}
            <div className="justify-self-end"></div>
        </nav>
    )
}

export default Navbar;
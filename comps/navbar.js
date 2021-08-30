import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/weeii2.png" alt="weeii" width="130" height="130" />
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About Us</a></Link>
            <Link href="/business"><a>Our Business</a></Link>
        </nav>
     );
}
 
export default Navbar;

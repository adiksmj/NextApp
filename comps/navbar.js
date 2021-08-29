import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/weeii.png" width={135} height={135}/>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About Us</a></Link>
            <Link href="/business"><a>Our Business</a></Link>
        </nav>
     );
}
 
export default Navbar;
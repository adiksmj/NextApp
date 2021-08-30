import Link from 'next/link'

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <img src={process.env.PUBLIC_URL + '/weeii2.png'} width={135} height={135}/>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About Us</a></Link>
            <Link href="/business"><a>Our Business</a></Link>
        </nav>
     );
}
 
export default Navbar;

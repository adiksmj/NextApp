import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return ( 
        <div>
        <nav>
            <div className="logo">
                <Image src="/weeii2.png" width={135} height={135}/>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About Us</a></Link>
            <Link href="/business"><a>Our Business</a></Link>
        </nav>
        <style jsx>{`
                nav {
                    background: #fe0000;
                    margin: 0px auto 50px;
                    padding: 10px 0;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    border-bottom: 1px solid #ddd;
                    height: 50px;
                  }
                  
                  nav a {
                    margin-left: 30px;
                    margin-right: 30px;
                    color: white;
                    font-weight: 1000;
                    text-decoration: none;
                  }
                  
                  nav a:hover {
                    color: black;
                  }
                  
                  nav .logo {
                    margin-right: auto;
                    align-items: center;
                    margin-left: 20px;
                    margin-top: 10px;
                    color: white;
                  }
                  
            `}
        </style>
        </div>
     );
}
 
export default Navbar;
import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({ children }) => {
    return ( 
        <div>
            <Navbar />
            <div className="content">
            { children }
            </div>
            <Footer />
            <style jsx>{`
                .content {
                    max-width: 1250px;
                    margin: 0 auto;
                }
            `}</style>
        </div>
     );
}
 
export default Layout;
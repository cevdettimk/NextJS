import Footer from "./Footer";
import Navabar from "./Navbar";

const Layout = ({children}) => {
    return ( 
        <div className="content">
            <Navabar/>
            {children}
            <Footer/>
        </div>
     );
}
 
export default Layout;
import Link from 'next/link';
import Image from 'next/image';
const Navabar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src='/logo.png' width={120} height={77} />
            </div>
            <Link href="/"><a>Home</a></Link> 
            <Link href="/about"><a>About</a></Link> 
            <Link href="/users"><a>Users Listing</a></Link> 
            
        </nav>
     );
}
 
export default Navabar;

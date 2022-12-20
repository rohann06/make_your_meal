import Link from 'next/link';
import {GiMeal} from 'react-icons/gi';

const Navbar = () => {
    return ( 
        <div className=' font-headings text-2xl font-semibol lg:text-3xl uppercase'>
            <Link href={'/'}>
                <h1 className=' flex align-middle text-slate-400/80'>Make Y <span className=' text-slate-700 text-3xl lg:text-4xl'><GiMeal/></span> ur Meals</h1>
            </Link>
        </div>
     );
}
 
export default Navbar;
import Link from 'next/link';
import {GiMeal} from 'react-icons/gi';

const Navbar = () => {
    return ( 
        <div className=' font-nav_fonts text-xl uppercase'>
            <Link href={'/'}>
                <h1 className=' flex align-middle text-slate-400/80'>Make Y  <span className=' text-slate-700 lg:text-[27px]'><GiMeal/></span> ur Meals</h1>
            </Link>
        </div>
     );
}
 
export default Navbar;
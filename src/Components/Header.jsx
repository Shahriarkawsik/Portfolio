import developer from '../assets/developer.png'
import Banner from './Banner';
import Navbar from './Navbar';
const Header = () => {
    return (
        <div className=' bg-color5 flex'>
            <figure className='h-[600px] my-auto'>
            <img className='h-full' src={developer} alt="" />
            </figure>
            <div className='w-full'>
                <Navbar/>
                <Banner/>
            </div>
        </div>
    );
};

export default Header;
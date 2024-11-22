import Logo from './Logo.webp';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { HiStatusOnline, HiStatusOffline } from "react-icons/hi";
import { GiShoppingCart } from "react-icons/gi";
import { FcBusinessContact } from "react-icons/fc";
import UserContext from '../utils/UserContext';

import { useSelector } from 'react-redux';
import FormComponent from './FormComponent';
import ContactModal from './ContactModal';

const Header = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext);
    const [btnNameReact, setBtnNameReact] = useState(loggedInUser === 'Default User' ? 'Login' : 'Logout');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const onlineStatus = useOnlineStatus();

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    const handleLoginLogout = () => {
        if (btnNameReact === 'Login') {
            const fetchedUserName = 'Fetched User';
            setLoggedInUser(fetchedUserName);
            setBtnNameReact('Logout');
            setIsModalOpen(true);
        } else {
            setLoggedInUser('');
            setBtnNameReact('Login');
        }
    };

    return (
        <div className="flex h-24 justify-between bg-white shadow-md shadow-purple-300 w-full">
            <div>
                <Link to="/">
                    <img className="w-32 h-24 
                    cursor-pointer" src={Logo} alt="Logo" />
                </Link>
            </div>
            <div className="nav-items flex items-center h-full">
                <ul className="flex -mb-[8px]">
                    <li className='py-7 px-2 mx-2 cursor-pointer text-xl hover:text-purple-600 duration-[.3s]'>
                        <Link to="/" className="links">Home</Link>
                    </li>
                    <li className='py-7 px-2 mx-2 cursor-pointer text-xl hover:text-purple-600 duration-[.3s]'>
                        <Link to="/about" className="links">About Us</Link>
                    </li>
                    <li className='py-7 px-2 mx-2  cursor-pointer text-xl hover:text-purple-600'>
                        <Link to="/grocery" className="links">Grocery</Link>
                    </li>
                    <li className="py-5 px-2 mx-2  cursor-pointer text-4xl hover:text-purple-600 ">
                        <button
                            onClick={() => setIsContactModalOpen(true)}
                        >
                            <FcBusinessContact />
                        </button>
                    </li>
                    <li className='py-6 px-2 mx-2'>
                        <div className='flex flex-row'>
                            <Link to="/cart"><div className='cursor-pointer text-3xl hover:text-purple-600 hover:scale-125 duration-[.3s]'><GiShoppingCart /></div>
                            </Link>
                            <div className='text-lg hover:text-purple-600'>({cartItems.length === 1 ? `${cartItems.length} item` : `${cartItems.length} items`})</div>
                        </div>
                    </li>
                    <button className='px-2 mt-3 mx-2 w-24 h-12 cursor-pointer text-xl border-2 rounded-xl scale-105 bg-purple-500 border-transparent text-white hover:scale-110 hover:bg-purple-600 duration-[.3s]'
                        onClick={handleLoginLogout}
                    >
                        {btnNameReact}
                    </button>
                    <li className='py-5 px-2 mt-1 mx-2 text-3xl text-green-500'>
                        {onlineStatus ? <HiStatusOnline /> : <HiStatusOffline />}
                    </li>
                </ul>
            </div>

            {isModalOpen && <FormComponent closeModal={() => setIsModalOpen(false)} />}

            {isContactModalOpen && <ContactModal closeModal={() => setIsContactModalOpen(false)} />}
        </div>
    );
};

export default Header;



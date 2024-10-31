import { LOGO_URL } from '../utils/constants';
import { useState } from 'react';

import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

import { HiStatusOnline, HiStatusOffline } from "react-icons/hi";

import { GiShoppingCart } from "react-icons/gi";

import { FcBusinessContact } from "react-icons/fc";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState('Login');

    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between shadow-lg shadow-slate-700 w-full bg-white">
            <div>
                <Link to="/">
                    <img className="w-28 cursor-pointer"
                        src=/*"https://imgs.search.brave.com/Mq64MmYgkvnC9zqrQyGV_5wu9Wckwx9E-h-pWclXrqc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzQ3LzUwLzU5/LzM2MF9GXzk0NzUw/NTkxOF92cDEzMEdM/a2RWVTJISHptTks4/QlVld0FES3dwb0kz/Ry5qcGc"*/{LOGO_URL}
                        alt="Logo"
                    // className="logo"
                    />
                </Link>
            </div>
            <div className="flex items-center">
                <ul className="flex">
                    <li className='p-2 m-2 cursor-pointer text-xl rounded-md hover:font-semibold hover:text-orange-500 hover:scale-105'>
                        <Link to="/" className="links">
                            Home
                        </Link>
                    </li>
                    <li className='p-2 m-2 cursor-pointer text-xl rounded-md hover:font-semibold hover:text-orange-500 hover:scale-105'>
                        <Link to="/about" className="links">
                            About Us
                        </Link>
                    </li>
                    <li className='p-2 m-2 cursor-pointer text-xl rounded-md hover:font-semibold hover:text-orange-500 hover:scale-105'>
                        <Link to="/grocery" className="links">
                            Grocery
                        </Link>
                    </li>
                    <li className='p-2  m-2 cursor-pointer text-3xl rounded-md hover:font-semibold hover:text-orange-500 hover:scale-105'>
                        <Link to="/contact" className="links">
                        <FcBusinessContact />
                        </Link>
                    </li>
                    <li className='p-2 m-2 cursor-pointer text-3xl rounded-md hover:font-semibold hover:text-orange-500 hover:scale-125'>
                        <Link className="links"><GiShoppingCart /></Link>
                    </li>
                    <button className='px-2 mx-2 w-24 text-white cursor-pointer text-xl border-2 bg-gray-400 hover:bg-orange-500 hover:font-semibold rounded-lg hover:scale-105 hover:border-transparent hover:text-black'
                        onClick={() => {
                            //   btnName = 'Logout';
                            btnNameReact === 'Login'
                                ? setBtnNameReact('Logout')
                                : setBtnNameReact('Login');
                            console.log(btnNameReact);
                        }}
                    >
                        {btnNameReact}
                    </button>
                    <li className='p-2 m-2 rounded-md hover:font-semibold mt-1 text-3xl text-green-500'>{onlineStatus ? <HiStatusOnline /> : <HiStatusOffline />}</li>
                </ul>
            </div>
        </div>
    );
};
export default Header;

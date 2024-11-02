import { LOGO_URL } from '../utils/constants';
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { HiStatusOnline, HiStatusOffline } from "react-icons/hi";
import { GiShoppingCart } from "react-icons/gi";
import { FcBusinessContact } from "react-icons/fc";
import UserContext from '../utils/UserContext'; 

const Header = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext); // Access the context
    const [btnNameReact, setBtnNameReact] = useState(loggedInUser === 'Default User' ? 'Login' : 'Logout');
    const onlineStatus = useOnlineStatus();
    const navigate = useNavigate(); // For navigation

    const handleLoginLogout = () => {
        if (btnNameReact === 'Login') {
            const fetchedUserName = 'Fetched User'; // Replace with actual logic to fetch the user name
            setLoggedInUser(fetchedUserName); // Update the context with the logged-in user's name
            setBtnNameReact('Logout'); // Update button name to Logout
            navigate('/form'); // Redirect to the form
        } else {
            setLoggedInUser('Default User'); // Reset to default user on logout
            setBtnNameReact('Login'); // Update button name to Login
        }
    };

    return (
        <div className="flex h-28 justify-between bg-white shadow-md shadow-purple-300 w-full">
            <div>
                <Link to="/">
                    <img className="w-32 h-28 cursor-pointer" src={LOGO_URL} alt="Logo" />
                </Link>
            </div>
            <div className="flex items-center">
                <ul className="flex">
                    <li className='p-2 m-2 cursor-pointer text-xl hover:font-semibold hover:text-purple-600 hover:scale-105'>
                        <Link to="/" className="links">Home</Link>
                    </li>
                    <li className='p-2 m-2 cursor-pointer text-xl hover:font-semibold hover:text-purple-600  hover:scale-105'>
                        <Link to="/about" className="links">About Us</Link>
                    </li>
                    <li className='p-2 m-2 cursor-pointer text-xl hover:font-semibold hover:text-purple-600 hover:scale-105'>
                        <Link to="/grocery" className="links">Grocery</Link>
                    </li>
                    <li className='p-2 m-2 cursor-pointer text-3xl hover:font-semibold hover:text-purple-600 hover:scale-105'>
                        <Link to="/contact" className="links"><FcBusinessContact /></Link>
                    </li>
                    <li className='p-2 m-2 cursor-pointer text-3xl hover:font-semibold hover:text-purple-600 hover:scale-125'>
                        <Link className="links"><GiShoppingCart /></Link>
                    </li>
                    <button className='px-2 mx-2 w-24 text-black cursor-pointer text-xl border-2 bg-purple-300 hover:bg-purple-600 hover:font-semibold rounded-xl hover:scale-105 border-transparent hover:text-white'
                        onClick={handleLoginLogout} // Use the handler
                    >
                        {btnNameReact}
                    </button>
                    <li className='p-2 m-2 hover:font-semibold mt-1 text-3xl text-green-500'>
                        {onlineStatus ? <HiStatusOnline /> : <HiStatusOffline />}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;

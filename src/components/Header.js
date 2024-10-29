import { LOGO_URL } from "../utils/constants";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState('Login');

    return (
        <div className="header">
            <div className="logo-container">
                {/* <img src={LOGO_URL} alt="App Logo" className="logo" /> */}
                <Link to="/">
                    <img
                        src="https://imgs.search.brave.com/Mq64MmYgkvnC9zqrQyGV_5wu9Wckwx9E-h-pWclXrqc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzQ3LzUwLzU5/LzM2MF9GXzk0NzUw/NTkxOF92cDEzMEdM/a2RWVTJISHptTks4/QlVld0FES3dwb0kz/Ry5qcGc"
                        alt="Logo"
                        className="logo"
                    />
                </Link>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/" className="links">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="links">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="links">
                            Contact Us
                        </Link>
                    </li>
                    <li>
                        <Link className="links">Cart</Link>
                    </li>
                    <button
                        className="loginBtn"
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
                </ul>
            </div>
        </div>
    );
};
export default Header;

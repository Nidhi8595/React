import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.canva.com/design/DAGSsC-RlxI/I7W4z-Bdfa7nfRZxUWDvKg/view?utm_content=DAGSsC-RlxI&utm_campaign=share_your_design&utm_medium=link&utm_source=shareyourdesignpanel" alt="Logo" />

            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
        </div>
    )
}

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<AppLayout />);

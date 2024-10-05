import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://imgs.search.brave.com/tu0c6MF6BUOeFB3gtk6a9miKo88wMYHtb-Q4OYCOY78/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzEwLzk2Lzc2/LzM2MF9GXzMxMDk2/NzY2Nl9VUVFYUzFU/dHM5d2FrM2hKa2VM/Q2d3WllJYkNCSzZU/Zi5qcGc" alt="Logo" />


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

// const styleCard={
//     backgroundColor:"#f0f0f0",
// };

const ResCard = () => {
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0", }}>
            <div className="res-logo">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/9/1bd99faa-92f1-4a01-9e07-b53dbe4a156c_42146.jpg"/>
            </div>
            <h3>Burger King</h3>
            <h4></h4>

        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search-container">
                <input type="text" placeholder="Search Food or Restaurant" />
                <button>Search</button>
            </div>

            <div className="res-container">
                <ResCard />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<AppLayout />);

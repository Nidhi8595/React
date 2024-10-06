import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from "./components/Header";
import Body from "./components/Body";

// * Note: When you have to dainamically pass in a data to a component, you pass in prop Object

const currYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="footer">
            <p>
                Copyright &copy; {currYear}, Made by <strong>Neelakshi</strong>
            </p>
        </footer>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            <Footer />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);

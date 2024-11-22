import React, { lazy, Suspense, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from './components/Footer';
import About from './components/About';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import "@fortawesome/fontawesome-free/css/all.min.css";


import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import UserContext from './utils/UserContext';

import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';


const Grocery = lazy(() => import('./components/Grocery'));

const AppLayout = () => {
    const [loggedInUser, setLoggedInUser] = useState('Default User'); 

    useEffect(() => {
        
        const data = {
            name: '',
        };
        setLoggedInUser(data.name); 
    }, []);

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
                <div className='app'>
                    <Header />
                    <Outlet />
                    <Footer />
                </div>
            </UserContext.Provider>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/about',
                element: (
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <About />
                    </Suspense>
                ),
            },
            
            {
                path: '/grocery',
                element: (
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <Grocery />
                    </Suspense>
                ),
            },
            {
                path: '/restaurants/:resId',
                element: <RestaurantMenu />,
            },
            {
                path: '/cart',
                element: <Cart />,
            },
        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);

// import React, { lazy,Suspense } from 'react';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import ReactDOM from 'react-dom/client';

// import Header from "./components/Header";
// import Body from "./components/Body";
// import Footer from './components/Footer';
// import About from './components/About';
// import Contact from './components/Contact';
// import Error from './components/Error';
// import RestaurantMenu from './components/RestaurantMenu';
// import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
// import UserContext from './utils/UserContext';

// const Grocery = lazy(() => import('./components/Grocery'));
// const About = lazy(() => import('./components/About'));

// import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

// const AppLayout = () => {
//     const [userName, setUserName] = useState();

//     useEffect(() => {
//         // Make an API call and send username and password
//         const data = {
//           name: 'Vasu K',
//         };
//         setUserName(data.name);
//       }, []);

//     return (
//         <UserContext.Provider value={{ loggedInUser: userName, setUserName }}><div className='app'>
//         <Header />
//         <Outlet />
//         <Footer />
//     </div></UserContext.Provider>
        
//     );
// };

// const appRouter = createBrowserRouter([
//     {
//         path: '/',
//         element: <AppLayout />,
//         children: [
//             {
//                 path: '/',
//                 element: <Body />,
//             },
//             {
//                 path: '/about',
//                 element: <About />,
//             },
//             {
//                 path: '/contact',
//                 element: <Contact />,
//             },
//             {
//                 path: '/grocery',
//                 element: (
//                     <Suspense fallback={<h1>Loading...</h1>}>
//                         <Grocery />
//                     </Suspense>
//                 ),
//             },
//             {
//                 path: '/restaurants/:resId',
//                 element: <RestaurantMenu />,
//             },
//         ],
//         errorElement: <Error />,
//     },
// ]);

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<RouterProvider router={appRouter} />);


import React, { lazy, Suspense, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import UserContext from './utils/UserContext'; 
import FormComponent from './components/FormComponent';

const Grocery = lazy(() => import('./components/Grocery'));

const AppLayout = () => {
    const [loggedInUser, setLoggedInUser] = useState('Default User'); // Set initial user

    useEffect(() => {
        // Simulate fetching user data (you can replace this with actual API calls)
        const data = {
            name: '',
        };
        setLoggedInUser(data.name); // Update user state based on API response
    }, []);

    return (
        <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
            <div className='app'>
                <Header />
                <Outlet />
                <Footer />
            </div>
        </UserContext.Provider>
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
                path: '/contact',
                element: <Contact />,
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
                path: '/form',
                element: <FormComponent />,
            },
        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);

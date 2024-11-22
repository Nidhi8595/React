import React, { lazy, Suspense, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from './components/Footer';
import About from './components/About';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import Cart from './components/Cart';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { HashRouter, Route, Routes } from 'react-router-dom';  
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

// Lazy load Grocery component
const Grocery = lazy(() => import('./components/Grocery'));

const AppLayout = () => {
  const [loggedInUser, setLoggedInUser] = useState('Default User');

  useEffect(() => {
    const data = { name: '' };  // Set logged-in user name
    setLoggedInUser(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        <div className='app'>
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Body />} />
              <Route path="/about" element={<Suspense fallback={<div>Loading...</div>}><About /></Suspense>} />
              <Route path="/grocery" element={<Suspense fallback={<div>Loading...</div>}><Grocery /></Suspense>} />
              <Route path="/restaurants/:resId" element={<RestaurantMenu />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<Error />} />  {/* Catch-all for non-matching routes */}
            </Routes>
          </div>
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

// Ensure the root element is wrapped in HashRouter
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <AppLayout />
  </HashRouter>
);

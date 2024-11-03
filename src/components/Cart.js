import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import RestaurantMenu from './RestaurantMenu';
import { clearCart } from '../utils/cartSlice';

import { useContext, useState } from 'react';
import UserContext from '../utils/UserContext';

import { CDN_URL } from '../utils/constants';
import { AiOutlineStar } from 'react-icons/ai';

import { addItem } from '../utils/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const { loggedInUser } = useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };


  return (
    <div className="menu h-full w-full ">
      <h1 className="text-3xl text-purple-800 text-center mt-5">Cart</h1>

      {cartItems.length === 0 && (
        <div className='mx-auto w-4/6'>
          <h2 className="text-2xl text-amber-900 w-full p-3 mb-12 mt-16 scale-y-110">
            Your cart is empty, you may want to add some items to the cart 🛒
          </h2>
        </div>
      )}


      {cartItems.length > 0 && (

        <div className="menu-main mx-24 mb-12 mt-5">
          <div className='w-4/6 mt-3 rounded-sm pt-1 mb-1 mx-auto'>
            {cartItems.map((item) => (
              <div key={item.card?.info.id} className="menu-card h-48 flex align-middle justify-between gap-4 bg-white p-5 border-b-2 border-b-solid border-b-purple-400">
                <div className="menu-card-left w-2/3 pt-1 pl-2">

                  <div className='flex gap-2 w-full'>
                    {item.card?.info.isVeg ?
                      (<div className='ml-1.5 mt-2 mb-1 w-5 h-5'>
                        <img src='https://imgs.search.brave.com/gAfTCCPaVdevos5TZHh4nLJ2i-HcPXF5WXjxJP0VbMY/rs:fit:500:0:0:0/g:ce/aHR0cDovL2Zvb2Rz/YWZldHloZWxwbGlu/ZS5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTMvMDUvdmVn/LTMwMHgyNTkuanBn' />
                      </div>) : (
                        <div className='ml-1.5 mt-2 mb-1 w-5 h-5'>
                          <img src='https://imgs.search.brave.com/5hWEhV97Dfh41N5BO6b3Q-Mjj3tM_KlIjYzhhlLIRd0/rs:fit:500:0:0:0/g:ce/aHR0cDovL2Zvb2Rz/YWZldHloZWxwbGlu/ZS5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTMvMDUvbm9u/LXZlZy0zMDB4MjU5/LmpwZw' />
                        </div>
                      )}

                    {
                      item.card?.info.isBestseller ?
                        (
                          <div>
                            <img className='h-9 w-9 mb-1  ml-3' src="https://cdn-icons-png.freepik.com/256/8440/8440997.png?ga=GA1.1.1651789925.1730482677&semt=ais_hybrid" />
                          </div>
                        ) :
                        (
                          <div></div>
                        )
                    }

                  </div>

                  <h2 className="menu-name opacity-90 mb-1.5 text-xl font-medium">{item.card?.info.name}</h2>
                  {item.card?.info.ratings?.aggregatedRating.rating ? (
                    <div className="menu-rating mt-1 flex text-lg gap-1 p-0.5 text-purple-600">
                      {item.card?.info.ratings.aggregatedRating.rating}
                      <div className="star mt-[5px]"><AiOutlineStar /></div>
                      <div className="count opacity-90 text-lg pl-1">({item.card?.info.ratings.aggregatedRating.ratingCount})</div>
                    </div>
                  ) : (
                    <div></div>
                  )}
                  <h3 className="menu-price text-purple-600 text-lg font-medium">
                    ₹{item.card?.info.price / 100 || item.card?.info.defaultPrice / 100}
                  </h3>
                </div>
                <div className="menu-card-right flex-col pb-12">
                  <img
                    className='h-32 w-44 rounded-lg bg-cover bg-center hover:cursor-pointer hover:scale-90 overflow-hidden'
                    src={CDN_URL + item.card?.info.imageId}
                    alt="Menu Info"
                    onClick={() => handleItemClick(item)} 
                  />
                  <div className='text-center -mt-7'>
                    <button className="p-1.5 w-28 h-10 rounded-xl bg-white scale-y-105 text-lg text-purple-800 shadow-lg shadow-purple-300 hover:scale-110 hover:text-white hover:bg-purple-900 transition-all duration-[.3s]" onClick={() => handleAddItem(item)}>
                      ADD
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {isModalOpen && selectedItem && (
              <div className="modal-overlay" onClick={closeModal}>
                <div className="detailed-card h-[570px] w-[550px] mt-1 flex flex-col justify-between rounded-2xl bg-white mx-auto" onClick={(e) => e.stopPropagation()}>
                  <img
                    className='detailed-image h-3/5 w-full rounded-2xl object-center object-cover overflow-hidden'
                    src={CDN_URL + selectedItem.card?.info.imageId}
                    alt="Menu Info"
                  />

                  <div className='px-3 flex justify-between text-purple-900'>
                    <div className='flex flex-col justify-between'>
                      <div className='flex mb-0.5'>
                        {selectedItem.card?.info.isVeg ?
                          (<div className='ml-1 w-5 h-5 pt-2 '>
                            <img src='https://imgs.search.brave.com/gAfTCCPaVdevos5TZHh4nLJ2i-HcPXF5WXjxJP0VbMY/rs:fit:500:0:0:0/g:ce/aHR0cDovL2Zvb2Rz/YWZldHloZWxwbGlu/ZS5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTMvMDUvdmVn/LTMwMHgyNTkuanBn' />
                          </div>) : (
                            <div className='ml-1 w-5 h-5 pt-2'>
                              <img src='https://imgs.search.brave.com/5hWEhV97Dfh41N5BO6b3Q-Mjj3tM_KlIjYzhhlLIRd0/rs:fit:500:0:0:0/g:ce/aHR0cDovL2Zvb2Rz/YWZldHloZWxwbGlu/ZS5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTMvMDUvbm9u/LXZlZy0zMDB4MjU5/LmpwZw' />
                            </div>
                          )}
                        {
                          selectedItem.card?.info.isBestseller ?
                            (
                              <div>
                                <img className='h-9 w-9 mb-1  ml-4' src="https://cdn-icons-png.freepik.com/256/8440/8440997.png?ga=GA1.1.1651789925.1730482677&semt=ais_hybrid" />
                              </div>
                            ) :
                            (
                              <div></div>
                            )
                        }</div>
                      <h2 className="menu-name text-2xl ">{selectedItem.card?.info.name}</h2>
                      <h3 className="menu-price opacity-80 mt-0.5 font-semibold text-lg ml-1">
                        ₹{selectedItem.card?.info.price / 100 || selectedItem.card?.info.defaultPrice / 100}
                      </h3>
                    </div>
                    <div className='text-center'>
                      <button className="mr-1 p-1.5 w-28 h-10 rounded-xl bg-white scale-y-105 text-lg text-purple-800 shadow-lg shadow-purple-300 hover:scale-125 hover:text-white hover:bg-purple-900 transition-all duration-[.1s]" onClick={() => handleAddItem(selectedItem)}>
                        ADD
                      </button>
                    </div>
                  </div>
                  <h4 className="menu-description px-2 mb-3 text-purple-600 text-lg/[21px] mt-4">
                    {selectedItem.card?.info.description}
                  </h4>
                </div>
              </div>
            )}


            <button
              className="p-3 my-4 w-36 bg-purple-600 hover:bg-red-500 duration-[.3s] text-white rounded-lg"
              onClick={handleClearCart}
            >
              Clear Cart 🧹
            </button>
          </div>
        </div>

      )}

    </div>
  );
};

export default Cart;

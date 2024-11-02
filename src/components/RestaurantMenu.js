import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import ShimmerMenu from './ShimmerMenu';
import { CDN_URL } from '../utils/constants';
import { FiClock } from 'react-icons/fi';
import { AiOutlineStar } from 'react-icons/ai';

import { useContext, useState } from 'react';
import UserContext from '../utils/UserContext';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const { loggedInUser } = useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  if (resInfo === null) return <ShimmerMenu />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    cloudinaryImageId,
    avgRating,
    totalRatingsString,
  } = resInfo?.cards[2]?.card?.card?.info;

  const deliveryTime = resInfo?.cards[2]?.card?.card?.info?.sla.deliveryTime;

  const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];

  console.log(itemCards);

  const itemCardCount = itemCards.length;

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="menu h-full w-full">

      <header className="menu-header w-full h-64 bg-black text-white flex align-middle justify-center gap-7 py-3.5 shadow-lg shadow-black">
        <div className="menu-header-left">
          <img className="topimage w-64 h-56 bg-cover bg-center rounded-lg" src={CDN_URL + cloudinaryImageId} alt="Restaurant Info" />
        </div>
        <div className="menu-header-right">
          <h1 className='topheading font-medium text-4xl/[36px] pt-2 scale-y-125 ml-2'>{name}</h1>
          <h3 className="topcuisines font-normal pl-4 opacity-70 mt-4">{cuisines.join(', ')}</h3>
          <div className="bottom flex align-middle gap-5 mt-5 pl-3">
            <div className="avg-rating flex pr-5 border-r-4 border-solid border-slate-500">
              <h4 className='pt-0.5 text-base ml-1'>{avgRating}</h4>
              <h4 className='pt-1.5 text-green-500'><AiOutlineStar /></h4>
              <h4 className='text-slate-400 pl-1.5 pt-1'>({totalRatingsString})</h4>
            </div>
            <div className="time pr-5 border-r-4 border-solid flex flex-wrap gap-1.5 text-slate-400 border-slate-500">
              <h4 className='pt-2'><FiClock /></h4>
              <h4 className='pt-1.5'>{deliveryTime} MINS</h4>
            </div>
            <h3 className='text-slate-400 py-2'>{costForTwoMessage}</h3>
          </div>
        </div>
      </header>


      {
        itemCardCount > 0 ? (
          <div className='w-5/6 mx-auto flex justify-center align-middle'>
            <div className="flex h-20 mt-3 py-5 pl-4 text-3xl text-purple-900 rounded-2xl">
              Welcome, what would you like to have {loggedInUser}
              <img className="pl-4 -mt-1 cover" src="https://as2.ftcdn.net/v2/jpg/09/70/93/27/1000_F_970932707_rohMcQ9hgc6RAYjPSZKqUoTM9eUAPTlr.webp" />
            </div>
          </div>
        ) : (
          <div className='h-3 w-full mt-6 bg-white'></div>
        )
      }


      <div className="menu-main mx-24 mb-12 mt-5">
        <h2 className="text-2xl w-1/2 opacity-8 scale-150 ml-[360]">Menu</h2>
        <h3 className="items w-1/2 ml-[218] my-2 text-base opacity-80"><b>{itemCardCount}</b> ITEMS</h3>
        <div className="menu-main-card-container w-4/6 mt-3 rounded-sm pt-1 mb-1 mx-auto">
          {itemCards.length > 0 ? (
            itemCards.map((item) => (
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
                      item.card?.info.isBestseller?
                      (
                        <div>
                          <img className='h-9 w-9 mb-1  ml-3'  src="https://cdn-icons-png.freepik.com/256/8440/8440997.png?ga=GA1.1.1651789925.1730482677&semt=ais_hybrid"/>
                        </div>
                      ):
                      (
                        <div></div>
                      )
                    }

                  </div>

                  <h2 className="menu-name opacity-90 mb-1.5 text-xl font-medium">{item.card?.info.name}</h2>
                  {item.card?.info.ratings?.aggregatedRating.rating ? (
                    <div className="menu-rating mt-1 flex text-lg gap-1 p-0.5 text-purple-600">
                      {item.card?.info.ratings.aggregatedRating.rating}
                      <div className="star mt-[4px]"><AiOutlineStar /></div>
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
                    onClick={() => handleItemClick(item)} // Open modal on image click
                  />
                  <div className='text-center -mt-7'>
                    <button className="p-1.5 w-28 h-10 rounded-xl bg-white scale-y-105 text-lg text-purple-800 shadow-lg shadow-purple-300 hover:scale-110 hover:text-white hover:bg-purple-900 transition-all duration-[.3s]">
                      ADD
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="notAvail p-5 text-amber-950 text-2xl align-middle text-center"><h3>No items available</h3></div>
          )}
        </div>
      </div>

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
                      selectedItem.card?.info.isBestseller?
                      (
                        <div>
                          <img className='h-9 w-9 mb-1  ml-4'  src="https://cdn-icons-png.freepik.com/256/8440/8440997.png?ga=GA1.1.1651789925.1730482677&semt=ais_hybrid"/>
                        </div>
                      ):
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
                <button className="mr-1 p-1.5 w-28 h-10 rounded-xl bg-white scale-y-105 text-lg text-purple-800 shadow-lg shadow-purple-300 hover:scale-125 hover:text-white hover:bg-purple-900 transition-all duration-[.1s]">
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

    </div>
  );
};

export default RestaurantMenu;

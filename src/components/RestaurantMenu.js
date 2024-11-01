import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import ShimmerMenu from './ShimmerMenu';
import { CDN_URL } from '../utils/constants';
import { FiClock } from 'react-icons/fi';
import { AiOutlineStar } from 'react-icons/ai';
// import { useState } from 'react';

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <ShimmerMenu />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    // costForTwo,
    cloudinaryImageId,
    avgRating,
    totalRatingsString,
  } = resInfo?.cards[2]?.card?.card?.info;

  const deliveryTime = resInfo?.cards[2]?.card?.card?.info?.sla.deliveryTime;

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];

  // const { ItemCards } =
  //   resInfo?.cards?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

  console.log(itemCards);

  const itemCardCount = itemCards.length;

  return (
    <div className="menu h-full w-full">
      <header className="menu-header w-full h-64 bg-black text-white flex align-middle justify-center gap-7 py-3.5 shadow-lg shadow-black">
        <div className="menu-header-left">
          <img className=" topimage w-64 h-56 bg-cover bg-center rounded-lg" src={CDN_URL + cloudinaryImageId} alt="Restaurent Info" />
        </div>
        <div className="menu-header-right">
          <div className="top">
            <h1 className='topheading font-medium  text-4xl/[36px] pt-2 scale-y-125 ml-2'>{name}</h1>
            <h3 className="topcuisines font-normal pl-4 opacity-70 mt-4">{cuisines.join(', ')}</h3>
          </div>
          <div className="bottom flex align-middle gap-5 mt-5 pl-3">
            <div className="avg-rating flex pr-5 border-r-4 border-solid border-slate-500">
              <h4 className='pt-0.5 text-base ml-1'>{avgRating}</h4>
              <h4 className='pt-1.5 text-green-500'><AiOutlineStar /></h4>
              <h4 className='text-slate-400 pl-1.5 pt-1'>({totalRatingsString})</h4>
            </div>
            <div className="time pr-5 border-r-4 border-solid flex flex-wrap gap-1.5 text-slate-400 border-slate-500">
              <h4 className='pt-2'> <FiClock /></h4>
              <h4 className='pt-1.5'>{deliveryTime} MINS</h4>
            </div>
            <h3 className='text-slate-400 py-2'>{costForTwoMessage}</h3>
          </div>
        </div>
      </header>

      <div className="menu-main mx-24 my-12">
        <h2 className="text-2xl w-1/2 opacity-8 scale-150 ml-48 ">Menu</h2>

        <h3 className="items ml-12 mt-2 text-base opacity-80"><b>{itemCardCount}</b> ITEMS</h3>
        <div className="menu-main-card-container mt-3 rounded-sm pt-1 mb-1">
          {itemCardCount > 0 ? (

            itemCards.map((item) => (
              <div key={item.card?.info.id} className="menu-card h-auto flex align-middle justify-between gap-4 bg-white p-5 border-b-2 border-b-solid border-b-zinc-500">
                <div className="menu-card-left w-2/3">
                  <h2 className="menu-name opacity-90 mb-1.5 text-xl font-medium">{item.card?.info.name}</h2>

                  {item.card?.info.ratings?.aggregatedRating.rating ?
                    (
                      <div className="menu-rating mt-1 flex gap-1 p-0.5 text-green-600">{item.card?.info.ratings.
                        aggregatedRating.rating}
                        <div className="star mt-1"><AiOutlineStar /></div>

                        <div className="count opacity-90 text-base pl-1">({item.card?.info.ratings.
                          aggregatedRating.ratingCount})</div>
                      </div>
                    ) : (
                      <div></div>
                    )}


                  <h3 className="menu-price opacity-70 mt-1.5 font-normal">
                    ₹
                    {item.card?.info.price / 100 ||
                      item.card?.info.defaultPrice / 100}
                  </h3>
                  <h4 className="menu-description opacity-80 font-normal mt-4">
                    {item.card?.info.description}
                  </h4>
                </div>
                <div className="menu-card-right flex-col pb-12 ">

                  <img className='s h-36 w-48 rounded-lg bg-cover bg-center hover:cursor-pointer hover:scale-90 overflow-hidden' src={CDN_URL + item.card?.info.imageId} alt="Menu Info" />

                  <div className='text-center -mt-7'>
                    <div className='absolute'><button className=" p-1.5 w-28 h-10 relative left-9 rounded-xl bg-white text-xl font-bold text-green-600 shadow-lg shadow-gray-700 hover:bg-gray-200 transition-all duration-[.3s]">
                      ADD
                    </button></div>

                  </div>

                </div>
              </div>
            ))
          ) : (
            <div className="notAvail p-5 text-amber-950 text-2xl align-middle text-center"><h3>No items available</h3></div>
          )}

        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;

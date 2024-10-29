import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import Shimmer from './Shimmer';
import ShimmerMenu from './ShimmerMenu';
import { CDN_URL } from '../utils/constants';
import { MENU_API } from '../utils/constants';
import { FiClock } from 'react-icons/fi';
import { AiOutlineStar } from 'react-icons/ai';

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  // console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

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
    <div className="menu">
      <header className="menu-header">
        <div className="menu-header-left">
          <img src={CDN_URL + cloudinaryImageId} alt="Restaurent Info" />
        </div>
        <div className="menu-header-right">
          <div className="top">
            <h1>{name}</h1>
            <h3>{cuisines.join(', ')}</h3>
          </div>
          <div className="bottom">
            <h4 className="avg-rating">
              <span>{avgRating}
                <span
                  className="icons"
                  style={{
                    position: 'relative',
                    top: '2px',
                    marginRight: '3px',
                    color: 'green',
                    fontWeight: '900',
                  }}
                > <AiOutlineStar /></span></span>
              <div>({totalRatingsString})</div>
            </h4>
            <h4 className="time">
              <span
                className="icons"
                style={{
                  position: 'relative',
                  top: '2px',
                  marginRight: '3px',
                }}
              >
                <FiClock />
              </span>
              <span> {deliveryTime} MINS</span>
            </h4>
            <h3>{costForTwoMessage}</h3>
          </div>
        </div>
      </header>

      <div className="menu-main">
        <h2 id="first">Menu</h2>

        <h3 className="items">{itemCardCount} items</h3>
        <div className="menu-main-card-container">
          {itemCardCount > 0 ? (

            itemCards.map((item) => (
              <div key={item.card?.info.id} className="menu-card">
                <div className="menu-card-left">
                  <h2 className="menu-name">{item.card?.info.name}</h2>
                  <h3 className="menu-price">
                    ₹
                    {item.card?.info.price / 100 ||
                      item.card?.info.defaultPrice / 100}
                  </h3>
                  <h4 className="menu-description">
                    {item.card?.info.description}
                  </h4>
                </div>
                <div className="menu-card-right">
                  <img src={CDN_URL + item.card?.info.imageId} alt="Menu Info" />

                  {item.card?.info.ratings?.aggregatedRating.rating ?
                    (
                      <h3 class="menu-rating">{item.card?.info.ratings.
                        aggregatedRating.rating}
                        <div class="star"><AiOutlineStar /></div>

                        <div class="count">({item.card?.info.ratings.
                        aggregatedRating.ratingCount})</div>
                      </h3>
                    ) : (
                      <div></div>
                    )}

                </div>
              </div>
            ))
          ) : (
            <div class="notAvail"><h3>No items available</h3></div>
          )}

        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;

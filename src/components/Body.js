import { useEffect, useState, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

import { FcSearch } from "react-icons/fc";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  console.log("Body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const SWIGGY_URL =
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5914766&lng=77.3455209&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

      const data = await fetch(`https://proxy.cors.sh/${SWIGGY_URL}`, {
        headers: {
          "x-cors-api-key": "temp_c16cc9e2b5fa5d91549c3b466a89213e", 
        },
      });

      const json = await data.json();
      console.log("Fetched data:", json);

      

      const cards = json?.data?.cards || [];

      
      const restaurantCard = cards.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );

      const restaurants =
        restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
        [];

      setListOfRestaurants(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h3 className="text-amber-900 w-full h-5/6 mt-40 text-center text-3xl">
        Looks like you're offline! Please check your internet connection
      </h3>
    );

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body h-auto w-full mt-1">
      <div className="userWelcome flex justify-between align-middle h-10 mt-2 w-full bg-white">
        <div className="ml-14 mt-2.5 text-xl font-semibold scale-y-110 text-slate-700">
          Welcome! {loggedInUser}, what's on your mind?
        </div>
      </div>

      <div className="filter flex justify-between align-middle h-16 gap-2 mb-3 w-full pr-10 bg-white ">
        <div className="search flex justify-start p-2.5 w-3/4 ml-10">
          <div className="flex border-2 border-solid border-purple-500 rounded-xl w-2/5 bg-gray-200">
            <input
              type="text"
              placeholder="Search a restaurant you want..."
              className=" w-4/5 p-2 border-transparent  text-purple-800 border-r-gray-200 bg-gray-200 rounded-lg"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="w-1/5 p-2 rounded-br-lg text-slate-100 text-lg flex justify-center align-middle cursor-pointer border-2 border-solid border-transparent hover:bg-purple-600 hover:scale-110 duration-[.3s]"
              onClick={() => {
                const filteredRestaurant = listOfRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurant(filteredRestaurant);
              }}
            >
              <FcSearch />
            </button>
          </div>
        </div>
        <button
          className="filter-btn p-1 cursor-pointer border-2 rounded-2xl border-solid  w-72 m-2 scale-y-110 border-transparent bg-purple-500 text-white  text-lg scale-105 hover:scale-110 hover:bg-purple-600 duration-[.3s]"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants for you!
        </button>
      </div>

      <div className="res-container flex flex-wrap justify-around mx-5">
        {filteredRestaurant.map((restaurant) => (
          <Link
            style={{
              textDecoration: "none",
              color: "#000",
            }}
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

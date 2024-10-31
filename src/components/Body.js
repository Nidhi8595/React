import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

import { FcSearch } from "react-icons/fc";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState('');

    console.log('Body rendered');

    useEffect(() => {
        fetchData();
    }, []); // called only once bcuz no dependency

    const fetchData = async () => {
        try {
            const data = await fetch('https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5914766&lng=77.3455209&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
            const json = await data.json();
            console.log('Fetched data:', json);

            // const restaurants = json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;

            const restaurants = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;

            setListOfRestaurants(restaurants);
            setFilteredRestaurant(restaurants);
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    };

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false)
        return (
            <h3 style={{ textAlign: 'center', marginTop: '100px', color: 'brown' }}>
                Looks like you're offline! Please check your internet connection
            </h3>
        );

    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter flex justify-between align-middle h-16 gap-2 mt-3.5 mb-7 w-full pr-10 bg-orange-100 rounded-lg shadow-lg shadow-slate-700">
                <div className="search flex justify-start p-2.5 w-3/4 ml-6">
                    <div className='flex border-2 border-solid border-gray-500 rounded-xl w-2/5 bg-gray-200'>
                    <input
                        type="text"
                        placeholder="Search a restaurant you want..."
                        className=" w-4/5 p-2 border-transparent border-r-gray-200 bg-gray-200 rounded-lg"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button className='w-1/5 p-2 rounded-br-lg text-slate-100 text-lg flex justify-center align-middle cursor-pointer border-2 border-solid border-transparent hover:bg-orange-500 hover:text-slate-950  hover:scale-110'
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
                    className="filter-btn p-1 cursor-pointer border-2 rounded-2xl border-solid  w-64 m-2 border-darkgray-500 bg-gray-400 hover:bg-orange-500 hover:text-slate-950 text-slate-100 text-base hover:border-transparent hover:scale-110"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setListOfRestaurants(filteredList);
                        setFilteredRestaurant(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>

            <div className="res-container flex flex-wrap justify-around gap-2.5 mx-10">
                {filteredRestaurant.map((restaurant) => (
                    // <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    <Link
                        style={{
                            textDecoration: 'none',
                            color: '#000',
                        }}
                        key={restaurant.info.id}
                        to={'/restaurants/' + restaurant.info.id}
                    >
                        <RestaurantCard resData={restaurant} />
                    </Link>
                ))}
            </div>

        </div>
    );
};

export default Body;

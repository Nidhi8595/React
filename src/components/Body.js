import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

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
            const data = await fetch('https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4219651&lng=77.52131589999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
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

    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter">
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search a restaurant you want..."
                        className="searchBox"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button
                        onClick={() => {
                            const filteredRestaurant = listOfRestaurants.filter((res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRestaurant(filteredRestaurant);
                        }}
                    >
                        Search
                    </button>
                </div>
                <button
                    className="filter-btn"
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

            <div className="res-container">
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

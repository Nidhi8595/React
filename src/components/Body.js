
import { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';


const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.49270&lng=77.53580&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
            if (!data.ok) {
                throw new Error(`HTTP error! status: ${data.status}`);
            }
            // const data = await response.json();
            // console.log(data);
            const json = await data.json();

            console.log(json);
            setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

            setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch (error) {
            console.error('Error fetching data:', error);
        }



    };

    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="search-container">
                <input type="text" placeholder="Search Food or Restaurant" />
                <button>Search</button>

            </div>

            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        placeholder="Search a restaurant you want..."
                        className="searchBox"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        onClick={() => {
                            // * Filter th restaurant cards and update the UI
                            // * searchText
                            console.log(searchText);

                            const filteredRestaurant = listOfRestaurants.filter((res) =>
                                res.data.name.toLowerCase().includes(searchText.toLowerCase())
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
                        // * Filter logic
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.data.avgRating > 4
                        );

                        setListOfRestaurants(filteredList);
                        console.log(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}

                {filteredRestaurant.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;

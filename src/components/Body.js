
import { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    return (
        <div className="body">

            <div className="search-container">
                <input type="text" placeholder="Search Food or Restaurant" />
                <button>Search</button>

            </div>

            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {

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

                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;

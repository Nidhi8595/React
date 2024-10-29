import { CDN_URL } from "../utils/constants";
import { FiClock } from 'react-icons/fi';
import { AiOutlineStar } from 'react-icons/ai';

const RestaurantCard = (props) => {
    const { resData } = props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla: { deliveryTime },
        areaName,
    } = resData?.info;

    return (
        <div className="res-card">
            <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt="Biryani" />

            <h3>{name}</h3>

            <div class="TimeAndRating">
                <div class="card-star"><AiOutlineStar /></div>

                <div class="card-rating"><b>{avgRating}</b></div>

                <div class="clocksymbol"><FiClock /></div>

                <div class="timing"><b>{deliveryTime} mins</b></div>
            </div>

            <div class="lightColor">{cuisines.join(', ')}</div>
            {/* <h4>{costForTwo} </h4> */}
            <div class="lightColor"><b>{areaName}</b></div>
        </div>
    );
};

export default RestaurantCard;
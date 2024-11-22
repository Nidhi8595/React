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
        sla: { deliveryTime },
        areaName,
        locality,
    } = resData?.info;

    return (
        <div className="res-card rounded-2xl w-[270px] h-[320] overflow-hidden border-1 border-solid border-transparent hover:cursor-pointer hover:scale-90">
            <img className="res-logo w-full h-1/2 rounded-2xl overflow-hidden object-cover object-center" src={CDN_URL + cloudinaryImageId} alt="Biryani" />


            <h3 className=" pl-0.5 mx-1 mt-1 font-normal text-black text-xl/[22px]">{name}</h3>

            <div className="TimeAndRating gap-x-1 ml-1.5 flex flex-wrap text-purple-900">
                <div className="card-star text-green-700 mt-0.5"><AiOutlineStar /></div>

                <div className="card-rating font-normal ">{avgRating}</div>

                <div className="clocksymbol pl-2 mt-0.5"><FiClock /></div>

                <div className="timing font-normal ">{deliveryTime} mins</div>
            </div>

            <div className="lightColor text-wrap text-purple-800 ml-1.5 mt-0.5 text-[15px]/[18px]">{cuisines.join(', ')}</div>

            <div className="lightColor flex text-black  text-base/[18px]"><div className=" mt-0.5 ml-1.5 ">{areaName}</div>
                {locality ?
                    (<div className="text-sm ml-1">({locality})</div>)
                    : (<div></div>)
                }
            </div>
        </div>
    );
};

export default RestaurantCard;
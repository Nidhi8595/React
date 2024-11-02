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
        // costForTwo,
        sla: { deliveryTime },
        // aggregatedDiscountInfoV3,
        areaName,
    } = resData?.info;
    // const discountInfoArray = [
    //     aggregatedDiscountInfoV3
    //   ];
    // const {header,} = {aggregatedDiscountInfoV3};

    return (
        <div className="res-card rounded-2xl w-56 h-[310] overflow-hidden border-1 border-solid border-transparent hover:cursor-pointer hover:scale-90">
            <img className="res-logo w-full h-1/2 rounded-2xl overflow-hidden object-cover object-center" src={CDN_URL + cloudinaryImageId} alt="Biryani" />

            {/* <h2>{discountInfoArray.header}{discountInfoArray.subHeader}</h2> */}

            <h3 className=" pl-0.5 mx-1 mt-1 font-normal text-black text-xl/[22px]">{name}</h3>

            <div class="TimeAndRating gap-x-1 ml-1.5 flex flex-wrap text-purple-900">
                <div class="card-star text-green-700 mt-0.5"><AiOutlineStar /></div>

                <div class="card-rating font-normal ">{avgRating}</div>

                <div class="clocksymbol pl-2 mt-0.5"><FiClock /></div>

                <div class="timing font-normal ">{deliveryTime} mins</div>
            </div>

            <div class="lightColor text-wrap text-purple-500 ml-1.5 -mt-0.5 text-sm/[16px]">{cuisines.join(', ')}</div>
            {/* <h4>{costForTwo} </h4> */}
            <div class="lightColor text-slate-700 ml-1.5 pt-0.5 text-base/[18px]">{areaName}</div>
        </div>
    );
};

export default RestaurantCard;
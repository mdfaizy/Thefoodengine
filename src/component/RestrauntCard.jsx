import { MENU_IMG } from "../utils/constants";
// import { AiOutlineStar } from "react-icons/ai";
// import { Link } from "react-router-dom";

const RestaurantCard = (restaurants) => {
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, areaName ,deliveryTime} =
  restaurants?.info;

//   console.log(restaurants.name);
// //   const { header, subHeader } = restaurants?.info?.aggregatedDiscountInfoV3;

// //   console.log(restaurants);
  
  
// const truncateCuisines = (cuisines) => {
//     return cuisines.length >= 35 ? cuisines.substring(0, 35) + "..." : cuisines
// }
  return (


<div className="w-60 flex-col items-center shadow-lg bg-slate-200 mx-2 my-4 hover:bg-slate-400">
      <img src={MENU_IMG +cloudinaryImageId} alt="biryani" className="p-3" />
      <div className="m-3 p-3">
        <h3 className="my-1 font-bold">{name}</h3>
        <div className="">
               <h6 className="">
                 {avgRating}
                 {/* <AiOutlineStar  /> */}
               </h6>
               <h5 className="">{name}</h5>
            </div>
        <h5 className="text-slate-600 my-2 font-medium text-sm">
          {cuisines.join(", ")}
        </h5>
        <div><h6>{costForTwo}</h6></div>
        <h5 className="font-semibold">
          {/* {avgRating} ⭐ • {resData.info.sla.deliveryTime} mins */}
        </h5>
      </div>
    </div>
  );
};
export default RestaurantCard;



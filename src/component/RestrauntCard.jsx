import { MENU_IMG } from "../utils/constants";
const RestaurantCard = (restaurants) => {
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, areaName ,deliveryTime} =
  restaurants.info;
  console.log(restaurants);
  
// const truncateCuisines = (cuisines) => {
//     return cuisines.length >= 35 ? cuisines.substring(0, 35) + "..." : cuisines
// }
  return (


<div className="w-[200px] m-1 p-2 flex-col items-center shadow-lg bg-slate-200 mx-2 my-4 hover:bg-slate-400">
      <div className="p-3 rounded-lg h-[200px]">
      <img src={MENU_IMG +cloudinaryImageId} alt="" />
      </div>
      <div className="">
        <h3 className="font-bold py-4 text-lg ">{name}</h3>
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



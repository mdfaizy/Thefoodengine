import { useParams } from "react-router-dom";
import useRestaurantMenu from "./hooks/useRestaurantMenu";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
const {resId}=useParams();
  const  resInfo=useRestaurantMenu(resId);
console.log(resId);
if (resInfo === null) {
  return   <Shimmer/>;
}
const { name, avgRating, cuisines, totalRatingsString, costForTwoMessage } =
resInfo?.cards[2]?.card?.card?.info;
const itemData =resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card
      ?.itemCards;
console.log("faizy",itemData);


  return (
    <div>
      <h1>{name} </h1>
      <h2>{avgRating}</h2>
      <p>{costForTwoMessage}</p>
       <p>{cuisines}</p>
       <p>{totalRatingsString}</p>
      <ul>
  {itemData.map((item, index) => (
    <li key={index}>{item.card.info.name}- {'Rs.'}
    {item.card.info.price/100}</li>
  ))}
</ul>

    </div>
  )
}

export default RestaurantMenu
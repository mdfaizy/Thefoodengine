import { useParams } from "react-router-dom";
import useRestaurantMenu from "./hooks/useRestaurantMenu";
import Shimmer from "./Shimmer";
import RestaurantCategory from './RestaurantCategory';
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


// const category=resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card
// ?.itemCards;


const categories =
resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
  (item) => {
    return (
      item?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  }
);


console.log("gul moajjam faizy",categories)

  return (
    <div className="text-center">
      <h1 className="font-bold my-2 text-2xl">{name} {avgRating}</h1>
      <h2></h2>
      <p>{costForTwoMessage}</p>
       <p>{cuisines}</p>
       <p>{totalRatingsString}</p>
      {/* <ul>


<div className="my-2">
        {data.map((category, index) => {
          return (
            <RestaurantItemCategory
              key={category.card?.card?.title}
              itemCategory={category}
              showItem={index === showIndex ? true : false}
              setShowIndex={showIndex === index ? () => setShowIndex(null) : () => setShowIndex(index)}
            />
          );
        })}
      </div>

  {itemData.map((item, index) => (
    <li key={index}>{item.card.info.name}- {'Rs.'}
    {item.card.info.price/100}</li>
  ))}
</ul> */}

{categories.map((category )=>(
    <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card}/>
  ))
}

    </div>
  )
}

export default RestaurantMenu
import { useEffect, useState } from "react";
import RestaurantCard from "./RestrauntCard";
const Body = () => {
  // const [FilteredRestaurants, setFilteredRestaurants] = useState([]);
  const [restaurant, setRestaurant] = useState([]);

  // const [searchFilter, setSearchFilter] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    let checkData =json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRestaurant(checkData);
    // setFilteredRestaurants(checkData);
  };
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = () => {
    const filteredRestaurant = restaurant.filter((res) => {
      return res.info.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
    console.log(filteredRestaurant);
setRestaurant(filteredRestaurant);
  };
return (
    <div className="">
      <div className="flex m-12 px-8 py-1 justify-center">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-3 py-2 w-1/2 border-solid border-2 border-blue-700"
        />
        <button
          onClick={handleSearch}
          className="px-6 py-3 rounded-sm bg-blue-700 text-white font-medium"
        >
          Search
        </button>
      </div>


<div className="flex flex-wrap w-100 m-auto">
<button
          className="px-4 py-1 rounded-full border-solid border-2 border-indigo-600 text-black font-medium"
          onClick={() => {
            const filteredList = restaurant.filter(
              (restaurant) => restaurant.info.avgRating > 4.3
            );
            setRestaurant(filteredList);
          }}
        >
          Rating 4.0*
        </button>

        <button
          className="px-4 py-1 rounded-full border-solid border-2 border-indigo-600 text-black font-medium"
          onClick={() => {
            const filteredList = restaurant.filter(
              (restaurant) => restaurant.info.avgRating > 4.5
            );
            setRestaurant(filteredList);
          }}
        >
         Ratings 4.5*
        </button>

        <button
  className="px-4 py-1 rounded-full border-solid border-2 border-indigo-600 text-black font-medium"
  onClick={() => {
    const filteredList = restaurant.filter(
      (restaurant) => restaurant.info.costForTwo >= "₹300 for two"
    );
    setRestaurant(filteredList);
    console.log(setRestaurant);
  }}
>
  Rs.300-Rs.600
</button>

        <button
          className="px-4 py-1 rounded-full border-solid border-2 border-indigo-600 text-black font-medium"
          onClick={() => {
            const filteredList = restaurant.filter(
              (restaurant) => restaurant?.info?.costForTwo < "₹300 for two"
            );
            setRestaurant(filteredList);
          }}
        >
          Less than Rs.300
        </button>

        <button
  className="px-4 py-1 rounded-full border-solid border-2 border-indigo-600 text-black font-medium"
  onClick={() => {
    const filteredList = restaurant.filter(
      (restaurant) => restaurant.info.costForTwo < 300
    );
   setRestaurant(filteredList);
   console.log(filteredList);
  }}
>
Non-veg 🍗
</button>

<button
  className="px-4 py-1 rounded-full border-solid border-2 border-indigo-600 text-black font-medium"
  onClick={() => {
    const filteredList = restaurant.filter(
      (restaurant) => restaurant.info.costForTwo < 300
    );
   setRestaurant(filteredList);
   console.log(filteredList);
  }}
>
Pure Veg 🥗
</button>

<button
  className="px-4 py-1 rounded-full border-solid border-2 border-indigo-600 text-black font-medium"
  onClick={() => {
    const filteredList = restaurant.filter(
      (restaurant) => restaurant.info.costForTwo < 300
    );
   setRestaurant(filteredList);
   console.log(filteredList);
  }}
>
Fast Delivery 🚚
</button>
</div>

<div className="flex flex-wrap justify-between mx-14 my-8 p-4">
 
      
      {restaurant?.map((restaurants) => (
        <RestaurantCard key={restaurants?.info.name} {...restaurants} />
      ))}
       </div>
    </div>
    
  );
};
export default Body;












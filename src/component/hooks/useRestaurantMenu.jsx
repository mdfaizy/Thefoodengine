import { useEffect, useState } from "react"

import {MENU_API_URL} from '../../utils/constants';


const useRestaurantMenu=(resId)=>{
const [resInfo,setResInfo]=useState(null);


// useEffect(()=>{

// },[])

useEffect(()=>{
    fetchMenu();
    },[]);
    
    
    
    const fetchMenu = async () => {
      try {
        const data = await fetch(MENU_API_URL+resId);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    
        // const { name, avgRating, cuisines, totalRatingsString, costForTwoMessage } =
        // resInfo?.cards[2]?.card?.card?.info;
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    }

    return resInfo;


}


export default useRestaurantMenu
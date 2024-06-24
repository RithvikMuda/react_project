import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/userRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {

     const {resId} = useParams();
     
    const resInfo = useRestaurantMenu(resId);

    const [showIndex , setShowIndex] = useState(null);
    // console.log("res menu" , resInfo);
     if(resInfo === null) return <Shimmer />;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ; 
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=>c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    
    );
    // console.log(categories)
    return (
        <div
        className="text-center Menu">
            <h1 className="font-bold my-6 text-2xl">{ resInfo?.cards[2]?.card?.card?.info?.name }</h1>
            {/* <h2>{costForTwoMessage}</h2> */}
            <h3 className="font-bold text-lg">{resInfo?.cards[2]?.card?.card?.info?.cuisines.join(", ")} - {resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}</h3>
            {/* categories */}
            {
                categories.map((category,index) => (
                    <RestaurantCategory key={category?.card?.card?.title} 
                    data={ category?.card?.card}
                     showItems={index === showIndex ? true :false}
                     setShowIndex = {() => setShowIndex(index)}
                     />
                ))
            }

            {/* <h2>Menu</h2>
            <ul>
                {itemCards.map(
                    (item) => <li key={item?.card?.info?.id}>{item?.card?.info?.name} - Rs {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100 }</li>
                    )}
                
            </ul> */}
        </div>
    );
};

export default RestaurantMenu;
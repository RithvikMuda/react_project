import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();
    // console.log(resId)
    useEffect(()=>{
        fetchMenu();
    },[]);

const fetchMenu = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=" + resId);
    const json = await data.json();
    // console.log(json)
    setResInfo(json.data);
};
//  const {cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    if(resInfo === null) return <Shimmer />;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card ; 
    console.log(itemCards)
    return (
        <div
        className="Menu">
            <h1>{ resInfo?.cards[2]?.card?.card?.info?.name }</h1>
            {/* <h2>{costForTwoMessage}</h2> */}
            <h3>{resInfo?.cards[2]?.card?.card?.info?.cuisines.join(", ")} - {resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(
                    (item) => <li key={item?.card?.info?.id}>{item?.card?.info?.name} - Rs {item?.card?.info?.price/100}</li>
                    )}
                
            </ul>
        </div>
    );
};

export default RestaurantMenu;
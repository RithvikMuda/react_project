import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react"; 
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    const [listOfRestaurants,setlistOfRestaurants] = useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    useEffect(()=>{
        fetchData();
    },[]);
 const fetchData = async () => {

    const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const jsondata = await data.json();
        // console.log(jsondata)
        setlistOfRestaurants(jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
 }  ; 

 if(listOfRestaurants.length === 0){
    return <Shimmer/>
 }

    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText}
                    onChange={(e)=> { setSearchText(e.target.value)}} />
                    <button
                    onClick={()=> {
                        const filteredRestaurant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                   setFilteredRestaurants(filteredRestaurant);
                    }} 
                    >Search</button>
                </div>
                <button className="filter-btn" 
                onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4
                    );
                   setFilteredRestaurants(filteredList);
                }}
                >
                    Top rated restaurants</button> </div>
            <div className="res-container"> 
            
            {
                 filteredRestaurants.map((restaurant)=>(
                   <Link  key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id} ><RestaurantCard  resData = {restaurant} /></Link>  
                ))
            }
            </div>

        </div>
    );
 }

 export default Body;
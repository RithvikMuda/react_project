import RestaurantCard , { withOpenLabel }from "./RestaurantCard";
import { useContext, useEffect, useState } from "react"; 
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [listOfRestaurants,setlistOfRestaurants] = useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const RestaurantCardPromoted = withOpenLabel(RestaurantCard);
    // console.log("Body rendered", listOfRestaurants);
    useEffect(()=>{
        fetchData();
    },[]);
 const fetchData = async () => {

    const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const jsondata = await data.json();
        //   console.log("json data",jsondata)
        setlistOfRestaurants(jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
 }  ; 

const OnlineStatus = useOnlineStatus();
if (OnlineStatus === false){
    return (
        <h1>
            Looks like you are offline !! please check your Internet Connection;
        </h1>
    );
}
 const {loggedInUser,setUserName} = useContext(UserContext);
// console.log(listOfRestaurants)
 if(listOfRestaurants.length === 0){
    return <Shimmer/>
 }

    return (
        <div className="body">
            <div className="filter flex items-center">
                <div className="search m-4 p-4 ">
                    <input type="text"
                    data-testid = "searchInput"
                    className= "search-box border-solid border-2 border-neutral-900" value={searchText}
                    onChange={(e)=> { setSearchText(e.target.value)}} />
                    <button className=" px-4 py-2 bg-green-100 m-4 rounded-lg"
                    onClick={()=> {
                        const filteredRestaurant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                   setFilteredRestaurants(filteredRestaurant);
                    }} 
                    >Search</button>
                </div>

                <button className="filter-btn px-4 py-2 bg-green-100 rounded-lg" 
                onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4
                    );
                   setFilteredRestaurants(filteredList);
                }}
                >
                    Top rated restaurants</button>
                    
                    <div className="m-4 p-4 flex items-center">
                    <label>UserName: </label>
                    <input className="border border-black p-2" value={loggedInUser} onChange={(e) => {setUserName(e.target.value)}}/>
                </div>
                     </div>
                
            <div className="res-container flex flex-wrap"> 
            
            {
                 filteredRestaurants.map((restaurant)=>(
                   <Link  key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id} >
                    { restaurant.info.isOpen ?
                      <RestaurantCardPromoted resData = {restaurant}/> 
                      : 
                      <RestaurantCard resData = {restaurant} /> 
                    }
                    {/* <RestaurantCard  resData = {restaurant} /> */}
                    </Link>  
                ))
            }
            </div>

        </div>
    );
 }

 export default Body;
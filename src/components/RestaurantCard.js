import { CDN_URL } from "../utils/constants"; 

const styleCard ={
    backgroundColor:"#f0f0f0"
 };
const  RestaurantCard = (props) => {
    const {resData} = props;
    // console.log(resData)
    return (
        <div data-testid="resCard" className="res-card m-4 p-4 w-[250px] rounded-lg " style={styleCard}>
            <img
            className="rest-logo rounded-lg"
            alt="rest-logo"
            src=
            { CDN_URL + resData.info.cloudinaryImageId   }
            />
            <h3 className="font-bold py-4 text-lg">{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.avgRating} rating</h4>
            <h4>{resData.info.costForTwo}</h4>
            <h4>{resData.info.sla.deliveryTime} minutes</h4>
        </div>
    );
}

export const withOpenLabel = (RestaurantCard) => {
   return (props) => {
    return (
        <div>
            <label className="absolute bg-black text-white rounded-lg">Opened </label>
            <RestaurantCard {...props} />
        </div>
    );
   };
};

export default RestaurantCard;
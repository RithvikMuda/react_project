import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
const ItemList = ({items}) => {
   const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };
    // console.log(items)
    return (
        <div>
 
                {items.map(item => 
                <div key={item.card.info.id} className=" p-2 m-2 border border-gray-200 border-b-2 text-left flex">
                 
                <div className="w-9/12">
                    <div className="py-2">
                      <span>{item.card.info.name}</span>
                       <span>- Rs {item.card.info.defaultPrice/100 || item.card.info.price/100 }</span>
                    </div>
                     <p className="text-xs">{item.card.info.description}</p>
                </div>
                <div className=" w-3/12 py-4">
                <div className="absolute">
                     <button className="p-2 mx-5 rounded-lg bg-black text-white shadow-lg"
                     onClick={()=>{handleAddItem(item)}}>
                        Add+</button>
                </div>
                 <img src={CDN_URL+item.card.info.imageId} className="w-full"/>
                  
                 </div>
                </div> 
                
            )}
        
         </div>
    );
}
export default ItemList;
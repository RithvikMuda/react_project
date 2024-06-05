import { useState } from "react";
const User = (props) => {
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(1)
    
    
    return <div className="user-card">
        <h2>count : {count}</h2>
        <h2>count1 : {count1}</h2>
        <h2>Name:{props.name}</h2>
        <h2>Location: Telangana , Siddipet</h2>
        <h2>Contact: @rihtivk898</h2>
    </div>
};

export default User;
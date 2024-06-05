import React from "react"
import User from "./User";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            count : 0,
            count2 : 2,
        }
    }
    render() {
        const {count} = this.state;
        return (<div className="user-card">
            <h2>count : {count}</h2>
            <button onClick={()=>{
                this.setState({
                    count: this.state.count+1,
                });
            }}>COUNT increase</button>
            <h2>Name:{this.props.name}</h2>
            <h2>Location: Telangana , Siddipet</h2>
            <h2>Contact: @rihtivk898</h2>
    </div>);
    }
}

export default UserClass;
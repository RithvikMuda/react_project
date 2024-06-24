import User from "./User";
import UserClass from "./UserClass";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const About = () => {
    const {loggedInUser} = useContext(UserContext);
    return (
        <div>
            <h1> About page </h1>
            <div className="font-bold">{loggedInUser}</div>
            <User name = {"Rithvik Muda "} />
            <UserClass name = {"Rithvik Muda class"}/> 
        </div>
    );
};

export default About;
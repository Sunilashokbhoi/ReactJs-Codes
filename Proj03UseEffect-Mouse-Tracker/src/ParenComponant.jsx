import { useState } from "react";
import MouseTracker from "./MouseTracker";

function ParentComponant(){
    const [showComponent , setShowComponant] = useState(true);

    const toggleComponant = () =>{
        setShowComponant((prev) =>!prev);
    };

    return(
        <div>
           <button onClick={toggleComponant}>
            {showComponent ? 'Unmount Tracker' : 'Mount Tracker'};
            </button>   

            {showComponent && <MouseTracker/>}
        </div>
    )
}

export default ParentComponant;
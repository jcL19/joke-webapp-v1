import React, { useContext } from "react";
import { useJokeContext } from "../context/JokeContextProvider";

const Filters = () => {
    const { setCategory } = useJokeContext();
    const handleOnChange = (event) =>{
        setCategory(event.target.value);
    }

    return(
        <div>
            <select onChange={handleOnChange}>
                <option value="programming">Programming</option>
                <option value="dark">Dark</option>
                <option value="spooky">Spooky</option>
                <option value="misc">Other</option>
                
            </select>
        </div>
    );
}

export default Filters;
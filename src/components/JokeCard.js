import React, { useEffect, useRef, useState } from "react";
import axios from "axios";


const JokeCard = () => {
    const [joke, setJoke] = useState({});
    const [isNext, setIsNext] = useState(true);
    const isInitialMount = useRef(true);

    const apiURL = "https://v2.jokeapi.dev/joke/any";
    
    const nextJoke = () =>{
        async function fetchJoke(){
            const request = await axios.get(apiURL);
            setJoke(request)
            return request;
        }
        fetchJoke();
    }

    console.log(joke);
    return(
        <div>
            <p>{isNext}</p>
            <button onClick={nextJoke}>{!joke.data ?  "Generate":"Next"}</button>
        </div>
    );
}

export default JokeCard;
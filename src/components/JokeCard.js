import React, { useEffect } from "react";
import { useJokeContext } from "./../context/JokeContextProvider";
import "./../css/JokeCard.css";
import ReactLoading from "react-loading";

const JokeCard = () => {
    const { jokes, fetchJoke, setCategory, isLoading } = useJokeContext();
    useEffect(()=>{
        fetchJoke();
    }, [])

    const handleClickNext = () => {
        fetchJoke();
    }

    const renderJoke = () => {
        if(jokes?.type === "twopart"){
            return (
                <div className="jokeContainer">
                    <h2>{jokes?.category}</h2>
                    <p>{jokes?.setup}</p>
                    <p>{jokes?.delivery}</p>
                    <button onClick={handleClickNext}>
                        Next Joke
                    </button>
                </div>
            )
        }else if(jokes?.type === "single"){
            return(
                <div className="jokeContainer">
                    <h2>{jokes?.category}</h2>
                    <p>{jokes?.joke}</p>
                    <button onClick={handleClickNext}>
                        Next Joke
                    </button>
                </div>
            );
        }
    }

    return(
        <div className="JokeCard">
            {isLoading ? 
                <div className="loading">
                    <ReactLoading type="spinningBubbles" color="#f1f1f1" height={150} width={50} />
                </div>
            :renderJoke()}            
        </div>
    );
}

export default JokeCard;
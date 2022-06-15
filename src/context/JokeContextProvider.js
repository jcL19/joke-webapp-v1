import axios from "axios";
import React, { useContext, useState, createContext } from "react";

const JokeContext = createContext();

const baseUrl = "https://v2.jokeapi.dev/joke/";

export const JokeContextProvider = ({ children }) => {
    const [jokes, setJokes] = useState([]);
    const [category, setCategory] = useState("any");
    const [isLoading, setIsloading] = useState(false);

    const fetchJoke = async() => {
        setIsloading(true);
        const response = await axios.get(`${baseUrl}${category}`);
        setJokes(response.data);
        setIsloading(false);
    }
    return(
        <JokeContext.Provider value={{ jokes, fetchJoke, setCategory, isLoading }}>
            {children}
        </JokeContext.Provider>
    );
}

export const useJokeContext = () => useContext(JokeContext);
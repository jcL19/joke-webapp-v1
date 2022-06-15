import React from "react";
import './App.css';
import JokeCard from "./components/JokeCard";
import Filters from "./components/Filters";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Filters />
      <JokeCard />
    </div>
  );
}

export default App;

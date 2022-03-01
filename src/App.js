import React from "react";
import './App.css';
import JokeCard from "./components/JokeCard";
import Options from "./components/Options";


function App() {
  return (
    <div className="App">
      <Options />
      <JokeCard />
    </div>
  );
}

export default App;

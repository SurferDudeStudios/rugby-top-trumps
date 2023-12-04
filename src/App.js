import React, { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import DefaultOpening from "./Components/DefaultOpening";
import LawsOfGame from "./Components/LawsOfGame";
import PlayGame from "./Components/PlayGame";
import ViewCards from "./Components/ViewCards";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [gameState, setGameState] = useState("DefaultOpening");

  function handleNavChange(nav) {
    setGameState(nav);
  }

  return (
    <div className="App">
      <Header onNavChange={handleNavChange} />
      <main>
        <div className="container clearfix">
          {gameState === "DefaultOpening" && (
            <DefaultOpening onNavChange={handleNavChange} />
          )}
          {gameState === "playGame" && <PlayGame />}
          {gameState === "lawsOfGame" && <LawsOfGame />}
          {gameState === "viewAll" && <ViewCards />}
        </div>
      </main>
      <Footer />
    </div>
  );
}

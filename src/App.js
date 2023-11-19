import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import DefaultOpening from "./Components/DefaultOpening";
import LawsOfGame from "./Components/LawsOfGame";
import PlayGame from "./Components/PlayGame";
import ViewCards from "./Components/ViewCards";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//const gameState = "openGame";

function App() {
  let toRender = null;
  //const [gameState, setGameState] = useState("DefaultOpening");
  let [state, setState] = useState("DefaultOpening");
  function setGameState() {
    setState("state Changed from child component!");
  }
  switch (state) {
    case "playGame":
      //Play game
      toRender = <PlayGame />;
      break;
    case "lawsGame":
      //Laws of game
      toRender = <LawsOfGame />;
      break;
    case "viewAll":
      //View all cards
      toRender = <ViewCards />;
      break;
    case "openGame":
      //Default view
      toRender = <DefaultOpening />;
      break;
    default:
    //Failure of all above (error)
  }
  return (
    <div className="App">
      <Header change={setGameState}></Header>
      <main>
        <div className="container clearfix">
          <p>{state}</p>
          {toRender}
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;

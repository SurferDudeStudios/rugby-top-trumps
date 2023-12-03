import React, { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import DefaultOpening from "./Components/DefaultOpening";
import LawsOfGame from "./Components/LawsOfGame";
import PlayGame from "./Components/PlayGame";
import ViewCards from "./Components/ViewCards";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faBinoculars } from "@fortawesome/free-solid-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [gameState, setGameState] = useState("DefaultOpening");

  function handleNavChange(nav) {
    //setGameState((nav) => );
  }

  return (
    <div className="App">
      <Header onNavChange={handleNavChange} />
      <main>
        <div className="container clearfix">
          <p>
            {
              //gameState
            }
          </p>
          <DefaultOpening />
          <PlayGame />
          <LawsOfGame />
          <ViewCards />
        </div>
      </main>
      <Footer />
    </div>
  );
}

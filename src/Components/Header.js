import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faBinoculars } from "@fortawesome/free-solid-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";

const Header = ({ change }) => {
  //const [gameState, setGameState] = useState("DefaultOpening");
  return (
    <header id="header">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <h1 className="h2 p-3">Welcome to Rugby Top Trumps</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#play" onClick={() => change("PlayGame")}>
                Play game <FontAwesomeIcon icon={faGamepad} />
              </Nav.Link>
              <Nav.Link href="#about" onClick={() => change("LawsOfGame")}>
                How to play <FontAwesomeIcon icon={faBook} />
              </Nav.Link>
              <Nav.Link href="#view" onClick={() => change("ViewCards")}>
                View all players <FontAwesomeIcon icon={faBinoculars} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

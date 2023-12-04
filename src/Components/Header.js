import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faBinoculars } from "@fortawesome/free-solid-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";

export default function Header({ onNavChange }) {
  return (
    <header id="header">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand
            href="#home"
            onClick={(e) => onNavChange("DefaultOpening")}
          >
            <img
              className="d-md-inline d-block"
              src="/img/world-rugby-logo-white.svg"
              width="40"
              height="40"
              alt="Rugby top trumps"
            />
            <h1 className="h2 p-3 d-md-inline d-block">
              Welcome to Rugby Top Trumps
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#play" onClick={(e) => onNavChange("playGame")}>
                Play game <FontAwesomeIcon icon={faGamepad} />
              </Nav.Link>
              <Nav.Link
                href="#about"
                onClick={(e) => onNavChange("lawsOfGame")}
              >
                How to play <FontAwesomeIcon icon={faBook} />
              </Nav.Link>
              <Nav.Link href="#view" onClick={(e) => onNavChange("viewAll")}>
                View all players <FontAwesomeIcon icon={faBinoculars} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

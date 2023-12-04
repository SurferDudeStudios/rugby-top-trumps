import players from "../JSON/rugby-players.json";
import urls from "../JSON/urls.json";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

export default function PlayGame() {
  return (
    <section>
      <Container>
        <Row>
          <Col>
            <h2 className="pt-5">Play the game</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Player 1</h3>
            <p>0 / 54</p>
            <img src="/img/card-bg.svg" alt="player card" />
          </Col>
          <Col>
            <h3>Player 2 / Computer</h3>
            <p>0 / 54</p>
            <img src="/img/card-bg.svg" alt="player card" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

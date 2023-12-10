import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
//import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

export default function ViewCards({ players, suportingData }) {
  return (
    <section>
      <Container>
        <Row>
          <Col>
            <CardContent
              players={players.Players}
              suportingData={suportingData}
            ></CardContent>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

function PlayerImage({ name, children }) {
  const imageLibrary = "/img/player-images/";
  const defaultImage = "player-default.jpg";
  let returnImage = imageLibrary.concat(children);
  let defaultReturnImage = imageLibrary.concat(defaultImage);
  return (
    <Card.Img
      variant="top"
      src={returnImage}
      alt={name}
      onError={(e) => {
        e.target.src = defaultReturnImage;
      }}
    />
  );
}

function PlayerAge({ dob }) {
  //Best practice date of birth should be ISO 8601 - ie. YYYY-MM-DD
  let today = new Date();
  let birthDate = new Date(dob);
  let returnAge = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    returnAge--;
  }
  //Check for missing data
  if (returnAge === "" || returnAge === null || isNaN(returnAge)) {
    returnAge = "No age available";
  }
  return (
    <Button variant="primary">
      Age: <span className="card-button-value">{returnAge}</span>
    </Button>
  );
}

function PlayerText({ url, className, children }) {
  return (
    <Card.Text className={className}>
      {children}{" "}
      <a href={url} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faCircleInfo} />
      </a>
    </Card.Text>
  );
}

function CardContent({ players, suportingData }) {
  function camelCase(str) {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, "");
  }

  function getClubUrl(club) {
    return "https://www.url.com";
  }

  function getCountryUrl(country) {
    return "https://www.url.com";
  }

  function getPositionUrl(position) {
    return "https://www.url.com";
  }

  return (
    <>
      {players.map((player) => (
        <Card key={player.id} className="card-player">
          <Card.Header>
            <PlayerImage name={player.name}>{player.img}</PlayerImage>
          </Card.Header>
          <Card.Body>
            <PlayerText
              url={getClubUrl(player.club)}
              className={camelCase(player.club)}
            >
              {player.club}
            </PlayerText>
            <PlayerText
              url={getCountryUrl(player.country)}
              className={camelCase(player.country)}
            >
              {player.country}
            </PlayerText>
            <Card.Title>
              {player.name}
              <span>
                <a href={getPositionUrl(player.position)}>{player.position}</a>
              </span>
            </Card.Title>
            <ButtonGroup aria-label="Player statistic buttons">
              <PlayerAge dob={player.dob}></PlayerAge>{" "}
              <Button variant="primary">
                Caps: <span className="card-button-value">{player.caps}</span>
              </Button>{" "}
              <Button variant="primary">
                Height:{" "}
                <span className="card-button-value">{player.height}cm</span>
              </Button>{" "}
              <Button variant="primary">
                Weight:{" "}
                <span className="card-button-value">{player.weight}kg</span>
              </Button>{" "}
              <Button variant="primary">
                Points:{" "}
                <span className="card-button-value">{player.points}</span>
              </Button>{" "}
              <Button variant="primary">
                Red cards:{" "}
                <span className="card-button-value">{player.reds}</span>
              </Button>{" "}
              <Button variant="primary">
                Yellow cards:{" "}
                <span className="card-button-value">{player.yellows}</span>
              </Button>{" "}
              <Button variant="primary">
                Percent:{" "}
                <span className="card-button-value">{player.percent}%</span>
              </Button>{" "}
            </ButtonGroup>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
//import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import CardFilter from "./CardFilter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

export default function ViewCards({ players, supportingData }) {
  return (
    <section>
      <Container>
        <h2 className="mt-4">View all players</h2>
        <Row>
          <Col>
            <CardFilter />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="card-container">
              <CardContent
                players={players.Players}
                supportingData={supportingData}
              />
            </div>
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

function CardContent({ players, supportingData }) {
  function camelCase(str) {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, "");
  }

  function getClubUrl(club) {
    //console.log(supportingData.clubs.find(({ text }) => text === club));
    return "https://www.url.com";
  }

  function getCountryUrl(country) {
    //console.log(supportingData.countries.find(({ text }) => text === country));
    return "https://www.url.com";
  }

  //({ name }) => name === "cherries")

  function getPositionUrl(position) {
    const positionArray = supportingData.positions.find(
      ({ text }) => text === position
    );
    console.log(positionArray);
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
              <CardButton btnContent={player.caps}>Caps</CardButton>{" "}
              <CardButton btnContent={player.height}>Height</CardButton>{" "}
              <CardButton btnContent={player.weight}>Weight</CardButton>{" "}
              <CardButton btnContent={player.points}>Points</CardButton>{" "}
              <CardButton btnContent={player.reds}>Red Cards</CardButton>{" "}
              <CardButton btnContent={player.yellows}>Yellow Cards</CardButton>{" "}
              <CardButton btnContent={player.percent}>Percent</CardButton>{" "}
            </ButtonGroup>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

function CardButton({ btnContent, children }) {
  return (
    <Button variant="primary">
      {children}: <span className="card-button-value">{btnContent}</span>
    </Button>
  );
}

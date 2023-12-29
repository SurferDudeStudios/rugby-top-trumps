import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

const imageLibrary = "/img/player-images/";
const defaultImage = "player-default.jpg";
let defaultReturnImage = imageLibrary.concat(defaultImage);

export default function DefaultOpening({ onNavChange }) {
  return (
    <article id="game-opening">
      <section>
        <Container>
          <Row>
            <Col>
              <h2 className="pt-5">What would you like you do?</h2>
            </Col>
          </Row>
          <Row>
            <Col className="col-12 col-md-4">
              <OpeningCard
                title={"Play"}
                image={"/img/play-game.jpg"}
                value={"playGame"}
                onNavChange={onNavChange}
              >
                Play rugby top trumps
              </OpeningCard>
            </Col>
            <Col className="col-12 col-md-4">
              <OpeningCard
                title={"Laws"}
                image={"/img/nigel-owens.jpg"}
                value={"lawsOfGame"}
                onNavChange={onNavChange}
              >
                Learn the laws
                <span className="d-none"> of rugby and rugby top trumps</span>
              </OpeningCard>
            </Col>
            <Col className="col-12 col-md-4">
              <OpeningCard
                title={"View"}
                image={"/img/view-all.jpg"}
                value={"viewAll"}
                onNavChange={onNavChange}
              >
                View all<span className="d-none"> of the players </span> cards
              </OpeningCard>
            </Col>
          </Row>
        </Container>
      </section>
    </article>
  );
}

function OpeningCard({ title, image, value, onNavChange, children }) {
  return (
    <Card className="opening-card">
      <Card.Header>
        <Card.Img
          variant="top"
          src={image}
          alt=""
          onError={(e) => {
            e.target.src = defaultReturnImage;
          }}
        />
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
      <Card.Footer>
        <Button
          variant="primary"
          className="w-100"
          value={value}
          onClick={(e) => onNavChange(e.target.value)}
        >
          {children}
        </Button>
      </Card.Footer>
    </Card>
  );
}

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

export default function DefaultOpening() {
  const imageLibrary = "/img/player-images/";
  const defaultImage = "player-default.jpg";
  let defaultReturnImage = imageLibrary.concat(defaultImage);
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
              <Card>
                <Card.Header>
                  <Card.Img
                    variant="top"
                    src="/img/play-game.jpg"
                    alt="play game"
                    onError={(e) => {
                      e.target.src = defaultReturnImage;
                    }}
                  />
                </Card.Header>
                <Card.Body>
                  <Card.Title>Play</Card.Title>
                </Card.Body>
                <Card.Footer>
                  <Button variant="primary" className="w-100">
                    Play rugby top trumps
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
            <Col className="col-12 col-md-4">
              <Card>
                <Card.Header>
                  <Card.Img
                    variant="top"
                    src="/img/nigel-owens.jpg"
                    alt="Laws of rugby and top trumps"
                    onError={(e) => {
                      e.target.src = defaultReturnImage;
                    }}
                  />
                </Card.Header>
                <Card.Body>
                  <Card.Title>Laws</Card.Title>
                </Card.Body>
                <Card.Footer>
                  <Button variant="primary" className="w-100">
                    Learn the laws
                    <span className="d-none">
                      {" "}
                      of rugby and rugby top trumps
                    </span>
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
            <Col className="col-12 col-md-4">
              <Card>
                <Card.Header>
                  <Card.Img
                    variant="top"
                    src="/img/view-all.jpg"
                    alt="view all cards"
                    onError={(e) => {
                      e.target.src = defaultReturnImage;
                    }}
                  />
                </Card.Header>
                <Card.Body>
                  <Card.Title>View</Card.Title>
                </Card.Body>
                <Card.Footer>
                  <Button variant="primary" className="w-100">
                    View all<span className="d-none"> of the players </span>{" "}
                    cards
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </article>
  );
}

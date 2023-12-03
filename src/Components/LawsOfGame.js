import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";

export default function LawsOfGame() {
  //https://react-bootstrap.netlify.app/docs/components/accordion/
  return (
    <article id="laws-of-the-game">
      <section>
        <Container>
          <Row>
            <Col>
              <h2 className="pt-5">Laws</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>#1 Laws of Rugby Union</Accordion.Header>
                  <Accordion.Body>
                    <ol>
                      <li>Laws of the game</li>
                      <li>Laws of the game</li>
                      <li>Laws of the game</li>
                      <li>Laws of the game</li>
                      <li>Laws of the game</li>
                      <li>Laws of the game</li>
                    </ol>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    #2 Laws of Rugby Top Trumps
                  </Accordion.Header>
                  <Accordion.Body>
                    <ol>
                      <li>Laws of the game</li>
                      <li>Laws of the game</li>
                      <li>Laws of the game</li>
                      <li>Laws of the game</li>
                      <li>Laws of the game</li>
                      <li>Laws of the game</li>
                    </ol>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
    </article>
  );
}

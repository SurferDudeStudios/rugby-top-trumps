import { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

export default function CardFilter() {
  const [open, setOpen] = useState(false);

  function handleFormChange() {
    console.log("Form change");
  }

  return (
    <>
      {" "}
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="filter-players"
        aria-expanded={open}
        className="filter-cards-button"
      >
        Filter <FontAwesomeIcon icon={faFilter} />
      </Button>
      <Collapse in={open}>
        <div id="filter-players">
          <form className="filter-form" onChange={handleFormChange}>
            <Row>
              <Col>
                <h3>Position</h3>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label htmlFor="vehicle1">Prop</label>
              </Col>
              <Col>
                <h3>Country</h3>
                <input
                  type="checkbox"
                  id="vehicle2"
                  name="vehicle1"
                  value="Bike"
                />
                <label htmlFor="vehicle2">Scotland</label>
              </Col>
              <Col>
                <h3>Club</h3>
                <input
                  type="checkbox"
                  id="vehicle3"
                  name="vehicle1"
                  value="Bike"
                />
                <label htmlFor="vehicle3">Edinburgh</label>
              </Col>
            </Row>
          </form>
        </div>
      </Collapse>
    </>
  );
}

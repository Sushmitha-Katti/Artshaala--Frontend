import React from "react";
import Link from "next/link";
import Head from "../../head";
import Nav from "../../nav";
/*import "./services.css"; */

// Here we have all the logic corresponding to that page
// Which makes things distinct
// for example here

import { Heading, Paragraph, Button, Wrapper } from "./styles";
import { Container, Row, Col } from "react-awesome-styled-grid";

// Now you got the whole structure right.
//yes i understand now
// Cool, Just let the comments be there for future references.
//// Now commit and push to your branch and I will merge it.ok
// Save the files
const Home = () => (
  <div className="App">
    <div className="image" />
    <div className="col-lg-10 col-md-10 text-left">
      <Wrapper>
        <Heading>Service & Repair </Heading>
        <Paragraph>
          We know that you love music, that you love your instrument and how it
          can allow you to express yourself. Artshaala Music Store offer all
          kind of musical instruments service & repairing like Guitar, Keyboard,
          Drums, Violin, Harmonium, Tabla, Veena etc., We always try to repair
          your instrument while you wait, depending on the nature of the repair
          and high volume time period. If we cannot repair the instrument on the
          spot, we will give you a quick turn-around time to pick up your
          instrument.
        </Paragraph>
        <Button>
          <a className="button button-black mt-15" href="contact.php">
            <div>Enquire Now</div>
          </a>
        </Button>
      </Wrapper>
    </div>
    <div className="color" />
    <Container>
      <Row>
        <Col>
          <h5 className="blog-title-2">Guitar Servicing</h5>
          <ul className="banner-featured-list">
            <li>
              <i className="zmdi zmdi-check" />
              <span>Guitar restringing/Guitar strings changing</span>
            </li>
            <li>
              <i className="zmdi zmdi-check" />
              <span>Guitar tuninig keys fixing</span>
            </li>
            <li>
              <i className="zmdi zmdi-check" />
              <span>Guitar frett board straightening</span>
            </li>
            <li>
              <i className="zmdi zmdi-check" />
              <span>Guitar bridge , nut & saddle fixing</span>
            </li>
            <li>
              <i className="zmdi zmdi-check" />
              <span>Guitar frett fixing & cleaning</span>
            </li>
            <li>
              <i className="zmdi zmdi-check" />
              <span>Guitar broken necks fixing </span>
            </li>
            <li>
              <i className="zmdi zmdi-check" />
              <span>Guitar customization</span>
            </li>
            <li>
              <i className="zmdi zmdi-check" />
              <span>Guitar pickup fixing</span>
            </li>
            <li>
              <i className="zmdi zmdi-check" />
              <span>Guitar action adjustments</span>
            </li>
          </ul>
        </Col>
        <Col>
          <h5 className="blog-title-2">Keyboard Servicing</h5>
          <ul className="banner-featured-list">
            <li>
              <i className="zmdi zmdi-check" />
              <span>Replacing keyboard keys</span>
            </li>
            <li>
              <i className="zmdi zmdi-check" />
              <span>Missing/damaged components replacement</span>
            </li>
            <li>
              <i className="zmdi zmdi-check" />
              <span>Power issues</span>
            </li>
            <li>
              <i className="zmdi zmdi-check" />
              <span>Motherboard issues</span>
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5 className="blog-title-2">Drum Servicing</h5>
          <ul className="banner-featured-list">
            <li>
              <i className="zmdi zmdi-check" />
              <span>Drums tuning</span>
            </li>
            <li>
              <i className="zmdi zmdi-check" />
              <span>Replacing the drum heads/skin</span>
            </li>
            <li>
              <i className="zmdi zmdi-check" />
              <span>Repairing/fixing the broken drum hardware</span>
            </li>
          </ul>
        </Col>
        <Col>
          <h5 className="blog-title-2">Violin Servicing</h5>
          <ul className="banner-featured-list">
            <li>
              <i className="zmdi zmdi-check" />
              <span>Violin restringing/Violin Strings Changing</span>
            </li>
            <li>
              <i className="zmdi zmdi-check" />
              <span>Violin bridge fixing/adjustment</span>
            </li>
            <li>
              <i className="zmdi zmdi-check" />
              <span>Violin pegs/keys fixing</span>
            </li>
            <li>
              <i className="zmdi zmdi-check" />
              <span>Violin tuning</span>
            </li>
            <li>
              <i className="zmdi zmdi-check" />
              <span>Based in Bangalore.</span>
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5 className="blog-title-2">Veena Servicing</h5>
          <ul className="banner-featured-list">
            <li>
              <i className="zmdi zmdi-check" />
              <span>Veena restringing</span>
            </li>
            <li>
              <i className="zmdi zmdi-check" />
              <span>Veena tuning</span>
            </li>
            <li>
              <i className="zmdi zmdi-check" />
              <span>Veena bride fixing</span>
            </li>
            <li>
              <i className="zmdi zmdi-check" />
              <span>Veena breakage restoration</span>
            </li>
            <li>
              <i className="zmdi zmdi-check" />
              <span>Veena polishing</span>
            </li>
            <li>
              <i className="zmdi zmdi-check" />
              <span>Veena repair</span>
            </li>
          </ul>
        </Col>
        <Col>
          <h5 className="blog-title-2">Harmonium Servicing</h5>
          <ul className="banner-featured-list">
            <li>
              <i className="zmdi zmdi-check" />
              <span>Harmonium repair</span>
            </li>
            <li>
              <i className="zmdi zmdi-check" />
              <span>Harmonium breakage restoration</span>
            </li>
            <li>
              <i className="zmdi zmdi-check" />
              <span>Harmonium tuning</span>
            </li>
            <li>
              <i className="zmdi zmdi-check" />
              <span>Harmonium bellows rebuild</span>
            </li>
            <li>
              <i className="zmdi zmdi-check" />
              <span>Harmonium air fixing and keys fixing</span>
            </li>
            <li>
              <i className="zmdi zmdi-check" />
              <span>Harmonium coupler repair</span>
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5 className="blog-title-2">Tabla Servicing</h5>
          <ul className="banner-featured-list">
            <li>
              <i className="zmdi zmdi-check" />
              <span>Tabla tuning</span>
            </li>
            <li>
              <i className="zmdi zmdi-check" />
              <span>Tabla karane fixing</span>
            </li>
            <li>
              <i className="zmdi zmdi-check" />
              <span>Tabla puri/cap fitting</span>
            </li>
            <li>
              <i className="zmdi zmdi-check" />
              <span>Dagga repair</span>
            </li>
            <li>
              <i className="zmdi zmdi-check" />
              <span>Tabla repair</span>
            </li>
            <li>
              <i className="zmdi zmdi-check" />
              <span>Bar replacement/fitting</span>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Home;

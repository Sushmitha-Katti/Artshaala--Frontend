import React from "react";
import Link from "next/link";
import Head from "../../head";
import Nav from "../../nav";
import one from "./imagerepair/one.jpg";
import two from "./imagerepair/two.jpg";
import three from "./imagerepair/three.jpg";
import four from "./imagerepair/four.jpg";
import five from "./imagerepair/five.jpg";
import six from "./imagerepair/six.jpg";
import seven from "./imagerepair/seven.jpg";

/*import "./services.css"; */

// Here we have all the logic corresponding to that page
// Which makes things distinct
// for example here

import {
  Heading,
  Paragraph,
  Button,
  Wrapper,
  Container,
  One,
  Imagestyle,
  Text,
  Div,
  Two,
  ImageTwo,
  TextTwo,
  Three,
  ImageThree,
  TextThree,
  Four,
  ImageFour,
  TextFour,
  Five,
  ImageFive,
  TextFive,
  Six,
  ImageSix,
  TextSix,
  Seven,
  ImageSeven,
  TextSeven
} from "./styles";

// Now you got the whole structure right.
//yes i understand now
// Cool, Just let the comments be there for future references.
//// Now commit and push to your branch and I will merge it.ok
// Save the files
const Home = () => (
  <div className="App">
    <Wrapper>
      <Heading>Service & Repair </Heading>
      <Paragraph>
        We know that you love music, that you love your instrument and how it
        can allow you to express yourself. Artshaala Music Store offer all kind
        of musical instruments service & repairing like Guitar, Keyboard, Drums,
        Violin, Harmonium, Tabla, Veena etc., We always try to repair your
        instrument while you wait, depending on the nature of the repair and
        high volume time period. If we cannot repair the instrument on the spot,
        we will give you a quick turn-around time to pick up your instrument.
      </Paragraph>
      <Button>
        <a href="contact.php">
          <Div>Enquire Now</Div>
        </a>
      </Button>
    </Wrapper>
    <Container>
      <One>
        <Imagestyle>
          {" "}
          <img src={one} />
        </Imagestyle>

        <Text>
          <h3>Guitar Servicing</h3>
          <ul>
            <li>
              <i />
              <span>Guitar restringing/Guitar strings changing</span>
            </li>
            <li>
              <i />
              <span>Guitar tuninig keys fixing</span>
            </li>
            <li>
              <i />
              <span>Guitar frett board straightening</span>
            </li>
            <li>
              <i />
              <span>Guitar bridge , nut & saddle fixing</span>
            </li>
            <li>
              <i />
              <span>Guitar frett fixing & cleaning</span>
            </li>
            <li>
              <i />
              <span>Guitar broken necks fixing</span>
            </li>
            <li>
              <i />
              <span>Guitar customization</span>
            </li>
            <li>
              <i />
              <span>Guitar pickup fixing</span>
            </li>
            <li>
              <i />
              <span>Guitar action adjustments</span>
            </li>
          </ul>
        </Text>
      </One>

      <Two>
        <ImageTwo>
          <img src={two} />
        </ImageTwo>
        <TextTwo>
          <h3>Keyboard Servicing</h3>
          <ul>
            <li>
              <i />
              <span>Replacing keyboard keys</span>
            </li>
            <li>
              <i />
              <span>Missing/damaged components replacement</span>
            </li>
            <li>
              <i />
              <span>Power issues</span>
            </li>
            <li>
              <i />
              <span>Motherboard issues</span>
            </li>
          </ul>
        </TextTwo>
      </Two>

      <Three>
        <ImageThree>
          <img src={three} />
        </ImageThree>
        <TextThree>
          <h3>Drum Servicing</h3>
          <ul>
            <li>
              <i />
              <span>Drums tuning</span>
            </li>
            <li>
              <i />
              <span>Replacing the drum heads/skin</span>
            </li>
            <li>
              <i />
              <span>Repairing/fixing the broken drum hardware</span>
            </li>
          </ul>
        </TextThree>
      </Three>
      <Four>
        <ImageFour>
          <img src={four} />
        </ImageFour>
        <TextFour>
          <h3>Violin Servicing</h3>
          <ul>
            <li>
              <i />
              <span>Violin restringing/Violin Strings Changing</span>
            </li>
            <li>
              <i />
              <span>Violin bridge fixing/adjustment</span>
            </li>
            <li>
              <i />
              <span>Violin pegs/keys fixing</span>
            </li>
            <li>
              <i />
              <span>Violin tuning</span>
            </li>
            <li>
              <i />
              <span>Based in Bangalore.</span>
            </li>
          </ul>
        </TextFour>
      </Four>
      <Five>
        <ImageFive>
          <img src={five} />
        </ImageFive>
        <TextFive>
          <h3>Veena Servicing</h3>
          <ul>
            <li>
              <i />
              <span>Veena restringing</span>
            </li>
            <li>
              <i />
              <span>Veena tuning</span>
            </li>
            <li>
              <i />
              <span>Veena bride fixing</span>
            </li>
            <li>
              <i />
              <span>Veena breakage restoration</span>
            </li>
            <li>
              <i />
              <span>Veena polishing</span>
            </li>
            <li>
              <i />
              <span>Veena repair</span>
            </li>
          </ul>
        </TextFive>
      </Five>
      <Six>
        <ImageSix>
          <img src={six} />
        </ImageSix>
        <TextSix>
          <h3>Harmonium Servicing</h3>
          <ul>
            <li>
              <i />
              <span>Harmonium repair</span>
            </li>
            <li>
              <i />
              <span>Harmonium breakage restoration</span>
            </li>
            <li>
              <i />
              <span>Harmonium tuning</span>
            </li>
            <li>
              <i />
              <span>Harmonium bellows rebuild</span>
            </li>
            <li>
              <i />
              <span>Harmonium air fixing and keys fixing</span>
            </li>
            <li>
              <i />
              <span>Harmonium coupler repair</span>
            </li>
          </ul>
        </TextSix>
      </Six>
      <Seven>
        <ImageSeven>
          <img src={seven} />
        </ImageSeven>
        <TextSeven>
          <h3>Tabla Servicing</h3>
          <ul>
            <li>
              <i />
              <span>Tabla tuning</span>
            </li>
            <li>
              <i />
              <span>Tabla karane fixing</span>
            </li>
            <li>
              <i />
              <span>Tabla puri/cap fitting</span>
            </li>
            <li>
              <i />
              <span>Dagga repair</span>
            </li>
            <li>
              <i />
              <span>Tabla repair</span>
            </li>
            <li>
              <i />
              <span>Bar replacement/fitting</span>
            </li>
          </ul>
        </TextSeven>
      </Seven>
    </Container>
  </div>
);

export default Home;

// hey why arent the styles working?
// actually the local host port was active
//let me fix this just a second
// is it working ?
//checking
//wanted to use it with the text..trying now
//No errors now
// like is the media quary is working ?
//actually im trying to solve this overlapping
//problem.

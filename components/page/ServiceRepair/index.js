import React from "react";
import Link from "next/link";
import Head from "../../head";
import Nav from "../../nav";
/*import "./services.css"; */

// Here we have all the logic corresponding to that page
// Which makes things distinct
// for example here

import { Heading, Paragraph } from "./styles";

// Now you got the whole structure right.
//yes i understand now
// Cool, Just let the comments be there for future references.
//// Now commit and push to your branch and I will merge it.ok
// Save the files
const Home = () => (
  <div className="App">
    <div className="image" />
    <div class="col-lg-10 col-md-10 text-left">
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
      <button>
        <a class="button button-black mt-15" href="contact.php">
          <span>Enquire Now</span>
        </a>
      </button>
    </div>
    <div class="color" />
  </div>
);

export default Home;

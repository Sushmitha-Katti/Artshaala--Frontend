import React from "react";
import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";
/*import "./services.css"; */

const Home = () => (
  <div className="App">
    <div className="image" />
    <div class="col-lg-10 col-md-10 text-left">
      <h2 class="text-black">Service & Repair </h2>
      <p class="text-black">
        We know that you love music, that you love your instrument and how it
        can allow you to express yourself. Artshaala Music Store offer all kind
        of musical instruments service & repairing like Guitar, Keyboard, Drums,
        Violin, Harmonium, Tabla, Veena etc., We always try to repair your
        instrument while you wait, depending on the nature of the repair and
        high volume time period. If we cannot repair the instrument on the spot,
        we will give you a quick turn-around time to pick up your instrument.
      </p>
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

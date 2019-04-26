
import React, { Component } from "react";
import RentalWrapper from "./styles";
import logo from "./images/logo1.png";
import Nav from "../../Navbar";
import Footer from "../../Footer";


class Rental extends Component {
  render() {
    return (
      //  <div>
      //   <Body className="wrapper">
          

         
      //     <section className="main-section">
      //       <div className="SectionA">
      //         <h1>Rental</h1>
      //         <p className="main-text">
      //           Artshaala Music Store offers quality , new and used musical
      //           instruments for rental that are maintained, cleaned and serviced
      //           by a professional technicians.
      //           <br />
      //           Musical instruments include like Acoustic Guitars, Electric
      //           Guitars, Guitar Amplifiers, Keyboards, Acoustic & electronic
      //           drum kits, Tablas, Harmoniums, Dholaks, <br />
      //           as well as Pro Audio systems including speakers, amplifiers,
      //           mixers, mics, monitors etc.
      //         </p>
      //       </div>
      //       <form className="main">
      //         <div>
      //           <h3>GET IN TOUCH</h3>
      //         </div>
      //         <br />
      //         <div>
      //           <input placeholder="Your name here" />
      //         </div>
      //         <br />
      //         <div>
      //           <input placeholder="Your email here" />
      //         </div>
      //         <br />
      //         <div>
      //           <input placeholder="Subject here" />
      //         </div>
      //         <br />
      //         <div>
      //           <input placeholder="Your phone here" />
      //         </div>
      //         <br />
      //         <div>
      //           <input placeholder="Message" />
      //         </div>
      //         <br />
      //         <div>
      //           <button className="form-btn">Submit</button>
      //         </div>
      //       </form>
      //     </section>
      //   </Body>
      //   <div className="footer-grid">
      //     <Footer />
      //   </div>
      // </div>

      <RentalWrapper>
        <div className = "aboutRental">
        <div className = "aboutwrapper">
          <h1> Rental</h1>
          <p className = "paragraph" >
                Artshaala Music Store offers quality , new and used musical
                 instruments for rental that are maintained, cleaned and serviced
                 by a professional technicians.
                 <br /><br/>
                 Musical instruments include like Acoustic Guitars, Electric
                 Guitars, Guitar Amplifiers, Keyboards, Acoustic & electronic
                drum kits, Tablas, Harmoniums, Dholaks, <br />
                 as well as Pro Audio systems including speakers, amplifiers,
                 mixers, mics, monitors etc.
               </p>
          </div>
        </div>
     
        <div className = "renatlform"> 
          <div className = "formwrapper">
            <form>
              <div><h1>Get In Touch</h1></div>
             
              <input type =  "text"  placeholder="Name" ></input>
              <input type =  "text"  placeholder="Email" ></input>
              <input type =  "text"  placeholder="Subject" ></input>
              <input type =  "text"  placeholder="Phone" ></input>
              <textarea id="description" name="description" placeholder="Message "
                
                
                required ></textarea>
            <input type="submit" value = "SUBMIT >>"/>

            </form>
          </div>
        </div>
        
      </RentalWrapper>
    );
  }
}

export default Rental;

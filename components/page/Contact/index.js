import React, { Component } from "react";
import { Styling } from "./styles";
import Head from "next/head";
import Map from "./map";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import {CONTACT_MUTATION} from "../Rental/index"

class Contact extends Component {
  state = {
    email: "",
    phone: "",
    name: "",
    message: "",
    subject: "",
  };
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  showalert = () => {
    alert("Thank for filling the form. we will get in touch with you soon")
   };


  render() {
    return (
      <Mutation
        mutation={CONTACT_MUTATION}
        variables={this.state}
       
      >
        {(contact , { error, loading }) => (
      <Styling>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Abel|Montserrat|Patua+One|Monoton"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"
            rel="stylesheet"
          />

          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        

        <div id="main">
          <div>
            <Map />
          </div>
          <div>
            <h1>Contact Us</h1>
            <p>
              Our experienced and dedicated staff eager to help you out with
              regard to any musical instruments, accessories, service, rentals
              queries. Feel free to walk in next door to our store.
            </p>
          </div>
          <div>
            <div>
              <form method="post"
               onSubmit={async e => {
                 e.preventDefault();
                 const res = await contact();
                 
                 this.setState({  email: "",name:"", phone:"", subject:"",message: ""});
                 this.showalert()
               
                 
                
               }}>
                <p>Get in Touch</p>
                <div>
                  <input type="text" name="name" placeholder="Name" value={this.state.name}
              onChange={this.saveToState}
              required />
                  <input type="text" name="phone" placeholder="Phone" value={this.state.phone}
              onChange={this.saveToState}
              required />
                  <input type="email" name="email" placeholder="Email" value={this.state.email}
              onChange={this.saveToState}
              required/>
                  <input type="text" name="subject" placeholder="Subject" value={this.state.subject}
              onChange={this.saveToState}
              required/>
                  <textarea type="text" name="message" placeholder="Message" value={this.state.message}
              onChange={this.saveToState}
              required/>
                  <button type="submit" className="btn btn-default btn-lg">
                    SUBMIT 
                    <span className="glyphicon glyphicon-circle-arrow-right" />
                  </button>
                </div>
              </form>
            </div>
            <div className="address">
              <h1>Artshaala Music Store,</h1>

              <br />
              <h2>Address</h2>
              <h4>
                #2/4,2nd Floor, 80 Feet Road,
                <br />
                Above Freskka Restaurant,
                <br />
                Opp MS Ramaiah Hospital,
                <br />
                Poojari Layout,
                <br />
                RMV 2nd Stage,
                <br />
                Bangalore-560 094
                <br />
                Karnataka
              </h4>
              <br />

              <h2>Phone</h2>
              <h4>
                <span className="glyphicon glyphicon-earphone" />
                <a href="tel:8041145509">(+91) 80 41145509</a>/
                <a href="tel:7338040655">(+91) 73380 40655</a>
              </h4>
              <br />

              <h2>Email</h2>
              <h4>
                <a href="mailto:artshaalamusicstore@gmail.com ">
                  artshaalamusicstore@gmail.com
                </a>
              </h4>
            </div>
          </div>
        </div>
      </Styling>
      )}
      </Mutation>

    );
  }
}

export default Contact;

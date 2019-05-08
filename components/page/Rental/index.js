
import React, { Component } from "react";
import RentalWrapper from "./styles";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import logo from "./images/logo1.png";
import Nav from "../../Navbar";
import Footer from "../../Footer";


const CONTACT_MUTATION = gql`
  mutation CONTACT_MUTATION(
  $email: String!
  $name: String!
  $phone: String!
  $subject: String!
  $message: String!
  ) {
    createContact(
      email: $email
      name: $name
      phone: $phone
      subject: $subject
      message: $message
    ) {
      id
    } 
  }
`;


class Rental extends Component {
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
   }
  render() {
    return (
      <Mutation
        mutation={CONTACT_MUTATION}
        variables={this.state}
       
      >
        {(contact , { error, loading }) => (

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
              <form
               method="post"
               onSubmit={async e => {
                 e.preventDefault();
                 const res = await contact();
                 this.setState({  email: "",name:"", phone:"", subject:"",message: ""});
                 this.showalert()
               }}
              >
                <div><h1>Get In Touch</h1></div>
              
                <input type =  "text"  placeholder="Name"  name= "name" value={this.state.name}
              onChange={this.saveToState}
              required></input>
                <input type =  "email" placeholder="Email" name = "email" value={this.state.email}
              onChange={this.saveToState}
              required ></input>
                <input type =  "text"  placeholder="Subject" name = "subject" value={this.state.subject}
              onChange={this.saveToState}
              required ></input>
                <input type =  "text"  placeholder="Phone" name = "phone" value={this.state.phone}
              onChange={this.saveToState}
              required></input>
                <textarea id="description" name="message" placeholder="Message " value={this.state.message}
              onChange={this.saveToState}
              required 
                   ></textarea>
              <input type="submit" value = "SUBMIT >>"/>

              </form>
            </div>
          </div>
          
        </RentalWrapper>
      )}
      </Mutation>
    );
  }
}

export default Rental;
export {CONTACT_MUTATION}

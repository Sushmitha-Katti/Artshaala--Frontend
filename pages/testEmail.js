import React, { Component } from "react";
const postmark = require("postmark");

var client = new postmark.ServerClient("e385a780-750b-453a-9507-2a1ecd146940");

export default class testEmail extends Component {

  sendMail = async () => {
    var res = await client.sendEmail({
      From: "amanalok@unicornmark.com",
      To: "abhilash4317@gmail.com",
      Subject: "Test",
      TextBody: "Hello from Postmark!"
    });
    console.log(res);
  };
  render() {
    return (
     <p>hello</p>
    );
  }
}

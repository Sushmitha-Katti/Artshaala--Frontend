import React, { Component } from "react";
import Head from "next/head";

class Meta extends Component {
  state = {};
  render() {
    return (
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Abel|Montserrat|Patua+One|Monoton|Roboto|Roboto+Condensed|Open+Sans+Condensed:300|News+Cycle"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    );
  }
}

export default Meta;

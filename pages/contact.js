import React from "react";
import Contact from "../components/page/Contact/index";
import Head from "../components/head";
import Nav from "../components/Navbar";

const Page = (props) => (
  <div>
    <Head title="Contact" />
    
    <Contact  {...props}/>
  </div>
);

export default Page;

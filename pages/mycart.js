import React, { Component } from "react";
import Cart from "../components/page/cart/index";
import Head from "../components/head";
import Nav from "../components/Navbar";

const page = () => (
  <div>
    <Head title="Cart" />
    <Nav />
    <Cart />
  </div>
);

export default page;

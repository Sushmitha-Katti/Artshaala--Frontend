import React, { Component } from "react";
import Cart from "../components/page/Admincart/index";
import Head from "../components/head";
import Navtest from "../components/test/navtest";

const page = () => (
  <div>
    <Head title="Cart" />
   <Navtest />
    <Cart />
  </div>
);

export default page;

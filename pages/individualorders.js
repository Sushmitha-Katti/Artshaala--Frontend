import React from 'react'
import Products from '../components/page/Products/index';
import Head from "../components/head";
import Navtest from "../components/test/navtest";
import CustOrder   from "../components/Admin/custorder";

export default (props) => 
<div>
<Head title="Manage Orders" />
<Navtest />
<CustOrder {...props}/>

</div>



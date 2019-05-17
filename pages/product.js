
import React from 'react'
import Products from '../components/page/Products/index';
import Head from "../components/head";
import Nav from "../components/Navbar";

export default (params) => 
<div>
<Head title="Product" />

<Products {...params} />
</div>



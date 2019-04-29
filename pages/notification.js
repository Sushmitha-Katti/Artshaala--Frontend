import React from 'react'
import Products from '../components/page/Products/index';
import Head from "../components/head";
import Navtest from "../components/test/navtest";
import Notification  from "../components/Admin/notification";

export default (params) => 
<div>
<Head title="Product" />
<Navtest />
<Notification {...params} />
</div>



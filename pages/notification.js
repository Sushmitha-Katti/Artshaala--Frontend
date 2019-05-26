import React from 'react'
import Products from '../components/page/Products/index';
import Head from "../components/head";
import Navtest from "../components/test/navtest";
import Notification  from "../components/Admin/notification";

export default (props) => 
<div>
<Head title="Notification" />
<Navtest />
<Notification {...props} />
</div>



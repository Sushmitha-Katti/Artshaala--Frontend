
import React from 'react'
import Products from '../components/page/Products/index';
import Head from "../components/head";
import Navtest from "../components/test/navtest";
import CustOrders   from "../components/Admin/custorders";

// export default (params) => 
// <div>
// <Head title="Manage Orders" />
// <Navtest  />
// <CustOrders {...params} />

// </div>

const Home = (props) => (
    <div>
<Head title="Manage Orders" />
<Navtest />
<CustOrders {...props} />

</div>
  );
  
  export default Home;



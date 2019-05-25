import Items from '../components/page/itemPage/Items'

import Head from "../components/head";
import Store from "../components/page/itemPage/store";

const StorePage = (props) => (

<body style={{margin:0}}>
    <Head title="Product Search"/>
    <Store prop ={props} />
  </body>

);

export default StorePage;

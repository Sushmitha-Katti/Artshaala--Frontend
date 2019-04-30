import UpdateItem from "../components/page/itemPage/updateItem"
import Head from "../components/head";
import Navtest from "../components/test/navtest";
const Sell = ({ query }) => (
  <div>
    <Head title = "Update"/>
    <Navtest/>
    <UpdateItem id={query.id} />
  </div>
);

export default Sell;
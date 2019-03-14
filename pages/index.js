import Common from "../components/page/common/common";

import Head from "../components/head";
import Nav from "../components/Navbar";
import ServiceCards from "../components/page/Home/Servicecards";
import CouroselCards from "../components/page/Home/couroselCards";

const Home = () => (
  <div>
    <Head title="Home" />
    <Nav />
    <Common />

    <ServiceCards />
    <CouroselCards />
  </div>
);

export default Home;

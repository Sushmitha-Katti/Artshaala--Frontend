import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/Navbar";
import ServiceCards from "../components/page/Home/Servicecards";

const Home = () => (
  <div>
    <Head title="Home" />
    <Nav />
    <ServiceCards />
  </div>
);

export default Home;

import Common from "../components/page/common/common";
import Head from "../components/head";
import Nav from "../components/Navbar";
import ServiceCards from "../components/page/Home/Servicecards";
import CouroselCards from "../components/page/Home/couroselCards";
import NewsLetter from "../components/page/Home/newsletter";
import CouroselCard from "../components/page/Home/couroselCard";



const Home = () => (
  <div>
    <Head title="Home" />
    <Common />
     {/* <ServiceCards />  */}
    <NewsLetter />
  </div>
);

export default Home;
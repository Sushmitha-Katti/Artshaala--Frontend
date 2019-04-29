import React from 'react';
import Nav from "../components/Navbar";
import Head from "../components/head";
import Blogs from '../components/Blogs/Blogs';
import Footer from '../components/Footer';

const blogPage = () => (
    <div>
      <Head title="Blogs" />
      <Nav />
      <Blogs />
    
    </div>
  );
  
  export default blogPage;
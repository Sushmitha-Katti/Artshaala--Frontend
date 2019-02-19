import React,{Component} from 'react';
import sc from 'styled-components';



class rental extends React.Component {
    render() {
      return (
  
      <Body>
          <div className="wrapper">
          <Header>
            <Logo>Logo</Logo>
          </Header>
            <nav>
                <UL>
                <li><A>Home</A></li>
                <li><A>Store</A></li>
                <li><A>Service & Repairs</A></li>
                <li><A>Rental</A></li>
                <li><A>About Us</A></li>
                <li><A>Blogs</A></li>
                <li><A>Contact Us</A></li>
                </UL>
            </nav>
            <MainSection>
                <sectiona>
                   <H1>
                    Rental
                   </H1>
                   <P> 
                       Artshaala Music Store offers quality , new and used musical instruments for rental that are maintained, cleaned and serviced by a professional technicians.<br/> Musical instruments include like Acoustic Guitars, Electric Guitars, Guitar Amplifiers, Keyboards, Acoustic & electronic drum kits, Tablas, Harmoniums, Dholaks, <br/> as well as Pro Audio systems including speakers, amplifiers, mixers, mics, monitors etc.
                   </P>
                </sectiona>
                 <B>
                    <div>
                    <Text>GET IN TOUCH</Text>
                    </div>
                    <br/>
                    <div>
                    <Input placeholder="Your name here"/>
                    </div>
                    <br/>
                    <div>
                    <Input placeholder="Your email here"/>
                    </div>
                    <br/>
                    <div>
                    <Input placeholder="Subject here"/>
                    </div>
                    <br/>
                    <div>
                    <Input placeholder="Your phone here"/>
                    </div>
                    <br/>
                    <div>
                    <Input placeholder="Message"/>
                    </div>
                    <br/>
                    <div>
                     <Button>Submit</Button>
                    </div>
                </B>
            </MainSection>
          </div>
          <Footer>
              <p>Artshaala Music Store
            <br/> &copy; 2018  All Rights Reserved <br/></p>
      </Footer>

      </Body>
     
      );
    }
  }
 export default rental;



 const Body = sc.body`
 box-sizing: border-box;
 font-family: Arial, Helvetica, sans-serif;
 background: #FCFBFC;
 margin: 0px 20px;
 line-height: 1.4;
 `;


 const Header = sc.header`
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-flow: column;
    justify-items: center;
    padding-top: 20px;
 `;

 const Logo = sc.h1`
   color:black
 `;

 const UL = sc.ul`
 display: grid;
 grid-gap: 20px;
 padding: 0;
 list-style: none;
 grid-template-columns: repeat(7, 1fr);
 grid-auto-flow:column;
 `;

 const A =sc.a`
    background: #FCFBFC;
    display: block;
    text-decoration: none;
    padding: 0.8rem;
    text-align: center;
    color:  #333;
    font-size: 1.1rem;
    transition: 0.3s ease; 
 `;

 const MainSection = sc.section`
 border-top: solid;
 border-bottom: solid;
 padding: 5rem;
 display: grid;
 grid-template-columns: 1fr 1fr;
 grid-auto-flow: column;
 grid-gap: 30px;
 justify-items: center;
 grid-template-areas: 'displaycard formcard'
`;

const sectiona =sc.div`

grid-area: displaycard;
// background: url(gutar.png);//
background-size: cover;
background-position: center;
color: white;
`;

const H1=sc.h1`
font-family: 'Segoe UI', Tahoma,  Verdana, sans-serif;
font-size: 5rem;
padding-left: 1.6rem;
padding-top: 1.5rem;
color:black;
`;

const P=sc.p`
padding-left: 1.6rem;
padding-top: 1.5rem;
font-family: 'Segoe UI', Tahoma,  Verdana, sans-serif;
font-size: 1.4rem;
color:black
`;

const B =sc.form`
grid-area: formcard;
padding:100px;
box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
background: #F7BB2F;
`;

const Text=sc.h3`
    padding-left: 5rem;
`;

const Input=sc.input`
height:40px;
width:300px;
font-size:14pt;
border-radius: 3px;
border: 2px solid  #333;
`;


const Button = sc.button`
background: transparent 70%;
border-radius: 3px;
border: 2px solid  #333;
color: #333;
background-color: white;
margin: 0 1em;
padding: 0.25em 1em;
width: 100px;
height: 50px; 
align-self: stretch;
`;

const Footer = sc.footer`
margin-top: 2rem;
background: #333;
color: #fff;
text-align: center;
padding: 1rem;

`;
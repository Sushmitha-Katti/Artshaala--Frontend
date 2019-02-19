import React,{Component} from 'react';
import { Body,Header,Logo, UL,A,MainSection,Sectiona,H1,P,B,Text,Input,Button,Footer} from './styles';

class Rental extends React.Component {
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
               <Sectiona>
                   <H1>
                    Rental
                   </H1>
                   <P> 
                       Artshaala Music Store offers quality , new and used musical instruments for rental that are maintained, cleaned and serviced by a professional technicians.<br/> Musical instruments include like Acoustic Guitars, Electric Guitars, Guitar Amplifiers, Keyboards, Acoustic & electronic drum kits, Tablas, Harmoniums, Dholaks, <br/> as well as Pro Audio systems including speakers, amplifiers, mixers, mics, monitors etc.
                   </P>
              </Sectiona>
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
 export default Rental;

 
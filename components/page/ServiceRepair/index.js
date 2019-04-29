import React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import Link from "next/link";
import Head from "../../head";
import styled from "styled-components";

import drum from "./imagerepair/drum.jpg";
import guitar from "./imagerepair/guitar.jpg";
import harmonium from "./imagerepair/harmonium.jpg";
import keyboard from "./imagerepair/keyboard.jpg";
import tabla from "./imagerepair/tabla.jpg";
import veena from "./imagerepair/veena.jpg";
import violin from "./imagerepair/violin.jpg";

const ServiceWrapper = styled.div`
margin:0 0;
.Enquiry{
  display:grid;
  grid-template-columns: 1fr ;

  padding:3rem 7rem;
  font-size:1.3rem;
  place-items: center center;
  border-radius:1%;
 background:#F8F8F8;
 margin-bottom:1rem;

  .enquireButton{
    text-decoration: none;
    padding:1rem 1.5rem;
    background-color:#F7bb2f;
    color:black;
    border-radius:2%;
  }
  h1{
    color:#F7bb2f;
  }
  .enquireButton:hover{
    color:white;
  }
  
}
.MainGrid{
  margin:2rem 3rem;
  display:grid;
  grid-template-columns: 1fr 1fr; 
  grid-auto-rows: 1fr;
  justify-content: center;
  align-content: center;
  
}
.right{
    border-right: 3px solid #F7bb2f;
    height: 500px;
    border-radius:5%;
  }
  .left{
    border-left: 3px solid #F7bb2f;
    height: 500px;
    border-radius:5%;
  }
.EachGrid{
  display:grid;
  grid-template-columns: 1fr 1fr; 
  grid-auto-rows: 1fr;
  justify-content: center;
  align-content: center;
  place-items: center center;
  h3{
    text-align:center;
  }
  
 
  img{
    width:300px;
    height:300px;
    border-radius:50%;
    border: 1px solid black;
  }
}
@media only screen and (max-width: 768px) {

  .Enquiry{
  display:grid;
  grid-template-columns: 1fr ;

  padding:2rem 3rem;
  font-size:1.1rem;
  place-items: center center;
  border-radius:1%;
 background:#F8F8F8;
 margin:2rem 0rem;
 
  .enquireButton{
    text-decoration: none;
    padding:0.9rem 1.3rem;
    background-color:#F7bb2f;
    color:black;
    border-radius:2%;
  }
  h1{
    color:#F7bb2f;
  }
  .enquireButton:hover{
    color:white;
  }
  
}

  .MainGrid{
  margin:0.9rem 1rem;
  display:grid;
  grid-template-columns: 1fr ; 
  grid-auto-rows: 1fr;
  justify-content: center;
  align-content: center;
  
}
.right{
    border-bottom: 3px solid #F7bb2f;
    border-right:none;
    height: 300px;
    border-radius:5%;
    border-top: 3px solid #F7bb2f;
  }
  .left{
    border-top: 3px solid #F7bb2f;
    border-bottom: 3px solid #F7bb2f;
    height: 300px;
    border-radius:5%;
    border-left:none;
  }
  #last{
    border:none;
  }
  .EachGrid{
    ul{li{
      font-size:0.9rem;
    }
    }
  
 
  img{
    width:200px;
    height:200px;
    border-radius:50%;
    border: 1px solid black;
  }
}
}
@media only screen and (max-width: 480px) {
  .Enquiry{
  display:grid;
  grid-template-columns: 1fr ;

  padding:1rem 2rem;
  font-size:0.9rem;
  place-items: center center;
  border-radius:1%;
 background:#F8F8F8;
 margin:2rem 0rem;
 
  .enquireButton{
    text-decoration: none;
    padding:0.8rem 1.1rem;
    background-color:#F7bb2f;
    color:black;
    border-radius:2%;
  }
  h1{
    color:#F7bb2f;
  }
  .enquireButton:hover{
    color:white;
  }
  
}
  .MainGrid{
  margin:0.9rem 1rem;
  display:grid;
  grid-template-columns: 1fr ; 
  grid-auto-rows: 1fr;
  justify-content: center;
  align-content: center;
 
}
.right{
    border-bottom: 3px solid #F7bb2f;
    border-right:none;
    height: 310px;
    border-radius:5%;
    border-top: 3px solid #F7bb2f;
  }
  .left{
    border-top: 3px solid #F7bb2f;
    border-bottom: 3px solid #F7bb2f;
    height: 310px;
    border-radius:5%;
    border-left:none;
  }
  #last{
    border:none;
  }

  .EachGrid{
    ul{
      li
      {
      font-size:0.7rem;
      }
    }
    
   
  
 
  img{
    width:200px;
    height:200px;
    border-radius:50%;
    border: 1px solid black;
  }
}
}
`;



class Services extends React.Component {
  state = {
    show: false
  };

  render() {
    return (<ServiceWrapper>
      <div className = "Enquiry">
      <h1>Services And Repairs</h1>
      <p>We know that you love music, that you love your instrument and how it can allow you to express yourself. Artshaala Music Store offer all kind of musical instruments service & repairing like Guitar, Keyboard, Drums, Violin, Harmonium, Tabla, Veena etc., We always try to repair your instrument while you wait, depending on the nature of the repair and high volume time period. If we cannot repair the instrument on the spot, we will give you a quick turn-around time to pick up your instrument.</p>
      <Link href="contact#contactForm">
      <a className = "enquireButton"><b>Enquire Now</b></a>
      </Link>
      </div>
      <div className = "MainGrid"> {/* Main Grid for services */} 
        <div className = "EachGrid right">  {/* Each Services*/} 
            <img  src = {drum} className = "image" alt = "Drum"></img>
            <div ClassName = "description">
            <h3>Drum Servicing</h3>
            <ul>
              <li>Drums tuning</li>
              <li>Replacing the drum heads/skin</li>
              <li>Repairing/fixing the broken drum hardware</li>
            </ul>

            </div>
         
        </div>

      

        <div id = "guitarservicing" className = "EachGrid left">  {/* Each Services*/} 
            <div ClassName = "description">
            <h3>Guitar Servicing</h3>
            <ul >
              <li>
              Guitar restringing/Guitar strings changing
              </li>
              <li>Guitar tuninig keys fixing</li>
              <li>Guitar frett board straightening</li>
              <li>Guitar bridge , nut & saddle fixing</li>
              <li>Guitar frett fixing & cleaning</li>
              <li>Guitar broken necks fixing</li>
              <li>Guitar customization</li>
              <li>Guitar pickup fixing</li>
              <li>Guitar action adjustments</li>
            </ul>
            
            </div>
            <img src = {guitar} className = "image" alt = "guitar"></img>
            
            
        </div>
        

        <div className = "EachGrid right" >  {/* Each Services*/} 
            <img src = {harmonium} className = "image" alt = "harmonium"></img>
            <div ClassName = "description">
            <h3>Harmonium Servicing</h3>
            <ul>
              <li>
              Harmonium repair
              </li>
              <li>
              Harmonium breakage restoration
              </li>
              <li>Harmonium tuning</li>
              <li>Harmonium bellows rebuild</li>
              <li>Harmonium air fixing and keys fixing</li>
              <li>Harmonium coupler repair</li>
            </ul>
            
            </div>
            
        </div>
       

        <div className = "EachGrid left">  {/* Each Services*/}
        <div ClassName = "description">
        <h3>Tabla Servicing</h3>
        <ul>
          <li>
          Tabla tuning
          </li>
          <li>Tabla karane fixing</li>
          <li>Tabla puri/cap fitting</li>
          <li>Dagga repair</li>
          <li>Tabla repair</li>
          <li>Bar replacement/fitting</li>
        </ul>
            
            </div>
            <img src = {tabla} className = "image" alt = "tabla"></img> 
            
            
            
        </div>
        

        <div className = "EachGrid right">  {/* Each Services*/} 
            <img src = {violin} className = "image" alt = "violinkeyboard"></img>
            <div ClassName = "description">
            <h3>Violin Servicing</h3>
            <ul>
              <li>
              Violin restringing/Violin Strings Changing
              </li>
              <li>Violin bridge fixing/adjustment</li>
              <li>Violin pegs/keys fixing</li>
              <li>Violin tuning</li>
              <li>Based in Bangalore.</li>
            </ul>
            </div>
            
        </div>

   

        <div className = "EachGrid left">  {/* Each Services*/} 
        <div ClassName = "description">
        <h3>Veena Servicing</h3>
            <ul>
                <li>
                Veena restringing
                </li>
                <li>
                Veena tuning
                </li>
                <li>
                Veena bride fixing
                </li>
                <li>Veena breakage restoration</li>
                <li>Veena polishing</li>
                <li>Veena repair</li>
            </ul>
            </div>
            <img src = {veena} className = "image" alt = "veena"></img>
            
            
        </div>
        

        <div className = "EachGrid right">  {/* Each Services*/} 
            <img src = {keyboard} className = "image" alt = "keyboard"></img>
            <div ClassName = "description">
            <h3>Keyboard Servicing</h3>
            <ul>
              <li>
              Replacing keyboard keys
              </li>
              <li>Missing/damaged components replacement</li>
              <li>Power issues</li>
              <li>Motherboard issues</li>
            </ul>
            </div>
            
        </div>
        <div  id = "last" className = "left"></div>

      </div>

    </ServiceWrapper>
      
    );

    }
  }
export default Services;

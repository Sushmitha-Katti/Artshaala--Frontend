
import sc from "styled-components";
import img from "./images/gutar.png";


const Body = sc.body`
 box-sizing: border-box;
 font-family: Arial, Helvetica, sans-serif;
 background: #FCFBFC;
 line-height: 1.4;
header {
display: grid;
grid-template-columns: 1fr;
grid-auto-flow: column;
justify-items: center;
padding-top: 20px;
   }
}
.main-section {
border-top: solid;
border-bottom: solid;
padding: 5rem;
display: grid;
grid-template-columns: 1fr 1fr;
grid-auto-flow: column;
grid-gap: 30px;
justify-items: end;
grid-template-areas: 'displaycard formcard';
    }
.SectionA{
grid-area: displaycard;
background: url(${img});
background-size: cover;
background-position: center;
color: white;
box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
}
h1 {
font-family: 'Segoe UI', Tahoma,  Verdana, sans-serif;
font-size: 5rem;
padding:1rem;
}
.main-text {
padding:1rem;
font-family: 'Segoe UI', Tahoma,  Verdana, sans-serif;
font-size: 1.35rem;
}
.main {
grid-area:formcard;
padding:150px;
box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
background: #F7BB2F;
}
h3 {
    padding-left: 5rem;
}
h3 {
    padding-left: 5rem;
}
input {
height:40px;
width:300px;
font-size:14pt;
border-radius: 3px;
border: 2px solid  #333;
}
.form-btn {
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
}    
.footer-grid{
display:grid;
grid-template-columns:1fr;
grid-area:footer;
}
@media (max-width: 1024px){
    .main-section {
        border-top: solid;
        border-bottom: solid;
        padding-left: 0.5rem;
        padding-right:0rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-flow: column;
        grid-gap: 30px;
        justify-items: center;
        grid-template-areas: 'displaycard formcard';
            }
            h1 {
                font-family: 'Segoe UI', Tahoma,  Verdana, sans-serif;
                font-size: 3rem;
                padding:0.8rem;
                }
                
                .main-text {
                padding:0.8rem;
                font-family: 'Segoe UI', Tahoma,  Verdana, sans-serif;
                font-size: 1rem;
                }
                
                .main {
                grid-area:formcard;
                box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
                background: #F7BB2F;
                }
                
                h3 {
                    padding-left: 3rem;
                    
                }
                
                input {
                height:20px;
                width:150px;
                font-size:10pt;
                border-radius: 3px;
                border: 2px solid  #333;
                }
                
                .form-btn {
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
                }    
                .footer-grid{
                display:grid;
                grid-template-columns:1fr;
                grid-area:footer;
                }
                
}
@media (max-width: 640px){
    .main-section {
        border-top: solid;
        border-bottom: solid;
        padding-left: 0.5rem;
        padding-right:0rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-flow: column;
        grid-gap: 30px;
        justify-items: center;
        grid-template-areas: 'displaycard'
                             'formcard';
            }
            h1 {
                font-family: 'Segoe UI', Tahoma,  Verdana, sans-serif;
                font-size: 2rem;
                padding:0.8rem;
                }
                
                .main-text {
                padding:0.8rem;
                font-family: 'Segoe UI', Tahoma,  Verdana, sans-serif;
                font-size: 0.8rem;
                }
                
                .main {
                grid-area:formcard;
                padding-top:50px;
                padding-bottom:50px;
                padding-left:120px;
                padding-right:120px;
                box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
                background: #F7BB2F;
                }
                
                h3 {
                    padding-left: 1.8rem;
                    font-size:18px;
                    
                }
                
                input {
                height:30px;
                width:180px;
                font-size:10pt;
                border-radius: 3px;
                border: 2px solid  #333;
                }
                
                .form-btn {
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
                }    
                .footer-grid{
                display:grid;
                grid-template-columns:1fr;
                grid-area:footer;
                }
                
}           
@media (max-width: 480px){
    .main-section {
        border-top: solid;
        border-bottom: solid;
        padding-left: 0.5rem;
        padding-right:0rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-flow: column;
        grid-gap: 30px;
        justify-items: center;
        grid-template-areas: 'displaycard'
                             'formcard';
            }
            h1 {
                font-family: 'Segoe UI', Tahoma,  Verdana, sans-serif;
                font-size: 2rem;
                padding:0.8rem;
                }
                
                .main-text {
                padding:0.8rem;
                font-family: 'Segoe UI', Tahoma,  Verdana, sans-serif;
                font-size: 0.8rem;
                }
                
                .main {
                grid-area:formcard;
                padding-top:75px;
                padding-bottom:75px;
                padding-left:75px;
                padding-right:75px;
                box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
                background: #F7BB2F;
                }
                
                h3 {
                    padding-left: 1.8rem;
                    font-size:18px;
                    
                }
                
                input {
                height:30px;
                width:180px;
                font-size:10pt;
                border-radius: 3px;
                border: 2px solid  #333;
                }
                
                .form-btn {
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
                }    
                .footer-grid{
                display:grid;
                grid-template-columns:1fr;
                grid-area:footer;
                }
                
}
@media (max-width: 320px){
    .main-section {
        border-top: solid;
        border-bottom: solid;
        padding-left: 0.5rem;
        padding-right:0rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-flow: column;
        grid-gap: 30px;
        justify-items: center;
        grid-template-areas: 'displaycard'
                             'formcard';
            }
            h1 {
                font-family: 'Segoe UI', Tahoma,  Verdana, sans-serif;
                font-size: 2rem;
                padding:0.8rem;
                }
                
                .main-text {
                padding:0.8rem;
                font-family: 'Segoe UI', Tahoma,  Verdana, sans-serif;
                font-size: 0.8rem;
                }
                
                .main {
                grid-area:formcard;
                padding-top:50px;
                padding-bottom:50px;
                padding-left:50px;
                padding-right:50px;
                box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
                background: #F7BB2F;
                }
                
                h3 {
                    padding-left: 1.8rem;
                    font-size:18px;
                    
                }
                
                input {
                height:25px;
                width:180px;
                font-size:10pt;
                border-radius: 3px;
                border: 2px solid  #333;
                }
                
                .form-btn {
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
                }    
                .footer-grid{
                display:grid;
                grid-template-columns:1fr;
                grid-area:footer;
                }
                
}

 `;

export default Body;
 


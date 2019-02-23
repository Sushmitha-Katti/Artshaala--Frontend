
import sc from "styled-components";
import img from './images/gutar.png';

const Body = sc.body`
 box-sizing: border-box;
 font-family: Arial, Helvetica, sans-serif;
 background: #FCFBFC;
 margin: 0px 20px;
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
justify-items: center;
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
padding-left: 1.8rem;
padding-top: 1.5rem;
}

.main-text {
padding-left: 1.8rem;
padding-top: 1.5rem;
font-family: 'Segoe UI', Tahoma,  Verdana, sans-serif;
font-size: 1.35rem;
}

.main {
grid-area:formcard;
padding:100px;
box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
background: #F7BB2F;
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

@media (max-width: 640px){
    .main-section {
        border-top: solid;
        border-bottom: solid;
        padding-left: 0rem;
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
                padding-left: 1.8rem;
                padding-top: 1.5rem;
                }
                
                .main-text {
                padding-left: 1.8rem;
                padding-top: 1.5rem;
                font-family: 'Segoe UI', Tahoma,  Verdana, sans-serif;
                font-size: 0.8rem;
                }
                
                .main {
                grid-area:formcard;
                padding:100px;
                box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
                background: #F7BB2F;
                }
                
                h3 {
                    padding-left: 3rem;
                }
                
                input {
                height:20px;
                width:150px;
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
                
            

}


 `;

export default Body;
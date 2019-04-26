import sc from "styled-components";
import img from "./images/gutar.png";




const RentalWrapper = sc.div`
    margin:2rem 3rem;
    display:grid;
    grid-template-columns: 1fr 1fr; 
    grid-gap: 30px;
    place-items:center center;
    
    
    
    
    .aboutRental{
      
        background: linear-gradient(rgba(255,255,255,.1), rgba(255,255,255,.1)), url(${img});
    
        background-size: cover;
    
        background-position: center;
         color: white;
        width:100%;
        height:600px;
        display:grid;
        grid-template-columns: 1fr ; 
    
        
    }
    .renatlform{
        background:#f7bb2f;
        width:100%;
        height:600px;
        display:grid;
        grid-template-columns: 1fr ; 
    
     .formwrapper{
        h1{font-size:3rem;
            text-align:center;}
        margin:3rem;
        input[type=text], textarea, input[type = email] {
            width: 100%;
            padding: 12px 20px;
            margin: 8px 0;
            box-sizing: border-box;
            border:none;
            border-radius: 2%;
          }
          input[type=submit] {
           
            padding: 15px 35px;
            margin: 8px 0;
            box-sizing: border-box;
            border:1px #3c3c3c;
            border-radius: 5%;
            background:#3c3c3c;
            color:white;
            cursor:pointer;

          }
     }
        

    }
    .aboutwrapper{
        h1{text-align:center;
        font-size:3rem;}
        margin:3rem;
        .paragraph{
            margin:1rem;
            font-size:1.4rem;
        }
    }
    @media only screen and (max-width: 900px)
    {
        grid-template-columns: 1fr ; 
        .aboutRental, .renatlform{
            height: 400px;
           
        }
        .aboutwrapper {
            h1{font-size:2rem;}
            margin:2rem;
                    
                
            .paragraph{
                margin:0.3rem;
                font-size:1rem;
            }
        }
        .renatlform{
        .formwrapper{
            h1{font-size:2rem;
                text-align:center;}
            margin:2rem;
            input[type=text], textarea {
                width: 100%;
                padding: 8px 8px;
                margin: 6px 0;
                box-sizing: border-box;
                border:none;
                border-radius: 2%;
              }
              input[type=submit] {
               
                padding: 10px 20px;
                margin: 6px 0;
                box-sizing: border-box;
                border:1px #3c3c3c;
                border-radius: 5%;
                background:#3c3c3c;
                color:white;
    
              }
            
         }
        }
        

        @media only screen and (max-width: 480px)
    {
        grid-template-columns: 1fr ; 
        .aboutRental, .renatlform{
            height: 400px;
           
        }
        .aboutwrapper {
            h1{font-size:1.5rem;}
            margin:1rem;
                    
                
            .paragraph{
                margin:0.3rem;
                font-size:0.8rem;
            }
        }
        .renatlform{
        .formwrapper{
            h1{font-size:1.5rem;
                text-align:center;}
            margin:1rem;
            input[type=text], textarea {
                width: 100%;
                padding: 8px 8px;
                margin: 6px 0;
                box-sizing: border-box;
                border:none;
                border-radius: 2%;
              }
              input[type=submit] {
               
                padding: 10px 20px;
                margin: 6px 0;
                box-sizing: border-box;
                border:1px #3c3c3c;
                border-radius: 5%;
                background:#3c3c3c;
                color:white;
    
              }
            
         }
        }
        

        
    }

`;

// const Body = sc.body`
//  box-sizing: border-box;
 
//  background: #FCFBFC;
//  line-height: 1.4;

// .main-section {

// padding: 5rem;
// display: grid;
// grid-template-columns: 1fr 1fr;
// grid-auto-flow: column;
// grid-gap: 30px;
// justify-items: end;
// grid-template-areas: 'displaycard formcard';
//     }
// .SectionA{
// grid-area: displaycard;
// background: url(${img});
// background-size: cover;
// background-position: center;
// color: white;
// width:100%;
// box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
// }
// h1 {

// font-size: 5rem;
// padding:1rem;
// }
// .main-text {
// padding:1rem;

// font-size: 1.35rem;
// }



// .main {
// grid-area:formcard;
// padding:150px;
// width:100%;
// box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
// background: #F7BB2F;
// }
// h3 {
//     padding-left: 5rem;
// }
// h3 {
//     padding-left: 5rem;
// }
// input {
// height:40px;
// width:300px;
// font-size:14pt;
// border-radius: 3px;
// border: 2px solid  #333;
// }
// .form-btn {
// background: transparent 70%;
// border-radius: 3px;
// border: 2px solid  #333;
// color: #333;
// background-color: white;
// margin: 0 1em;
// padding: 0.25em 1em;
// width: 100px;
// height: 50px; 
// align-self: stretch;
// }    
// .footer-grid{
// display:grid;
// grid-template-columns:1fr;
// grid-area:footer;
// }
// @media (max-width: 1024px){
//     .main-section {
//         border-top: solid;
//         border-bottom: solid;
//         padding-left: 0.5rem;
//         padding-right:0rem;
//         display: grid;
//         grid-template-columns: 1fr 1fr;
//         grid-auto-flow: column;
//         grid-gap: 30px;
//         justify-items: center;
//         grid-template-areas: 'displaycard formcard';
//             }
//             h1 {
//                 font-family: 'Segoe UI', Tahoma,  Verdana, sans-serif;
//                 font-size: 3rem;
//                 padding:0.8rem;
//                 }
                
//                 .main-text {
//                 padding:0.8rem;
//                 font-family: 'Segoe UI', Tahoma,  Verdana, sans-serif;
//                 font-size: 1rem;
//                 }
                
//                 .main {
//                 grid-area:formcard;
//                 box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
//                 background: #F7BB2F;
//                 }
                
//                 h3 {
//                     padding-left: 3rem;
                    
//                 }
                
//                 input {
//                 height:20px;
//                 width:150px;
//                 font-size:10pt;
//                 border-radius: 3px;
//                 border: 2px solid  #333;
//                 }
                
//                 .form-btn {
//                 background: transparent 70%;
//                 border-radius: 3px;
//                 border: 2px solid  #333;
//                 color: #333;
//                 background-color: white;
//                 margin: 0 1em;
//                 padding: 0.25em 1em;
//                 width: 100px;
//                 height: 50px; 
//                 align-self: stretch;
//                 }    
//                 .footer-grid{
//                 display:grid;
//                 grid-template-columns:1fr;
//                 grid-area:footer;
//                 }
                
// }
// @media (max-width: 640px){
//     .main-section {
//         border-top: solid;
//         border-bottom: solid;
//         padding-left: 0.5rem;
//         padding-right:0rem;
//         display: grid;
//         grid-template-columns: 1fr 1fr;
//         grid-auto-flow: column;
//         grid-gap: 30px;
//         justify-items: center;
//         grid-template-areas: 'displaycard'
//                              'formcard';
//             }
//             h1 {
//                 font-family: 'Segoe UI', Tahoma,  Verdana, sans-serif;
//                 font-size: 2rem;
//                 padding:0.8rem;
//                 }
                
//                 .main-text {
//                 padding:0.8rem;
//                 font-family: 'Segoe UI', Tahoma,  Verdana, sans-serif;
//                 font-size: 0.8rem;
//                 }
                
//                 .main {
//                 grid-area:formcard;
//                 padding-top:50px;
//                 padding-bottom:50px;
//                 padding-left:120px;
//                 padding-right:120px;
//                 box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
//                 background: #F7BB2F;
//                 }
                
//                 h3 {
//                     padding-left: 1.8rem;
//                     font-size:18px;
                    
//                 }
                
//                 input {
//                 height:30px;
//                 width:180px;
//                 font-size:10pt;
//                 border-radius: 3px;
//                 border: 2px solid  #333;
//                 }
                
//                 .form-btn {
//                 background: transparent 70%;
//                 border-radius: 3px;
//                 border: 2px solid  #333;
//                 color: #333;
//                 background-color: white;
//                 margin: 0 1em;
//                 padding: 0.25em 1em;
//                 width: 100px;
//                 height: 50px; 
//                 align-self: stretch;
//                 }    
//                 .footer-grid{
//                 display:grid;
//                 grid-template-columns:1fr;
//                 grid-area:footer;
//                 }
                
// }           
// @media (max-width: 480px){
//     .main-section {
//         border-top: solid;
//         border-bottom: solid;
//         padding-left: 0.5rem;
//         padding-right:0rem;
//         display: grid;
//         grid-template-columns: 1fr 1fr;
//         grid-auto-flow: column;
//         grid-gap: 30px;
//         justify-items: center;
//         grid-template-areas: 'displaycard'
//                              'formcard';
//             }
//             h1 {
//                 font-family: 'Segoe UI', Tahoma,  Verdana, sans-serif;
//                 font-size: 2rem;
//                 padding:0.8rem;
//                 }
                
//                 .main-text {
//                 padding:0.8rem;
//                 font-family: 'Segoe UI', Tahoma,  Verdana, sans-serif;
//                 font-size: 0.8rem;
//                 }
                
//                 .main {
//                 grid-area:formcard;
//                 padding-top:75px;
//                 padding-bottom:75px;
//                 padding-left:75px;
//                 padding-right:75px;
//                 box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
//                 background: #F7BB2F;
//                 }
                
//                 h3 {
//                     padding-left: 1.8rem;
//                     font-size:18px;
                    
//                 }
                
//                 input {
//                 height:30px;
//                 width:180px;
//                 font-size:10pt;
//                 border-radius: 3px;
//                 border: 2px solid  #333;
//                 }
                
//                 .form-btn {
//                 background: transparent 70%;
//                 border-radius: 3px;
//                 border: 2px solid  #333;
//                 color: #333;
//                 background-color: white;
//                 margin: 0 1em;
//                 padding: 0.25em 1em;
//                 width: 100px;
//                 height: 50px; 
//                 align-self: stretch;
//                 }    
//                 .footer-grid{
//                 display:grid;
//                 grid-template-columns:1fr;
//                 grid-area:footer;
//                 }
                
// }
// @media (max-width: 320px){
//     .main-section {
//         border-top: solid;
//         border-bottom: solid;
//         padding-left: 0.5rem;
//         padding-right:0rem;
//         display: grid;
//         grid-template-columns: 1fr 1fr;
//         grid-auto-flow: column;
//         grid-gap: 30px;
//         justify-items: center;
//         grid-template-areas: 'displaycard'
//                              'formcard';
//             }
//             h1 {
//                 font-family: 'Segoe UI', Tahoma,  Verdana, sans-serif;
//                 font-size: 2rem;
//                 padding:0.8rem;
//                 }
                
//                 .main-text {
//                 padding:0.8rem;
//                 font-family: 'Segoe UI', Tahoma,  Verdana, sans-serif;
//                 font-size: 0.8rem;
//                 }
                
//                 .main {
//                 grid-area:formcard;
//                 padding-top:50px;
//                 padding-bottom:50px;
//                 padding-left:50px;
//                 padding-right:50px;
//                 box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
//                 background: #F7BB2F;
//                 }
                
//                 h3 {
//                     padding-left: 1.8rem;
//                     font-size:18px;
                    
//                 }
                
//                 input {
//                 height:25px;
//                 width:180px;
//                 font-size:10pt;
//                 border-radius: 3px;
//                 border: 2px solid  #333;
//                 }
                
//                 .form-btn {
//                 background: transparent 70%;
//                 border-radius: 3px;
//                 border: 2px solid  #333;
//                 color: #333;
//                 background-color: white;
//                 margin: 0 1em;
//                 padding: 0.25em 1em;
//                 width: 100px;
//                 height: 50px; 
//                 align-self: stretch;
//                 }    
//                 .footer-grid{
//                 display:grid;
//                 grid-template-columns:1fr;
//                 grid-area:footer;
//                 }
                
// }

//  `;

export default RentalWrapper;

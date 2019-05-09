import styled from 'styled-components';
const RentalWrapper = styled.div`
    margin:1rem 6rem;
    display:grid;
    grid-template-columns: 1fr 1fr; 
    grid-gap: 30px;
    
    
    
    
    
    
        
    }
    .renatlform{
      
        width:100%;
        
        display:grid;
        grid-template-columns: 1fr ; 
    
     .formwrapper{
      .previousaddress{
              line-height:1.3rem;
              button{
                background: orange;
                border: 1px solid  #f7bb2f;
                padding: 7px 15px;
                border-radius:5%;
                margin-top: 15px;
                color: white;
              }
            }
            
        h1{font-size:3rem;
            text-align:center;}
        margin:3rem;
        b{
          font-size:0.8rem;
          color:black;
        }
        input[type=text], textarea, input[type = email] {
            width: 100%;
            padding: 12px 20px;
            margin: 8px 0;
            box-sizing: border-box;
            border:none;
            border-radius: 2%;
            border: 1px solid grey;
          }
          input[type=submit] {
           
            padding: 15px 35px;
            margin: 8px 0;
            box-sizing: border-box;
            border:1px #3c3c3c;
            border-radius: 5%;
            background:#f7bb2f;
            color:white;
           
            cursor:pointer;

          }
     }
        

    }
    .paymentmode{
        h1{text-align:center;
        font-size:2.5rem;}
        margin:3rem;
        position:relative;

        .overlay{
            color: grey;
            opacity: 0.5;
            position :absolute;
            width:100%;
            top: 100%;
            z-index: 100;

        }
        
        .inputs{
            margin:1rem ;
            
            border: 1px solid #F7bb2f;
            padding:0.8rem 0.5rem;
            border-radius: 5%;
            position: relative;
          
            input{
              font-size:2rem;
              height:20px;
              width: 20px;
              
          
            }
            
         label{
          margin-left:1rem;
         }
              
              
              
            }
            .btn{
              background: #f7bb2f;
              border: 1px solid #f7bb2f;
              padding: 2px 5px;
              border-radius: 5%;
              width: 40%;
              color: white;
              margin: 0.5rem 1rem;
              padding: 0.8rem 0.7rem;

            }
            .btn:hover{
              background:orange;
            }
        }
        .inputs:hover{
          
          cursor: pointer;
        }
    }
    @media only screen and (max-width: 900px)
    {
        grid-template-columns: 1fr ; 
        
        .paymentmode {
            h1{font-size:2rem;}
            margin:2rem;
                    
            .inputs{
              margin:0.3rem;
                font-size:0.9rem;
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
                border: 1px solid grey;
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
      
        .paymentmode{
            h1{font-size:1.5rem;}
            margin:1rem;
                    
                
            .inputs{
                margin:0.3rem;
                font-size:0.8rem;
            }
           
        }
        .renatlform{
        .formwrapper{
            h3{font-size:1.5rem;
                text-align:center;}
            margin:1rem;
            input[type=text], textarea {
                width: 100%;
                padding: 8px 8px;
                margin: 6px 0;
                box-sizing: border-box;
                border:none;
                border-radius: 2%;
                border: 1px solid grey;
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
export default RentalWrapper;
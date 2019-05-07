import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from '../../test/User';
import styled from 'styled-components';
import Head from 'next/head';
import User from "../../test/User";


const RentalWrapper = styled.div`
    margin:1rem 3rem;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr; 
    grid-gap: 30px;
    
    
    
    
    
    
        
    }
    .renatlform{
      
        width:100%;
        
        display:grid;
        grid-template-columns: 1fr ; 
    
     .formwrapper{
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
        .inputs{
            margin:1rem;
            border: 1px solid #F7bb2f;
            padding:0.8rem 0.7rem;
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
              width: 90%;
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


const CREATE_ADDRESS_MUTATION = gql`
  mutation CREATE_ADDRESS_MUTATION(
    $mobile: String!
    $pincode: String!
  
  
    $addressline1:String!
    $addressline2:String
    $landmark:String
    $city:String!
    $state:String!
   
    
    

  ) {
    createaAddress(
      mobile: $mobile
      pincode: $pincode
      addressline1: $addressline1
      addressline2: $addressline2
      landmark: $landmark
      city: $city
      state: $state
      
     
    ) {
      id
    }
  }
`;

const CREATE_ORDER_MUTATION = gql`
  mutation createOrder( $mode: String!) {
    createOrder( mode: $mode) {
      id
      charge
      total
      items {
        id
        title
      }
    }
  }
`;

function totalItems(cart) {
  return cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0);
}



class AddAddress extends React.Component {
  state = {
    mobile: "",
    pincode: "",
    addressline1: "",
    addressline2:"",
    landmark:"",
    city:"",
    state:"",
    mode: ""
   
  };

  handlepayment = async  e => {

  }
  
  setModeon = e => {
    
    
    this.setState({ mode: "ONLINE" });
  };
  setModeof = e => {
    
    
    this.setState({ mode: "OFFLINE" });
  };


  saveToState = e => {
    const { name, type, value } = e.target;
    const val = value;
    this.setState({ [name]: val });
  };
    render() {
      const { id } = this.props;
      return (
      <User>
         {({ data :{me} }) => {
          if(!me) return null; //Todo : Redirect to signin page
       
      
      return (
        <Mutation
          mutation={CREATE_ADDRESS_MUTATION}
          variables={
            this.state
          }
          refetchQueries={[{ query: CURRENT_USER_QUERY }]}
        >
       
       {(addadress, { error, loading }) => ( 
          <RentalWrapper>
          <div className = "renatlform"> 
          <div className = "formwrapper">
         <form
         method="post"
         onSubmit={async e => {
           e.preventDefault();
           const res = await addadress();
           
           this.setState({  mobile: "",pincode:"", addressline1:"", addressline2:"",landmark: "",city: "", state: ""});
           console.log(res)
           alert("Successfully updated")
         
           
          
         }}
        >
          <div><h1>Address</h1></div>
         <b>Mobile</b>
          <input type =  "text"    name= "mobile" value={this.state.moblie}
        onChange={this.saveToState}
        required></input>
        <b>Pincode</b>
        <input type =  "text"    name= "pincode" value={this.state.pincode}
        onChange={this.saveToState}
        required></input>
        <b>Flat, House no., Building, Company, Apartment</b> 
          <input type =  "text"  placeholder="" name = "addressline1" value={this.state.addressline1}
        onChange={this.saveToState}
        required ></input>
        <b>Area, Colony, Street, Sector, Village</b>
          <input type =  "text"   name = "addressline2" value={this.state.addressline2}
        onChange={this.saveToState}
        required ></input>
        <b>landmark</b>
          <input type =  "text"  placeholder="eg- KIMS Hospital" name = "landmark" value={this.state.landmark}
        onChange={this.saveToState}
        required></input>
        <b>city/Town</b>
          <input type =  "text"  name = "city" value={this.state.city}
        onChange={this.saveToState}
        required></input>
        <b>State</b>
          <input type =  "text"  name = "state" value={this.state.state}
        onChange={this.saveToState}
        required></input>
         
        <input type="submit" value = "SUBMIT "/>

        </form>
         </div>
         
         </div> 
         <div className = "paymentmode">
         /* MUTATION FOR CREATE ORDER  */
         <Mutation
              mutation={CREATE_ORDER_MUTATION}
              variables={this.state}
              refetchQueries={[{ query: CURRENT_USER_QUERY }]}
        >
            {createOrder => (
         <form 
         method="post"
            onSubmit={async e => {
              //stop submitting form
              e.preventDefault();
              //call the mutation
              console.log(this.state.mode);
              const res = await createOrder();
              //change the mutation to the single item page
              
              alert("Order is placed successfully")
            }}
        >
        
         <h1>Payment Mode</h1>
         <div className = "inputs"><input type="radio" id="s-option" name="selector" onChange = {this.setModeon}/ > <label for="f-option">Pay Online</label></div>
         <div className = "inputs"><input type="radio" id="s-option" name="selector" onChange = {this.setModeof}/> <label for="f-option">Pay Offline</label></div>
         {this.state.mode?  <div ><button type = "submit" className = "btn">CONFIRM</button></div>: null}
          
         
         
         
        
         </form>
         )}
            </Mutation>
         </div>
         </RentalWrapper>
        )}
        
        </Mutation>
        
      );
    }}
    </User>
    );
    }
  }
  export default AddAddress;
  export { CREATE_ADDRESS_MUTATION };
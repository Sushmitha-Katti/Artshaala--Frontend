import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from '../../test/User';
import styled from 'styled-components';
import Head from 'next/head';
import User from "../../test/User";
import RentalWrapper from './addressStyle';

//----------------------------create Address Mutation-----------------------------------------------

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
//---------------------------------------------Create Order Mutation-------------------------------------------------
const CREATE_ORDER_MUTATION = gql`
  mutation createOrder( $paymentId: String $mode: String!) {
    createOrder(  paymentId: $paymentId mode: $mode) {
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


//-------------------------------------------------Address Class---------------------------------------------------
class AddAddress extends React.Component {
  state = {
    mobile: "",
    pincode: "",
    addressline1: "",
    addressline2: "",
    landmark: "",
    city: "",
    state: "",
    mode: "",
    amount: 0,
    pId:"",
    display: false

  };

                    //------------------handle payment method-----------------------------------

  handlepayment = async (e, me, createOrder, mode) => {
    e.preventDefault();
    const totalamount = await me.cart.reduce((tally, cartitem) =>

      tally + cartitem.quantity * cartitem.item.price, 0);

    const options = {
      key: 'rzp_test_YAQuOxH0F7Ph5f',
      amount: totalamount * 100,
      name: me.name,
      description: "Payment",

      async handler(response ) {
        const paymentId = await response.razorpay_payment_id;
        console.log(paymentId);
        
        const order = await createOrder({variables:{
          paymentId,
          mode
        }});
        alert("paid successfully");
        console.log(order);

      },
      prefill: {
        name: me.name,
        email: me.email
      },
      notes: {
        address: "address"
      },
      theme: {
        color: "#f9bd21"
      }
    };
    const rzp1 = new window.Razorpay(options);
    await rzp1.open();
    console.log("done")
  };
 //----------------------------for displaying the payment method--------------------
  setDisplayState = e =>{ 
    this.setState({display: "true"});
  };

  //-----------------------------for setting the online mode-----------------------------------
  setModeon = e => {

    this.setState({ mode: "ONLINE" });
  };
  //----------------------------for setting offline mode---------------------------------------
  setModeof = async e => {
    await this.setState({ mode: "OFFLINE" });
    console.log(this.state.mode);
  };

  //----------------------------for changing the state values of address field------------------
  saveToState = e => {
    const { name, type, value } = e.target;
    const val = value;
    this.setState({ [name]: val });
  };

  //--------------------------------render method------------------------------------------------
  render() {
    const { id } = this.props;
    return (
      //-----------------------------user query------------------------------------------
      <User>
        {( {data: me},error, loading) => {
          if (!me) return null; //Todo : Redirect to signin page
         
          console.log("calling Me ")
          console.log(me);


          return (
    //-----------------------------------create order mutation--------------------------
            <Mutation
              mutation={CREATE_ADDRESS_MUTATION}
              variables={
                this.state
              }
              refetchQueries={[{ query: CURRENT_USER_QUERY }]}
            >

              {(addadress, { error, loading }) => (
                <RentalWrapper>
                  <div className="renatlform">
                  
                  
                
                    <div className="formwrapper">
                    {/*---------------- If there is a  previous address then it will be displayed here------------ */}
                    {me.me.address?
                    <div className = "previousaddress">
                    <div><b>{me.me.name}</b></div>
                    <div>{me.me.address.addressline1}</div>
                    <div>{me.me.address.addressline2}</div>
                    
                    <div>{me.me.address.mobile}</div>
                    <div>{me.me.address.city}, {me.me.address.state},{me.me.address.pincode}</div>
                    <button onClick = {this.setDisplayState }>Deliver to this address</button>  </div>:null}
                  
                      <form
                        method="post"
                        onSubmit={async e => {
                          e.preventDefault();
                          const res = await addadress();

                          this.setState({ mobile: "", pincode: "", addressline1: "", addressline2: "", landmark: "", city: "", state: "" ,display: "true"});
                          console.log(res)
                          alert("Address is Successfully updated ")
                          


                        }}
                      >
                        
                        {/*--------------------Adding new address------------------------  */}
                        <div><h3> Add New Address</h3></div>
                        <b>Mobile</b>
                        <input type="text" name="mobile" value={this.state.moblie}
                          onChange={this.saveToState}
                          required></input>
                        <b>Pincode</b>
                        <input type="text" name="pincode" value={this.state.pincode}
                          onChange={this.saveToState}
                          required></input>
                        <b>Flat, House no., Building, Company, Apartment</b>
                        <input type="text" placeholder="" name="addressline1" value={this.state.addressline1}
                          onChange={this.saveToState}
                          required ></input>
                        <b>Area, Colony, Street, Sector, Village</b>
                        <input type="text" name="addressline2" value={this.state.addressline2}
                          onChange={this.saveToState}
                          required ></input>
                        <b>landmark</b>
                        <input type="text" placeholder="eg- KIMS Hospital" name="landmark" value={this.state.landmark}
                          onChange={this.saveToState}
                          required></input>
                        <b>city/Town</b>
                        <input type="text" name="city" value={this.state.city}
                          onChange={this.saveToState}
                          required></input>
                        <b>State</b>
                        <input type="text" name="state" value={this.state.state}
                          onChange={this.saveToState}
                          required></input>

                        <input type="submit" value="SUBMIT " />

                      </form>

                    </div>

                  </div>
                  {/* -------------------Payment Method------------------------- */}
                  {this.state.display? 
                  <div className="paymentmode">
                  <div className = "overlay"></div>
                    {/* -------------------Create Order Mutation------------------- */}
                    <Mutation
                      mutation={CREATE_ORDER_MUTATION}
                      
                      refetchQueries={[{ query: CURRENT_USER_QUERY }]}
                    >
                      {createOrder => (
                        <form
                          method="post"
                          onSubmit={async e => {
                            //stop submitting form
                            e.preventDefault();
                            //call the mutation
                            if (this.state.mode == "ONLINE") {
                              console.log("IS this working")
                              console.log(me)
                              await this.handlepayment(e, me.me, createOrder, this.state.mode);
                              console.log("returned")
                             
                            }
                            else{
                            const res = await createOrder({variables:{
                              paymentId: "offline mode",
                              mode: this.state.mode
                            }});
                           

                            alert("Order is placed successfully")
                            }
                          }}
                        >
                          
                          <h3>Payment Mode</h3>
                          <div className="inputs"><input type="radio" id="s-option" name="selector" onChange={this.setModeon} /> <label for="f-option">Pay Online</label></div>
                          <div className="inputs"><input type="radio" id="s-option" name="selector" onChange={this.setModeof} /> <label for="f-option">Pay Offline</label></div>
                          {this.state.mode ? <div  ><button type="submit" className="btn">CONFIRM</button></div> : null}
                        </form>
                      )}
                    </Mutation>
                  </div>:null}
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
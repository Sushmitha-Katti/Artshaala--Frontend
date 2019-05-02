import React, { Component } from "react";
import { Styles, Price, Subtotal } from "./cartStyle";

import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import {CURRENT_USER_QUERY} from "../../test/User";
import Link from "next/link";
import RemoveFromCart from "./removecartitem"


const CART_COUNT_MUTATION = gql`
  mutation CART_COUNT_MUTATION($count: Int!, $id: ID!) {
    updateCart(quantity: $count, id: $id) {
      id
      quantity
    }
  }
`;

class Carts extends Component {
  state = {    
    id: this.props.cartItem.id,
    count: this.props.cartItem.quantity
  };
   autoClick = async (e,itemid) => {
   
    
    await this.setState({count: parseInt(e.target.value), id: itemid})
  
    let  btnclick = document.getElementById(this.props.cartItem.id);

    btnclick.click();
  
};
  render() {
    const item = this.props.cartItem.item;
    const quantity = this.props.cartItem.quantity;
    const loopitem = [1,2,3,4,5,6,7,8,9,10]; 
    return (
      <Mutation
        mutation={CART_COUNT_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
       {(updatecart, { error, loading }) => (    
         
                <Styles>
                  {item? 
                  <div id="mainCart">
                    <div className = "image">
                    <Link href={{pathname:'/product', query:{id:item.id}}}>  
                      <img  src = {item.images[0]} alt = {item.title} />
                    </Link>
                    
                    </div>
                    <div>
                      <p>{this.props.cartItem.item.title}</p>
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span>{item.comment.length} reviews</span>
                      <br />


                      <div className="values">
                        <div>
                          <span style={{ fontSize: 18 + "px" }}>Price:</span>
                          <Price big>{item.price}/-</Price>
                        </div>
                        
                        <div>
                        
                        <form
                           method="post"                          
                           onSubmit={async e => {
                          console.log("submited")
                             e.preventDefault();
                             
                             const res = await updatecart();
                             console.log(res)
                             
                            }}
                        >
                          <span style={{ fontSize: 18 + "px" }}>Quantity:</span>
                          <span>
                         
                          {/* <select  className = "count" onChange= {e =>  this.autoClick(e,this.props.cartItem.id)} >
                          {loopitem.map(i => (<option value={i} selected={quantity == i}>{i}</option>))}
                             
                          </select > */}
                        <button style = {{display :"none"}} id = {this.props.cartItem.id}  type="submit"  value="Submit"></button>
                        
                          </span>
                          <RemoveFromCart id = {this.props.cartItem.id}/>
                          </form>
                         
                        </div>
                      
                      </div>
                      <p
                        style={{
                          fontSize: 18 + "px",
                          marginTop: 20 + "px",
                          marginBottom: 30 + "px"
                        }}
                      >
                        Inclusive of all taxes
                      </p>
                     
                      <span style={{ fontSize: 23 + "px" }}>Subtotal:</span>
                      <Subtotal big>{quantity * item.price}</Subtotal>
                    </div>
                  </div>: <p>This item has been deleted</p>}
                  
                </Styles>
       )}
       </Mutation>
    );
  }
}

export default Carts;
export { CART_COUNT_MUTATION };

import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import {USER_ORDERS_QUERY} from "./orderpage"





const DELETE_ORDER_MUTATION = gql`
  mutation DELETE_ORDER_MUTATION($id: ID!){
    deleteOrder(id: $id){
      id
    }
  }
`;

export default class DeleteOrder extends Component {
 // This gets called as soon as we get a response back from the server after a mutation has been performed
 update = (cache, payload) => {
    // 1. first read the cache
    const data = cache.readQuery({ query: USER_ORDERS_QUERY});
    // 2. remove that order from the orders
  
    const OrderItemId = payload.data.deleteOrder.id;
    
    data.orders = data.orders.filter(order=> order.id !== OrderItemId);
   
    // 3. write it back to the cache
    cache.writeQuery({ query: USER_ORDERS_QUERY, data });
  };
  render() {
    return (
        <Mutation
        mutation={DELETE_ORDER_MUTATION}
        variables={{ id: this.props.id }}
        update={this.update}
        optimisticResponse={{
          __typename: 'Mutation',
          deleteOrder: {
            __typename: 'Order',
            id: this.props.id,
          },
        }}
      >
        {(deleteOrder, { loading, error }) => (
          <button
            disabled={loading}
            onClick={() => {
              deleteOrder().catch(err => alert(err.message));
            }}
            title="Delete Item"
          >
            Cancel Order
          </button>
        )}
      </Mutation>
    )
  }
}

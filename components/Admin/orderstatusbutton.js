import React from 'react';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {PENDING_ORDERS_QUERY} from "./custorders";
import gql from "graphql-tag";


const UPDATE_ORDER_MUTATION = gql`
  mutation UPDATE_ORDER_MUTATION($id: ID!) {
    updateorder(id: $id) {
      id
    }
  }
`;

const BigButton = styled.button`
  font-size: 1rem;
  background: none;
  color:green;
  border: 1px solid green;
  margin:1rem;
  padding: 0.5rem 1rem;
  border-radius:5%;
  
  &:hover {
    color: white;
    background:green;
    cursor: pointer;
  }
`;


class UpdateOrder extends React.Component {
    static propTypes = {
      id: PropTypes.string.isRequired,
    };
    // This gets called as soon as we get a response back from the server after a mutation has been performed
    update = (cache, payload) => {
      // 1. first read the cache
      const data = cache.readQuery({ query: PENDING_ORDERS_QUERY  });
      // 2. remove that contact
      const orderId = payload.data.adminorders.id;
      data.orders = data.orders.filter(order => order.id !== orderId);
      // 3. write it back to the cache
      cache.writeQuery({ query: PENDING_ORDERS_QUERY  , data });
    };
    render() {
      return (
        <Mutation
          mutation={UPDATE_ORDER_MUTATION}
          variables={{ id: this.props.id }}
          update={this.update}
          optimisticResponse={{
            __typename: 'Mutation',
            updateorder: {
              __typename: 'Order',
              id: this.props.id,
            },
          }}
        >
          {(updateorder, { loading, error }) => (
            <BigButton
              disabled={loading}
              onClick={() => {
                updateorder().catch(err => alert(err.message));
              }}
              
            >
              Delivered
            </BigButton>
          )}
        </Mutation>
      );
    }
  }
  
  export default UpdateOrder;
  export {UPDATE_ORDER_MUTATION};
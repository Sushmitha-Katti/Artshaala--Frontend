import React from 'react';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';
import gql from 'graphql-tag';

import PropTypes from 'prop-types';
import {ALL_CONTACTS_QUERY} from "./notification";

const REMOVE_CONTACT_MUTATION = gql`
  mutation REMOVE_CONTACT_MUTATION($id: ID!) {
    updateContact(id: $id) {
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
  padding: 0.5rem 0.7rem;
  border-radius:5%;
  
  &:hover {
    color: white;
    background:green;
    cursor: pointer;
  }
`;


class RemoveContact extends React.Component {
    static propTypes = {
      id: PropTypes.string.isRequired,
    };
    // This gets called as soon as we get a response back from the server after a mutation has been performed
    update = (cache, payload) => {
      // 1. first read the cache
      const data = cache.readQuery({ query: ALL_CONTACTS_QUERY  });
      // 2. remove that contact
      const contactId = payload.data.updateContact.id;
      data.contacts = data.contacts.filter(contact => contact.id !== contactId);
      // 3. write it back to the cache
      cache.writeQuery({ query: ALL_CONTACTS_QUERY  , data });
    };
    render() {
      return (
        <Mutation
          mutation={REMOVE_CONTACT_MUTATION}
          variables={{ id: this.props.id }}
          //update={this.update}
          // optimisticResponse={{
          //   __typename: 'Mutation',
          //   removeContact: {
          //     __typename: 'Contact',
          //     id: this.props.id,
          //   },
          // }}
          refetchQueries = {[{query:ALL_CONTACTS_QUERY}]}
        >
          {(updatecontact, { loading, error }) => (
            <BigButton
              disabled={loading}
              onClick={() => {
                updatecontact().catch(err => alert(err.message));
              }}
              
            >
              Mark as Done
            </BigButton>
          )}
        </Mutation>
      );
    }
  }
  
  export default RemoveContact;
  export {  REMOVE_CONTACT_MUTATION};
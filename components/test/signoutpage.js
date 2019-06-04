import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { CURRENT_USER_QUERY } from "./User";
import styled from "styled-components";
const BUTTON = styled.button`
  :focus{
    outline:none;
  }
  cursor:pointer;
  .signout{
    
  
  @media only screen and (max-width: 780px) {
    font-weight:bold;
    font-size:1rem;
    color: grey;
  }
  }
  .signout{
  @media only screen and (max-width: 420px) {
    font-weight:bold;
    font-size:1rem;
    color: grey;
  }
  :hover{
    color:#f7bb2f;
  }
  }

`;

const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signout {
      message
    }
  }
`;

const SignoutPage = props => (
  <Mutation
    mutation={SIGN_OUT_MUTATION}
    refetchQueries={[{ query: CURRENT_USER_QUERY }]}
  >
    {signout => <BUTTON onClick={signout}><div className = "signout">Sign Out</div></BUTTON>}
  </Mutation>
);
export default SignoutPage;
export { BUTTON};

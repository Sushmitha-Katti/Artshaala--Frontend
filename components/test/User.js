import { Query } from "react-apollo";
import gql from "graphql-tag";
import PropTypes from "prop-types";

const CURRENT_USER_QUERY = gql`
  query {
    me {
      id
      email
      name
      permissions
      orders {
        id
      }
      address{
        id
        mobile
        state
        city
        pincode
        addressline1
        addressline2
        
      }
      cart {
        id
        quantity
        item {
          id
          price
          images
          title
          description
          comment{
            rating
          }
        }
      }
    
      
    }
  }
`;

const User = props => (
  <Query {...props} query={CURRENT_USER_QUERY}>
    {payload => props.children(payload)}
  </Query>
);

User.propTypes = {
  children: PropTypes.func.isRequired
};

export default User;
export { CURRENT_USER_QUERY };

import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

const CURRENT_USER_QUERY = gql`
  query {
    me {
      address{
        id
        state
        city
        pincode
        addressline1
        addressline2
        mobile
        
      }
      name
      id
      email
      permissions
      orders{
        id
      }
      cart {
        id
        quantity
        item {
          id
          price
          image
          title
          description
        }
      }
      
      
    }
  }
`;

const User = props => (
  <Query {...props} query={CURRENT_USER_QUERY}>
  {console.log}
    {payload =>props.children(payload)}
  </Query>
);

User.propTypes = {
  children: PropTypes.func.isRequired,
};

export default User;
export { CURRENT_USER_QUERY };
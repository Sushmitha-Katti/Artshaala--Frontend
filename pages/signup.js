import Head from "../components/head";
import Nav from "../components/Navbar";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    users {
      name
      id
      email
    }
  }
`;

const SignUp = () => (
  <div>
    <Head title="SignUp" />
    <Query query={ALL_ITEMS_QUERY}>
      {({ data }) => {
        let { users } = data;
        console.log(users);

        return (
          <div>
            {users.map(user => (
              <div>
                <h1>{user.name}</h1>
                <p>{user.email}</p>
              </div>
            ))}
          </div>
        );
      }}
    </Query>
  </div>
);

export default SignUp;

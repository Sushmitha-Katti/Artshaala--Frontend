import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Headers from './Headers';

const SINGLE_BLOG_QUERY = gql`
  query SINGLE_BLOG_QUERY($id: ID!) {
    blog(id: $id) {
      title
      image
      headers
      user {
        id
        name
      }
    }
  }
`;

export default class Blog extends Component {
  render() {
    console.log(this.props.id);
    return (
      <Query
        query={SINGLE_BLOG_QUERY}
        variables={{
          id: this.props.id
        }}
      >
        {({ data, loading }) => {
          console.log(data);
          return (
            <>
              <p>{data.blog.user.name}</p>
              <h1>{data.blog.title}</h1>
              <img src={data.blog.image} alt="image"/>
              <Headers headers={data.blog.headers}/>
            </>
          );
        }}
      </Query>
    );
  }
}

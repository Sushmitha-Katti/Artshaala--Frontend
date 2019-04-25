import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Headers from './Headers';
import Nav from '../Navbar';
import Footer from '../Footer';
import { BlogPageStyle } from './styles/BlogStyles';

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
    return (
      <Query
        query={SINGLE_BLOG_QUERY}
        variables={{
          id: this.props.id
        }}
      >
        {({ data, loading }) => {
          if(loading){
            return <p style={{ textAlign: "center" }}>Loading</p>;
          }
          return (
            <BlogPageStyle >
              <Nav />
              <p>{data.blog.user.name}</p>
              <h1>{data.blog.title}</h1>
              <img className="image" src={data.blog.image} alt="image"/>
              <Headers headers={data.blog.headers}/>
              <Footer />
            </BlogPageStyle >
          );
        }}
      </Query>
    );
  }
}

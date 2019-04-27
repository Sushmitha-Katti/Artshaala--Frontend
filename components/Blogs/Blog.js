import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Link from 'next/link';
import Headers from './Headers';
import Nav from '../Navbar';
import Footer from '../Footer';
import { BlogPageStyle, MainBlogStyle, SidePannel } from './styles/BlogStyles';

const SINGLE_BLOG_QUERY = gql`
  query SINGLE_BLOG_QUERY($id: ID!) {
    blog(id: $id) {
      title
      author
      summery
      image
      headers
      createdAt
      user {
        id
        name
      }
    }
  }
`;

const QUERY_ALL_BLOGS = gql`
  query {
    blogs(orderBy: createdAt_DESC) {
      id
      title
      author
      summery
      image
      headers
      description
      createdAt
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
            <>
            <Nav />
            <BlogPageStyle >
              <MainBlogStyle>
                <p><span>{data.blog.author}</span><span>{"  .  "}</span><span>{data.blog.createdAt}</span></p>
                <h1>{data.blog.title}</h1>
                <img className="image" src={data.blog.image} alt="image"/>
                <p>{data.blog.summery}</p>
                <Headers headers={data.blog.headers}/>
              </MainBlogStyle>
              <SidePannel>
                <Query query={QUERY_ALL_BLOGS}>
                  {({data, loading}) => {
                    return(
                    <>
                    <h2>Related blogs</h2>
                    {data.blogs.map(blog => (
                      <Link
                      href={{
                        pathname: "blog",
                        query: { id: blog.id }
                      }}
                    >
                    <a><h3>{blog.title}</h3></a>
                    </Link>
                    ))}
                    </>
                    )}}
                </Query>
              </SidePannel>
            </BlogPageStyle >
            <Footer />
            </>
          );
        }}
      </Query>
    );
  }
}

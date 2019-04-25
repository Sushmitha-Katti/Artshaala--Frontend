import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Nav from '../Navbar';
import Footer from '../Footer';
import { DeleteBlogWraper } from './styles/BlogStyles';

const QUERY_ALL_BLOGS = gql`
  query {
    blogs {
      id
      title
      image
      headers
      description
      user {
        id
        name
      }
    }
  }
`;

const DELETE_BLOG_MUTATION = gql`
  mutation DELETE_BLOG_MUTATION($id: ID!){
    deleteBlog(id: $id){
      id
    }
  }
`;

export default class DeleteBlog extends Component {

  update = (cache, payload) => {
    const data = cache.readQuery({ query: QUERY_ALL_BLOGS });
    console.log(data, payload);
    data.blogs = data.blogs.filter(blog => blog.id !== payload.data.deleteBlog.id);
    
    cache.writeQuery({ query: QUERY_ALL_BLOGS, data });
  };

  render() {
    return (
      <Query 
        query={QUERY_ALL_BLOGS}
      >
      {({data, loading}) => {
        console.log(data.blogs)
        if(loading){return <p style={{ textAlign: "center" }}>Loading blogs</p>}
        if(data.blogs.length > 0){
        return (
        <>
        <Nav />
        {data.blogs.map(blog => (
          <DeleteBlogWraper>
          <p>{blog.title}</p>
          <Mutation 
                mutation = {DELETE_BLOG_MUTATION}
                variables = {{id: blog.id}}
                update={this.update}
              >
                {(deleteBlog, {loading,error}) => (
                  <button 
                    style={{display:'inline'}}
                    onClick={ () => {
                      if(confirm('Are you sure you want to delete this blog?')){
                        deleteBlog().catch(err => {
                          alert(err.message)
                        })
                      }
                    }}
                  >Delet{loading ? 'ing...' : 'e this'}</button>
                )}
              </Mutation>
          </DeleteBlogWraper>
        ))}
        <Footer />
        </>
        )}
        return (
          <p style={{ textAlign: "center" }}>No blog found</p>
        )
        }}

      </Query>
    )
  }
}

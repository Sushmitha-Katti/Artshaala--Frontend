import React from "react";
import { Query, Mutation } from "react-apollo";
import { CURRENT_USER_QUERY } from "../test/User";
import Form from "./styles/Form";
import gql from "graphql-tag";
import Link from "next/link";
import { BlogsStyles } from './styles/BlogStyles'

const CREATE_BLOG_MUTATION = gql`
  mutation CREATE_BLOG_MUTATION(
    $title: String!
    $author: String!
    $summery: String!
    $image: String!
    $headers: String!
    $description: String!
  ) {
    createBlog(
      title: $title
      author: $author
      summery: $summery
      image: $image
      headers: $headers
      description: $description
    ) {
      id
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

class Blogs extends React.Component {
  state = {
    title: "",
    author: "",
    summery: "",
    image: "",
    headers: "",
    description: ""
  };

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  async mergeArray(l1, l2) {
    var l3 = [];
    for (let i = 0; i < l1.length; i++) {
      l3.push(l1[i]);
      l3.push(l2[i]);
    }
    return l3;
  }

  uploadFile = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "artshaala");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dzvm3lnee/image/upload",
      {
        method: "POST",
        body: data
      }
    );
    const file = await res.json();
    this.setState({
      image: file.secure_url
    });
  };
  render() {
    return (
      <>
        <Query query={CURRENT_USER_QUERY}>
          {({ data, loading, error }) => {
            if (loading) {
              return <p style={{ textAlign: "center" }}>Loading</p>;
            }
            console.log(data)
            if(data.me){
            if(data.me.permissions.includes("ADMIN")){
            return (
              <Mutation 
              mutation={CREATE_BLOG_MUTATION} 
              variables={this.state}
              >
                {(createBlog, { loading, error }) => (
                  <Form
                    data-test="form"
                    onSubmit={async e => {
                      e.preventDefault();
                      const l3 = await this.mergeArray(
                        this.state.headers.split("$$$$"),
                        this.state.description.split("$$$$")
                      );
                      this.setState({ headers: l3.join("$$$$") });
                      const res = await createBlog();
                      console.log(res)
                      this.setState({
                        title: "",
                        author: "",
                        summery: "",
                        image: "",
                        headers: "",
                        description: ""
                      });
                    }}
                  >
                    <fieldset disabled={loading} aria-busy={loading}>
                      <Link
                        href={{
                          pathname: "deleteBlog"
                        }}
                      >
                        <button style={{margin: 10}}>Delete Blogs</button>
                      </Link>
                      <label htmlFor="file">
                        Image
                        <input
                          type="file"
                          id="file"
                          name="file"
                          placeholder="Upload an image"
                          required
                          onChange={this.uploadFile}
                        />
                        {this.state.image && (
                          <img
                            width="200"
                            src={this.state.image}
                            alt="Upload Preview"
                          />
                        )}
                      </label>

                      <label htmlFor="title">
                        Title
                        <input
                          type="text"
                          id="title"
                          name="title"
                          placeholder="Title"
                          required
                          value={this.state.title}
                          onChange={this.handleChange}
                        />
                      </label>
                      <label htmlFor="author">
                        Author
                        <input
                          type="text"
                          id="author"
                          name="author"
                          placeholder="Author"
                          required
                          value={this.state.author}
                          onChange={this.handleChange}
                        />
                      </label>
                      <label htmlFor="summery">
                        Summery
                        <textarea
                          id="summery"
                          name="summery"
                          placeholder="Summery"
                          required
                          value={this.state.summery}
                          onChange={this.handleChange}
                        />
                      </label>
                      <label htmlFor="headers">
                        Headers
                        <textarea
                          id="headers"
                          name="headers"
                          placeholder="Enter all headers separated by $$$$"
                          required
                          value={this.state.headers}
                          onChange={this.handleChange}
                        />
                      </label>

                      <label htmlFor="description">
                        Description
                        <textarea
                          id="description"
                          name="description"
                          placeholder="Enter all descriptions separated by $$$$"
                          required
                          value={this.state.description}
                          onChange={this.handleChange}
                        />
                      </label>

                      <button type="submit">Submit</button>
                    </fieldset>
                  </Form>
                )}
              </Mutation>
            )}
            else{
              return null;
            }
          }
          else{
            return null;
          }
          }}
        </Query>
        <Query query={QUERY_ALL_BLOGS}>
          {({ data, loading, error }) => {
            console.log(data);
            if (loading) {
              return <p style={{ textAlign: "center" }}>Loading Blogs</p>;
            }
            if (error) {
              return (
                <p style={{ textAlign: "center" }}>Error in loading blogs</p>
              );
            }
            return (
              <>
                {data.blogs.map(blog => (
                  <BlogsStyles>
                    <h1>{blog.title}</h1>
                    <img src={blog.image} alt="image" />
                    <p>{blog.summery}</p>
                    <Link
                      href={{
                        pathname: "blog",
                        query: { id: blog.id }
                      }}
                    >
                    <button>Know more</button>
                    </Link>
                  </BlogsStyles>
                ))}
              </>
            );
          }}
        </Query>
      </>
    );
  }
}
export default Blogs;

import React from "react";
import { Query, Mutation } from "react-apollo";
import { CURRENT_USER_QUERY } from "../test/User";
import Form from "./Form";
import gql from "graphql-tag";
import Link from "next/link";

const CREATE_BLOG_MUTATION = gql`
  mutation CREATE_BLOG_MUTATION(
    $title: String!
    $image: String!
    $headers: String!
    $description: String!
  ) {
    createBlog(
      title: $title
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

class Blogs extends React.Component {
  state = {
    title: "",
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
    data.append("upload_preset", "Artshaala");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dr6weeztx/image/upload",
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
            if (!data.me) {
              return (
                <p style={{ textAlign: "center" }}>Sign in to create blogs</p>
              );
            }
            return (
              <Mutation mutation={CREATE_BLOG_MUTATION} variables={this.state}>
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
                      this.setState({
                        title: "",
                        image: "",
                        headers: "",
                        description: ""
                      });
                      // Router.push({
                      //   pathname: '/item',
                      //   query: { id: res.data.createBlog.id },
                      // });
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
                      <label htmlFor="price">
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
            );
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
                  <>
                    <p>{blog.user.name}</p>
                    <h1>{blog.title}</h1>
                    <img src={blog.image} alt="image" />
                    <Link
                      href={{
                        pathname: "blog",
                        query: { id: blog.id }
                      }}
                    >
                      <button>Know more</button>
                    </Link>
                  </>
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

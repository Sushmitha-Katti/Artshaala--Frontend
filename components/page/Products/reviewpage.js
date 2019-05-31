import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import Router from "next/router";
//import {Form} from "../../test/signuppage.js";
import { Body, BlueText, Button, Collapsial, UserReviews } from "./style";
import User from "../../test/User";

const CREATE_REVIEW_MUTATION = gql`
  mutation CREATE_REVIEW_MUTATION(
    $comment: String!
    $rating: Float!
    $itemid: ID!
  ) {
    createComment(comment: $comment, rating: $rating, itemid: $itemid) {
      id
    }
  }
`;

class ReviewPage extends Component {
  state = {
    comment: "",
    rating: 0,
    itemid: this.props.id
  };
  saveToState = e => {
    const { name, type, value } = e.target;
    const val = type === "radio" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };
  render() {
    return (
      <User>
        {({ data: me }, error, loading) => {
          return (
            <Mutation mutation={CREATE_REVIEW_MUTATION} variables={this.state}>
              {(creatComment, { error, loading }) => (
                <form
                  method="post"
                  onSubmit={async e => {
                    //stop submitting form
                    e.preventDefault();
                    //call the mutation
                    if (this.state.rating) {
                      const res = await creatComment().catch(error =>
                        alert(error)
                      );
                      //change the mutation to the single item page
                      console.log(res);
                      this.setState({ comment: "", rating: 0 });
                      Router.push({
                        pathname: "/"
                      });
                    }
                  }}
                >
                  <UserReviews>
                    <div className="content">
                      <label htmlFor="description">
                        <div className="flexbox">
                          <div className="comment">
                            <p>How did you feel about this item?</p>
                            <textarea
                              onChange={this.saveToState}
                              id="description"
                              name="comment"
                              placeholder="Help other to know about this item.."
                            />
                          </div>
                          <div className="ratings">
                            <p>Rate this item</p>
                            <fieldset class="userrating">
                              <input
                                type="radio"
                                id="star5"
                                name="rating"
                                value="5"
                                onChange={this.saveToState}
                              />
                              <label className="full" for="star5" />
                              {/* <input type="radio" id="star4half" name="rating" value="4.5" onChange={this.saveToState} /><label className="half" for="star4half" ></label> */}
                              <input
                                type="radio"
                                id="star4"
                                name="rating"
                                value="4"
                                onChange={this.saveToState}
                              />
                              <label className="full" for="star4" />
                              {/* <input type="radio" id="star3half" name="rating" value="3.5" onChange={this.saveToState} /><label className="half" for="star3half" ></label> */}
                              <input
                                type="radio"
                                id="star3"
                                name="rating"
                                value="3"
                                onChange={this.saveToState}
                              />
                              <label className="full" for="star3" />
                              {/* <input type="radio" id="star2half" name="rating" value="2.5" onChange={this.saveToState} /><label className="half" for="star2half" ></label> */}
                              <input
                                type="radio"
                                id="star2"
                                name="rating"
                                value="2"
                                onChange={this.saveToState}
                              />
                              <label className="full" for="star2" />
                              {/* <input type="radio" id="star1half" name="rating" value="1.5" onChange={this.saveToState} /><label className="half" for="star1half" ></label> */}
                              <input
                                type="radio"
                                id="star1"
                                name="rating"
                                value="1"
                                onChange={this.saveToState}
                              />
                              <label className="full" for="star1" />
                              {/* <input type="radio" id="starhalf" name="rating" value="0.5" onChange={this.saveToState} /><label className="half" for="starhalf" ></label> */}
                            </fieldset>
                            <br />
                            <br />
                            {!this.state.rating && (
                              <div>
                                <p style={{ color: "red", fontSize: "0.6rem" }}>
                                  ! Please select a star rating
                                </p>
                              </div>
                            )}
                            <div>
                              <input
                                className="submitbutton"
                                type="submit"
                                value="Submit"
                              />
                            </div>
                          </div>
                          <div />
                        </div>
                      </label>
                    </div>
                  </UserReviews>
                </form>
              )}
            </Mutation>
          );
        }}
      </User>
    );
  }
}

export default ReviewPage;

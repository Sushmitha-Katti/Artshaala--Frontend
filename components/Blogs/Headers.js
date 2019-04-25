import React, { Component } from 'react';
import { BlogHeaders } from './styles/BlogStyles'

export default class Headers extends Component {
  render() {
    return (
    <div>
      {this.props.headers.split("$$$$").map(head => (
        <BlogHeaders>{head}</BlogHeaders>
      ))}
    </div>
    )
  }
}

import React, { Component } from 'react'

export default class Headers extends Component {
  render() {
    return (
    <div>
      {this.props.headers.split("$$$$").map(head => (
        <p>{head}</p>
      ))}
    </div>
    )
  }
}

import React, { Component, Fragment } from 'react';
import { BlogHeaders } from './styles/BlogStyles';
import { Markup } from 'interweave';

export default class Headers extends Component {
  render() {
    return (
    <div>
      {this.props.headers.split("$$$$").map(head => (
        
        <BlogHeaders>
          <Fragment>
            
              <Markup content={head} /> 
              
          </Fragment>
        </BlogHeaders>
      ))}
    </div> 
    )
  }
}

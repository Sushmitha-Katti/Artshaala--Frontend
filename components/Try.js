import React, { Component } from 'react'

class Try extends Component {

    state={
        texts:""
    }

    changetext = (e) =>{
        this.setState({
            texts:event.target.value
        })
    }

  render() {
    let dateFormat = require('dateformat');
    let now = new Date();
      
    return (
      <div>
          
        <textarea
        value={this.state.value}
        onChange={this.changetext}
        ></textarea>

        <p>{this.state.texts}</p>


<p>{dateFormat(now, "dddd, mmmm dS, yyyy")}</p>
<a href="https://www.npmjs.com/package/dateformat">https://www.npmjs.com/package/dateformat</a>
      </div>
    )
  }
}

export default Try;
import React, { Component } from "react";
//import ReactMapGL from "react-map-gl";

class Map extends Component {
  state = {};
  render() {
    return (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1264251302223!2d77.57439451437597!3d13.027620190819155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17c46476f62d%3A0xae6a4d298381b6ba!2sArtshaala+Music+Store!5e0!3m2!1sen!2sin!4v1536821993292"
        width={this.props.width}
        height={this.props.width}
        frameborder="0"
      />
    );
  }
}

export default Map;

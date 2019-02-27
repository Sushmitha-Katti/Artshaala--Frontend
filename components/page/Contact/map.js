import React, { Component } from "react";
import ReactMapGL from "react-map-gl";

class Map extends Component {
  state = {
    viewport: {
      width: 100 + "%",
      height: 100 + "%",
      latitude: 13.027427,
      longitude: 77.576616,
      zoom: 16,
      mapStyle: "mapbox://styles/mapbox/satellite-v9"
    }
  };

  render() {
    let token =
      "pk.eyJ1Ijoic2hhcnVzYjEiLCJhIjoiY2pzbjA1bHl4MDZldjQzanZoczR0OGllbSJ9.E_L3n24688s7y9ksjTAoPw";

    return (
      <ReactMapGL
        mapboxApiAccessToken={token}
        {...this.state.viewport}
        onViewportChange={viewport => this.setState({ viewport })}
      />
    );
  }
}

export default Map;

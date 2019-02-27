import React, { Component } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import marker from "./images/marker.png";

const token =
  "pk.eyJ1Ijoic2hhcnVzYjEiLCJhIjoiY2pzbjA1bHl4MDZldjQzanZoczR0OGllbSJ9.E_L3n24688s7y9ksjTAoPw";

class Map extends Component {
  state = {
    viewport: {
      width: 100 + "%",
      height: 100 + "%",
      latitude: 13.027876,
      longitude: 77.576572,
      zoom: 16,
      bearing: 0,
      pitch: 0
    }
  };

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapStyle="mapbox://styles/sharusb1/cjsn2e5t901f21fmg2g6uktth"
        mapboxApiAccessToken={token}
        onViewportChange={viewport => this.setState({ viewport })}
      >
        <Marker latitude={13.027427} longitude={77.576616}>
          <a href="https://goo.gl/maps/Bn3YoqwCudw" target="__blank">
            <img src={marker} width="30" />
          </a>
        </Marker>
      </ReactMapGL>
    );
  }
}

export default Map;

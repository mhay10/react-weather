import React from "react";
import axios from "axios";

interface cityLocation {
  location: string;
}

export class CollectData extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { location: document.getElementById("city-location")! };
    this.updateLocation = this.updateLocation.bind(this);
  }

  updateLocation() {
    this.setState({ location: document.getElementById("city-location") });
  }

  render() {
    return (
      <div>
        <input id="city-location" type="text" onChange={this.updateLocation} />
        <p>{this.state}</p>
      </div>
    );
  }
}

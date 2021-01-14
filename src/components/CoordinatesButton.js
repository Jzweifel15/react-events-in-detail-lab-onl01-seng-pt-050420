import React, { Component } from "react";

export default class DelayedButton extends Component 
{
  render() {
    let onReceiveCoordinates = (event) => {
      let coordinates = [];
      coordinates.push(event.clientX);
      coordinates.push(event.clientY);
      return coordinates;
    }

    return (
      <button onClick={this.onReceiveCoordinates}></button>
    )
  }
}
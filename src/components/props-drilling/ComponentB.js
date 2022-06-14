import React, { Component } from "react";
import ComponentC from "./ComponentC";

export default class ComponentB extends Component {
  render() {
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body bg-primary">
                <p className="lead font-weight-bold font-italic">
                  Component B 👍👍
                </p>
                <span className="lead font-weight-bold font-italic text-white">
                  App Data :{JSON.stringify(this.props.sendDataToB)}
                </span>
                <ComponentC sendDataToC={this.props.sendDataToB} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import ComponentD from "./ComponentD";

export default class ComponentC extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container mt-3">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-body bg-warning">
                  <p className="lead font-weight-bold font-italic">
                    Component C 👍👍👍
                  </p>
                  <span className="lead font-weight-bold font-italic text-white">
                    App Data :{JSON.stringify(this.props.sendDataToC)}
                  </span>
                  <ComponentD sendDataToD={this.props.sendDataToC} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

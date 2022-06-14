import React, { Component } from "react";
import ComponentB from "./ComponentB";

export default class ComponentA extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container mt-3">
          <div className="row">
            <div className="col">
              <div className="card bg-success text-primary">
                <div className="card-body">
                  <p className="h4">Component A 👍</p>
                  <span className="lead font-weight-bold font-italic text-white">
                    App Data: {JSON.stringify(this.props.sendDataToA)}
                  </span>
                  <ComponentB sendDataToB={this.props.sendDataToA} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

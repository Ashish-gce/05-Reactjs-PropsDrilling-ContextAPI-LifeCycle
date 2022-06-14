import React, { Component } from "react";

export default class ComponentD extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container mt-3">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-body bg-danger">
                  <p className="lead font-weight-bold font-italic">
                    Component D 👍👍👍👍
                  </p>
                  <span className="lead font-weight-bold font-italic text-white">
                    App Data :{JSON.stringify(this.props.sendDataToD)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

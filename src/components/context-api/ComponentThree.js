import React, { Component } from "react";
import UserContext from "./UserContext";

export default class ComponentThree extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container mt-3">
          <div className="row">
            <div className="col">
              <div className="card bg-success text-white">
                <div className="card-body">
                  <p className="h4">Component Three</p>
                  <UserContext.Consumer>
                    {(value) => {
                      return (
                        <pre className="lead font-weight-bold text-white">
                          App Data : {JSON.stringify(value)}
                        </pre>
                      );
                    }}
                  </UserContext.Consumer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

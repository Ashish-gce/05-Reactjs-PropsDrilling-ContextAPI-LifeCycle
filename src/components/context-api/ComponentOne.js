import React, { Component } from "react";
import ComponentTwo from "./ComponentTwo";
import UserContext from "./UserContext";

export default class ComponentOne extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container mt-3">
          <div className="row">
            <div className="col">
              <div className="card bg-danger text-white">
                <div className="card-body">
                  <p className="h4">Component One</p>
                  <span className="lead font-weight-bold font-italic text-white"></span>
                  {/* <UserContext.Consumer>
                    {(value) => {
                      return (
                        <pre className="lead font-weight-bold text-white">
                          {JSON.stringify(value)}
                        </pre>
                      );
                    }}
                  </UserContext.Consumer> */}
                  <ComponentTwo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

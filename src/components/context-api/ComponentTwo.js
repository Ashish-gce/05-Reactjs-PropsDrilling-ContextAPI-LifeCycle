import React, { Component } from "react";
import ComponentThree from "./ComponentThree";
import UserContext from "./UserContext";

export default class ComponentTwo extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container mt-3">
          <div className="row">
            <div className="col">
              <div className="card bg-warning text-white">
                <div className="card-body">
                  <p className="h4">Component Two</p>
                  {/* <UserContext.Consumer>
                    {(value) => {
                      return (
                        <pre className="lead font-weight-bold text-white">
                          {JSON.stringify(value)}
                        </pre>
                      );
                    }}
                  </UserContext.Consumer> */}
                  <ComponentThree />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

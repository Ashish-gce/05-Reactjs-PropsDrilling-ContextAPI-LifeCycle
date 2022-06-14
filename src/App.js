import React from "react";
import "./App.css";
import ComponentA from "./components/props-drilling/ComponentA";
import ComponentOne from "./components/context-api/ComponentOne";
import UserContext from "./components/context-api/UserContext";
import ComponentThree from "./components/context-api/ComponentThree";
import DigitalWatch from "./components/DigitalWatch";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Ashish Kumar",
        age: 25,
        education: "B.Tech",
        passingYear: 2020,
      },
    };
  }

  render() {
    return (
      <React.Fragment>
        <nav className="navbar bg-secondary navbar-expand-sm navStyle">
          <a href="#" className="navbar-brand text-white font-weight-bold">
            React JS with Props Drilling and Context API
          </a>
        </nav>

        {/* ------------------- Below commented line is illustration of "props-drilling" ------------------- */}

        {/* <div className="container mt-3">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <p className="lead font-weight-bold font-italic">
                    Data Inside App Component:{" "}
                    {JSON.stringify(this.state.userInfo)}
                  </p>
                  <ComponentA sendDataToA={this.state.userInfo} />
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* -------------------  Below code is for "context-api" illustration ------------------- */}

        {/* <div className="container mt-3">
          <div className="row">
            <div className="col">
              <div className="card bg-white">
                <div className="card-body">
                  <p className="lead font-weight-bold font-italic text-primary">
                    Data Inside App Component :{" "}
                    {JSON.stringify(this.state.userInfo)}
                  </p>
                  <UserContext.Provider value={this.state.userInfo}>
                    <ComponentOne />
                  </UserContext.Provider>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* ------------------- Component Life-Cycle ------------------- */}

        <DigitalWatch />

        <div style={{ marginBottom: "100px" }} />
      </React.Fragment>
    );
  }
}

export default App;

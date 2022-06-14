import React, { Component } from "react";

class DigitalWatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTime: new Date().toLocaleTimeString(),
    };
  }

  //   When Component is fully Loaded on DOM
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        currentTime: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }

  //   when the component is removed from the DOM
  componentWillUnmount() {
    //   "clearInterval()" function is used to stop the 'timer' that is setInterval()
    clearInterval(this.timer);
  }

  render() {
    return (
      <React.Fragment>
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-6 m-auto">
              <div className="card">
                <div className="card-header bg-secondary text-white text-center">
                  <p className="display-4">Digital Clock</p>
                </div>
                <div className="card-body display-2 text-center text-secondary">
                  {this.state.currentTime}
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DigitalWatch;

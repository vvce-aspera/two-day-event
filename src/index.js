import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";

class Main extends Component {
  componentDidMount() {
    AOS.init({
      delay: 150,
    });
  }

  render() {
    return <h1>hello</h1>;
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));

import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import PosterSection from "./PosterSection";

class Main extends Component {
  componentDidMount() {
    AOS.init({
      delay: 150,
    });
  }

  render() {
    return (
      <div className="container">
        <h1>TWO DAY EVENT</h1>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et nibh
          dictum, condimentum metus eget, tristique elit.
        </h4>
        <PosterSection
          img={`${process.env.PUBLIC_URL}/images/keynoteWeb.jpg`}
          code="XXX-XXX-XXX"
          coordinators={["Jane Doe", "Jack Blanc"]}
          platform="Instagram"
          timings="10am"
          key="1"
        />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));

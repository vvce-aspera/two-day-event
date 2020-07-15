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
        <div className="posters">
          <PosterSection
            img={`${process.env.PUBLIC_URL}/images/keynoteWeb.jpg`}
            coordinators={["Jane Doe", "Jack Blanc"]}
            platform="Instagram"
            timings="10:30am to 12:30am"
            key="1"
            link="https://www.instagram.com/vvceofficial"
            date={1}
          />
          <PosterSection
            img={`${process.env.PUBLIC_URL}/images/madadsWeb.jpg`}
            coordinators={["Jane Doe", "Jack Blanc"]}
            platform="Google Meet"
            timings="10:30am to 12:30am"
            key="2"
            link="#"
            date={1}
          />
          <PosterSection
            img={`${process.env.PUBLIC_URL}/images/stockmarketWeb.jpg`}
            coordinators={["Jane Doe", "Jack Blanc"]}
            platform="Google Meet"
            timings="10:30am to 12:30am"
            key="3"
            link="#"
            date={2}
          />
          <PosterSection
            img={`${process.env.PUBLIC_URL}/images/debateWeb.jpg`}
            coordinators={["Jane Doe", "Jack Blanc"]}
            platform="Google Meet"
            timings="10:30am to 12:30am"
            key="4"
            link="#"
            date={2}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));

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
      <React.Fragment>
        <div className="container">
          <div className="aspera">
            <img
              src={`${process.env.PUBLIC_URL}/images/asperaLogo.png`}
              alt="asperaLogo"
            />
          </div>
          <h1>Ad Ventures</h1>
          <h4>
            We at Aspera invite you to our Ad Ventures!
            <br />
            (more text required 😁😁)
          </h4>
          <div className="posters">
            <PosterSection
              aos="fade-down"
              img={`${process.env.PUBLIC_URL}/images/keynoteWeb.jpg`}
              coordinators={["Jane Doe", "Jack Blanc"]}
              platform="Instagram"
              timings="10:30am to 12:30am"
              key="1"
              link="https://www.instagram.com/vvceofficial"
              date={1}
            />
            <PosterSection
              aos="fade-up"
              img={`${process.env.PUBLIC_URL}/images/madadsWeb.jpg`}
              coordinators={["Zabiulla Sheriff", "Shikha Yadav"]}
              platform="Google Meet"
              timings="10:30am to 12:30am"
              key="2"
              link="https://surveyheart.com/form/5f10282bdacc0d0815657ec5"
              date={1}
            />
            <PosterSection
              aos="fade-down"
              img={`${process.env.PUBLIC_URL}/images/stockmarketWeb.jpg`}
              coordinators={["Soundarya"]}
              platform="Google Meet"
              timings="10:30am to 12:30am"
              key="3"
              link="https://docs.google.com/forms/d/e/1FAIpQLScBB_yaqOMpMXEIsaKMRZ4to2KQeKFUvcNnz9fd6SZPMR5BKA/viewform"
              date={2}
            />
            <PosterSection
              aos="fade-up"
              img={`${process.env.PUBLIC_URL}/images/debateWeb.jpg`}
              coordinators={["Sushma Ganesh", "Sanjana Srinath"]}
              platform="Google Meet"
              timings="10:30am to 12:30am"
              key="4"
              link="https://docs.google.com/forms/d/e/1FAIpQLSdXR-AmqukANOMcOfYUgaOaSd70d3O8kUBSOokhvhYKEg0wtQ/viewform"
              date={2}
            />
          </div>
        </div>
        <div className="bottom-bar">
          <img
            src={`${process.env.PUBLIC_URL}/images/vvceLogo.png`}
            alt="vvceLogo"
          />
          <img src={`${process.env.PUBLIC_URL}/images/NENLogo.png`} alt="NEN" />
        </div>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));

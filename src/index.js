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
      offset: 100,
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="top-bar">
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/vvceLogo.png`}
                alt="vvceLogo"
              />
              <img
                src={`${process.env.PUBLIC_URL}/AsperaLogoLight.png`}
                alt="asperaLogo"
              />
            </div>
            <h1>Ad Ventures</h1>
          </div>

          <h4>
            Ad Ventures is a two day event organised by us to promote marketing
            skills among the budding entrepreneurs.
            <br />
            <br />
            The event takes place on 29th and 30th July with different events
            that test the creativity, persuation as well as the entrepreneurial
            spirit of the participants.
          </h4>
          <div className="posters">
            <PosterSection
              aos="fade-down"
              img={`${process.env.PUBLIC_URL}/images/keynoteWeb.jpg`}
              platform="Instagram"
              timings="10am"
              key="1"
              link="https://www.instagram.com/vvceofficial"
              date={1}
            />
            <PosterSection
              aos="fade-up"
              img={`${process.env.PUBLIC_URL}/images/madadsWeb.jpg`}
              coordinators={["Zabiulla Sheriff", "Shikha Yadav"]}
              platform="Google Meet"
              timings="11am to 1pm"
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
              timings="3pm to 5pm"
              key="4"
              link="https://docs.google.com/forms/d/e/1FAIpQLSdXR-AmqukANOMcOfYUgaOaSd70d3O8kUBSOokhvhYKEg0wtQ/viewform"
              date={2}
            />
          </div>
        </div>
        <div className="bottom-bar">
          <div className="images">
            <img
              src={`${process.env.PUBLIC_URL}/images/vvceLogo.png`}
              alt="vvceLogo"
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/nenLogo.png`}
              alt="NEN"
            />
          </div>
          <div className="text">
            <p>Vidyavardhaka College of Engineering</p>
            <p>Gokulam III Stage, Mysuru</p>
            <p>
              An Autonomous Institute, Accredited by NBA and NAAC with A Grade
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));

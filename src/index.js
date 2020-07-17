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
              <a href="https://www.vvce.ac.in">
                <img
                  src={`${process.env.PUBLIC_URL}/images/vvceLogo.png`}
                  alt="vvceLogo"
                />
              </a>
              <a href="https://shashankathreya.github.io/Aspera-Website/">
                <img
                  src={`${process.env.PUBLIC_URL}/AsperaLogoLight.png`}
                  alt="asperaLogo"
                />
              </a>
            </div>
            <h1>Ad Ventures</h1>
          </div>

          <h4>
            Ad Ventures is a two day event organised by us to promote marketing
            skills among the budding entrepreneurs.
            <br />
            <br />
            The event takes place on 29th and 30th July with different events
            that test the creativity, persuasion as well as the entrepreneurial
            spirit of the participants.
          </h4>
          <div className="posters">
            <PosterSection
              aos="fade-up"
              img={`${process.env.PUBLIC_URL}/images/keynoteWeb.jpg`}
              platform="Instagram"
              timings="10:00am"
              key="1"
              link="https://www.instagram.com/vvceofficial"
              date={1}
            />
            <PosterSection
              aos="fade-up"
              img={`${process.env.PUBLIC_URL}/images/madadsWeb.jpg`}
              coordinators={["Zabiulla Sheriff", "Shikha Yadav"]}
              platform="Google Meet"
              timings="11:00am to 1:00pm"
              key="2"
              link="https://docs.google.com/forms/d/e/1FAIpQLSfqB2fLK4SUM2iJLsDDaW-iUmEPNc11tFYPJhJ7EEJafChipQ/viewform"
              date={1}
            />
            <PosterSection
              aos="fade-up"
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
              timings="3:00pm to 5:00pm"
              key="4"
              link="https://docs.google.com/forms/d/e/1FAIpQLSdXR-AmqukANOMcOfYUgaOaSd70d3O8kUBSOokhvhYKEg0wtQ/viewform"
              date={2}
            />
          </div>
        </div>

        <div className="conv">
          <div>
            <p>Convenor</p>
            <p>Dr. B Sadashive Gowda</p>
          </div>
          <div>
            <p>Faculty Co-ordinator</p>
            <p>Dr. Lokesh C</p>
          </div>
        </div>
        <div className="bottom-bar">
          <div className="images">
            <a href="https://www.vvce.ac.in">
              <img
                src={`${process.env.PUBLIC_URL}/images/vvceLogo.png`}
                alt="vvceLogo"
              />
            </a>
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

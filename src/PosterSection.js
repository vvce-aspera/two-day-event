import React from "react";

const PosterSection = ({
  aos,
  date,
  img,
  coordinators,
  timings,
  platform,
  link,
  registration,
}) => {
  return (
    <section data-aos={aos} className="poster-section">
      <img src={img} alt="keynote" />
      <div className="details">
        <div className="event">
          <div className="timings">
            <img
              src={`${process.env.PUBLIC_URL}/images/clock.png`}
              alt="clock"
            ></img>
            <p>{timings}</p>
          </div>
          <div className="platform">
            {platform === "Instagram" ? (
              <React.Fragment>
                <img
                  src={`${process.env.PUBLIC_URL}/images/instagram.png`}
                  alt="instagram"
                />
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <button className="platform-name">@vvceofficial</button>
                </a>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <img
                  src={`${process.env.PUBLIC_URL}/images/gmeet.png`}
                  alt="gmeet"
                />
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <button className="platform-name">Register!</button>
                </a>
              </React.Fragment>
            )}
          </div>
        </div>
        {coordinators !== undefined && (
          <div className="coordinators">
            <p className="head">Co-ordinators</p>
            {coordinators.map((i) => (
              <p>{i}</p>
            ))}
          </div>
        )}
      </div>
      <div className="date">
        {date === 1 ? (
          <div className="whitespace">
            <p>Wednesday</p>
            <p>29</p>
          </div>
        ) : (
          <div className="whitespace">
            <p>Thursday</p>
            <p>30</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PosterSection;

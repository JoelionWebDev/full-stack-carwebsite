import React from "react";
import Hero from "./hero";
import Form from "./form";
import Request from "./request";
import Accordian from "./Accordian";

// import Guid from "./guid";
import Me from "./me";
import Utube from "./utube";
import Footer from "./footer";
import Heroslide from "./heroslide";
import Slide1 from "./slide1";
import Slide2 from "./slide2";
import Slide3 from "./slide3";
import Slide4 from "./slide4";
import Slide5 from "./slide5";
import Slide6 from "./slide6";
import Slide7 from "./slide7";

const Home = () => {
  return (
    <React.Fragment>
      <main style={{ color: "gray" }}>
        <div className="container">
          <div className="heroContainer">
            <Hero />
          </div>
          <Form />
          <div className="line">
            <h1>Our Available cars</h1>
            <p>Below are some available cars.</p>
            <h4>
              NOTE: No payment should be made online!. Email, Chat or call us
              for Inspection.
            </h4>
          </div>
          <div>
            <Heroslide />
          </div>
          <div>
            <Slide1 />
          </div>
          <div>
            <Slide2 />
          </div>
          <div>
            <Slide3 />
          </div>
          {/* <div>
            <Slide4 />
          </div>
          <div>
            <Slide5 />
          </div>
          <div>
            <Slide6 />
          </div>
          <div>
            <Slide7 />
          </div> */}
          <div>
            <Request />
          </div>

          {/* <LatestCourses /> */}
          {/* <Guid /> */}
          <Utube />
          <Me />
          <Accordian />
          <Footer />
        </div>
      </main>
    </React.Fragment>
  );
};

export default Home;

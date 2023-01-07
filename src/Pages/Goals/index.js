import React from "react";
import logo from "../../Assets/images/Group 360.svg";
import back from "../../Assets/images/back.png";
import { Link } from "react-router-dom";
import goals from "../../Assets/images/goals.png";
import "./index.css";
function Goals() {
  return (
    <div className="goals">
      <div className="logo">
        <Link className="my-3" to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="back">
        <Link to="/" className="m-2">
          <span>Back</span>
          <img src={back} alt="" />
        </Link>
      </div>
      <img className="background" src={goals} alt="" />
      <div className="rectangle"></div>
      <section className="main">
        <div>
          <h2>Goals & Advanteges</h2>
        </div>
        <div className="text">
          <div>
            <h3>Our goals:</h3>
            <p>
              1- getting out of the public circle and traditional framework of
              the work method and keeping away from the usual and traditional
              routine towards a broad horizon without borders.
            </p>
            <p>
              2- Developing the environment of any work in general from its
              current situation through professional ideas and methods.
            </p>
            <p>
              3- Changing the concept of occupational frustration under
              difficult circumstances and transforming it into permanent
              practical successes in all conditions.
            </p>
            <p>
              4- Changing the concept of exploitation by providing real
              consultations and services at reasonable and studied prices.
            </p>
            <p>5- Changing the concept of indivifual work to group work.</p>
            <p>
              6- Changing the concept of random work for an organized,
              thoughtful, accurate and purposful work.
            </p>
            <p>7- Changing job opportunities for those who deserve it.</p>
          </div>
          <div>
            <h3>Our Advanteges</h3>
            <p>
              1- Saving time and effort for customers by communicating with us
              in easy ways, anywhere and anytime.
            </p>
            <p>
              2- Saving time and effort and the trouble of thinking about
              general and petty matters within the work by providing
              consultations and services, organizing and following-up work.
            </p>
            <p>
              3- Providing integrated and comprehensive services that meet most
              of the clients’ occupational and personal needs in one place,
              which saves the trouble of being distracted for the clients.
            </p>
            <p>
              4- Develop business and create new ideas that contribute to
              generate revenues under all circumstances.
            </p>
            <p>
              5- Our most interest is to obtain distinguished results in
              reality, as we are not satisfied with providing advice and
              services in verbal terms only.
            </p>
            <p>6- Diligent follow-up and providing after-sales services</p>
            <p>
              7- Highlight on the ignored Experienced people and give them their right.
            </p>
            <p>8- Prividing personal and humanitarian services.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Goals;

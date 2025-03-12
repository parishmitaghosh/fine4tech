import React from "react";
import "../css/about.css";
import Pagenav from "../components/Pagenav";
import profile from "../images/profile.jpg";
function About() {
  return (
    <>
      <Pagenav />
      <div className="about-container">
        <div className="about-te">
          <h1>About</h1>
          <h4>Hey there! I'm Seemanta Dutta,</h4>
          <p>
            A passionate product photographer with a knack for capturing the
            essence of every item I shoot. With a keen eye for detail and a love
            for visual storytelling, I've been turning ordinary products into
            irresistible must-haves for the past 6 years. My journey into the
            world of product photography started with a curiosity for light and
            composition. From humble beginnings experimenting with my first
            camera to honing my skills through countless shoots, I've developed
            a style that blends creativity with technical precision.Whether it's
            a sleek tech gadget, a tantalizing dish, or a luxurious piece of
            jewelry, I thrive on the challenge of bringing out the best in every
            product. I believe that every item has a story to tell, and it's my
            job to ensure that story is told in the most compelling way
            possible.
            <br />
            <br />

            <br /> Over the years, I've had the privilege of working with a
            diverse range of clients, from small startups to global brands. Each
            project presents its own set of opportunities and constraints, and I
            thrive on the challenge of finding innovative solutions to meet my
            clients' needs. So whether you're a brand looking to showcase your
            latest creations or an individual in need of striking visuals for
            your online store, I'm here to bring your products to life in ways
            you never thought possible. Let's create something amazing together!
          </p>
        </div>
        <div className="myphoto">
          <img src={profile} alt="" />
        </div>
      </div>
    </>
  );
}

export default About;

import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <b className="purple">Muhammad Bilal </b>
            from <span className="purple"> Karachi, Pakistan.</span>
            <br />
            I am currently employed as a software developer at <span className="purple"><a href="https://realcoresolutions.com/"
                style={{ color: "rgba(178, 121, 216, 0.959)", textDecoration: "none" }}
                target="_blank" 
                rel="noopener noreferrer">REALCORE SOLUTIONS.</a></span>
            <br />
            I have completed Integrated MSc (IMSc) in Maths and Computing at BIT
            Mesra.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Graphics Designing
            </li>
            <li className="about-activity">
              <ImPointRight /> 3D Modeling
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Muhammad Bilal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

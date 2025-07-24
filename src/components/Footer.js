import React, { useState } from "react";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillFacebook
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const [time, setTime] = useState(getCurrentTime());
  const date = new Date();
  const milliseconds = date.getMilliseconds();
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getCurrentTime());
    },);
    return () => clearInterval(intervalId); 
  }, [milliseconds]);

  function getCurrentTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const year = date.getFullYear();
    const meridiem = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Convert 0 to 12 for display
    return {
      hours: formattedHours,
      minutes: minutes < 10 ? '0' + minutes : minutes, // Add leading zero if minutes < 10
      meridiem: meridiem,
      year: year,
    };
  }

  return (
    <section className="Footer-Container">
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>{time.hours}:{time.minutes} {time.meridiem}</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {time.year} Techno-Soft</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/MuhammadBilal-Dev"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/profile.php?id=100066647288083"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                >
                <AiFillFacebook />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/muhammad-bilal-578198253/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/muhammadbilal070806?igsh=NnVxa3IyZTVrcG5s"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
    </section>
  );
}

export default Footer;

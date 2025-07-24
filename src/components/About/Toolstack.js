import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiMongodb,
  SiOracle,
  SiBlender,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h6>Visual Studio Code</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h6>Postman</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <h6>Vercel</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOracle />
        <h6>Oracle Database</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
        <h6>MongoDB</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeillustrator />
        <h6>Adobe Illustrtor</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
        <h6>Adobe Photoshop</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeaftereffects />
        <h6>Adobe After Effects</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobepremierepro />
        <h6>Adobe Premier Pro</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBlender />
        <h6>Blender</h6>
      </Col>
    </Row>
  );
}

export default Toolstack;

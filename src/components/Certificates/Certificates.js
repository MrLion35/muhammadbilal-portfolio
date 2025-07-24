import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import pdf1 from "../../Assets/../Assets/Cetificates/DevTown/Amazon/AmazonClone.pdf";
import pdf2 from "../../Assets/../Assets/Cetificates/DevTown/Google/AmazonClone.pdf";
import pdf3 from "../../Assets/../Assets/Cetificates/DevTown/Google/BackEnd.pdf";
import pdf4 from "../../Assets/../Assets/Cetificates/DevTown/Google/FrontEnd.pdf";
import pdf5 from "../../Assets/../Assets/Cetificates/DevTown/Google/GoogleDriveClone.pdf";
import pdf6 from "../../Assets/../Assets/Cetificates/DevTown/Microsoft/BackEnd.pdf";
import pdf7 from "../../Assets/../Assets/Cetificates/DevTown/Microsoft/FrontEnd.pdf";
import pdf8 from "../../Assets/../Assets/Cetificates/DevTown/Microsoft/GoogleDriveClone.pdf";
import pdf9 from "../../Assets/../Assets/Cetificates/OpenWeaver/Certificates/HTML,CSS.pdf";
import pdf10 from "../../Assets/../Assets/Cetificates/OpenWeaver/Certificates/JavaScript.pdf";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import ChatNow from "../ChatNow";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Certificates() {
  const [width, setWidth] = useState(window.innerWidth);
  const [scale, setScale] = useState(0.8);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if(width >= 1300){
      setScale(0.8);
    }
    if(width < 1300){
      setScale(0.8);
    }
    if(width > 800 && width < 1000){
      setScale(0.5);
    }
    if(width < 500){
      setScale(0.2);
    }
  }, [width])

  return (
    <div>
      <ChatNow/>
      <Container fluid className="resume-section">
        <Particle />
        
        <Row className="resume">
          <Document file={pdf1} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={scale} />
          </Document>
        </Row>
        <Row className="resume">
          <Document file={pdf2} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={scale} />
          </Document>
        </Row>
        <Row className="resume">
          <Document file={pdf3} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={scale} />
          </Document>
        </Row>
        <Row className="resume">
          <Document file={pdf4} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={scale} />
          </Document>
        </Row>
        <Row className="resume">
          <Document file={pdf5} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={scale} />
          </Document>
        </Row>
        <Row className="resume">
          <Document file={pdf6} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={scale} />
          </Document>
        </Row>
        <Row className="resume">
          <Document file={pdf7} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={scale} />
          </Document>
        </Row>
        <Row className="resume">
          <Document file={pdf8} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={scale} />
          </Document>
        </Row>
        <Row className="resume">
          <Document file={pdf9} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={scale} />
          </Document>
        </Row>
        <Row className="resume">
          <Document file={pdf10} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={scale} />
          </Document>
        </Row>

      </Container>
    </div>
  );
}

export default Certificates;

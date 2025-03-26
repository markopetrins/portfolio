import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/Marko Petrina Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [slideDirection, setSlideDirection] = useState('');

  const minSwipeDistance = 50;

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const nextPage = () => {
    if (pageNumber < numPages) {
      setSlideDirection('slide-left');
      setPageNumber(pageNumber + 1);
    }
  };

  const previousPage = () => {
    if (pageNumber > 1) {
      setSlideDirection('slide-right');
      setPageNumber(pageNumber - 1);
    }
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && pageNumber < numPages) {
      nextPage();
    }
    if (isRightSwipe && pageNumber > 1) {
      previousPage();
    }
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <div className="page-indicator">
            Page {pageNumber} of {numPages}
          </div>
          <div className="page-navigation">
            <Button 
              variant="outline-light" 
              onClick={previousPage} 
              disabled={pageNumber <= 1}
              className="nav-button"
            >
              <BsChevronLeft />
            </Button>
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              className="download-button"
            >
              <AiOutlineDownload />
              &nbsp;Download Resume
            </Button>
            <Button 
              variant="outline-light" 
              onClick={nextPage} 
              disabled={pageNumber >= numPages}
              className="nav-button"
            >
              <BsChevronRight />
            </Button>
          </div>

          <div
            className={`pdf-container ${slideDirection}`}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onAnimationEnd={() => setSlideDirection('')}
          >
            <Document
              file={pdf}
              onLoadSuccess={onDocumentLoadSuccess}
              className="d-flex justify-content-center"
            >
              <Page 
                pageNumber={pageNumber} 
                scale={width > 786 ? 0.9 : 0.5}
              />
            </Document>
          </div>
      </Container>
    </div>
  );
}

export default ResumeNew;

import React, { useState, useCallback, useTransition } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/Marko Petrina Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [mouseStart, setMouseStart] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [slideDirection, setSlideDirection] = useState('');
  const [isPending, startTransition] = useTransition();

  const minSwipeDistance = 50;

  const handleResize = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  React.useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const onDocumentLoadSuccess = useCallback(({ numPages }) => {
    setNumPages(numPages);
  }, []);

  const handleAnimationEnd = useCallback(() => {
    setSlideDirection('');
  }, []);

  const handlePageChange = useCallback((direction) => {
    if (slideDirection) return;
    
    startTransition(() => {
      if (direction === 'next' && pageNumber < numPages) {
        setSlideDirection('slide-left');
        setPageNumber(prev => prev + 1);
      } else if (direction === 'prev' && pageNumber > 1) {
        setSlideDirection('slide-right');
        setPageNumber(prev => prev - 1);
      }
    });
  }, [numPages, pageNumber, slideDirection]);

  // Touch handlers with useCallback
  const onTouchStart = useCallback((e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const onTouchMove = useCallback((e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const onTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handlePageChange('next');
    }
    if (isRightSwipe) {
      handlePageChange('prev');
    }
  }, [touchStart, touchEnd, handlePageChange]);

  // Mouse handlers with useCallback
  const onMouseDown = useCallback((e) => {
    setMouseStart(e.clientX);
    setIsDragging(true);
  }, []);

  const onMouseMove = useCallback((e) => {
    if (!isDragging) return;
    
    const distance = mouseStart - e.clientX;
    if (Math.abs(distance) > minSwipeDistance) {
      handlePageChange(distance > 0 ? 'next' : 'prev');
      setIsDragging(false);
    }
  }, [isDragging, mouseStart, handlePageChange]);

  const onMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Add loading indicator when page is changing
  const pageChangeClass = isPending ? 'page-transition' : '';

  return (
    <div>
      <Container fluid className="resume-section">
        <div className="resume-top">
          <div className="page-indicator">
            {isPending ? (
              <span>Loading...</span>
            ) : (
              <span>Page {pageNumber} of {numPages}</span>
            )}
          </div>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            className="download-button"
          >
            <AiOutlineDownload />&nbsp;Download Resume
          </Button>
        </div>

        <div className={`pdf-wrapper ${pageChangeClass}`}>
          {pageNumber > 1 && (
            <div
              className={`nav-arrow left ${isPending ? 'disabled' : ''}`}
              onClick={() => !isPending && handlePageChange('prev')}
            >
              <BsChevronLeft />
            </div>
          )}
          
          <div
            className="pdf-container"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
          >
            <Document
              file={pdf}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={<div className="pdf-loading">Loading PDF...</div>}
              className={`pdf-document ${slideDirection}`}
              onAnimationEnd={handleAnimationEnd}
            >
              <Page 
                pageNumber={pageNumber} 
                scale={width > 786 ? 0.9 : 0.5}
                className="pdf-page"
              />
            </Document>
          </div>

          {pageNumber < numPages && (
            <div
              className={`nav-arrow right ${isPending ? 'disabled' : ''}`}
              onClick={() => !isPending && handlePageChange('next')}
            >
              <BsChevronRight />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}

export default React.memo(ResumeNew);

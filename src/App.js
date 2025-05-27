import React, { Suspense, lazy, useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Background from "./components/Background/Background";
import ScrollToTop from "./components/ScrollToTop";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Lazy load components
const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/About/About"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Resume = lazy(() => import("./components/Resume/ResumeNew"));

function WelcomeModal({ onSelect }) {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(0,0,0,0.7)',
      zIndex: 20000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        background: '#1a0a0d',
        borderRadius: '18px',
        padding: '40px 32px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
        textAlign: 'center',
        minWidth: '320px',
        color: 'white',
      }}>
        <h2 style={{ marginBottom: 20 }}>Welcome! / Dobrodošli!</h2>
        <p style={{ marginBottom: 30 }}>
          Please choose your preferred language before you start navigating the site.<br />
          Molimo odaberite željeni jezik prije nego što počnete koristiti stranicu.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24 }}>
          <button
            style={{
              background: '#C41E3A',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              padding: '12px 28px',
              fontSize: '1.1em',
              cursor: 'pointer',
              fontWeight: 600,
              transition: 'background 0.2s',
            }}
            onClick={() => onSelect('en')}
          >
            <img src={process.env.PUBLIC_URL + '/en-flag.png'} alt="English" style={{ width: 28, height: 18, marginRight: 10, verticalAlign: 'middle' }} /> English
          </button>
          <button
            style={{
              background: '#C41E3A',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              padding: '12px 28px',
              fontSize: '1.1em',
              cursor: 'pointer',
              fontWeight: 600,
              transition: 'background 0.2s',
            }}
            onClick={() => onSelect('hr')}
          >
            <img src={process.env.PUBLIC_URL + '/hr-flag.png'} alt="Hrvatski" style={{ width: 28, height: 18, marginRight: 10, verticalAlign: 'middle' }} /> Hrvatski
          </button>
        </div>
      </div>
    </div>
  );
}

function AppContent() {
  const [load, setLoad] = useState(true);
  const { language, toggleLanguage } = useLanguage();
  const [showWelcome, setShowWelcome] = useState(() => {
    return !localStorage.getItem('portfolio_language');
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleLanguageSelect = (lang) => {
    localStorage.setItem('portfolio_language', lang);
    if (language !== lang) toggleLanguage();
    setShowWelcome(false);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem('portfolio_language');
    if (savedLang && savedLang !== language) {
      toggleLanguage();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {showWelcome && <WelcomeModal onSelect={handleLanguageSelect} />}
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Background />
        <Navbar />
        <ScrollToTop />
        <Suspense fallback={<Preloader load={true} />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter basename="/portfolio">
        <AppContent />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;

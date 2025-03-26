import React from "react";
import Particle from "../Particle";

function Background() {
  return (
    <div style={{
      position: "fixed",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      zIndex: -1,
      overflow: "hidden",
      background: "linear-gradient(135deg, #0a0103 0%, #1a0a0d 100%)"
    }}>
      <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C41E3A" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#911f1f" stopOpacity="0.6" />
          </linearGradient>
          
          <linearGradient id="lavaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ff3b3b" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#C41E3A" stopOpacity="0.8" />
          </linearGradient>
          
          <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
            <feComposite in="SourceGraphic" operator="atop" />
          </filter>

          {/* Add morphing path animation */}
          <path id="blobPath" d="">
            <animate
              attributeName="d"
              dur="20s"
              repeatCount="indefinite"
              values="M400,400 C450,400 450,450 400,450 C350,450 350,400 400,400;
                     M400,400 C500,350 500,500 400,450 C300,400 300,450 400,400;
                     M400,400 C450,400 450,450 400,450 C350,450 350,400 400,400"
            />
          </path>
        </defs>
        
        {/* Glass container with gradient */}
        <rect x="0" y="0" width="1000" height="1000" fill="url(#redGradient)" opacity="0.3" />
        
        {/* Lava blobs with organic movement */}
        <path d="M300,800 Q400,700 500,800 T700,800 T900,800" fill="url(#lavaGradient)" opacity="0.8" filter="url(#blur)">
          <animate
            attributeName="d"
            dur="15s"
            repeatCount="indefinite"
            values="M300,800 Q400,700 500,800 T700,800 T900,800;
                   M300,750 Q400,900 500,750 T700,900 T900,750;
                   M300,800 Q400,700 500,800 T700,800 T900,800"
            calcMode="spline"
            keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
          />
        </path>

        {/* Large central blob */}
        <g transform="translate(500, 500)">
          <path d="M0,100 C50,100 100,50 100,0 C100,-50 50,-100 0,-100 C-50,-100 -100,-50 -100,0 C-100,50 -50,100 0,100" 
                fill="url(#lavaGradient)" 
                opacity="0.8" 
                filter="url(#blur)">
            <animateTransform
              attributeName="transform"
              type="translate"
              dur="25s"
              values="0,0; 0,100; 0,-50; 0,0"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
            />
            <animate
              attributeName="d"
              dur="20s"
              repeatCount="indefinite"
              values="M0,100 C50,100 100,50 100,0 C100,-50 50,-100 0,-100 C-50,-100 -100,-50 -100,0 C-100,50 -50,100 0,100;
                     M0,120 C70,120 120,70 120,0 C120,-70 70,-120 0,-120 C-70,-120 -120,-70 -120,0 C-120,70 -70,120 0,120;
                     M0,100 C50,100 100,50 100,0 C100,-50 50,-100 0,-100 C-50,-100 -100,-50 -100,0 C-100,50 -50,100 0,100"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
            />
          </path>
        </g>

        {/* Smaller floating blobs */}
        <g transform="translate(300, 300)">
          <path d="M0,50 C25,50 50,25 50,0 C50,-25 25,-50 0,-50 C-25,-50 -50,-25 -50,0 C-50,25 -25,50 0,50" 
                fill="url(#lavaGradient)" 
                opacity="0.6" 
                filter="url(#blur)">
            <animateTransform
              attributeName="transform"
              type="translate"
              dur="30s"
              values="0,0; 100,200; -50,100; 0,0"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
            />
          </path>
        </g>

        {/* Add more smaller blobs with different paths and timings */}
        <g transform="translate(700, 400)">
          <path d="M0,30 C15,30 30,15 30,0 C30,-15 15,-30 0,-30 C-15,-30 -30,-15 -30,0 C-30,15 -15,30 0,30" 
                fill="url(#lavaGradient)" 
                opacity="0.7" 
                filter="url(#blur)">
            <animateTransform
              attributeName="transform"
              type="translate"
              dur="22s"
              values="0,0; -50,150; 50,-100; 0,0"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
            />
          </path>
        </g>
      </svg>
      <Particle />
    </div>
  );
}

export default Background; 
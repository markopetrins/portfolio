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
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
          </filter>
          
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
            <feComposite in="SourceGraphic" operator="over" />
          </filter>
        </defs>
        
        {/* Lava Lamp Animation - Moved down by adjusting cy values */}
        <g transform="translate(0, 200)"> {/* Move everything down */}
          {/* Lava Lamp Glass Container */}
          <rect x="0" y="800" width="1000" height="200" fill="url(#redGradient)" opacity="0.7" />
          
          {/* Lava Blobs with enhanced appearance - Adjusted cy values */}
          <circle cx="300" cy="800" r="80" fill="url(#lavaGradient)" opacity="0.8" filter="url(#blur)">
            <animate attributeName="cy" values="800;400;800" dur="25s" repeatCount="indefinite" />
            <animate attributeName="r" values="80;100;80" dur="15s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="500" cy="900" r="100" fill="url(#lavaGradient)" opacity="0.8" filter="url(#blur)">
            <animate attributeName="cy" values="900;500;900" dur="30s" repeatCount="indefinite" />
            <animate attributeName="r" values="100;120;100" dur="20s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="200" cy="850" r="70" fill="url(#lavaGradient)" opacity="0.8" filter="url(#blur)">
            <animate attributeName="cy" values="850;550;850" dur="28s" repeatCount="indefinite" />
            <animate attributeName="r" values="70;90;70" dur="18s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="400" cy="700" r="90" fill="url(#lavaGradient)" opacity="0.8" filter="url(#blur)">
            <animate attributeName="cy" values="700;450;700" dur="23s" repeatCount="indefinite" />
            <animate attributeName="r" values="90;110;90" dur="16s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="600" cy="750" r="95" fill="url(#lavaGradient)" opacity="0.8" filter="url(#blur)">
            <animate attributeName="cy" values="750;400;750" dur="27s" repeatCount="indefinite" />
            <animate attributeName="r" values="95;115;95" dur="17s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="150" cy="650" r="60" fill="url(#lavaGradient)" opacity="0.8" filter="url(#blur)">
            <animate attributeName="cy" values="650;350;650" dur="26s" repeatCount="indefinite" />
            <animate attributeName="r" values="60;80;60" dur="19s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
      <Particle />
    </div>
  );
}

export default Background; 
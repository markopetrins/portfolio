import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 2000,
            },
          },
          color: {
            value: "#ffffff"
          },
          line_linked: {
            enable: false,
            opacity: 0.02,
            color: {
              value: "#ffffff"
            }
          },
          move: {
            direction: "right",
            speed: 0.04,
          },
          size: {
            value: 1.5,
          },
          opacity: {
            value: 0.3,
            anim: {
              enable: true,
              speed: 0.8,
              opacity_min: 0.03,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;

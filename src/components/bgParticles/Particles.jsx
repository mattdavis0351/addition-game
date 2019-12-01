import React from "react";
import Particles from "react-particles-js";
import "./Particles.css";

function BackgroundParticles() {
  return (
    <Particles
      canvasClassName="bgparticles"
      params={{
        particles: {
          number: {
            value: 40,
            density: {
              enable: true,
              value_area: 1973
            }
          },
          color: {
            value: "#ffffff"
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#3e3f400"
            },
            polygon: {
              nb_sides: 6
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 0.1,
            random: true,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 20,
            random: true,
            anim: {
              enable: false,
              speed: 80,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: false,
            distance: 300,
            color: "#ffffff",
            opacity: 0.4,
            width: 2
          },
          move: {
            enable: true,
            speed: 3.2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "bubble"
            },
            onclick: {
              enable: false,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 800,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 30,
              size: 14,
              duration: 2,
              opacity: 0.18,
              speed: 3
            },
            repulse: {
              distance: 400,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      }}
    />
  );
}

export default BackgroundParticles;

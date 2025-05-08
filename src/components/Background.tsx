import type { Engine } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect } from "react";
import { loadFull } from "tsparticles";

export const Background = () => {

  useEffect(() => {
    initParticlesEngine(async (e: Engine) => {
      await loadFull(e);
    });
  }, [])

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: {
          zIndex: -1,
        },
        background: {
          color: {
            value: "#000000",
          },
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: "#ffffff",
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 0.35,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 200,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 0.3, max: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

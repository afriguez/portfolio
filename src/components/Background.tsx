import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
export const Background = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          zIndex: -1,
        },
        background: {
          color: {
            value: "#191919",
          },
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: "#777777",
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
            speed: 0.15,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 4000,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 7 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

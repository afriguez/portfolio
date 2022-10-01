import { TechStack } from "./TechStack";

export const About = () => {
  return (
    <div className="text-secondary">
      <p>
        Fer L. 18 years old. &ensp;&ensp;&ensp;
        <span className="text-[0.75rem] font-bold">Español & English</span>
        <br />
        Self-taught software & web developer.
        <br />
        <br />
        Docker, Linux & Realtime systems.
      </p>
      <br />
      <p>Technologies I use the most:</p>
      <TechStack />
    </div>
  );
};

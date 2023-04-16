import { TechStack } from "./TechStack";

export const About = () => {
  return (
    <div className="text-secondary">
      <p>
        Fer L. 19 years old. &ensp;&ensp;&ensp;
        <span className="text-[0.75rem] font-bold">Español & English</span>
        <br />
        Software & web developer.
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

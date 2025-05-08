import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { TechStack } from "./TechStack";

export const About = () => {

  const [stacks, setStacks] = useState<Array<string | number>>([
    "Docker, Linux & Real-time systems.", 4000,
    "Elixir, Golang, TypeScript, F# & C#.", 4000,
    "Scalable & highly available real-time systems.", 4000,
    "PostgreSQL, MongoDB & Redis.", 4000,
    "Cloud infrastructure with Docker, Linux, Bash & AWS.", 4000,
    "Phoenix framework, .Net, Flutter, React.", 4000,
  ])

  const fetchStacks = () => {
    fetch("https://api.afriguez.com/v1/about/stacks").then((res) =>
      res.json().then((json) => {
        console.log(json.sucess);
        if (json.success) {
          setStacks(formatStacks(json.data.stacks));
        }
      })
    );
  }

  useEffect(() => {
    if (!stacks.length) {
      fetchStacks();
    }
    // eslint-disable-next-line
  }, [stacks.length])

  const formatStacks = (stacks: string[]): Array<string | number> => {
    let formattedStacks = [];
    let time = 2000;
    if (stacks.length) {
      for (let i = 0; i < stacks.length; i++) {
        formattedStacks.push(stacks[i]);
        formattedStacks.push(time);
      }
    }
    return formattedStacks
  }

  return (
    <div className="text-secondary">
      <div>
        <p>
          Fer L. 21 years old. &ensp;&ensp;
          <span className="text-[0.75rem] font-bold">🗣️ Español & English</span>
          <br />
          I like fixing things... and Furina (Not the snake)
          <br />
          Working at <a
            href="https://acacia.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acacia Dev
          </a>
          <br />
          <br />
          {stacks.length &&
            <TypeAnimation
              sequence={stacks}
              wrapper="span"
              speed={75}
              repeat={Infinity}
              style={{ wordBreak: "normal" }}
            />
          }
        </p>
        <br />
        <p>Technologies I use the most:</p>
      </div>
      <TechStack />
    </div>
  );
};

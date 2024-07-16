import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { TechStack } from "./TechStack";

export const About = () => {

  const [stacks, setStacks] = useState<Array<string | number>>([])

  const fetchStacks = () => {
    fetch("https://api.afriguez.com/v1/about/stacks").then((res) =>
      res.json().then((json) => {
        json.success
          ? setStacks(formatStacks(json.data.stacks))
          : setStacks(["Docker, Linux & Realtime Systems.", 10000])
      }
      )
    )
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
      <div className="w-[350px]">
        <p>
          Fer L. 20 years old. &ensp;&ensp;&ensp;
          <span className="text-[0.75rem] font-bold">Español & English</span>
          <br />
          Software & web developer.
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

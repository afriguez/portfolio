import {
  ElixirIcon,
  ReactIcon,
  RedisIcon,
  TypescriptIcon,
} from "./Icons";
import { TechCard } from "./TechCard";

export const TechStack = () => {
  return (
    <div className="m-[20px] flex gap-[15px] max-w-[500px] flex-col justify-center">
      <TechCard
        name="Elixir"
        desc="Massive scale realtime systems"
        color="#462359"
        icon={<ElixirIcon />}
        url="https://elixir-lang.org/"
      />
      <TechCard
        name="TypeScript"
        desc="Adds additional syntax to JavaScript"
        color="#3178C6"
        icon={<TypescriptIcon />}
        url="https://www.typescriptlang.org/"
      />
      <TechCard
        name="Redis"
        desc="In-memory data store"
        color="#D82C20"
        icon={<RedisIcon />}
        url="https://redis.io"
      />

      <TechCard
        name="React"
        desc="Build stateless & stateful UIs"
        color="#20232A"
        icon={<ReactIcon />}
        url="https://reactjs.org/"
      />
    </div>
  );
};

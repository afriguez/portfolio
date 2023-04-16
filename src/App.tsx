import { useLanyardWS } from "use-lanyard";
import { About } from "./components/About";
import { Background } from "./components/Background";
import { Discord } from "./components/Discord";
import { Footer } from "./components/Footer";
import { Projects } from "./components/Projects";
import { TopBar } from "./components/TopBar";

const DISCORD_ID = "361159575036231691";

export const App = () => {
  const lanyard = useLanyardWS(DISCORD_ID);

  return (
    <div className="flex h-screen flex-col justify-between">
      <TopBar discordUser={lanyard?.discord_user} />
      <div className="md:px-30 primary flex flex-wrap justify-around px-10 py-10">
        <About />
        <div className="flex flex-col items-center justify-center">
          <Discord lanyard={lanyard} />
          <Projects />
        </div>
      </div>
      <Footer spotify={lanyard?.spotify} />
      <Background />
    </div>
  );
};

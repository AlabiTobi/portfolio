import React from "react";
import tobi from "../assets/tobi.JPG";
// import { BsArrowRightCircle } from "react-icons/bs";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div
      name="Home"
      className="h-screen w-full bg-gradient-to-b from-blue-900 to-blue-400 pt-36"
    >
      <section className="max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-4 xs:px-10 md:px-16 md:flex-row">
        <div className="flex flex-col justify-center h-full w-full">
          <span className="text-3xl xs:text-4xl md:text-6xl font-bold text-white">
            Tobi Alabi: <br />
            <span className="text-2xl xs:text-3xl md:text-5xl">
              {" "}
              Frontend Engineer...{" "}
            </span>
            <br />
            <span className="text-xl"> && </span>
          </span>
          <p className="h-6 text-white text-xl font-bold max-w-md">
            <Typewriter
              words={[
                " React Developer",
                // "Project Manager",
                // "Program Manager",
                // "General Manager",
              ]}
              loop={Infinity}
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1000}
            />
          </p>
        </div>

        <div>
          <img
            src={tobi}
            alt="my profile"
            className="rounded-lg md:rounded-full my-10 sm:my-0 mx-auto w-2/3"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;

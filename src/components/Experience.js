import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Experience = () => {
  return (
    <>
      <div
        name="Experience"
        className="w-full h-full md:h-screen bg-gradient-to-b from-blue-400 to-blue-900 text-white"
      >
        <section
          className="max-w-screen-xl p-4 sm:p-12 mx-auto flex flex-col justify-center w-full h-full"
          data-aos="fade-in"
          data-aos-duration="2000"
        >
          <div className="pb-1 md:pb-8">
            <p className="text-2xl xs:text-4xl font-bold inline border-l-4 pl-6">
              <Typewriter
                words={["Experience..."]}
                loop={Infinity}
                typeSpeed={100}
                deleteSpeed={100}
                //   delaySpeed={1000}
              />
            </p>
          </div>

          <div className="text-sm xs:text-xl">
            <p className="mt-1 lg:mt-10">
              A Frontend Engineer at{" "}
              <span>
                <a
                  href="https://kingcabana.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-800 font-bold"
                >
                  King Cabana Limited{" "}
                </a>
              </span>
              - a Tech start up in the Event Management space, and worked with the product development team to build{" "}
              <span>
                <a
                  href="https://stafftribes.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-800 font-bold"
                >
                  stafftribes.com{" "}
                </a>
              </span>
              (a social application) at{" "}
              <span>
                <a
                  href="https://www.edtify.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-800 font-bold"
                >
                  Edtify{" "}
                </a>
              </span>
              - an IT, Educational aspect and Explore theme company in Nigeria and United Kingdom; utilising
              React.js, Meteor.js, HTML, CSS, JavaScript, Redux and other frameworks to develop
              responsive UI, whilst integrating client to server side.
            </p>
            <br />
            <p>
              With vast experience in Tech, Tobi Alabi has worked as a
              Frontend Engineer at{" "}
              <span>
                <a
                  href="https://dream-project.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-800 font-bold"
                >
                  Dream Project
                </a>
              </span>
              , a foremost IT company in Nigeria. The zeal to impact knowledge
              led him Invest in the future of a student through mentoring, 
              volunteering, and more! Join us in expanding educational access for students, 
              whilst maintaining 50+ computer systems.
            </p>
            <br />
            <p>
              A highly meticulous individual, with skills in the areas for Developer, he was a Freelance Developer for a Sms company,{" "}
              <span>
                <a
                  href="https://www.sendchamp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-800 font-bold"
                >
                  Sendchamp
                </a>
              </span>
              Sendchamp is the most seamless messaging platform for growing businesses. Send messages to your 
              customers across WhatsApp, SMS, email, and voice - all with zero coding skills to get started., 
              where he ensured organisational growth and attracted partnerships with over 19 companies. <br />
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Experience;

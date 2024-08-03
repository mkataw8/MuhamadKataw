import React from "react";
import back from "../assets/back.jpeg";
import front from "../assets/front.jpeg";
import other from "../assets/other.png";
const Skills = () => {
  return (
    <div
      id="skills"
      className="bg-slate-100 pt-5 pb-14 flex-col justify-center items-center"
    >
      <h1 className="text-4xl font-bold text-center mb-6 text-sky-950">
        Technical Skills
      </h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Front-End Skills */}
          <div className="bg-slate-200 p-6 rounded-lg shadow-lg text-sky-900 transition-transform transform hover:scale-105 duration-700">
            <h2 className="text-2xl font-semibold mb-4">Front-End</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Tailwind CSS</li>
              {/* Add more skills as needed */}
            </ul>
            <div className="flex justify-center mt-4">
              <img
                src={front}
                alt="Front-End"
                className="w-24 h-24 rounded-full"
              />
            </div>
          </div>

          {/* Back-End Skills */}
          <div className="bg-slate-200 p-6 rounded-lg shadow-lg text-sky-900 transition-transform transform hover:scale-105 duration-700">
            <h2 className="text-2xl font-semibold mb-4">Back-End</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>SQL</li>
              <li>RESTful APIs</li>
              {/* Add more skills as needed */}
            </ul>
            <div className="flex justify-center mt-4">
              <img
                src={back}
                alt="Back-End"
                className="w-24 h-24 rounded-full"
              />
            </div>
          </div>

          {/* Other Skills */}
          <div className="bg-slate-200 p-6 rounded-lg shadow-lg text-sky-900 transition-transform transform hover:scale-105 duration-700">
            <h2 className="text-2xl font-semibold mb-4">Other</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Git</li>
              <li>Docker</li>
              <li>CI/CD</li>
              <li>Agile Methodologies</li>
              <li>UI/UX Design</li>
              {/* Add more skills as needed */}
            </ul>
            <div className="flex justify-center mt-4">
              <img src={other} alt="Other" className="w-24 h-24 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

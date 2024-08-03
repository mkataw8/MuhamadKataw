import React from "react";
import portrait from "../assets/portrait.jpeg";
import "./About.css"; // Ensure this file is imported

const About = () => {
  return (
    <div
      id="aboutme"
      className="pb-20 rounded-lg animate-fadeIn mt-10 flex flex-col items-center justify-center p-4 background-gif"
    >
      <div className="w-full max-w-3xl bg-white bg-opacity-95 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start p-8">
        {/* Profile Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0">
          <img
            src={portrait} // Replace with your image path
            alt="Profile"
            className="w-40 h-40 md:w-60 md:h-60 rounded-full border-4 border-black"
          />
        </div>
        <div className="w-full md:w-1/2 text-black">
          <h1 className="text-3xl font-bold mb-4">About Me</h1>
          <p className="text-lg mb-4">
            Hi, I'm Muhamad Kataw, a passionate developer with a love for
            creating amazing web experiences. I specialize in front-end
            development and have experience with various technologies and
            frameworks.
          </p>
          <p className="text-lg">
            I enjoy solving complex problems and continually learning new skills
            to stay updated with the latest trends in technology. When I'm not
            coding, you can find me exploring new places or reading a good book.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

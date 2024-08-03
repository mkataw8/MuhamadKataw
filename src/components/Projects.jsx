import React from "react";
import journal from "../assets/journal.jpeg";

const projects = [
  {
    name: "P&L Journal",
    image: journal, // Replace with the actual image URL
    liveCodeLink: "https://nextjs-app-rust-two.vercel.app",
    githubLink: "https://github.com/mkataw8/nextjs-app",
  },
  {
    name: "Project 2",
    image: journal, // Replace with the actual image URL
    liveCodeLink: "https://live-code-link.com/project2",
    githubLink: "https://github.com/username/project2",
  },

  {
    name: "Project 3",
    image: journal, // Replace with the actual image URL
    liveCodeLink: "https://live-code-link.com/project2",
    githubLink: "https://github.com/username/project2",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div
      id="projects"
      className=" bg-gradient-to-t from-slate-800  p-10 h-[auto]"
    >
      <h2 className="text-4xl font-bold mb-4 pl-40 text-white ">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-200 p-6 rounded-lg shadow-md text-sky-700 border-r-2 border-r-sky-700 border-t-0 border-l-0 border-b-0 flex flex-col items-center"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full shadow-lg sha h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-center">
              {project.name}
            </h3>
            <div className="flex space-x-4 mt-2">
              <a
                href={project.liveCodeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Live Code
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

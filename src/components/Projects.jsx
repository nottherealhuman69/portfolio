import React, { useState } from 'react';
import { PROJECTS } from '../constants';

const Projects = () => {
  const [fullscreenVideo, setFullscreenVideo] = useState(null);

  return (
    <div id="Projects" className="border-b border-neutral-900 pb-16">
      <h2 className="my-20 text-center text-4xl font-bold text-white">Projects</h2>

      {PROJECTS.map((project, index) => (
        <div key={index} className="flex flex-col lg:flex-row items-center mb-16">
          {/* Video Section */}
          <div className="w-full lg:w-2/3 relative">
            <video
              src={project.video}
              autoPlay
              loop
              muted
              className="w-full h-auto rounded-xl transition-transform duration-300 group-hover:scale-105 cursor-pointer"
              onClick={() => setFullscreenVideo(project.video)}
            />
            <p className="text-center text-sm mt-2 text-neutral-400">Click for full video</p>
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/3 p-6">
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            <p className="text-neutral-400 mt-3">{project.description}</p>
            <div className="mt-4">
              {project.technologies.map((tech, index) => (
                <span key={index} className="mr-2 rounded bg-black/60 px-3 py-1 text-xs text-purple-400">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-semibold transition duration-300"
            >
              View Project
            </a>
          </div>
        </div>
      ))}

      {/* Fullscreen Video Modal */}
      {fullscreenVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <video src={fullscreenVideo} controls autoPlay className="w-11/12 max-w-4xl rounded-lg shadow-lg" />
          <button
            className="absolute top-5 right-5 text-white text-3xl font-bold cursor-pointer"
            onClick={() => setFullscreenVideo(null)}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;

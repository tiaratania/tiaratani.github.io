import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <a
            href={project.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
            style={{ backgroundColor: '#1e2324' }} // Apply the background color here
        >
            <img className="w-full h-48 object-cover" src={project.image} alt={project.title} />
            <div className="px-6 py-4">
                <h3 className="font-bold text-xl mb-2 text-gray-300">{project.title}</h3>
                <p className="text-sm text-gray-400">{project.date}</p>
                <p className="text-gray-400 text-base">{project.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {project.techStack.map((tech, index) => (
                    <span
                        key={index}
                        className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2"
                        style={{ backgroundColor: '#24292a' }}
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </a>
    );
};

export default ProjectCard;

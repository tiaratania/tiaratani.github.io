import React, { useEffect, useState } from 'react';
import Navbar from './components/navBar';
import JobExperience from './components/jobExperience';
import ProjectCard from './components/project';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function App() {
  const [disableAnimations, setDisableAnimations] = useState(false);

  useEffect(() => {
    AOS.init({

      duration: 800, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
      once: false, // Allow animations to happen more than once
      offset: 120, // Offset value in pixels to delay the animation
    });
    document.title = "Tiara Tania";
  }, []);

  // Handle Navbar Link Click
  const handleLinkClick = () => {
    setDisableAnimations(true); // Disable animations
    setTimeout(() => {
      setDisableAnimations(false); // Re-enable animations after 500ms (adjust if needed)
    }, 500);
  };
  // Job Experience
  const jobExperiences = [
    {
      companyImage: "",
      companyName: 'Singapore Institute of Technology',
      jobTitle: 'Student Tutor for Programming Fundamentals (Python, C)',
      date: 'Sep 2024 - Present',
      description: 'Assist students with Python and C programming tutorials',
      skills: ['Python', 'C Programming Language'],
    }

  ];

  const projects = [




    {
      title: 'MediVR',
      description: 'A Unity-built mobile app designed to help healthcare students transition from school to real-world clinical settings through user-centered experiments and a mixed reality medical simulator.',
      image: "",
      techStack: ['Unity', 'AR/VR'],
      videoUrl: ""
    },
    {
      title: 'SignLingo',
      description: 'A signs language-learning mobile application that serves as a dynamic educational tool, providing students with real-time feedback and practical exercises.',
      image: "",
      techStack: ['Kotlin', 'MediaPipe', "Computer Vision"],
      videoUrl: ""
    },


  ];

  return (

    <div className="bg-gray-800 min-h-screen text-gray-400">
      <Navbar onLinkClick={handleLinkClick} /> {/* Pass the click handler to Navbar */}
      <div className="flex flex-col items-center justify-center mt-20">

        <section
          id="about"
          className="w-full max-w-5xl min-h-screen flex items-center justify-center p-8 rounded-lg shadow-lg"
          data-aos={!disableAnimations ? "fade-up" : ""}
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold">About Me</h1>
            <p className="mt-4">Hello</p>
          </div>
        </section>

        <section
          id="experience"
          className="w-full max-w-5xl p-8 rounded-lg shadow-lg mt-8"
          data-aos={!disableAnimations ? "fade-left" : ""}
        >
          <h1 className="text-4xl font-bold text-center mb-8">Experiences</h1>
          {jobExperiences.map((experience, index) => (
            <JobExperience
              key={index}
              companyImage={experience.companyImage}
              companyName={experience.companyName}
              jobTitle={experience.jobTitle}
              date={experience.date}
              description={experience.description}
              skills={experience.skills}
            />
          ))}
        </section>

        <section
          id="projects"
          className="w-full max-w-5xl p-8 rounded-lg shadow-lg mt-8"
          data-aos={!disableAnimations ? "fade-right" : ""}
        >
          <h1 className="text-4xl font-bold text-center">Projects</h1>

          {/* Project Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 mt-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>


      </div>
    </div>
  );
}

export default App;
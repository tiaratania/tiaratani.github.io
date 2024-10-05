import React, { useEffect, useState } from 'react';
import Navbar from './components/navBar';
import JobExperience from './components/jobExperience';
import ProjectCard from './components/project';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import medivr from './assets/medivr.jpeg';
import dsachatbot from './assets/dsachatbot.jpg';
import signlingo from './assets/signlingo.jpg';
import charitycentral from './assets/charitycentral.jpg';
import vishing from './assets/vishing.jpg';
import oop from './assets/oop.jpg';
import python from './assets/python.png';

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
      jobTitle: 'Student Assistant for Programming Fundamentals (Python, C)',
      date: 'Sep 2024 - Present',
      description: 'Supported Professors during tutorials for undergraduate students.',
      skills: [''],
    },
    {
      companyImage: "",
      companyName: 'International Business Machines Corporation (IBM)',
      jobTitle: 'Junior Full-Stack Developer / Business Analyst',
      date: 'May 2021 - July 2022',
      description: 'Drove digital transformation and cloud migration for an Agile public sector project, leading it to a successful Go-Live. Developed MySQL scripts for data migration and assisted in building the website using AngularJS. Facilitated UAT, proposed system designs to meet user needs, and streamlined productivity by managing bug tracking and feature requests through JIRA.',
      skills: [''],
    },
    {
      companyImage: "",
      companyName: 'Websparks Pte Ltd',
      jobTitle: '.Net Developer',
      date: 'Mar 2020 - Sep 2020',
      description: 'Troubleshot and resolved web application issues, developed front-end features using C# and JavaScript in VS Code, and conducted functional testing for web apps.',
      skills: [''],
    },
    {
      companyImage: "",
      companyName: 'Eaglelastic Productions',
      jobTitle: 'Web Developer (Freelance)',
      date: '2018 - 2019',
      description: 'Built websites with CMS for clients and integrated an e-commerce plugin',
      skills: [''],
    }

  ];

  const projects = [

    {
      title: 'DSA Learning Chatbot',
      date: 'October 2024',
      description: 'Developing an AI-driven chatbot to enhance the learning experience for students studying Data Structures and Algorithms. Utilised prompt engineering and Retrieval-Augmented Generation (RAG).',
      image: dsachatbot,
      techStack: ['AI', 'Prompt Engineering', 'RAG'],
      videoUrl: ""
    },
    {
      title: 'SignLingo',
      date: 'Mar 2024',
      description: 'A signs language-learning mobile application that serves as a dynamic educational tool, providing students with real-time feedback and practical exercises.',
      image: signlingo,
      techStack: ['Kotlin', 'MediaPipe', "Computer Vision"],
      videoUrl: "https://youtu.be/hXr0NjCvWZY"
    },

    {
      title: 'CharityCentral',
      date: 'Mar 2024',
      description: 'A web application built to show understanding and importance of building a secure software, and the techniques and tools that can be applied at each stage of the SDLC such as CI/CD Jenkins.',
      image: charitycentral,
      techStack: ['Django', 'ReactJS', "CI/CD", "Jenkins"],
      videoUrl: ""
    },

    {
      title: 'MediVR',
      date: 'Oct 2023',
      description: 'A Unity-built mobile app designed to help healthcare students transition from school to real-world clinical settings through user-centered experiments and a mixed reality medical simulator.',
      image: medivr,
      techStack: ['Unity', 'AR/VR'],
      videoUrl: "https://youtu.be/iiyqqpd6z7I"
    },
    {
      title: 'Advanced Vishing Defence System for Mobile Phone',
      date: 'Sep 2023',
      description: 'Developed a system using machine learning to detect and prevent fraudulent phone calls in real-time,utilising data modeling and analytic algorithms to identify vishing patterns efficiently.',
      image: vishing,
      techStack: ['DSA', 'Machine Learning'],
      videoUrl: "https://youtu.be/tZwPt3VlwWc"
    },
    {
      title: '2D Space Shooter Game',
      date: 'Mar 2023',
      description: 'Developed a 2D multi-level wave-survival shooter game engine designed to educate children on space exploration. Utilised design patterns for game engine allowing flexible scene management, customizable collision properties, and player settings.',
      image: oop,
      techStack: ['Java', 'OOP'],
      videoUrl: "https://youtu.be/iyQvH8d9Dcs"
    },
    {
      title: 'Employee Attrition for Healthcare',
      date: 'Sep 2022',
      description: 'Analysed factors affecting healthcare worker attrition using descriptive analysis and classification models. Utilised a Django web framework focusing on key elements like overtime, monthly income, and environment satisfaction to deduce actionable insights for workforce retention.',
      image: python,
      techStack: ['Python', 'Django', 'Data Analysis'],
      videoUrl: ""
    },




  ];

  return (

    <div style={{ backgroundColor: '#1d2122' }} className="min-h-screen text-gray-400">
      <Navbar onLinkClick={handleLinkClick} /> {/* Pass the click handler to Navbar */}
      <div className="flex flex-col items-center justify-center mt-20">

        <section
          id="about"
          className="w-full max-w-5xl min-h-[50vh] flex items-center justify-center p-4 rounded-lg shadow-lg"
          style={{ backgroundColor: '#1e2324' }}
          data-aos={!disableAnimations ? "fade-up" : ""}
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold text-center mb-8" style={{ color: '#a98a98' }}>Tiara Tania Rahim</h1>
            <p className="mt-4">A passionate third-year Software Engineering undergraduate with hands-on experience in software development and emerging technologies. I am eager to expand my perspective and contribute my skills in a dynamic environment through an internship! I am enthusiastic about digital transformation and committed to continuous learning.</p>
          </div>
        </section>


        <section
          id="experience"
          className="w-full max-w-5xl p-8 rounded-lg shadow-lg mt-8"
          style={{ backgroundColor: '#1e2324' }}
          data-aos={!disableAnimations ? "fade-left" : ""}
        >
          <h1 className="text-4xl font-bold text-center mb-8" style={{ color: '#a98a98' }}>Experiences</h1>

          {jobExperiences.map((experience, index) => (
            <div key={index} className="mb-8"> {/* Add a margin-bottom to create space */}
              <JobExperience
                companyImage={experience.companyImage}
                companyName={experience.companyName}
                jobTitle={experience.jobTitle}
                date={experience.date}
                description={experience.description}
                skills={experience.skills}
              />
            </div>
          ))}
        </section>



        <section
          id="projects"
          className="w-full max-w-5xl p-8 rounded-lg shadow-lg mt-8"
          style={{ backgroundColor: '#1e2324' }}
          data-aos={!disableAnimations ? "fade-right" : ""}
        >
          <h1 className="text-4xl font-bold text-center mb-8" style={{ color: '#a98a98' }}>Projects</h1>

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
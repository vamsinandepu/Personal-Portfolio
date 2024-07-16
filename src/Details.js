import logogradient from "./assets/logo.png";
import logo from "./assets/logo2.png";
import profile from "./assets/profile.jpg";
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import c from "./assets/techstack/c.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import java from "./assets/techstack/java.png";
import jquery from "./assets/techstack/jquery.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import mongodb from "./assets/techstack/mongodb.png";
import python from "./assets/techstack/python.png";
import projectImage1 from "./assets/projects/project 1.jpg";
import projectImage2 from "./assets/projects/project 2.jpg";
import projectImage3 from "./assets/projects/project 3.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Vamsi_Nandepu",
  tagline: "Jr. Frontend Developer",
  img: profile,
  about: `I am a passionate Frontend Developer with a keen eye for creating dynamic, responsive user interfaces. I am seeking a position in a forward-thinking company where I can contribute to innovative web projects and continue to grow in my career.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/nandepu-rama-venkata-durga-vamsi-046a17249/",
  github: "https://github.com/vamsinandepu",
  leetcode: "https://leetcode.com/u/vamsinandepu/",
  instagram: "https://www.instagram.com/vam_si_03/?hl=en",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "AI-ML Virtual Internship",
    Company: `AWS`,
    Location: "Online",
    Type: "Intern",
    Duration: "May 2023 - July 2023",
  },
  {
    Position: "Data Science Internship",
    Company: `Oasis Infobyte`,
    Location: "Online",
    Type: "Intern",
    Duration: "May 2021",
  },
  // {
  //   Position: "Internship",
  //   Company: `Company Name here`,
  //   Location: "Bengaluru",
  //   Type: "Internship",
  //   Duration: "Sep 2021 - Dec 2021",
  // },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "B.Tech in Artificial Intelligence And Data Science",
    Company: "Vishnu Institute Of Technology",
    Location: "Bhimavaram",
    Type: "8.89",
    Duration: "Nov 2021 - May 2025",
  },
  {
    Position: "Intermediate",
    Company: `Aditya Junior College`,
    Location: "Amalapuram",
    Type: "963",
    Duration: "Jun 2019 - May 2021",
  },
  {
    Position: "High School",
    Company: `Wisdom EM Talent School`,
    Location: "Bandarulanka",
    Type: "9.7",
    Duration: "Jun 2018 - Apr 2019",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  c: c,
  java: java,
  jquery: jquery,
  bootstrap: bootstrap,
  vscode: vscode,
  mongodb: mongodb,
  python: python,
//   git: git,
  github: github,
//   figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Movie Browser",
    image: projectImage1,
    description: `The Movie Browser application allows users to explore a vast database of movies, featuring detailed information, trailers, and songs from related movies. Users can easily search for movies and enjoy an immersive browsing experience. Each movie detail page includes the synopsis, cast, embedded trailers, and a list of songs.`,
    techstack: "HTML/CSS, React, Bootstrap, API's",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Vamsi's Portfolio",
    image: projectImage2,
    description: `My portfolio is a dynamic single-page application built with React, HTML, and CSS, showcasing my skills and projects. It features a smooth-scrolling navbar, profile card, educational timeline, contact details, and a section for highlighted projects like my recent Virtual Internships`,
    techstack: "HTML/CSS, React, Bootstrap",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Plant Leaf Disease Detection",
    image: projectImage3,
    description: `Plant leaf disease detection is a machine learning-powered system that identifies diseases affecting plants based on leaf images. It utilizes image processing techniques and deep learning models to analyze visual symptoms, aiding in early detection and treatment to enhance crop yield and plant health management.`,
    techstack: "Machine Learning, Pyhton",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "vamsinandepu@gmail.com",
  phone: "+91 96761 18854",
};
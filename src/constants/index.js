import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate full stack developer and problem solver with a strong foundation in building scalable web and mobile applications. I have honed my skills in front-end technologies like React, Next.js and Flutter, as well as back-end technologies like Node.js, MySQL, Firebase and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;


export const PROJECTS = [
  {
    title: "MediAssist: Smart Medication Health Monitoring System",
    image: project1,
    description:
      "Developed a Flutter-based IoT app for medication adherence and real-time health monitoring, integrating four key\
        sensors (temperature, SpO2, GSR, and fall detection) with 92% accuracy.",
    technologies: [ "Flutter","Firebase", "Node.js", "MongoDB"],
  },
  {
    title: " AgriFly: AI-Powered Drone for Precision Agriculture",
    image: project2,
    description:
      " Built an AI-powered drone system for precision agriculture in apple orchards, integrating aerial and ground data to\
        monitor tree health, detect pests, and manage nutrients effectively.",
    technologies : [
  "Python",
  "Flask",
  "OpenCV",
  "TensorFlow",
  "Node.js",
  "MongoDB",
    ]
,
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Express", "MongoDB"],
  },
];

export const CONTACT = {
  address: "Gunupur, Odisha ",
  phoneNo: "+91 9668 111 475 ",
  email: "ajitandavarapu1@gmail.com",
};

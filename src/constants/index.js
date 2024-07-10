import project1 from "../assets/projects/project-1.jpeg";
import project21 from "../assets/projects/project-21.png";
import project3 from "../assets/projects/project-3.jpeg";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.jpeg";
import project6 from "../assets/projects/project-6.png";
import project7 from "../assets/projects/project-7.png";

export const HERO_CONTENT = `
Hey there! I'm a dynamic MERN stack developer by day
and a hip-hop enthusiast by night. I live by the rhythm
of the beat and the hum of the code. My journey in tech
started with a curiosity for how things work, evolving
into a love for crafting robust and scalable web
applications.

Passionate about problem-solving and competitive programming,
I'm always looking for new challenges to sharpen my skills
and push the boundaries of what's possible.
`;



export const ABOUT_TEXT = `I am equally fascinated by my exploration into blockchain technology, which offers transformative potential across diverse industries due to its decentralized nature and robust cryptographic security. Essential tools such as Metamask, Truffle, and Ganache play integral roles in this exploration: Metamask, a browser extension, facilitates seamless interaction with Ethereum blockchain applications, ensuring secure management of wallets and digital assets. Truffle serves as a versatile development framework for Ethereum, streamlining processes from smart contract creation to testing and deployment. Ganache further enhances the development experience by providing a local blockchain environment with simulated accounts, enabling rapid prototyping and testing. This exploration deepens my understanding of how blockchain technology, coupled with advanced tools, drives innovation and unlocks new possibilities in today's digital landscape.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Research Intern",
    company: "NIT Mizoram",
    description: `Enhancing Traffic Flow Monitoring and Anomaly Detection using Collaborative UAVs Equipped with Lightweight Object Detection Models.`,
    technologies: ["YOLO", "PyTorch", "OpenCV", "RESTful APIs"],
  },
  {
    year: "2024 - Present",
    role: "Internship Trainee",
    company: "Ministry of Electronics and Information Technology",
    description: `At STPI, I manage government-incubated startups, focusing on exploring blockchain technology applications and enhancing expertise in blockchain development and implementation for innovative solutions.`,
    technologies: ["Hyperledger", "Solidity", "Python", "Firebase","Truffle", "Ganache"],
  },
  {
    year: "2024 - Present",
    role: "Research & Development Intern",
    company: "Boxfarming Technologies",
    description: `Developed a web app using Flask, TensorFlow, and Keras for pomegranate disease detection. Researched pomegranate growth patterns, aiding farmers and traders in early disease identification, improving crop management, and reducing economic losses.`,
    technologies: ["TensorFlow", "Keras", "OpenCV"],
  },
];

export const PROJECTS = [
  {
    title: "AI-Automated Flappy Bird",
    image: project1,
    description:
      "Developed an AI-based Flappy Bird game using Pygame and the NEAT algorithm for automated gameplay. Utilized Python for implementation.",
    technologies: ["Python", "NEAT", "NumPy", "Pandas", "Scikit-learn", "Tkinter", "OpenCV"],
  },
  {
    title: "Sudoku Solver",
    image: project21,
    description:
      "This C code solves a Sudoku puzzle using backtracking, validating numbers placed in cells and finding a valid solution.",
    technologies: ["C Language", "Backtracking", "I/O Libraries"],
  },
  {
    title: "Gesture Sphere Challenge",
    image: project3,
    description:
      "Python script uses MediaPipe and OpenCV for a hand-tracking game where players catch moving balls with gestures, scoring points.",
    technologies: ["Python", "MediaPipe", "OpenCV", "NumPy"],
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "ReactJS portfolio with Tailwind CSS styling and Framer Motion animations for a sleek, interactive user experience.",
    technologies: ["React.js", "Tailwind CSS", "framer-motion"],
  },
  {
    title: "Student Management System",
    image: project5,
    description:
      "Created a Student Management System (SMS) to streamline administrative tasks for educational institutions.",
    technologies: ["Python", "Tkinter", "MySQL"],
  },
  {
    title: "PomegranateGuard",
    image: project6,
    description:
      "A web app using deep learning to detect pomegranate diseases from images.",
    technologies: ["Flask", "TensorFlow", "Keras"," JavaScript (jQuery)","OpenCV"],
  },
  {
    title: "Jo(B)oard",
    image: project7,
    description:
      "I developed a Job Portal website using ReactJS, Tailwind CSS, and Firebase Firestore to connect job seekers with opportunities efficiently, promoting employment and career growth in the tech industry.",
    technologies: ["ReactJS", "Tailwind CSS", "Firestore Firebase"],
  },
  
];

export const CONTACT = {
  address: "Manipal University Jaipur ",
  phoneNo: "+91 9599044965 ",
  email: "shivangigct@gmail.com",
};
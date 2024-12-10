import project1 from "../assets/projects/project-1.jpeg";
import project21 from "../assets/projects/project-21.png";
import project3 from "../assets/projects/project-3.jpeg";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.jpeg";
import project6 from "../assets/projects/project-6.png";
import project7 from "../assets/projects/project-7.png";

export const HERO_CONTENT = `
Hey there! I'm a dynamic programmer by day
and a hip-hop enthusiast by night. I live by the rhythm
of the beat and the hum of the code. My journey in tech
started with a curiosity for how things work, evolving
into a love for crafting robust and scalable web
applications.

Passionate about problem-solving and Competitive Programming,
I'm always looking for new challenges to sharpen my skills
and push the boundaries of what's possible.
`;



export const ABOUT_TEXT = `
  I’m someone who thrives in dynamic environments and loves tackling challenges head-on. Through my leadership roles as 
  Executive Director at IEEE WIE MUJ and Academic Head at the Indian Game Theory Society, I’ve had the opportunity to 
  lead teams, organize events, and create spaces for students to grow and explore new technologies. These experiences 
  have taught me the importance of collaboration, problem-solving, and bringing people together to achieve common goals.

  I’m always eager to learn and grow—whether it’s diving into machine learning, experimenting with blockchain, or 
  exploring new ways to solve problems. One project that stands out for me is the 
  Comparative Analysis of Dimensionality Reduction Techniques in Machine Learning Models for Liver Disease Detection, 
  where I really honed my research skills and attention to detail.

  I also worked on FraudFend, a deep learning-based mobile fraud detection system that achieved 99.7% accuracy. This 
  project involved addressing class imbalance using oversampling and class weights, combining numerical features with 
  customer ID embeddings, and evaluating the system using metrics like AUC, Confusion Matrix, and Classification Report. 
  It integrates categorical encoding, text tokenization, and feature scaling to ensure real-time fraud detection in mobile 
  payment transactions.
`;


export const EXPERIENCES = [
  {
    year: "June 2024 - July 2024",
    role: "Research Intern",
    company: "National Institute of Technology Mizoram",
    description: `Researched on UAV-based traffic monitoring system using collaborative flight planning. Implemented lightweight object detection with MobileNet SSD and real-time anomaly detection. Leveraged ROS, TensorFlow Lite, and OpenCV for efficient traffic analysis.`,
    technologies: ["ROS", "TensorFlow Lite", "OpenCV", "MobileNet SSD"],
  },
  {
    year: "May 2024 - August 2024",
    role: "Blockchain Trainee Intern",
    company: "Ministry of Electronics and Information Technology",
    description: `Completed a comprehensive 2-month training program on Web3 and Hedera blockchain technology at STPI. Gained in-depth knowledge of Hedera network architecture, core concepts, and services. Achieved Hedera Hashgraph Developer Certification.`,
    technologies: ["Hedera Blockchain", "Web3", "Python", "Solidity", "Truffle", "Ganache"],
  },
  {
    year: "May 2024 - August 2024",
    role: "Research & Development Intern",
    company: "Boxfarming Technologies",
    description: `Conducted research on pomegranate diseases, including Heartrot and Anthracnose. Collaborated with farmers in Pune to implement solutions that resulted in a 15% increase in yield for partnered farmers.`,
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
import project1 from "../assets/projects/project-1.jpeg";
import project21 from "../assets/projects/project-21.png";
import project3 from "../assets/projects/project-3.jpeg";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.jpeg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

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
    description: `Currently interning at the Ministry of Electronics and Information Technology: managing AWS EC2, organizing engineering seminars, developing a tourism chatbot, and participating in a blockchain technology workshop by industry leaders.`,
    technologies: ["AWS", "Excel", "Python", "SQL"],
  },
  {
    year: "2024 - Present",
    role: "Research & Development Intern",
    company: "Boxfarming Technologies",
    description: `Currently, my ongoing internship involves pomegranate projects focusing on soil quality, climate needs, market demand, non-destructive quality evaluation, grading, disease detection, and farming monitoring.`,
    technologies: ["Python", "PyCharm", "Research"],
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
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["Python", "Tkinter", "MySQL"],
  },
];

export const CONTACT = {
  address: "Manipal University Jaipur ",
  phoneNo: "+91 9599044965 ",
  email: "Shivangigct@gmail.com",
};
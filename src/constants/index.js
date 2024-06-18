import project1 from "../assets/projects/project-1.jpeg";
import project21 from "../assets/projects/project-21.png";
import project3 from "../assets/projects/project-3.jpeg";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.jpeg";

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



export const ABOUT_TEXT = `I'm currently diving into several key concepts in natural language processing (NLP). Large Language Models (LLM) are fascinating because they empower AI to understand and generate human-like text, like those seen in advanced chatbots and automated content generation. Prompt engineering is critical as it involves crafting precise input queries to guide these models towards desired outputs, enhancing their practical applications. Transformers, with their encoder-decoder architecture and attention mechanisms, stand out for their ability to handle complex language tasks efficiently, from translation to summarization. Exploring these topics helps me grasp how cutting-edge AI models can transform data into meaningful insights and innovations.`;

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
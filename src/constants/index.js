import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full-stack developer with a strong foundation in building scalable and efficient web applications. With expertise in front-end technologies like React and a solid grasp of back-end systems including Node.js, MongoDB, and Express.js, I deliver solutions that are both robust and user-focused. My experience extends to integrating AI/ML capabilities into applications, solving real-world problems through innovative designs, and conducting research in cutting-edge fields. Additionally, my advanced problem-solving skills are demonstrated through my proficiency on LeetCode, particularly in Dynamic Programming, Backtracking, and Divide and Conquer, which further enhance my ability to design optimal and efficient systems.`;
export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "CryptoTracker",
    image: project1,
    link: "https://github.com/nottherealhuman69/CryptoTracker",
    description:
      "Created a user-friendly platform for tracking cryptocurrency prices, trends, and history with real-time updates and personalized access.",
    technologies: ["Node.js", "Express.js", "MongoDB", "EJS", "CSS"],
  },
  {
    title: "AGS (Autmatic Grading System)",
    image: project2,
    link: "https://github.com/nottherealhuman69/AGS",
    description:
      "Developed a platform to automate grading and provide personalized feedback on student submissions.",
    technologies: ["Python", "Flask", "OCR", "NLP", "HTML"],
  },
  {
    title: "Lost And Found Website",
    image: project3,
    link: "https://github.com/nottherealhuman69/LostFound",
    description:
      "Developing a website where users can report lost items and connect with finders through a secure chat system",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
  },
  {
    title: "Nasty Blogging Platform",
    image: project4,
    link: "http://13.51.162.186:3000",
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["MongoDB", "Node.js", "Express.js", "AWS", "EJS"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};

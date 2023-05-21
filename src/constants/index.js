import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  kumon,
  panera,
  washu,
  cpp,
  java,
  laravel,
  php,
  sql,
  vscode,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-End Development",
    icon: web,
  },
  {
    title: "Back-End Development",
    icon: mobile,
  },
  {
    title: "Game Development",
    icon: backend,
  },
  {
    title: "Graphic Design",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Visual Studio Code",
    icon: vscode,
  },


];

const experiences = [
  {
    title: "Tutor and Grading Assistant",
    company_name: "Kumon",
    icon: kumon,
    iconBg: "#6fcff6",
    date: "Aug 2019 - May 2020",
    points: [
      "Provided personalized instruction to elementary and middle school students to help them understand mathematical concepts and complete homework accurately.",
      "Developed strong communication and interpersonal skills to connect with students of varying ages and skill levels.",
      "Graded students' homework and classwork, reviewing their work carefully to ensure accuracy and consistency.",
      "Developed skills in assessing and evaluating student performance, providing constructive feedback and support to help students improve their understanding of fundamental mathematical concepts.",
    ],
  },
  {
    title: "Salad and Sandwich Maker",
    company_name: "Panera",
    icon: panera,
    iconBg: "#687819",
    date: "May 2021 - Aug 2021",
    points: [
      "Produced high-quality food while meeting speed and accuracy goals.",
      "Developed strong multitasking, collaboration, and time management skills to ensure efficient order completion.",
      "Assisted with 6 AM store opening daily.",
      "Collaborated effectively with team members to ensure smooth store operations.",
      "Developed communication and interpersonal skills, ensuring that each customer had a positive experience.",
    ],
  },
  {
    title: "Teaching Assistant",
    company_name: "Washington University in St. Louis",
    icon: washu,
    iconBg: "#aaaaaa",
    date: "Jan 2023 - May 2023",
    points: [
      "Worked with students one-on-one to help them grasp essential computer science concepts such as data structures (e.g. arrays, linked lists, stacks, queues, trees, heaps) and algorithms (e.g. sorting, searching, shortest paths, minimum spanning trees), as well as asymptotic complexity analysis.",
      "Graded homework assignments and exams, and provided feedback to students on their understanding of the concepts taught in class.",
      "Reinforced my knowledge of data structures and algorithms through teaching, grading, and reviewing.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

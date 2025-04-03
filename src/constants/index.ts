import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TProject,
} from "../types";

import {
  logo,
  me,
  github,
  menu,
  close,
  css,
  figma,
  git,
  html,
  javascript,
  reactjs,
  redux,
  tailwind,
  typescript,
  meta,
  SpotShot,
  Goalmaster,
  web,
  backend,
  mobile,
  creator,
  proshot,
  WE,
  SPot,
} from "../assets";

export const navLinks: TNavLink[] = [
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

export const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "REACT Developer",
    icon: mobile,
  },
  {
    title: "Front End Developer",
    icon: backend,
  },
  {
    title: "UI UX Developer",
    icon: creator,
  },
];

export const technologies: TTechnology[] = [
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

export const experiences: TExperience[] = [
  {
    title: "UI Developer",
    companyName: "Self Learning",
    icon: web,
    iconBg: "#383E56",
    date: "January 2022 - July 2023",
    points: [
      "From January 2022 to July 2023, I taught myself Front-End development for the first time.",
      "I began with learning HTML, then progressed to CSS and JavaScript.",
      "After gaining a solid foundation, I moved on to more advanced topics such as responsive design, DOM manipulation, and eventually React.",
      "I spent a significant amount of time working on various projects, where I applied my knowledge to build interactive and dynamic web applications.",
      "This self-driven learning journey helped me improve my skills and gain hands-on experience with real-world projects.",
    ],
  },
  {
    title: "Front End Developer",
    companyName: "WE Applied Technology Schools",
    icon: WE,
    iconBg: "#E6DEDD",
    date: "July 2023 - Present",
    points: [
      "From July 2023 so Far, I joined WE Applied Technology Schools in Mansoura.",
      "I further honed my Front-End development skills during this period.",
      "I gained deeper expertise in web development and also learned new skills.",
      "I became proficient in Microsoft programs and design tools.",
      "This experience helped me refine my technical abilities and allowed me to apply them in a more structured environment.",
    ],
  },
  {
    title: "Front End Developer",
    companyName: "SPOT Agency",
    icon: SPot,
    iconBg: "#383E56",
    date: "March 2024 - Present",
    points: [
      "Since 2024, I have been working at a company called SPOT Agency.",
      "I have contributed to creating various designs, components, portfolios, and dashboards.",
      "This role has provided me with valuable hands-on experience.",
      "I have been able to apply my Front-End development skills in real-world projects.",
      "I have further refined my abilities in design and user interface development.",
    ],
  },
];

export const projects: TProject[] = [
  {
    name: "SPOT Profile",
    description:
      "A professional portfolio website for SPOT Agency, featuring an elegant and modern design. Built using HTML, CSS, and JavaScript to showcase the company's work.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: SpotShot,
    sourceCodeLink: "https://github.com/nagymedo25",
  },
  {
    name: "GoalMaster",
    description:
      "A goal tracking application that helps users set, track, and achieve their personal and professional goals with progress visualization and milestone celebrations.",
    tags: [
      {
        name: "react / vite",
        color: "blue-text-gradient",
      },
      {
        name: "Github",
        color: "green-text-gradient",
      },
      {
        name: "MUI",
        color: "pink-text-gradient",
      },
    ],
    image: Goalmaster,
    sourceCodeLink: "https://github.com/nagymedo25",
  },
  {
    name: "Advanced 3D Portfolio",
    description:
      "A professional photography portfolio website with advanced image galleries, client management, and booking system for professional photographers.",
    tags: [
      {
        name: "tree3D.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "react & vite",
        color: "pink-text-gradient",
      },
    ],
    image: proshot,
    sourceCodeLink: "https://github.com/nagymedo25",
  },
];

export const socialLinks = {
  facebook: "https://www.facebook.com/profile.php?id=100076148280040",
  whatsapp: "https://wa.me/201091506554",
  github: "https://github.com/nagymedo25",
};

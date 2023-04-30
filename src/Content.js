// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";
import jslogo from "./assets/images/Skills/jslogo.png";

import services_logo1 from "./assets/images/Services/logo1.png";
// import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo2 from "./assets/images/Services/frontent.png";
// import services_logo3 from "./assets/images/Services/logo3.png";
import services_logo3 from "./assets/images/Services/logo2.png";


import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/ekart.png";
import project4 from "./assets/images/projects/jobguru_dashboard.png";
import project5 from "./assets/images/projects/jobguru.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/jobs.png";
import avatar2 from "./assets/images/Testimonials/billgates.png";
import avatar3 from "./assets/images/Testimonials/tata.png";
import avatar4 from "./assets/images/Testimonials/kalam.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "THARUN",
    LastName: "PETER",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "2+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "5+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Node js",
        para: "Lorem ipsum text  dummy",
        logo: nodejs,
      },
      {
        name: "React js",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },
      {
        name: "Figma",
        para: "Lorem ipsum text  dummy",
        logo: figma,
      },

      {
        name: "Javascript",
        para: "Lorem ipsum text  dummy",
        logo: jslogo,
      },

      // {
      //   name: "Adobe Photoshop",
      //   para: "Lorem ipsum text  dummy",
      //   logo: ps,
      // },

      // {
      //   name: "Sketch",
      //   para: "Lorem ipsum text  dummy",
      //   logo: sketch,
      // },
      // {
      //   name: "Python",
      //   para: "Lorem ipsum text  dummy",
      //   logo: python,
      // },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Back-End Development",
        para: "Back-end development means working on server-side software, which focuses on everything you can’t see on a website. As a Back-end developer I ensure the website performs correctly, focusing on databases, back-end logic, application programming interface (APIs), architecture, and servers. Backend Development that helps browsers communicate with databases, store, understand, and delete data.",
        logo: services_logo1,
      },
      {
        title: "Front-End Development",
        para: "Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly. The challenge associated with front end development is that the tools and techniques used to create the front end of a website change constantly and so as a front-end developer I needs to constantly be aware of how the field is developing.",
        logo: services_logo2,
      },
      {
        title: "Ui/Ux Design",
        para: "UI UX designers create the user interface for an app, website, or other interactive media. Their work includes collaborating with product managers and engineers to gather requirements from users before designing ideas that can be communicated using storyboards. They also process flows or sitemaps. They'll then use their creativity while applying color palettes based on what best fits into a particular design conceptually.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Real Estate Website",
        image: project1,
      },
      {
        title: "Project Management Website",
        image: project2,
      },
      {
        title: "Ecommerce Website",
        image: project3,
      },
      {
        title: "DashBoard Website",
        image: project4,
      },
      {
        title: "Job Portal Website",
        image: project5,
      },
    ],
  },
  Testimonials: {
    title: "Favourite",
    subtitle: "“Quotes”",
    testimonials_content: [
      {
        review:
          "“Let's go invent tomorrow instead of worrying about what happened yesterday.”",
        img: avatar1,
        name: "Steve Jobs",
      },
      {
        review:
          "“We all need people who will give us feedback. That's how we improve.”",
        img: avatar2,
        name: "Bill Gates",
      },
      {
        review:
          "“If you want to walk fast, walk alone. But if you want to walk far, walk together”",
        img: avatar3,
        name: "Ratan Tata",
      },
      {
        review:
          "“Be active! Take on responsibility! Work for the things you believe in. If you do not, you are surrendering your fate to others”",
        img: avatar4,
        name: "A.P.J. Abdul Kalam",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "I am passionate about learning new technologies and programming languages, and I have a track record of staying up-to-date with the latest advancements in the industry. I am also highly collaborative and thrive in team-based environments, where I am able to effectively communicate and work alongside fellow developers and designers.",
    btnText: "Contact Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "tharunpeter@gmail.com",
        icon: GrMail,
        link: "mailto:tharunpeter@gmail.com",
      },
      {
        text: "+91 9544335325",
        icon: MdCall,
        link: "https://wa.me/9544335325",
      },
      {
        text: "tharunpeter",
        icon: BsInstagram,
        link: "https://www.instagram.com/tharunpeter/?hl=en",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};

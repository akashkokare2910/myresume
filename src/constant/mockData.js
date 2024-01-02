import {
  Coding,
  CompanyLogo1,
  CompanyLogo2,
  Coursera,
  DiamondLgBlue,
  DiamondLgGreen,
  DiamondLgOrange,
  DiamondLgPink,
  DiamondLgYellow,
  Cricket,
  Google,
  Reading,
  SkillCss,
  SkillHtml5,
  Travelling,
  Udemy,
  SkillReact,
  SkillJava,
  SkillPython,
  SkillTypeScript,
  SkillNodeJS,
  SkillMongoDB,
  Skillgit,
  SkillDocker,
  SkillSpringBoot,
} from "../assets/image";

const DATA = {
  professionalExperiences: [
    {
      id: "prof_exp_1",
      startDate: "Jul 2022",
      endDate: "",
      position: "Associate Software Engineer",
      diamondColors: ["Purple", "Yellow", "Blue"],
      company: {
        logo: CompanyLogo1,
        name: "Researchwire Knowledge Solutions",
        info: "Navi Mumbai, india",
      },
      description:
        "As a frontend developer, I specialize in using technologies like ReactJS, HTML, CSS, JavaScript, Git, GitHub, and Linux to create intuitive and responsive user interfaces. I also have experience in creating efficient back-end microservices using Reactive Spring Boot and utilizing data exchange formats like JSON and XML Schema where 10 million of XML data is processed using TypeScript. I am proactive in identifying ways to streamline workflows and optimize system performance, and I am dedicated to deliver high-quality results that enhance the user experience and drive business growth. Implemented XML to JSON conversion using TypeScript to process 10 million records of XML data efficiently.",
      links: [
        {
          label: "Agency projects",
          url: "",
        },
      ],
    },
    {
      id: "prof_exp_2",
      startDate: "June 2021",
      endDate: "Aug 2021",
      position: "ML Intern",
      diamondColors: ["Blue", "Orange", "Pink"],
      company: {
        logo: CompanyLogo2,
        name: "Regex Software Services",
        info: "Mumbai, Maharashtra",
      },
      description:
        "As a machine learning enthusiast, I have hands-on experience building and optimizing real-world machine learning models. I am skilled in data collection, cleaning, preprocessing, and training and I utilize advanced techniques like Convolutional Neural Networks and TensorFlow to deliver impactful ML solutions for various real-world Applications.",
      links: [
        {
          label: "Annual company report 2016",
          url: "",
        },
      ],
    },
    // {
    //   id: "prof_exp_3",
    //   startDate: "Aug 2012",
    //   endDate: "Nov 2013",
    //   position: "Content Specialist",
    //   diamondColors: ["Green", "Yellow", "Purple"],
    //   company: {
    //     logo: CompanyLogo3,
    //     name: "21vek Private Ltd.",
    //     info: "E-commerce store in Minsk, Belarus",
    //   },
    //   description:
    //     "Added and modified the product information, prepared images and text for the website, developed categories filters, ensure all info is correct in the catalogue with the goal of improving online shopper experience.",
    //   links: [],
    // },
    // {
    //   id: "prof_exp_4",
    //   startDate: "Aug 2011",
    //   endDate: "Nov 2014",
    //   position: "Software Support Engineer",
    //   diamondColors: ["Green", "Yellow", "Purple"],
    //   company: {
    //     logo: CompanyLogo4,
    //     name: "Integral",
    //     info: "Microelectronics factory in Minsk, Belarus",
    //   },
    //   description:
    //     "Supported retail accounting system LS Trade, troubleshoot technical problems.",
    //   links: [],
    // },
  ],
  educationalExperiences: [
    {
      id: "edu_1",
      icon: DiamondLgBlue,
      course: "Information Technology",
      institution: "Atharva College of Engineering",
      degree: "Bachelor of Engineering",
      startDate: "2018",
      endDate: "2022",
    },
    {
      id: "edu_2",
      icon: DiamondLgGreen,
      course: "Fundamentals of UX/UI",
      institution: "Skillshare",
      degree: "Beginner Course",
      startDate: "2021",
      endDate: "2022",
    },
    {
      id: "edu_3",
      icon: DiamondLgOrange,
      course: "CG Artist",
      institution: "Polygon CG School",
      degree: "Graduate",
      startDate: "2018",
      endDate: "2021",
    },
    {
      id: "edu_4",
      icon: DiamondLgPink,
      course: "Graphic Design",
      institution: "Belarusian State Academy of Arts",
      degree: "Postgraduate Diploma",
      startDate: "2015",
      endDate: "2018",
    },
    {
      id: "edu_5",
      icon: DiamondLgYellow,
      course: "SEO Specialist Workshop",
      institution: "ARTOX Media",
      degree: "",
      startDate: "2015",
      endDate: "2017",
    },
    {
      id: "edu_6",
      icon: DiamondLgBlue,
      course: "Information Technology Software",
      institution:
        "Belarusian State University of Informatics and Radioelectronics",
      degree: "Bachelor Degree",
      startDate: "2011",
      endDate: "2015 ",
    },
  ],
  projectDetails: [
    {
      id: "project_1",
      startDate: "Oct 2023",
      endDate: "",
      position: "",
      diamondColors: ["Purple", "Yellow", "Blue"],
      company: {
        projectName: "Netflix-React-App With Integrated ChatGPT",
      },
      description:
        "In the Netflix React App, I’ve crafted an engaging UI featuring the use of TailwindCSS, which has a main movie with a background trailer and dynamic search bar. Users can explore curated movie lists, receive AI-driven recommendations through ChatGPT’s integrated chatbot, and seamlessly navigate through genres and trending content.",
      links: [
        {
          label: "Agency projects",
          url: "",
        },
      ],
    },
    {
      id: "project_2",
      startDate: "Oct 2023",
      endDate: "",
      position: "",
      diamondColors: ["Purple", "Yellow", "Blue"],
      company: {
        projectName: "Path Finding Visualizer",
      },
      description:
        " developed a user-friendly web app that visualizes complicated path finding graph algorithms, such as DFS, BFS, And Dijkstra’s Algorithm. I used my experience in web development and data visualization to design an intuitive and informative interface That allows users to customize input parameters, tweak algorithms in real-time, and save and share visualizations.",
      links: [
        {
          label: "Github",
          url: "https://github.com/akashkokare2910/Path-Finding-Visualizer",
        },
      ],
    },
    {
      id: "project_3",
      startDate: "Oct 2023",
      endDate: "",
      position: "",
      diamondColors: ["Purple", "Yellow", "Blue"],
      company: {
        projectName: "Penetration Testing Framework GUI",
      },
      description:
        "I spearheaded the development of a cutting-edge GUI application that provides comprehensive cybersecurity Services, including a Password Manager, text encryption, password cracking, port scanning, and more. I utilized my extensive knowledge of cyber security to design and implement features that enable users to Safeguard their data and protect against cyber attacks.",
      links: [
        {
          label: "Github",
          url: "https://github.com/akashkokare2910/Penetration-Testing-Framework",
        },
      ],
    },
    {
      id: "project_4",
      startDate: "Oct 2023",
      endDate: "",
      position: "",
      diamondColors: ["Purple", "Yellow", "Blue"],
      company: {
        projectName: "Campus Placement Predictor",
      },
      description:
        "The placement predictor predicts the probability of a candidate's placement based on the inputs such as Academic score, Technical Degree, Work Experience, etc.",
      links: [
        {
          label: "Github",
          url: "https://github.com/akashkokare2910/Campus_Placement_Predictor",
        },
      ],
    },
  ],
  skills: [
    {
      id: "skill_1",
      icon: SkillReact,
      name: "React",
      description: "Framework",
    },
    {
      id: "skill_2",
      icon: SkillTypeScript,
      name: "TypeScript",
      description: "UI Design, Protoyping",
    },
    {
      id: "skill_3",
      icon: SkillHtml5,
      name: "HTML5",
      description: "Hypertext Markup",
    },
    {
      id: "skill_4",
      icon: SkillCss,
      name: "CSS",
      description: "Attractive Design & Frameworks",
    },
    {
      id: "skill_5",
      icon: SkillJava,
      name: "Java",
      description: "Backend Development",
    },
    {
      id: "skill_6",
      icon: SkillPython,
      name: "Python",
      description: "ML & Data Science",
    },
    {
      id: "skill_7",
      icon: SkillNodeJS,
      name: "NodeJS",
      description: "Server-side Redering",
    },
    {
      id: "skill_8",
      icon: SkillMongoDB,
      name: "MongoDB",
      description: "Databases",
    },
    {
      id: "skill_9",
      icon: Skillgit,
      name: "GIT",
      description: "Version Control",
    },
    {
      id: "skill_10",
      icon: SkillDocker,
      name: "Docker",
      description: "Containarization",
    },
    {
      id: "skill_11",
      icon: SkillSpringBoot,
      name: "SpringBoot",
      description: "Microservices",
    },
  ],
  certificatesAndAwards: [
    {
      id: "cert_award_1",
      icon: Coursera,
      provider: "NamasteDEV",
      course: "Namaste React Live Course",
      startDate: "Dec 2022",
      endDate: "Feb 2023",
    },
    {
      id: "cert_award_2",
      icon: Google,
      provider: "Google",
      course: "Google UX Design Professional Certificate",
      startDate: "Mar 2021",
      endDate: "Jun 2021",
    },
    {
      id: "cert_award_3",
      icon: Udemy,
      provider: "Udemy",
      course: "Fundamental of UI/UX for Students",
      startDate: "Jun 2020",
      endDate: "Sept 2020",
    },
  ],
  hobbiesAndInterests: [
    {
      id: "hob_1",
      icon: Cricket,
      name: "Gaming",
    },
    {
      id: "hob_2",
      icon: Reading,
      name: "Reading",
    },
    {
      id: "hob_3",
      icon: Travelling,
      name: "Travelling",
    },
    {
      id: "hob_4",
      icon: Coding,
      name: "Coding",
    },
  ],
};

export default DATA;

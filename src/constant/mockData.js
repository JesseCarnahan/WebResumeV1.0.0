import {
  DiamondLgBlue,
  DiamondLgGreen,
  SkillCss,
  Certificate,
  JavaScript,
  React,
  Java,
  SQL,
  Gaming,
  Reading,
  Project1,
  Project2
} from "../assets/image";

const DATA = {
  professionalExperiences: [
    {
      id: "prof_exp_1",
      startDate: "Feb 2019",
      endDate: "Feb 2021",
      position: "Retail Associate",
      diamondColors: ["Blue"],
      company: {
        name: "Cracker Barrel",
        info: "Retail for the front of the resturaunt.",
      },
      description:
        "Learned how to interact with customers.  Adapted to a new team very quickly",
    },
    {
      id: "prof_exp_2",
      startDate: "Feb 2021",
      endDate: "May 2022",
      position: "Skills Trainer",
      diamondColors: ["Pink"],
      company: {
        name: "Cracker Barrel",
        info: "Retail for the front of the resturaunt.",
      },
      description:
        " Taught new/beginner employees skills to succeed, Took up more dedicated roles around the company",
    },
    {
      id: "prof_exp_3",
      startDate: "May 2022",
      endDate: "April 2024",
      position: "Team Leader",
      diamondColors: ["Green"],
      company: {
        name: "Cracker Barrel",
        info: "Retail for the front of the resturaunt.",
      },
      description:
        " Proficient in maintaining retail inventory, Supervised a subset of employees in rules and regulations, Experienced in customer satisfaction, Highly adaptable to new changed directly associated with work",
    },
  ],
  educationalExperiences: [
    {
      id: "edu_1",
      icon: DiamondLgBlue,
      course: "High School",
      institution: "Greenbrier High School",
      degree: "High School Diploma",
      startDate: "2012",
      endDate: "2015",
    },
    {
      id: "edu_2",
      icon: DiamondLgGreen,
      course: "Arkansas Codign Academy",
      institution: "University Of Central Arkansas",
      degree: "Certificate",
      startDate: "2023",
      endDate: "2023",
    },
  ],
  skills: [
    {
      id: "skill_1",
      icon: Java,
      name: "Java",
      description: "Attractive Design & Frameworks",
    },
    {
      id: "skill_2",
      icon: SkillCss,
      name: "CSS",
      description: "Attractive Design & Frameworks",
    },
    {
      id: "skill_3",
      icon: JavaScript,
      name: "JavaScript",
      description: "Attractive Design & Frameworks",
    },
    {
      id: "skill_5",
      icon: SQL,
      name: "SQL",
      description: "Attractive Design & Frameworks",
    },
    {
      id: "skill_6",
      icon: React,
      name: "React",
      description: "Attractive Design & Frameworks",
    },
  ],
  certificatesAndAwards: [
    {
      id: "cert_award_1",
      icon: Certificate,
      provider: "UCA",
      course: "Full-Stack Java and SQL",
      startDate: "Jan 2023",
      endDate: "Jun 2023",
    },
  ],
  hobbiesAndInterests: [
    {
      id: "hob_1",
      icon: Gaming,
      name: "Gaming",
    },
    {
      id: "hob_2",
      icon: Reading,
      name: "Reading",
    },
  ],
  projects: [
    {
      id: "project_1",
      icon: Project2,
      name: "Project1/2",
      description: " Dice Roller Bot is a bot that worked on for a D&D (Dungeons and Dragons) all for the purpose of rolling dice in discord",
    },
    {
      id: "project_2",
      icon: Project1,
      name: "Project2/2",
      description: "After working through the trail stages, mangaed to make integrate built in commands.",
    },
  ],
};

export default DATA;
import { cardSize } from "./components/experienceCard";

export const experiencesData: Experience[] = [
  {
    cardSize: cardSize.L,
    category: "WORK",
    description: `Started an Internship (4-month) position @ Oracle NetSuite as a Software Developer Co-op for the ERP Cash Management Team. Worked creating core functionality within the NetSuite enterprise B2B application, debugging customer accounts in production, and more.`,
    location: "Oracle",
    duration: "2022 (4 Months)",
    role: "SOFTWARE DEVELOPER CO-OP",
  },
  {
    cardSize: cardSize.S,
    category: "VOLUNTEERING",
    description:
      "Continued volunteering with HTV's Exec Team as the Vice President. Overlooked a team of over 20 executives spanning across different roles such as Design, Development, Logistics and more. Contribution resulted in a vastly successful Hackathon with over 500 participants.",
    location: "Hack the Valley 8",
    duration: "2022-Present",
    role: "VICE PRESIDENT",
  },
  {
    cardSize: cardSize.S,
    category: "VOLUNTEERING",
    description:
      "Started volunteering with HTV's Exec. Team as the Lead Developer. Worked with managing the web application UI, backend applicant registration APIs, and developing series of insightful SQL queries about the overall Hackathon's performance.",
    location: "Hack the Valley 7",
    duration: "2022 (6 Months)",
    role: "LEAD DEVELOPER",
  },
  {
    cardSize: cardSize.S,
    category: "WORK",
    description:
      "Started an internship (8-month) @ NS Labs as a Software Development Engineer. Worked with web applications, creating insights on consumer B2C enterprise applications, documenting company framework & code.",
    location: "NS Labs Inc",
    duration: "2021 (8 Months)",
    role: "SOFTWARE DEVELOPMENT ENGINEER",
  },
  {
    cardSize: cardSize.S,
    category: "SCHOOL",
    description:
      "Started university @ the University of Toronto. Currently, specializing in Statistics inside the Machine Learning and Data Mining Stream.",
    location: "University of Toronto",
    duration: "2019-Present",
    role: "STATS (ML)",
  },
  {
    cardSize: cardSize.L,
    category: "WORK",
    description:
      "Started a Teaching Assistant Role @ the University of Toronto for a third-year computer science course (CSCC09 - Programming on the Web) on the mastery of building web applications using current day technologies and frameworks.",
    location: "University of Toronto",
    duration: "2023-Present",
    role: "TEACHING ASSISTANT",
  },
];

export interface Experience {
  cardSize: cardSize;
  category: string;
  description: string;
  role: string;
  location: string;
  duration: string;
}

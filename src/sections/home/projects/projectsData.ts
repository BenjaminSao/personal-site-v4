enum ProjectType {
  Personal = "Personal",
  Hackathon = "Hackathon",
  School = "School",
}

export const projectsData: Project[] = [
  {
    projectName: "TaleSpin",
    achievement: "Best Project Judged by Industry Leaders",
    backgroundColor: "linear-gradient(to right, #232526, #414345)",
    shortDescription: "AI-Generated Children Stories with Images",
    description:
      "TaleSpin is an AI-powered children’s storybook generator that allows the creation and viewing of stories to your liking. Users are able to log in and be verified with Auth0 and submit short story prompts through the web application that acts as a “seed” for generating a storybook that contains not only text but accompanying images. This is be done by feeding the prompt to ChatGPT through their API to generate the story content. For each text block generated, our app uses ChatGPT to write an accompanying image prompt which is fed to DALL-E API to create an image.",
    projectType: ProjectType.School,
    githubLink: "https://github.com/BenjaminSao/project-talespin",
    tools: ["React.js", "Node.js", "GPT-3", "Express.js", "DALL-E", "HTML/CSS"],
  },
  {
    projectName: "TappedIn",
    imagePath: "/images/projectImages/tappedin.png",
    shortDescription: "Social Portfolios powered by NFC Tag",
    description:
      "TappedIn's initiative is to connect people together and build communities, through ease of socialization. We want to make information sharing and networking as seamless as possible. Instead of pulling out your phone and sharing every one of your social media platform, we've combined all this into your one public profile, with extra features!",
    projectType: ProjectType.School,
    githubLink: "https://github.com/UTSCCSCC01/finalprojectf22-tappedin",
    tools: ["React.js", "Node.js", "Firebase", "Express.js", "HTML/CSS"],
  },
  {
    projectName: "Project-E",
    backgroundColor: "linear-gradient(to right, #c9d6ff, #e2e2e2)",
    shortDescription: "A Minimal Payment Splitting Application",
    description:
      "Splitting bills and receipt with your friends is difficult. This project aims to take away that cumbersome task by simplifying the process through use of minimal amount of user interaction and an efficient flow for adding transactions.",
    projectType: ProjectType.Personal,
    githubLink: "https://github.com/BenjaminSao/project-e/tree/v0.0.1",
    tools: ["JavaScript", "HTML/CSS", "Firebase", "Vue.js"],
  },
  {
    projectName: "Secure Tags",
    backgroundColor: "linear-gradient(to right, #2193b0, #6dd5ed)",
    shortDescription: "Authentication Tags for Day-to-Day Products",
    description:
      "A project with a goal to heavily combat the counterfeiting industry and reduce stealing by attaching our NFC tags to physical goods in order to keep track of its ownership and authenticity.",
    projectType: ProjectType.Personal,
    githubLink: "https://github.com/SecureTags/st-prototype",
    tools: ["JavaScript", "HTML/CSS", "Firebase", "Vue.js"],
  },
  {
    projectName: "Ecoblock",
    achievement: "Recipient for the Best Use of Google Cloud",
    backgroundColor: "linear-gradient(to right, #56ab2f, #a8e063)",
    shortDescription: "Sustainable & Scalable Eco-Friendly Blockchain",
    description:
      "With the ever-increasing popularity of cryptocurrencies, how can we develop a coin which is both healthy for the environment and sustainable? Our solution is to create a cryptocurrency which builds upon the Ethereum's Proof of Stake concept which gives better rates to minters based on an ecological incentive",
    projectType: ProjectType.Hackathon,
    githubLink: "https://github.com/Johnson-Su/EcoBlock",
    link: "https://devpost.com/software/ecoblock",
    tools: ["JavaScript", "Flutter", "Dart"],
  },
  {
    projectName: "Certi-Chain",
    achievement: "Recipient for the Best Hardware Hack",
    backgroundColor: "linear-gradient(to right, #cb356b, #bd3f32)",
    shortDescription: "Blockchain Powered Authentication Tags",
    description:
      "How do we securely purchase goods and ensure it's quality and authenticity? Our solution is to add an NFC certification tag to each item which is stored on the a blockchain ledger to enforce immutability & security. Certi-Chain uses a python based blockchain to authenticate any products with a Certi-Chain NFC tag. Each tag will contain a unique ID attached to the blockchain that cannot be faked. Users are able to tap their phones on any product containing a Certi-Chain tag to view the authenticity of a product through the Certi-Chain blockchain. Additionally if the product is authentic users are also able to see where the products materials were sourced and assembled.",
    projectType: ProjectType.Hackathon,
    githubLink: "https://github.com/Johnson-Su/Certi-Chain",
    link: "https://devpost.com/software/certi-chain",
    tools: ["JavaScript", "HTML/CSS", "Jinja2", "Python Flask"],
  },
  {
    projectName: "Vaccurate",
    achievement: "Honourable Mention",
    backgroundColor: "linear-gradient(to right, #cb2d3e, #ef473a)",
    shortDescription: "Efficient Distribution of COVID-19 Vaccine",
    description:
      "During times of the COVID-19 pandemic, what is an efficient and secure way to prioritize the distribution of vaccines? Our solution is to develop an easy to access, web application, which determines the priority of an individual based on a series of questionnaires and then route them to the nearest clinic if eligible",
    projectType: ProjectType.Hackathon,
    githubLink: "https://github.com/BenjaminSao/Vaccurate",
    link: "https://devpost.com/software/vaccurate",
    tools: ["JavaScript", "HTML/CSS", "Twilio", "Firebase", "Bootstrap"],
  },
  {
    projectName: "Dorm Buddies",
    backgroundColor: "linear-gradient(to right, #fc4a1a, #f7b733)",
    shortDescription: "An All-in-One Socialization Platform",
    description:
      "How do we create a way to enable an immersive conversation with our friends during the COVID-19 pandemic? Our solution is to build a social platform which simulates a 'world-like' atmosphere by adding the ability to move, chat, video-call, and interact with other people",
    projectType: ProjectType.Hackathon,
    githubLink: "https://github.com/BenjaminSao/DormBuddies",
    link: "https://devpost.com/software/dormbuddy",
    tools: [
      "JavaScript",
      "HTML/CSS",
      "Twilio",
      "Firebase",
      "Vue.js",
      "Node.js",
      "C#",
    ],
  },
  {
    projectName: "AnimeTaro",
    backgroundColor: "linear-gradient(to right, #141e30, #243b55)",
    shortDescription: "Oh? You're Approaching This Project?",
    description:
      "You Thought This Would be a Project Title. BUT IT WAS ME, DIO!",
    projectType: ProjectType.Hackathon,
    githubLink: "https://github.com/Cptmoomoo/AnimeTaro",
    link: "https://devpost.com/software/animetaro-6tuw1j",
    tools: ["JavaScript", "HTML/CSS", "Firebase"],
  },
];

export interface Project {
  projectName: string;
  imagePath?: string;
  backgroundColor?: string;
  shortDescription: string;
  description: string;
  achievement?: string;
  projectType: ProjectType;
  githubLink?: string;
  link?: string;
  tools: string[];
}

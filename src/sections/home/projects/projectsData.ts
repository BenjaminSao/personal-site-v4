enum ProjectType {
  Personal = "Personal",
  Hackathon = "Hackathon",
  School = "School",
}

export const projectsData: Project[] = [
  {
    projectName: "Ecoblock",
    backgroundColor: "linear-gradient(to right, #a8ff78, #78ffd6)",
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
    backgroundColor: "linear-gradient(to right, #ff416c, #ff4b2b)",
    shortDescription: "Blockchain Powered Authentication Tags",
    description:
      "How do we securely purchase goods and ensure it's quality and authenticity? Add an NFC certification tag to each item which is stored on the a blockchain ledger to enforce immutability & security. Certi-Chain uses a python based blockchain to authenticate any products with a Certi-Chain NFC tag. Each tag will contain a unique ID attached to the blockchain that cannot be faked. Users are able to tap their phones on any product containing a Certi-Chain tag to view the authenticity of a product through the Certi-Chain blockchain. Additionally if the product is authentic users are also able to see where the products materials were sourced and assembled.",
    projectType: ProjectType.Hackathon,
    githubLink: "https://github.com/Johnson-Su/Certi-Chain",
    link: "https://devpost.com/software/certi-chain",
    tools: ["JavaScript", "HTML", "CSS", "Jinja2", "Python Flask"],
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

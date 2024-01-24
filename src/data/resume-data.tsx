import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Adelaja Ayomide",
  initials: "AA",
  location: "Lagos, Nigeria",
  locationLink: "https://www.google.com/maps/place/Lagos",
  openToRelocation: true,
  about:
    "A creative frontend developer building Unique Digital Brand Identities with code.",
  summary:
    "As a creative frontend developer, I am passionate about building unique, unforgettable and beautiful digital user experiences for any brand/company I work with. My go to tools are Nextjs, Vue, React, Framer motion and GSAP. I have 3+ years working both in remote and hybrid positions with companies all over the world.",
  avatarUrl: "https://avatars.githubusercontent.com/u/79877061?v=4",
  personalWebsiteUrl: "https://adeayomide.me",
  status: {
    color: "active",
    label: "Available",
  },
  contact: {
    email: "adeayomide112@gmail.com",
    tel: "+2349133640357",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ifeoluwaayo",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/adeayomide112",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/_hiflex",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Olabisi Onabanjo University",
      degree: "Bachelor's in Mathematical/Computer Science",
      startDate: "2021",
      endDate: "2024",
    },
    {
      school: "University of Ibadan",
      degree: "Diploma in Computer Engineering",
      startDate: "2020",
      endDate: "2021",
    },
    {
      school: "CoLab",
      degree: "Completed cohort as a Software Developer",
      startDate: "2020",
      endDate: "2021",
    },
  ],
  work: [
    {
      company: "MyHostel",
      link: "https://myhostel.ng",
      badges: ["Hybrid"],
      title: "Frontend Developer",
      logo: "/images/myhostel.jpg",
      startDate: "2021",
      endDate: "2022",
      description:
        "Implemented new features on the student and landlord dashboard. Recreated the company's landing page that increased traffic by 45%, Engaged in communications with the Backend team to ensure smooth collaboration. Technologies: Nextjs, React, Tailwind css, GraphQl and Typescript.",
    },
    {
      company: "Figgor",
      link: "https://figgor.com",
      badges: ["Hybrid"],
      title: "Frontend Developer",
      logo: "/images/gricd.png",
      startDate: "2022",
      endDate: "2023",
      description:
        "Built a web application for the company's internal use. Developed the company's inventory management system as a SaaS product. Collaborated with my Senior Software Engineer to maintain the company's enterprise software. Partnered with the design and product team to implement change on the company's landing page and optimize SEO which increased website traffic by 60%. Translated Enterprise Software from English to Swahili to cater for our East African customers. Technologies: Vuejs, React, styled components.",
    },
    {
      company: "PipeOps",
      link: "https://pipeops.com",
      badges: ["Remote"],
      title: "Frontend Developer",
      logo: "/images/pipeops.jpg",
      startDate: "2023",
      endDate: "2023",
      description:
        "Created the company's AI copilot product where you can deploy by chatting with a Bot. Worked hand in hand with my Senior Frontend Engineer to maintain and implement new user features and requests while fixing bugs. Started migration from Styled components to Tailwind CSS to reduce website load time and increase efficiency: Nextjs, styled components, tailwind css",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Vue.js",
    "Node.js",
    "Rust",
    "Solidity",
    "GraphQl",
    "Framer Motion",
    "GSAP",
    "Firebase",
  ],
  projects: [
    {
      title: "Culrica",
      techStack: [
        "Side Project",
        "Nextjs",
        "Tailwind css",
        "Firebase",
        "Typescript",
      ],
      description: "Buy fresh and quality farm produce at a fraction of costs.",
      logo: "",
      link: {
        label: "culrica.com",
        href: "https://culrica.vercel.app",
      },
    },
  ],
} as const;

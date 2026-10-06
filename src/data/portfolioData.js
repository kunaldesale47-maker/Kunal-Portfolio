export const personalInfo = {
  name: "Kunal Desale",
  fullName: "Kunal Gulab Desale",
  role: "Computer Engineering Student",
  institution: "PES Modern College of Engineering, Pune",
  university: "Savitribai Phule Pune University (SPPU)",
  cgpa: "9.11",
  location: "Pune, India",
  email: "k9766747228@gmail.com",
  phone: "+91 9209012613",
  linkedin: "https://www.linkedin.com/in/kunal-desale-460a45382",
  github: "https://github.com/kunaldesale47-maker",
  resumePdf: "/assets/resume/Kunal_Desale_Resume.pdf",
  portrait: "/assets/profile/kunal_portrait.png",
  avatar: "/assets/profile/kunal_college.jpeg",
  heroVideo: "/assets/videos/hero_bg.mp4",
  introVideo: "/assets/videos/intro.mp4",
  tagline: "I turn ideas into reality.",
  bio: "Second-year B-Tech Computer Engineering student passionate about learning technology, building practical projects, and turning ideas into working digital experiences. Actively strengthening core computer science fundamentals, full-stack web development, and problem solving through hands-on work.",
  stats: [
    { label: "First-Year CGPA", value: "9.11", helper: "PES Modern College of Engineering" },
    { label: "Practical Projects", value: "8+", helper: "Full-Stack, Simulations & Tools" },
    { label: "Engineering Year", value: "2nd Year", helper: "Class of 2029" },
    { label: "Hackathons & Events", value: "SIH '25", helper: "Team TechCatalyst Participant" },
  ]
};

export const skillsData = {
  programming: [
    { name: "C", level: "Core", desc: "Data structures, pointer arithmetic, memory foundations" },
    { name: "C++", level: "Core", desc: "Object-oriented programming, STL, algorithmic problem solving" },
    { name: "Python", level: "Core", desc: "Scripting, logic implementation, data automation, physics scripting" },
    { name: "JavaScript", level: "Modern", desc: "ES6+, asynchronous programming, DOM manipulation" },
    { name: "OOP Principles", level: "Concepts", desc: "Encapsulation, inheritance, polymorphism, abstraction" }
  ],
  web: [
    { name: "React.js", level: "Frontend", desc: "Component architecture, hooks, state management, SPA routing" },
    { name: "Tailwind CSS", level: "Styling", desc: "Modern utility-first responsive design, dark mode aesthetics" },
    { name: "HTML5 & Semantic Web", level: "Markup", desc: "Accessible, clean, and SEO-friendly document structures" },
    { name: "CSS3 / Modern Layouts", level: "Design", desc: "Flexbox, CSS Grid, animations, responsive design" }
  ],
  backend: [
    { name: "Node.js", level: "Runtime", desc: "Server runtime, async event-driven architecture, npm packages" },
    { name: "Express.js", level: "Framework", desc: "RESTful API routes, middleware, request handling" },
    { name: "REST APIs", level: "Architecture", desc: "CRUD operations, JSON serialization, client-server sync" }
  ],
  database: [
    { name: "MongoDB", level: "NoSQL", desc: "Document modeling, collections, Mongoose schema integration" }
  ],
  tools: [
    { name: "Git", level: "VCS", desc: "Branching, merging, commit hygiene, local version control" },
    { name: "GitHub", level: "Collaboration", desc: "Open-source tracking, repository hosting, issue tracking" },
    { name: "VS Code", level: "IDE", desc: "Customized debugging workflows, extensions, terminal integration" },
    { name: "Vercel", level: "Deployment", desc: "Continuous deployment, preview branches, production hosting" }
  ],
  foundations: [
    { name: "Cybersecurity Fundamentals", level: "Coursework", desc: "Basic security hygiene, threat awareness, secure coding concepts" },
    { name: "AI Fundamentals", level: "Certification", desc: "Introductory neural networks, machine learning principles (IBM SkillsBuild)" }
  ]
};

import { projectsData, githubReposData } from './projectsData';
export { projectsData, githubReposData };

export const certificatesData = [
  {
    id: "wscube-cybersecurity",
    title: "Masterclass: How To Start A Career In Cybersecurity",
    issuer: "WsCube Tech",
    date: "June 22, 2026",
    regId: "WS/2026/M/52855",
    category: "Cybersecurity",
    badge: "Verified Certificate",
    image: "/assets/certificates/wscube_cybersecurity.jpg",
    pdfUrl: "/assets/certificates/wscube_cybersecurity.pdf",
    description: "Certificate of Participation proudly presented to Kunal Gulab Desale for actively participating in the intensive masterclass covering foundational cybersecurity vectors, career pathways, network defense concepts, and ethical hacking basics."
  },
  {
    id: "ibm-ai-skillsbuild",
    title: "Introduction to Artificial Intelligence",
    issuer: "IBM SkillsBuild",
    date: "August 12, 2026",
    regId: "ALM-COURSE_4058918",
    category: "Artificial Intelligence",
    badge: "IBM Verified",
    image: "/assets/certificates/ibm_ai_skillsbuild.png",
    pdfUrl: "/assets/certificates/ibm_ai_skillsbuild.pdf",
    description: "Completion certificate awarded by IBM SkillsBuild for completing the Introduction to Artificial Intelligence course, covering machine learning concepts, AI ethics, natural language processing foundations, and real-world AI applications."
  },
  {
    id: "nism-investor-advanced",
    title: "Investor Education - Advanced Module",
    issuer: "NISM (SEBI Initiative)",
    date: "September 22, 2026",
    category: "Financial Literacy",
    badge: "NISM Certified",
    image: "/assets/certificates/nism_investor_advanced.jpg",
    description: "Awarded by National Institute of Securities Markets (NISM, an educational initiative of SEBI) for successful completion of the advanced eLearning skill development module in capital markets and financial analysis."
  },
  {
    id: "nism-investor-basic",
    title: "Investor Education - Basic Module",
    issuer: "NISM (SEBI Initiative)",
    date: "September 22, 2026",
    category: "Financial Literacy",
    badge: "NISM Certified",
    image: "/assets/certificates/nism_investor_basic.jpg",
    description: "Awarded by National Institute of Securities Markets (NISM) for fundamental competence in securities markets, equity instruments, mutual funds, and risk assessment principles."
  }
];

export const galleryData = [
  {
    id: "sih-krishisetu",
    title: "Smart India Hackathon 2025 Architecture",
    category: "Hackathons",
    date: "September 2025",
    caption: "Team TechCatalyst presentation slide detailing the KrishiSetu farm-to-market platform workflow and price discovery engine.",
    image: "/assets/gallery/sih_hackathon_presentation.jpeg"
  },
  {
    id: "pes-college-team",
    title: "Computer Engineering Classmates & Team",
    category: "College",
    date: "PES Modern College of Engineering, Pune",
    caption: "Kunal with fellow engineering peers and project teammates on campus after collaborative academic presentations.",
    image: "/assets/gallery/pes_college_team.jpeg"
  },
  {
    id: "temple-architecture",
    title: "Application of Science in Temple Architecture",
    category: "Presentations",
    date: "SPPU First Year Engineering",
    caption: "Engineering research presentation evaluating precision acoustics, structural loads, and geometry in historical temple architecture at PES Modern College of Engineering.",
    image: "/assets/gallery/temple_architecture_presentation.png"
  },
  {
    id: "ganpati-field-work",
    title: "CEP Artisan Field Visit & Research",
    category: "Projects",
    date: "Shree Ganesh Kala Kendra",
    caption: "Field study and artisan workflow observation to analyze inventory bottlenecks for the Shree Ganesh Kala Kendra management platform.",
    image: "/assets/gallery/ganpati_artisan_field_work.jpeg"
  },
  {
    id: "ganpati-showcase",
    title: "Digital Idol Catalog Design",
    category: "Projects",
    date: "Ganpati Collections",
    caption: "High-fidelity storefront catalog created to bridge traditional clay sculptors with contemporary digital booking interfaces.",
    image: "/assets/gallery/ganpati_collections_showcase.jpeg"
  },
  {
    id: "development-setup",
    title: "Hands-on Engineering & Development Setup",
    category: "Projects",
    date: "Personal Workspace",
    caption: "Focused late-night coding sessions building full-stack components, experimenting with physics simulators, and debugging C++ scripts.",
    image: "/assets/gallery/development_workspace.jpeg"
  }
];

export const educationData = [
  {
    institution: "PES Modern College of Engineering, Pune",
    degree: "Bachelor of Engineering (B.Tech)",
    branch: "Computer Engineering",
    period: "2024 – 2028 (Expected 2029)",
    status: "Currently in Second Year",
    affiliation: "Savitribai Phule Pune University (SPPU)",
    highlight: "9.11 First-Year CGPA",
    details: [
      "Consistent academic performance with 9.11 CGPA in first year coursework.",
      "Key subjects: Object-Oriented Programming (OOP), Data Structures Fundamentals, Discrete Mathematics, Computer Graphics, Engineering Physics & Mathematics.",
      "Active participant in technical presentations, CEP field projects, and college technical activities."
    ]
  },
  {
    institution: "Vasantrao Naik Secondary & Higher Secondary Ashram School",
    location: "Galan Bk., Tal-Pachora, Dist-Jalgaon",
    degree: "Higher Secondary Certificate (HSC - Class XII)",
    branch: "Science Stream (PCM)",
    period: "2023 – 2025",
    highlight: "81.83% Distinction",
    details: [
      "Strong foundation in Physics, Chemistry, and Mathematics.",
      "Developed analytical problem-solving mindset and interest in computer science and software."
    ]
  },
  {
    institution: "Madhyamik Vidhyalay",
    location: "Brahmanshevage, Tal. Chalisgaon",
    degree: "Secondary School Certificate (SSC - Class X)",
    period: "2021 – 2023",
    highlight: "87.60% High Distinction",
    details: [
      "Academic excellence with top percentiles in Mathematics and Science."
    ]
  }
];

export const achievementsData = [
  {
    title: "Smart India Hackathon (SIH 2025) Participant",
    organization: "Ministry of Education & AICTE",
    date: "2025",
    category: "Hackathons",
    description: "Proposed and architected KrishiSetu with Team TechCatalyst, an AI-powered farm-to-market platform designed to give farmers fair price discovery and direct verified buyer connection."
  },
  {
    title: "First-Year Academic Distinction (9.11 CGPA)",
    organization: "PES Modern College of Engineering, Pune (SPPU)",
    date: "2025",
    category: "Academic",
    description: "Earned a 9.11 first-year CGPA in Computer Engineering through strong coursework in programming, engineering physics, and mathematics."
  },
  {
    title: "Community Engagement Project: Shree Ganesh Kala Kendra",
    organization: "College CEP Field Initiative",
    date: "2026",
    category: "Social Impact Project",
    description: "Conducted field study with Ganpati idol sculptors and built a working digital management system that digitized inventory tracking, booking records, and financial balance sheets."
  },
  {
    title: "Engineering Presentation: Temple Architecture",
    organization: "PES Modern College of Engineering (SPPU)",
    date: "2026",
    category: "Presentations",
    description: "Researched and presented an interdisciplinary study on 'Application of Science in Temple Architecture' exploring acoustic reflection and structural stability."
  },
  {
    title: "Certified Cybersecurity & AI Learning",
    organization: "WsCube Tech & IBM SkillsBuild",
    date: "2026",
    category: "Certifications",
    description: "Completed industry training masterclass on cybersecurity principles and earned IBM SkillsBuild certification in Artificial Intelligence foundations."
  }
];

export const learningTimeline = [
  {
    step: "01",
    phase: "Computer Engineering Foundation",
    focus: "PES Modern College of Engineering (9.11 CGPA)",
    desc: "Built a solid mathematical and analytical foundation in core engineering principles, logical reasoning, and academic rigor."
  },
  {
    step: "02",
    phase: "Programming Fundamentals",
    focus: "C, C++, Python & OOP",
    desc: "Mastered core programming structures, memory manipulation, object-oriented concepts, and modular code design."
  },
  {
    step: "03",
    phase: "Modern Web Technologies",
    focus: "React.js, Tailwind CSS & JavaScript",
    desc: "Transitioned from console programming to crafting responsive, component-driven web interfaces with modern UI standards."
  },
  {
    step: "04",
    phase: "Real-World Practical Projects",
    focus: "Shree Ganesh Kala Kendra, StockNews & Simulations",
    desc: "Applied full-stack concepts to solve real-world problems: artisan business management, market data visualization, and physics simulations."
  },
  {
    step: "05",
    phase: "Hackathons & Technical Activities",
    focus: "Smart India Hackathon 2025 (Team TechCatalyst)",
    desc: "Collaborated under intense deadlines, architected solution prototypes, and learned how to translate community needs into tech solutions."
  },
  {
    step: "06",
    phase: "Internship Objective",
    focus: "Software Engineering / Web Development Intern",
    desc: "Actively seeking a technical internship opportunity to learn from senior engineers, contribute to production codebases, and grow."
  },
  {
    step: "07",
    phase: "Future Software Engineering Career",
    focus: "Continuous Learning & Impactful Engineering",
    desc: "Aspiring to become an honest, disciplined software engineer who solves meaningful challenges through reliable code."
  }
];

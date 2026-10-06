/**
 * Verified Real Portfolio Projects Data
 * Student: Kunal Desale (Computer Engineering Student, PES MCOE Pune / SPPU)
 * GitHub: https://github.com/kunaldesale47-maker
 *
 * NOTE: All projects, repositories, dependencies, and URLs are strictly based on
 * real repositories and deployments. No fabricated stats, awards, or clients.
 */

export const projectsData = [
  {
    id: "shree-ganesh-kala-kendra",
    title: "Shree Ganesh Kala Kendra",
    subtitle: "Ganpati Idol Workshop Management & E-Commerce Booking Portal",
    category: "Full Stack",
    categories: ["ALL", "FULL STACK", "WEB"],
    featured: true,
    tagline: "A digital management system designed to help manage Ganpati idol inventory, orders, customers, payments and business operations.",
    description: "A digital management system designed to help manage Ganpati idol inventory, orders, customers, payments and business operations.",
    overview: "A dedicated digital management and storefront portal built for traditional Ganpati idol craftsmen. It transforms seasonal idol management by replacing manual paper diaries with a centralized digital dashboard that records advance orders, tracks stock status, and presents an interactive catalog for devotees.",
    problem: "Idol craftsmen traditionally handle hundreds of custom advance bookings, token payments, and delivery timelines using paper registers, leading to misplaced orders, double bookings, and inventory tracking chaos.",
    solution: "Built a full-featured web management system featuring product discovery, inventory status (Available, Reserved, Sold), order tracking, printable booking invoices, customer search, and role-protected admin dashboard.",
    features: [
      "Product discovery and idol reservation form with custom dimensions",
      "Persistent local booking store with customer search and filtering",
      "Customer booking tracking system with printable invoices",
      "Admin dashboard with inventory counts, sales metrics, and payment records",
      "Multilingual support (English & Marathi) and WhatsApp direct inquiry link"
    ],
    outcome: "Understood end-to-end full-stack workflow, state synchronization, client-side persistence, multi-language localization, and role-protected admin interfaces for real small businesses.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Node.js", "Vercel"],
    thumbnail: "/assets/projects/shree_ganesh_dashboard.jpg",
    secondaryImage: "/assets/projects/shree_ganesh_storefront.jpg",
    liveUrl: "https://shree-ganesh-kala-kendra.vercel.app/",
    githubUrl: "https://github.com/kunaldesale47-maker/Shree-Ganesh-Kala-Kendra",
    status: "Production Deployment"
  },
  {
    id: "finance-tracker",
    title: "Finance Tracker",
    subtitle: "Personal Finance, Budgeting & Cashflow Analytics Dashboard",
    category: "Full Stack",
    categories: ["ALL", "FULL STACK", "WEB"],
    featured: true,
    tagline: "An expense and personal finance tracking application focused on helping users monitor and organize their financial activity.",
    description: "An expense and personal finance tracking application focused on helping users monitor and organize their financial activity.",
    overview: "A comprehensive personal finance dashboard built to track income, expenses, accounts, budgets, investments, and financial goals in one cohesive dark-mode UI with automated cashflow analytics.",
    problem: "Tracking everyday cashflow, recurring bills, multiple bank accounts, SIPs, and savings goals across disconnected notes or spreadsheets makes financial discipline difficult to maintain.",
    solution: "Developed a responsive dashboard with interactive onboarding, automated financial health scoring, visual cashflow and category distribution charts, transaction logging, and rule-based financial advice.",
    features: [
      "Interactive onboarding wizard for profiles, bank accounts, and monthly income",
      "Dynamic cashflow area charts and category expense breakdown with Recharts",
      "Budget tracking, goal progress monitoring, and Financial Health Score",
      "Support for multiple accounts, credit cards, investments (SIP, Stocks, Gold), and loans",
      "Rule-based AI Advisor for real-time spending insights and suggestions"
    ],
    outcome: "Mastered complex React state management, dynamic data visualization with Recharts, Framer Motion transitions, and local storage state persistence.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Framer Motion", "Recharts", "Vite"],
    thumbnail: "/assets/projects/finance_tracker.png",
    liveUrl: "https://financetracker-mu-snowy.vercel.app/",
    githubUrl: "https://github.com/kunaldesale47-maker/Finance_Tracker-",
    status: "Live Deployed"
  },
  {
    id: "krishisetu",
    title: "KrishiSetu",
    subtitle: "Agricultural Market Intelligence & Direct Farmer Access Platform",
    category: "Full Stack",
    categories: ["ALL", "FULL STACK", "WEB"],
    featured: true,
    tagline: "A technology-focused project designed around agriculture and digital access to useful information and services.",
    description: "A technology-focused project designed around agriculture and digital access to useful information and services.",
    overview: "Engineered as an agricultural intelligence portal connecting farmers with regional mandi price discovery, transit cost calculations, verified buyer listings, and AI-assisted crop recommendations.",
    problem: "Smallholder farmers often sell their harvest to middlemen at low prices due to limited real-time visibility into regional mandi pricing and lack of transportation cost calculators.",
    solution: "Constructed a full-stack web application with TypeScript, React 19, Vite, and Google GenAI SDK integration to deliver mandi rate comparison, smart pricing advice, and direct market access.",
    features: [
      "Regional mandi price discovery engine comparing live agricultural rates",
      "Transit and storage cost calculation for net profitability recommendations",
      "Direct verified buyer connection reducing reliance on intermediaries",
      "AI-assisted agricultural recommendations integrated via Google GenAI SDK",
      "Multilingual interface tailored for accessible farmer interactions"
    ],
    outcome: "Explored modern TypeScript full-stack patterns, Vite + React 19 architecture, API integration with Google GenAI SDK, and designing accessible UIs for rural users.",
    technologies: ["TypeScript", "React", "Tailwind CSS", "Express", "Google GenAI SDK", "Vite"],
    thumbnail: "/assets/projects/krishisetu_sih.jpeg",
    secondaryImage: "/assets/projects/krishisetu_live.png",
    liveUrl: "https://krishisetu-sand.vercel.app/login",
    githubUrl: "https://github.com/kunaldesale47-maker/KrishiSetu",
    status: "Hackathon & Live Deployed"
  },
  {
    id: "thin-film",
    title: "Thin Film Interference Simulation",
    subtitle: "Interactive Wave Optics & Interference Physics Simulator",
    category: "Simulation",
    categories: ["ALL", "SIMULATION", "WEB"],
    featured: true,
    tagline: "An interactive physics simulation that visualizes thin-film interference concepts and helps learners understand the phenomenon through interactive experimentation.",
    description: "An interactive physics simulation that visualizes thin-film interference concepts and helps learners understand the phenomenon through interactive experimentation.",
    overview: "An interactive browser-based wave optics simulator built to demonstrate Snell's law, reflection phase reversals, path difference calculations (2μt cos r), and constructive vs. destructive interference fringes.",
    problem: "Wave optics concepts like phase shifts upon reflection from denser media and varying interference patterns are difficult to visualize from static 2D textbook drawings.",
    solution: "Engineered an interactive HTML5 Canvas simulator where students adjust film thickness, incident ray angles, and refractive indices (n1, n2, n3) to view animated ray paths and corresponding fringe patterns in real time.",
    features: [
      "Dynamic Canvas ray tracing showing reflection, refraction, and split ray paths",
      "Interactive sliders for angle of incidence, film thickness, and refractive indices",
      "Mathematical calculation of optical path difference and phase changes (Stokes' relations)",
      "Color fringe and spectral band visualization across different wavelength inputs",
      "Clean dark-mode interface with toggleable rays, normal lines, and interference tags"
    ],
    outcome: "Strengthened core mathematical modeling in JavaScript, trigonometric calculations (Snell's Law, optical path difference), and high-performance HTML5 Canvas animation loops.",
    technologies: ["JavaScript", "HTML5 Canvas", "CSS3", "Physics Calculations"],
    thumbnail: "/assets/projects/thin_film_simulation.png",
    liveUrl: "",
    githubUrl: "https://github.com/kunaldesale47-maker/Thin-Film-Interference-Simulation",
    status: "Open Source Simulation"
  },
  {
    id: "fourier-series",
    title: "Fourier Series Visualization",
    subtitle: "Interactive Signal Synthesis & Harmonic Approximation",
    category: "Visualization",
    categories: ["ALL", "VISUALIZATION"],
    featured: false,
    tagline: "An interactive visualization project that demonstrates how Fourier series can be represented and explored visually.",
    description: "An interactive visualization project that demonstrates how Fourier series can be represented and explored visually.",
    overview: "A mathematical visualization tool built in Python using Streamlit, NumPy, and Plotly to demonstrate how complex periodic waveforms (square, sawtooth, triangle) can be approximated by summing sinusoids with varying frequencies and amplitudes.",
    problem: "Understanding how superposition of orthogonal sine and cosine waves approximates discontinuous signals (such as Gibbs phenomenon) is difficult without interactive numerical controls.",
    solution: "Created a modular Streamlit web app that calculates Fourier coefficients using NumPy and renders interactive Plotly subplots showing individual harmonics, partial sums, and frequency spectra.",
    features: [
      "Interactive selection of standard periodic waveforms (Square, Sawtooth, Triangle, Custom)",
      "Real-time slider to adjust harmonic terms (N) and observe waveform convergence",
      "Plotly interactive charts with zoomable subplots for time domain and frequency spectra",
      "Visual demonstration of Gibbs phenomenon and harmonic amplitude decay",
      "Numerical calculation and display of Fourier series coefficients (a₀, aₙ, bₙ)"
    ],
    outcome: "Applied computational mathematics in Python, vectorized numerical processing with NumPy, and interactive scientific data visualization using Streamlit and Plotly.",
    technologies: ["Python", "Streamlit", "NumPy", "Plotly"],
    thumbnail: "/assets/projects/fourier_series.png",
    liveUrl: "",
    githubUrl: "https://github.com/kunaldesale47-maker/Fourier-Series-Visualization",
    status: "Scientific Computing"
  },
  {
    id: "yatrika-elite",
    title: "Yatrika Elite",
    subtitle: "Bespoke Travel & Destination Discovery Web Experience",
    category: "Web",
    categories: ["ALL", "WEB"],
    featured: false,
    tagline: "A travel-focused web experience designed to present destinations and travel information through an engaging interface.",
    description: "A travel-focused web experience designed to present destinations and travel information through an engaging interface.",
    overview: "A dark aesthetic travel landing page and destination showcase designed with custom typography, immersive destination cards, luxury hospitality styling, and responsive layout primitives.",
    problem: "Standard travel websites often feel cluttered with aggressive ads and confusing booking wizards, losing the visual elegance that inspires travel.",
    solution: "Built a curated travel portal interface highlighting international destinations, bespoke itineraries, and responsive media galleries with smooth CSS animations.",
    features: [
      "Curated destination catalog with luxury visual cards and regional highlights",
      "Custom dark luxury theme with Cormorant Garamond and DM Sans typography",
      "Interactive booking inquiry form and travel package breakdowns",
      "Fully responsive CSS layout using custom variables, fluid grid, and flexbox"
    ],
    outcome: "Refined frontend styling fundamentals, CSS custom properties, responsive typography, and semantic HTML document structuring.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    thumbnail: "/assets/projects/yatrika_elite.png",
    liveUrl: "",
    githubUrl: "https://github.com/kunaldesale47-maker/Yatrika-Elite",
    status: "Web Design Prototype"
  },
  {
    id: "game",
    title: "Game",
    subtitle: "Interactive Game Mechanics & Logic Exploration",
    category: "Experiments",
    categories: ["ALL", "EXPERIMENTS"],
    featured: false,
    tagline: "An experimental game project created as part of my learning and development journey.",
    description: "An experimental game project created as part of my learning and development journey.",
    overview: "A repository dedicated to exploring game loops, collision detection, input event handlers, and real-time state updates as part of foundational computer engineering programming practice.",
    problem: "Understanding event-driven interactive programming, keyboard polling, frame update loops, and collision math requires hands-on experimental coding.",
    solution: "Explored core interactive game architecture, frame updates, score tracking, and keyboard/touch event processing in dedicated experimental scripts.",
    features: [
      "Game loop implementation managing state, physics updates, and rendering",
      "User input handler for keyboard navigation and responsive controls",
      "Collision detection algorithms and boundary checking",
      "State machine managing start, play, score tracking, and game over states"
    ],
    outcome: "Practiced fundamental algorithms, object-oriented state management, coordinate geometry math, and event handling loops.",
    technologies: ["JavaScript", "HTML5 Canvas", "Game Logic"],
    thumbnail: "", // Clean gradient placeholder
    liveUrl: "",
    githubUrl: "https://github.com/kunaldesale47-maker/Game",
    status: "Programming Experiment"
  },
  {
    id: "git1",
    title: "Git1 (MCOE Engagement Portal)",
    subtitle: "College Clubs & Student Engagement Portal Experiments",
    category: "Experiments",
    categories: ["ALL", "EXPERIMENTS", "WEB"],
    featured: false,
    tagline: "A development repository containing project experiments, code and implementation work.",
    description: "A development repository containing project experiments, code and implementation work.",
    overview: "A hands-on repository created to practice Git branch workflows, version control hygiene, and build the MCOE (Modern College of Engineering) Student Engagement & Clubs web portal.",
    problem: "Practicing multi-file version control, commit history management, and structuring real college club engagement pages without risking production repositories.",
    solution: "Implemented an interactive student portal showcasing college clubs, engineering domains (AI, Robotics, Technical), activities, and announcements with clean vanilla JavaScript.",
    features: [
      "College club and domain showcase (Technical, AI & Computing, Robotics, Aero)",
      "Interactive category filter and dynamic interest card rendering",
      "Mobile-friendly navigation drawer and responsive CSS layout",
      "Version control practice covering staging, commits, and GitHub repository hosting"
    ],
    outcome: "Deepened understanding of Git version control commands, commit workflows, DOM manipulation, and responsive web layouts.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Git"],
    thumbnail: "/assets/projects/mcoe_engagement_portal.png",
    liveUrl: "",
    githubUrl: "https://github.com/kunaldesale47-maker/Git1",
    status: "Git & Web Practice"
  }
];

export const githubReposData = [
  {
    name: "Finance_Tracker-",
    description: "Track income, expenses, investments, and savings in one place with powerful insights to improve your financial health.",
    language: "JavaScript",
    languageColor: "#f7df1e",
    url: "https://github.com/kunaldesale47-maker/Finance_Tracker-",
    stars: 0,
    forks: 0,
    topics: ["react", "vite", "tailwind", "framer-motion"]
  },
  {
    name: "KrishiSetu",
    description: "Agricultural market intelligence and price discovery platform with AI integration for farmers.",
    language: "TypeScript",
    languageColor: "#3178c6",
    url: "https://github.com/kunaldesale47-maker/KrishiSetu",
    stars: 0,
    forks: 0,
    topics: ["typescript", "react", "genai", "sih"]
  },
  {
    name: "Shree-Ganesh-Kala-Kendra",
    description: "A modern management and ordering website for Ganpati idol workshop and craftsmen.",
    language: "JavaScript",
    languageColor: "#f7df1e",
    url: "https://github.com/kunaldesale47-maker/Shree-Ganesh-Kala-Kendra",
    stars: 0,
    forks: 0,
    topics: ["javascript", "dashboard", "booking", "e-commerce"]
  },
  {
    name: "Thin-Film-Interference-Simulation",
    description: "Interactive simulation explaining constructive and destructive interference of waves using HTML5 Canvas.",
    language: "HTML",
    languageColor: "#e34f26",
    url: "https://github.com/kunaldesale47-maker/Thin-Film-Interference-Simulation",
    stars: 0,
    forks: 0,
    topics: ["physics", "simulation", "canvas", "optics"]
  },
  {
    name: "Fourier-Series-Visualization",
    description: "Interactive Fourier series decomposition and wave synthesis application using Streamlit and Plotly.",
    language: "Python",
    languageColor: "#3572A5",
    url: "https://github.com/kunaldesale47-maker/Fourier-Series-Visualization",
    stars: 0,
    forks: 0,
    topics: ["python", "streamlit", "numpy", "plotly"]
  },
  {
    name: "Yatrika-Elite",
    description: "Dark-themed bespoke travel and luxury destination discovery interface with custom typography.",
    language: "HTML",
    languageColor: "#e34f26",
    url: "https://github.com/kunaldesale47-maker/Yatrika-Elite",
    stars: 0,
    forks: 0,
    topics: ["html", "css", "travel-portal"]
  },
  {
    name: "Git1",
    description: "MCOE Clubs & Student Engagement Portal experiment practicing Git workflow and component layout.",
    language: "HTML",
    languageColor: "#e34f26",
    url: "https://github.com/kunaldesale47-maker/Git1",
    stars: 0,
    forks: 0,
    topics: ["git", "mcoe", "student-portal"]
  },
  {
    name: "CodeLab",
    description: "Programming workspace experiments and foundational code snippets.",
    language: "HTML",
    languageColor: "#e34f26",
    url: "https://github.com/kunaldesale47-maker/CodeLab",
    stars: 0,
    forks: 0,
    topics: ["experiments", "learning"]
  }
];

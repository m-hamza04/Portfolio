export const profile = {
    name: "Hamza Hamid",
    role: "Full-Stack Developer",
    location: "Karachi, Pakistan",
    tagline:
        "I build systems that hold up under real workloads — normalized schemas, role-based access, JWT Authorization and APIs that don't fall over.",
    email: "HamzaHamid415@gmail.com",
    phone: "+92-332-3791249",
    linkedin: "https://www.linkedin.com/in/hamza-hamid-99a269324/",
    github: "https://github.com/m-hamza04",
    aspiration:
        "Aiming for backend / full-stack engineering roles where I can work on data-heavy, production-grade systems — the kind with real constraints, not toy CRUD apps.",
};

export const education = {
    school: "NED University of Engineering and Technology",
    location: "Karachi, Pakistan",
    degree: "Bachelor of Computer Science",
    duration: "2024-2028",
    honor: "Fatima Jinnah merit-based academic scholarship recipient",
};

export const skills = [
    {
        category: "Languages",
        items: ["C", "C++", "JavaScript", "SQL", "Dart"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express.js", "REST APIs", "MVC Architecture"],
    },
    {
        category: "Frontend",
        items: ["React.js", "HTML", "CSS", "Flutter"],
    },
    {
        category: "Databases",
        items: ["Oracle 21c XE", "PL/SQL", "MySQL", "MongoDB", "Supabase", "MS Access"],
    },
    {
        category: "Concepts",
        items: ["OOP", "Data Structures", "Normalization", "Role-Based Access", "OAuthorization"],
    },
];

export const projects = [
    {
        name: "PSX IntelliTrade",
        tag: "Flagship Project",
        description:
            "A three-tier stock portfolio and market analytics platform for the Pakistan Stock Exchange — React frontend, Express REST API, and an Oracle 21c XE database enforcing business logic through PL/SQL.",
        highlights: [
            "12 normalized tables with FK constraints and 3 analytical views",
            "Secure login with password hashing + trigger-based holdings reconciliation",
            "365-day volatility risk scoring and portfolio P&L analytics",
            "Role-based access, watchlists, and daily alerts across 20 PSX-listed companies",
        ],
        stack: ["Oracle 21c XE", "PL/SQL", "Node.js", "Express", "React", "Recharts"],
        stat: { label: "Tables", value: "12" },
        github: "https://github.com/m-hamza04/PSX_IntelliTrade.git",
    },
    {
        name: "File Compression System",
        tag: "Systems / C++",
        description:
            "A GUI-based encoding/decoding tool that compresses text files while preserving data integrity, built on core data-structure fundamentals.",
        highlights: [
            "Custom compression and decompression algorithm",
            "Focus on storage efficiency without data loss",
        ],
        stack: ["C++", "Data Structures"],
        stat: { label: "Type", value: "GUI" },
        github: "https://github.com/m-hamza04/File-Compression",
    },
    {
        name: "Hotel Management System",
        tag: "Desktop / DBMS",
        description:
            "A desktop database application handling bookings, check-in/out, and room availability, built with C++ and MS Access using core OOP principles.",
        highlights: [
            "Modules for booking, customer records, and availability tracking",
            "OOP design: classes, inheritance, encapsulation",
            "Integrated CRUD operations against MS Access",
        ],
        stack: ["C++", "MS Access", "OOP"],
        stat: { label: "Type", value: "Desktop" },
        github: "https://github.com/m-hamza04/Hotel-Management-System",
    },
    {
        name: "E-Commerce Storefront",
        tag: "Backend",
        description:
            "A server-rendered e-commerce storefront and admin API built with Node.js and Express, using EJS for views and MongoDB for persistence, with JWT-based auth stored in httpOnly cookies.",
        highlights: [
            "Full-text product search with category filtering and pagination",
            "Role-based access control — admin-only routes for product create/update/delete",
            "First signup matching ADMIN_EMAIL auto-granted admin privileges",
            "Cart system with add/update/remove line items, gated behind auth",
        ],
        stack: ["Node.js", "Express", "EJS", "MongoDB", "JWT"],
        stat: { label: "Auth", value: "JWT" },
        github: "https://github.com/m-hamza04/E-commerce.git",
    },
    {
        name: "FormOpsNode",
        tag: "Backend",
        description:
            "A modular form and record management backend built with Node.js, structured around a clean MVC pattern for scalability and maintainability.",
        highlights: [
            "Full CRUD flow between frontend and backend",
            "Custom multi-parameter filtering and query engine",
            "Routes / Models / Config separation for a maintainable codebase",
        ],
        stack: ["Node.js", "Express", "MVC"],
        stat: { label: "Pattern", value: "MVC" },
        github: "https://github.com/m-hamza04/FormOpsNode.git",
    },

];
export const experience = [
    {
        role: "Backend Developer Intern",
        org: "Developer Hub Corporation",
        duration: "8 weeks",
        points: [
            "Built a RESTful Bookstore API with Node.js, Express, and MongoDB, implementing full CRUD operations with Mongoose schema modeling",
            "Developed a server-rendered eCommerce storefront with dynamic product listings, server-side search/filtering, and responsive layouts",
            "Implemented JWT authentication with role-gated admin routes for protected product management",
            "Tested APIs with Postman and documented setup, endpoints, and sample payloads in README files",
        ],
    },
    {
        role: "Full Stack Intern",
        org: "Zenvyro labs",
        duration: "8 weeks",
        points: [
            "Built Flowdeck, a full-stack project management and team collaboration platform, with a three-layer architecture: Node.js/TypeScript/Prisma/Supabase/Socket.io backend, React/Vite/TanStack/Redux frontend, and a standalone React admin console",
            "Designed a custom pastel UI system with sage-teal accents, sliding sidebar navigation, and priority-indicator components across the frontend and admin console",
            "Resolved production-level issues including Prisma v7 breaking changes, ESM/CommonJS module conflicts, and Docker build/deployment configuration",
            "Deployed backend on Railway and frontend on Vercel, seeding the app with realistic data for portfolio demos",
        ],
    },

];

export const activities = [
    {
        name: "TechFest — NEDUET",
        role: "Volunteer",
        points: [
            "Assisted in organizing and managing technical events, coordinating with participants and organizing teams",
            "Supported logistics, registration, and event coordination for a university-level technology festival",
        ],
    },
];

export const certification = [
    {
        name: "Google AI Professional Certificate",
        issuer: "Google (via Coursera)",
        skills: [
            "AI Fundamentals",
            "AI for Brainstorming and Planning",
            "AI for Research and Insights",
            "AI for Writing and Communicating",
            "AI for Content Creation",
            "AI for Data Analysis",
            "AI for App Building",
        ],
        credentialUrl: 'https://www.coursera.org/account/accomplishments/professional-cert/O5VW0BRTSTFJ'
    },
    {
        name: "The Full Stack Web Development 2026: Bootcamp",
        issuer: "Udemy",
        skills: [
            "MongoDB",
            "Express.js",
            "React",
            "Node.js",
            "PHP",
            "Python (Programming Language)",
        ],
        credentialUrl: 'https://ude.my/UC-e1ac88cc-143e-43ab-af68-a2096bf3a652'
    },
]
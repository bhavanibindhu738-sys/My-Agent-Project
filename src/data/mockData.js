export const initialUserProfile = {
  name: 'Alex Johnson',
  email: 'alex.johnson@example.com',
  title: 'Full Stack Engineer',
  targetRole: 'Senior Full Stack Engineer',
  location: 'San Francisco, CA (Remote)',
  bio: 'Passionate developer with 3+ years of experience building scalable web applications with React, Node.js, and TypeScript. Focused on high-performance user interfaces and resilient REST APIs.',
  experienceLevel: 'Mid-Level (3-5 Years)',
  expectedSalary: '$130,000 - $160,000',
  preferredWorkType: 'Remote',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  skills: [
    { name: 'React.js', level: 92, category: 'Frontend' },
    { name: 'JavaScript (ES6+)', level: 95, category: 'Frontend' },
    { name: 'TypeScript', level: 85, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 90, category: 'Frontend' },
    { name: 'Node.js', level: 82, category: 'Backend' },
    { name: 'Express.js', level: 85, category: 'Backend' },
    { name: 'PostgreSQL', level: 78, category: 'Database' },
    { name: 'Git & GitHub', level: 88, category: 'Tools' },
    { name: 'Docker', level: 62, category: 'DevOps' },
    { name: 'GraphQL', level: 55, category: 'Backend' }
  ],
  education: [
    { degree: 'B.S. in Computer Science', institution: 'State University', year: '2019 - 2023' }
  ],
  workExperience: [
    {
      role: 'Full Stack Developer',
      company: 'TechFlow Solutions',
      duration: '2023 - Present',
      description: 'Built customer-facing web applications using React, Redux, and Node.js. Optimized database queries reducing page load times by 35%.'
    },
    {
      role: 'Junior Frontend Developer',
      company: 'Pixel Craft Studio',
      duration: '2022 - 2023',
      description: 'Developed responsive user interface components in React and Tailwind CSS. Collaborated with UI/UX designers to implement modern accessibility standards.'
    }
  ]
};

export const mockJobsDatabase = [
  {
    id: 'job-101',
    title: 'Senior Full Stack Engineer (React / Node)',
    company: 'Nexus Cloud Technologies',
    location: 'San Francisco, CA (Remote)',
    type: 'Full-Time',
    workMode: 'Remote',
    salary: '$135,000 - $165,000',
    matchScore: 96,
    posted: '2 hours ago',
    description: 'We are looking for a Senior Full Stack Engineer to lead front-end architecture and backend microservices integration. Experience with React, Node.js, and TypeScript required.',
    requiredSkills: ['React.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Docker'],
    matchedSkills: ['React.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    missingSkills: ['Docker'],
    companyLogo: '⚡'
  },
  {
    id: 'job-102',
    title: 'Frontend React Developer',
    company: 'Apex Digital Systems',
    location: 'Austin, TX (Hybrid)',
    type: 'Full-Time',
    workMode: 'Hybrid',
    salary: '$120,000 - $145,000',
    matchScore: 93,
    posted: '5 hours ago',
    description: 'Join our high-velocity product engineering team. You will build user interfaces, dynamic dashboards, and component libraries using React 18, TypeScript, and Tailwind CSS.',
    requiredSkills: ['React.js', 'TypeScript', 'Tailwind CSS', 'JavaScript (ES6+)', 'Redux'],
    matchedSkills: ['React.js', 'TypeScript', 'Tailwind CSS', 'JavaScript (ES6+)'],
    missingSkills: ['Redux'],
    companyLogo: '🚀'
  },
  {
    id: 'job-103',
    title: 'Full Stack Engineer (TypeScript & GraphQL)',
    company: 'Vanguard AI Labs',
    location: 'New York, NY (Remote)',
    type: 'Full-Time',
    workMode: 'Remote',
    salary: '$140,000 - $175,000',
    matchScore: 88,
    posted: '1 day ago',
    description: 'Seeking a versatile engineer to help build next-gen AI career workflows. You will design GraphQL APIs and high-performance React frontends.',
    requiredSkills: ['React.js', 'Node.js', 'GraphQL', 'TypeScript', 'Docker', 'AWS'],
    matchedSkills: ['React.js', 'Node.js', 'TypeScript'],
    missingSkills: ['GraphQL', 'Docker', 'AWS'],
    companyLogo: '🤖'
  },
  {
    id: 'job-104',
    title: 'Lead UI/UX Frontend Architect',
    company: 'Starlight Interactive',
    location: 'Seattle, WA (On-site)',
    type: 'Full-Time',
    workMode: 'On-site',
    salary: '$150,000 - $185,000',
    matchScore: 84,
    posted: '2 days ago',
    description: 'Spearhead design systems, accessibility audits, and performant web app architecture. Strong mastery of CSS design tokens and component testing mandatory.',
    requiredSkills: ['React.js', 'Tailwind CSS', 'TypeScript', 'Figma', 'System Design'],
    matchedSkills: ['React.js', 'Tailwind CSS', 'TypeScript'],
    missingSkills: ['Figma', 'System Design'],
    companyLogo: '✨'
  },
  {
    id: 'job-105',
    title: 'Software Engineer - Platform & APIs',
    company: 'DataPulse Networks',
    location: 'Chicago, IL (Remote)',
    type: 'Full-Time',
    workMode: 'Remote',
    salary: '$125,000 - $155,000',
    matchScore: 82,
    posted: '3 days ago',
    description: 'Develop RESTful web services, database schema migrations, and event-driven microservices in Node.js and PostgreSQL.',
    requiredSkills: ['Node.js', 'PostgreSQL', 'Express.js', 'Docker', 'Redis'],
    matchedSkills: ['Node.js', 'PostgreSQL', 'Express.js'],
    missingSkills: ['Docker', 'Redis'],
    companyLogo: '📊'
  }
];

export const mockCareerPaths = [
  {
    id: 'path-1',
    title: 'Senior Full Stack Engineer',
    category: 'Software Engineering',
    avgSalary: '$145,000 / year',
    demandGrowth: '+24% (High Demand)',
    difficulty: 'Intermediate to Advanced',
    overview: 'Build end-to-end web applications, design database architectures, and lead technical implementation across frontend and backend stacks.',
    keySkills: ['React.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'System Design'],
    ladder: [
      { role: 'Junior Engineer', salary: '$75k - $95k', timeframe: '0-2 yrs' },
      { role: 'Mid-Level Engineer', salary: '$110k - $135k', timeframe: '2-4 yrs' },
      { role: 'Senior Engineer', salary: '$145k - $180k', timeframe: '5+ yrs' },
      { role: 'Principal / Architect', salary: '$190k - $240k+', timeframe: '8+ yrs' }
    ]
  },
  {
    id: 'path-2',
    title: 'AI / ML Solutions Engineer',
    category: 'Artificial Intelligence',
    avgSalary: '$160,000 / year',
    demandGrowth: '+38% (Extreme Growth)',
    difficulty: 'Advanced',
    overview: 'Integrate Large Language Models, vector embeddings, and predictive machine learning models into enterprise software applications.',
    keySkills: ['Python', 'PyTorch / TensorFlow', 'LangChain', 'FastAPI', 'Vector DBs', 'LLM Prompt Engineering'],
    ladder: [
      { role: 'Associate AI Developer', salary: '$90k - $115k', timeframe: '0-2 yrs' },
      { role: 'AI Applications Engineer', salary: '$130k - $160k', timeframe: '2-4 yrs' },
      { role: 'Senior AI Architect', salary: '$170k - $220k', timeframe: '5+ yrs' }
    ]
  },
  {
    id: 'path-3',
    title: 'Technical Product Manager (TPM)',
    category: 'Product & Strategy',
    avgSalary: '$140,000 / year',
    demandGrowth: '+18% (Steady Growth)',
    difficulty: 'Intermediate',
    overview: 'Bridge software engineering teams and business stakeholders. Define product roadmaps, user stories, and feature specs.',
    keySkills: ['Agile / Scrum', 'Roadmapping', 'User Research', 'API Design', 'Data Analytics', 'Jira'],
    ladder: [
      { role: 'Associate Product Manager', salary: '$85k - $110k', timeframe: '0-2 yrs' },
      { role: 'Product Manager', salary: '$120k - $150k', timeframe: '2-5 yrs' },
      { role: 'Senior / Lead TPM', salary: '$160k - $210k+', timeframe: '5+ yrs' }
    ]
  }
];

export const mockInitialApplications = [
  {
    id: 'app-1',
    company: 'Nexus Cloud Technologies',
    title: 'Senior Full Stack Engineer',
    salary: '$145,000',
    location: 'San Francisco, CA (Remote)',
    appliedDate: '2026-09-24',
    status: 'Interviewing',
    notes: 'Completed initial phone screen. Technical system design scheduled for Friday.',
    followUpDate: '2026-10-02'
  },
  {
    id: 'app-2',
    company: 'Apex Digital Systems',
    title: 'Frontend React Developer',
    salary: '$130,000',
    location: 'Austin, TX (Hybrid)',
    appliedDate: '2026-09-20',
    status: 'Applied',
    notes: 'Submitted customized ATS resume and cover letter.',
    followUpDate: '2026-09-30'
  },
  {
    id: 'app-3',
    company: 'Vanguard AI Labs',
    title: 'Full Stack Engineer',
    salary: '$150,000',
    location: 'Remote',
    appliedDate: '2026-09-18',
    status: 'Offer',
    notes: 'Received offer letter! Base salary $145k + stock options. Negotiating start date.',
    followUpDate: '2026-10-05'
  },
  {
    id: 'app-4',
    company: 'Starlight Interactive',
    title: 'Lead UI Architect',
    salary: '$160,000',
    location: 'Seattle, WA',
    appliedDate: '2026-09-10',
    status: 'Saved',
    notes: 'Preparing custom resume highlighting component library work.',
    followUpDate: '2026-10-01'
  }
];

export const mockInterviewQuestions = [
  {
    id: 'q-1',
    category: 'Technical',
    title: 'Explain how React Virtual DOM diffing algorithm works.',
    difficulty: 'Intermediate',
    expectedKeyPoints: ['Reconciliation', 'Fiber architecture', 'Keys in lists', 'Batching state updates'],
    modelAnswer: 'React maintains a lightweight Virtual DOM in memory. When state updates occur, React generates a new Virtual DOM tree and compares it with the previous snapshot using the reconciliation algorithm (O(n) complexity heuristics). It calculates the minimum necessary real DOM mutations and applies them efficiently in batches.'
  },
  {
    id: 'q-2',
    category: 'Behavioral',
    title: 'Describe a time you faced a tough technical deadlock under tight deadlines.',
    difficulty: 'Intermediate',
    expectedKeyPoints: ['Situation', 'Task', 'Action taken', 'Result achieved (STAR method)', 'Quantified outcome'],
    modelAnswer: 'Use the STAR method: State the specific Project Situation, your defined Task responsibilities, the step-by-step Action you orchestrated (e.g. debugging, load profiling, communicating with stakeholders), and the positive Result (e.g. fixed memory leak, delivered feature on schedule with 99.9% uptime).'
  },
  {
    id: 'q-3',
    category: 'System Design',
    title: 'Design a scalable real-time Notification System handling 1M daily users.',
    difficulty: 'Advanced',
    expectedKeyPoints: ['WebSockets / SSE', 'Message Queue (Kafka/RabbitMQ)', 'Redis Caching', 'Push Notification APIs'],
    modelAnswer: 'Architecture outline: API Gateway -> Load Balancer -> Node.js WebSocket Service -> Redis Pub/Sub -> RabbitMQ / Kafka Queue for reliable delivery -> Push Notification Workers (APNS/FCM). Include fallback polling for dropped socket connections.'
  }
];

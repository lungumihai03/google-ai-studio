import {
  Project,
  Experience,
  Education,
  Achievement,
  Publication,
  SkillCategory,
  HardwareItem,
  LanguageSkill,
} from '../types';

export const PERSONAL_INFO = {
  fullName: 'Mihai Lungu',
  preferredName: 'Mihai',
  birthDate: '22 November 2003',
  birthPlace: 'Soroca, Republic of Moldova',
  currentLocation: 'Chișinău, Republic of Moldova',
  email: 'lungu.mihai03@gmail.com',
  github: 'https://github.com/lungumihai03',
  role: 'Software Developer & Information Analyst Assistant',
  academicStatus: "Master's Student in Information Technologies in Education (Year 2)",
  institution: 'Vladimir Andrunachievici Institute of Mathematics and Computer Science',
  university: 'Ion Creangă State Pedagogical University of Chișinău',
  faculty: 'Faculty of Physics, Mathematics and Information Technologies (FMTI)',
  primarySpecialty: 'C# / .NET Software Engineering & Cryptography',
  shortBio:
    'Mihai Lungu is a Moldovan software developer and Information Analyst Assistant at the Vladimir Andrunachievici Institute of Mathematics and Computer Science. Specializing in C#/.NET engineering, scientific publication systems (CSJM), and applied cryptography, he combines academic rigor with high-performance desktop and backend software development.',
  careerGoal:
    'To continuously grow as a strong professional software developer, engineering high-reliability systems, educational software, and secure algorithmic architectures.',
};

export const EXPERIENCES: Experience[] = [
  {
    id: 'math-institute-csjm',
    role: 'Information Analyst Assistant',
    organization: 'Vladimir Andrunachievici Institute of Mathematics and Computer Science',
    department: 'Software Development & Scientific Information Systems',
    location: 'Chișinău, Republic of Moldova',
    period: 'October 2025 – Present',
    startDate: '2025-10-01',
    isCurrent: true,
    description:
      'Core software development and database engineering for CSJM (Computer Science Journal Management), the central digital platform managing scientific publication lifecycles, peer review systems, and academic editorial workflows.',
    responsibilities: [
      'Architecting and maintaining the CSJM journal submission, versioning, and editorial review pipeline.',
      'Implementing strict manuscript validation, author submission workflows, reviewer assignments, and administrative control panels.',
      'Optimizing relational database architectures for high-throughput paper archives, metadata indexing, and access controls.',
      'Maintaining information systems security, data consistency, and reliable system operations across the Institute.',
    ],
    technologies: ['C#', '.NET', 'PHP', 'SQL / MySQL', 'Database Architecture', 'Web Systems', 'Apache'],
  },
];

export const EDUCATIONS: Education[] = [
  {
    id: 'master-education',
    degree: "Master's Degree (Year 2)",
    field: 'Information Technologies in Education',
    institution: 'Ion Creangă State Pedagogical University of Chișinău',
    faculty: 'Faculty of Physics, Mathematics and Information Technologies (FMTI)',
    group: 'FMTI_TII_ME251F',
    period: '2025 – Present',
    status: 'In Progress',
    thesis: {
      title: 'Architectures and Optimization for Scientific Publication Platforms (CSJM)',
      description:
        'Advanced research and engineering on digital journal management workflows, metadata standardization, and automated editorial validation systems.',
      technologies: ['C#', '.NET', 'SQL', 'Educational Technologies', 'Information Systems'],
    },
    highlights: [
      'Focusing on digital educational ecosystems, cryptographic algorithms, and distributed information systems.',
      'Conducting research tied directly to real-world deployment at the Institute of Mathematics and Computer Science.',
    ],
  },
  {
    id: 'bachelor-cs',
    degree: "Bachelor's Degree in Computer Science",
    field: 'Computer Science (Informatică)',
    institution: 'Ion Creangă State Pedagogical University of Chișinău',
    faculty: 'Faculty of Physics, Mathematics and Information Technologies (FMTI)',
    period: '2021 – 2025',
    status: 'Completed',
    thesis: {
      title:
        'Development and Implementation of a Software Module for Managing Activities in Human Resources and Accounting',
      description:
        'Engineered an enterprise-grade desktop management system for HR workflows, employee records, payroll calculation, and accounting activities using C# and modern WinUI 3 architecture.',
      technologies: ['C#', 'WinUI 3', '.NET', 'SQL Server / SQLite', 'XAML', 'MVVM'],
    },
    highlights: [
      'Graduated with honors in Computer Science in 2025.',
      '1st Place at the Interuniversity Computer Science Olympiad (2023).',
      'Student of the Year 2024 (3rd Degree Distinction).',
      'Extensive coursework in Data Structures, Advanced Algorithms, Cryptography, and Software Engineering.',
    ],
  },
  {
    id: 'spring-school-iasi',
    degree: 'Advanced Spring School Certificate',
    field: 'Cloud/Edge Computing, 5G & Security in Distributed Systems',
    institution: 'Alexandru Ioan Cuza University of Iași',
    faculty: 'Faculty of Computer Science',
    period: 'Spring 2024',
    status: 'Completed',
    highlights: [
      'Intensive training in Cloud & Edge Computing architectures and network communication protocols.',
      'Data visualization technologies, distributed systems security, and 5G network performance.',
    ],
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'digieduhack-2025',
    title: 'DigiEduHack Moldova 2025 — 1st Place Winner',
    year: 2025,
    organizer: 'DigiEduHack & European Institute of Innovation and Technology (EIT)',
    rank: '1st Place (Champion)',
    badgeType: 'gold',
    description:
      'Awarded first place for innovative educational software architecture, leveraging modern technologies to transform digital learning experiences.',
  },
  {
    id: 'ms-csharp-cert-2024',
    title: 'Foundational C# with Microsoft Certification',
    year: 2024,
    organizer: 'Microsoft Developer & freeCodeCamp',
    rank: 'Certified Developer',
    badgeType: 'special',
    description:
      'Official Microsoft certification validating core and advanced C# language mastery, OOP principles, data manipulation, LINQ, exception handling, and standard library architectures.',
  },
  {
    id: 'student-of-year-2024',
    title: 'Student of the Year 2024 — 3rd Degree Honor',
    year: 2024,
    organizer: 'Ion Creangă State Pedagogical University',
    rank: '3rd Degree Award',
    badgeType: 'bronze',
    description:
      'Recognized for exceptional academic excellence, scientific research contributions, and software development leadership.',
  },
  {
    id: 'genetic-algorithms-2024',
    title: 'Scientific Presentation on Genetic Algorithms — 2nd Place',
    year: 2024,
    organizer: 'FMTI Scientific Conference',
    rank: '2nd Place',
    badgeType: 'silver',
    description:
      'Awarded 2nd place for research presentation and algorithmic demonstration on genetic algorithms for complex combinatorial optimization.',
  },
  {
    id: 'ux-ui-marathon-2024',
    title: 'UX/UI Design Marathon — Completed with Excellence',
    year: 2024,
    organizer: 'Nova Academy',
    rank: 'Excellence Distinction',
    badgeType: 'special',
    description:
      'Comprehensive design training covering responsive interface architecture, user flow mapping, typography hierarchies, and modern visual design principles.',
  },
  {
    id: 'spring-school-cert-2024',
    title: 'Spring School in Distributed Computing & Security',
    year: 2024,
    organizer: 'Alexandru Ioan Cuza University of Iași',
    rank: 'Certificate of Completion',
    badgeType: 'special',
    description:
      'Specialized program covering Cloud/Edge computing, 5G security, and advanced visualization systems.',
  },
  {
    id: 'olympiad-cs-2023',
    title: 'Interuniversity Computer Science Olympiad — 1st Place',
    year: 2023,
    organizer: 'Interuniversity Academic Board of Moldova',
    rank: '1st Place (Gold)',
    badgeType: 'gold',
    description:
      'First-place laureate in algorithmic problem solving, competitive programming, and efficient data structure implementations.',
  },
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'pub-latin-groupoids',
    title: 'Cryptographic Algorithms and Latin Groupoid Isotopes',
    focusArea: 'Applied Cryptography & Algebraic Structures',
    venueOrContext: 'Scientific Conference Proceedings & Journal Research',
    year: '2024 – 2025',
    authors: ['Mihai Lungu'],
    summary:
      'Investigation and design of symmetric cryptographic primitives utilizing quasigroups and Latin groupoid isotopy transformations to achieve enhanced confusion, non-linearity, and resistance against linear cryptanalysis.',
    keywords: ['Quasigroups', 'Latin Squares', 'Isotopy', 'Symmetric Ciphers', 'Cryptanalysis'],
  },
  {
    id: 'pub-hr-winui3',
    title: 'Human Resources and Payroll Management Software Architected with C# and WinUI 3',
    focusArea: 'Software Engineering & Enterprise Desktop Development',
    venueOrContext: 'Bachelor Thesis Defense & Applied Software Publications',
    year: '2025',
    authors: ['Mihai Lungu'],
    summary:
      'Architectural blueprint for high-responsiveness Windows enterprise applications. Explores decoupled MVVM design patterns, responsive UI data binding, localized reporting, and robust transactional accounting databases.',
    keywords: ['C#', '.NET', 'WinUI 3', 'MVVM', 'Payroll Systems', 'Database Optimization'],
  },
  {
    id: 'pub-prog-edu-data',
    title: 'Programming Education Methodologies and Managing Structured Data in Academic Frameworks',
    focusArea: 'Educational Technologies & Computer Science Pedagogy',
    venueOrContext: 'FMTI Scientific Conferences & Educational Tech Symposiums',
    year: '2024 – 2025',
    authors: ['Mihai Lungu'],
    summary:
      'Exploration of interactive digital tools and structured data management systems for teaching modern programming concepts, algorithmic thinking, and database fundamentals to students.',
    keywords: ['Informatics Pedagogy', 'Interactive Learning', 'Structured Data', 'Algorithm Visualizers'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'csjm-platform',
    title: 'CSJM — Computer Science Journal Management',
    category: 'web',
    importanceRank: 1,
    shortDescription:
      'Enterprise platform for managing scientific publication lifecycles, manuscript peer review, editorial assignments, and journal archives.',
    fullDescription:
      'CSJM is the production-grade scientific publication management platform powering academic editorial operations at the Vladimir Andrunachievici Institute of Mathematics and Computer Science. The system orchestrates the complete lifecycle of scientific manuscripts: author submission, automated format and metadata validation, multi-stage peer reviewer dispatch, editorial decision management, issue aggregation, and public archive indexing.',
    techStack: ['C#', '.NET', 'PHP', 'MySQL', 'JavaScript', 'Apache', 'REST APIs'],
    keyFeatures: [
      'Multi-role workflow engine (Authors, Reviewers, Editors, Super Admins)',
      'Manuscript version control and automated PDF/metadata extraction',
      'Double-blind peer review assignment and rating rubric engine',
      'Scientific archive cataloging with DOI/ISSN indexing support',
    ],
    academicContext: "Master's Thesis Research & Core Institute Responsibilities",
    isFeatured: true,
  },
  {
    id: 'educational-software',
    title: 'Interactive Educational Software Suite',
    category: 'desktop',
    importanceRank: 2,
    shortDescription:
      'Modular suite of interactive educational applications designed to teach programming, data structures, and mathematical algorithms.',
    fullDescription:
      'A comprehensive suite of desktop and web-based educational tools focused on simplifying complex algorithmic paradigms for students. Includes step-by-step visualizers for sorting algorithms, graph traversals, stack/queue memory layouts, and algebraic manipulations.',
    techStack: ['C#', '.NET', 'WinForms', 'WPF', 'JavaScript', 'HTML5/Canvas'],
    keyFeatures: [
      'Visual execution of algorithms with step-by-step rewind and variable tracking',
      'Interactive quizzes with immediate visual compiler feedback',
      'DigiEduHack 2025 1st Place award-winning architecture',
    ],
    academicContext: 'Developed in conjunction with pedagogical research at FMTI',
    isFeatured: true,
  },
  {
    id: 'markovski-cipher',
    title: 'Markovski Hybrid Quasigroup Cipher',
    category: 'crypto',
    importanceRank: 3,
    shortDescription:
      'Advanced symmetric cipher leveraging Markovski quasigroup transformations and Latin squares for non-linear cryptographic diffusion.',
    fullDescription:
      'Implementation of a high-security symmetric block/stream cipher based on Professor Smile Markovski quasigroup string transformations. The system uses Latin squares as operation matrices to produce pseudo-random permutations with maximum avalanche effect and high algebraic resistance.',
    techStack: ['C#', '.NET', 'Mathematics', 'Quasigroup Algebra', 'Bitwise Optimization'],
    cipherType: 'markovski',
    hasInteractiveDemo: true,
    keyFeatures: [
      'Dynamic Latin square quasigroup multiplication and right-division operators',
      'Leader-element initialization for diffusion propagation across blocks',
      'Benchmark suite measuring throughput and resistance against differential attacks',
    ],
    academicContext: 'Published research topic in algebraic cryptography at FMTI',
    isFeatured: true,
  },
  {
    id: 'rsa-exponentiation',
    title: 'RSA Cryptosystem via Modular Exponentiation',
    category: 'crypto',
    importanceRank: 4,
    shortDescription:
      'Asymmetric RSA public-key cryptosystem implementation from scratch featuring fast modular exponentiation and Miller-Rabin primality testing.',
    fullDescription:
      'A pure mathematical implementation of the RSA public-key encryption and digital signature scheme. Built without third-party crypto black-boxes, featuring large prime generation with Miller-Rabin probabilistic tests, Extended Euclidean Algorithm for modular multiplicative inverse (d = e^-1 mod φ(n)), and square-and-multiply modular exponentiation.',
    techStack: ['C#', '.NET', 'BigInteger', 'Number Theory', 'Modular Arithmetic'],
    cipherType: 'rsa',
    hasInteractiveDemo: true,
    keyFeatures: [
      'Fast Square-and-Multiply modular exponentiation algorithm O(log e)',
      'Probabilistic Miller-Rabin prime generator with customizable round count',
      'Public/Private keypair generation and digital signature signing & verification',
    ],
    isFeatured: true,
  },
  {
    id: 'isotope-cipher',
    title: 'Isotope Groupoid Cipher',
    category: 'crypto',
    importanceRank: 5,
    shortDescription:
      'Non-linear cryptographic cipher derived from Latin groupoid isotopy transformations (α, β, γ triples).',
    fullDescription:
      'An innovative cryptographic construction utilizing algebraic isotopy of groupoids. By applying a triple of permutations (α, β, γ) to an underlying Latin square, the cipher creates dynamically mutating algebraic operations that neutralize frequency analysis and linear statistical patterns.',
    techStack: ['C#', '.NET', 'Algebraic Groupoids', 'Combinatorics', 'Permutations'],
    cipherType: 'isotope',
    hasInteractiveDemo: true,
    keyFeatures: [
      'Permutation triple (α, β, γ) generator over Galois fields',
      'Dynamic substitution matrices updating per block iteration',
      'Published in academic conference proceedings on applied cryptography',
    ],
    isFeatured: true,
  },
  {
    id: 'recycle-bin-tray',
    title: 'Recycle Bin in System Tray',
    category: 'desktop',
    importanceRank: 6,
    shortDescription:
      'Native Windows utility that docks the Recycle Bin in the system notification tray with quick context actions and item count monitoring.',
    fullDescription:
      'A sleek, lightweight C# Windows utility that integrates the Windows Recycle Bin directly into the system taskbar tray. It tracks bin fullness in real-time, displays item count and total disk usage, allows instant one-click emptying, and provides customizable double-click behaviors via native Win32 Shell APIs (`SHEmptyRecycleBin`, `SHQueryRecycleBin`).',
    techStack: ['C#', '.NET', 'WinForms', 'Win32 Shell API', 'P/Invoke', 'Windows Registry'],
    githubUrl: 'https://github.com/lungumihai03/Recicle-bin-in-tray',
    keyFeatures: [
      'Low memory footprint (< 12MB RAM) running silently in background',
      'Real-time tray icon state updates (Empty vs Full) using Windows Shell notifications',
      'Instant empty bin action with custom sound and confirmation prompts',
      'Auto-start with Windows support via registry integration',
    ],
    isFeatured: true,
  },
  {
    id: 'merkle-hellman-knapsack',
    title: 'Merkle-Hellman Knapsack Cryptosystem',
    category: 'crypto',
    importanceRank: 7,
    shortDescription:
      'Public-key cryptosystem implementation based on the NP-complete subset sum problem with superincreasing knapsack transformation.',
    fullDescription:
      'Full implementation of the historic Merkle-Hellman knapsack public-key cipher. Transforms an easy superincreasing knapsack sequence into a hard general knapsack problem using modular multiplication (W * s_i mod M) and coprime multipliers.',
    techStack: ['C#', '.NET', 'Number Theory', 'NP-Completeness', 'Algorithms'],
    cipherType: 'knapsack',
    hasInteractiveDemo: true,
    keyFeatures: [
      'Superincreasing sequence generator with coprime modulus M and multiplier W',
      'Bitwise vector dot-product encryption',
      'Decryption via modular inverse and greedy knapsack solver',
    ],
    isFeatured: false,
  },
  {
    id: 'todo-app-desktop',
    title: 'High-Efficiency Task & TODO Manager',
    category: 'desktop',
    importanceRank: 8,
    shortDescription:
      'Clean desktop productivity manager with SQLite storage, priority categorization, deadline reminders, and fast keyboard shortcuts.',
    fullDescription:
      'A modern desktop task manager built for developers and students. Features categorized boards, priority color-coding, sub-task tracking, local SQLite persistence, and instant search.',
    techStack: ['C#', '.NET', 'WinForms / WPF', 'SQLite', 'JSON Serialization'],
    keyFeatures: [
      'Fast local SQLite database storage with zero latency',
      'Keyboard-first navigation and global shortcuts',
      'Export tasks to JSON, CSV, and Markdown checklists',
    ],
    isFeatured: false,
  },
  {
    id: 'hr-management-system',
    title: 'HR & Accounting Enterprise Management System',
    category: 'dotnet',
    importanceRank: 9,
    shortDescription:
      "Bachelor's Thesis Project: Comprehensive enterprise application for managing personnel records, payroll calculations, contracts, and financial accounting.",
    fullDescription:
      'The capstone project for Mihai’s Bachelor’s Degree in Computer Science (2025). A full-featured enterprise management system engineered with C# and WinUI 3. It models complex organizational structures, employee lifecycle events, automated tax and payroll calculation according to Moldovan legislation, vacation balances, and automated PDF export of financial statements.',
    techStack: ['C#', '.NET', 'WinUI 3', 'Windows App SDK', 'SQL Server', 'Entity Framework', 'MVVM'],
    keyFeatures: [
      'Modern Windows 11 fluent design interface using WinUI 3 and XAML controls',
      'Automated payroll calculation engine accounting for taxes, deductions, and bonuses',
      'Comprehensive reporting subsystem generating official employment forms and ledgers',
      'Role-based access control (RBAC) with hashed credentials and audit logging',
    ],
    academicContext: "Bachelor's Degree Thesis (Ion Creangă State Pedagogical University, 2025)",
    isFeatured: true,
  },
  {
    id: 'vscode-extensions',
    title: 'Custom VS Code Developer Tools & Extensions',
    category: 'tools',
    importanceRank: 10,
    shortDescription:
      'Productivity extensions for Visual Studio Code enhancing C# snippet scaffolding, cryptographic file inspection, and formatted logging.',
    fullDescription:
      'A collection of tailored Visual Studio Code extensions engineered to streamline daily development in C#, format structured data dumps, and provide quick visual tools for inspecting binary/hex formats and crypto tokens.',
    techStack: ['TypeScript', 'JavaScript', 'VS Code Extension API', 'Node.js'],
    keyFeatures: [
      'C# boilerplate generator for MVVM properties and DTO mappings',
      'Hex / Binary inspector with endianness toggle',
      'Command palette integrations for quick developer utilities',
    ],
    isFeatured: false,
  },
  {
    id: 'vigenere-cipher-cracker',
    title: 'Vigenère Cipher & Automated Cryptanalysis Suite',
    category: 'crypto',
    importanceRank: 11,
    shortDescription:
      'Polyalphabetic Vigenère cipher engine with automated cracking using Kasiski examination and Index of Coincidence (IoC).',
    fullDescription:
      'Complete tool for encrypting, decrypting, and cryptanalyzing polyalphabetic Vigenère ciphers. Includes an automated cracker that determines key length using the Index of Coincidence and Kasiski examination, followed by frequency analysis on individual cosets to recover the secret keyword without brute force.',
    techStack: ['C#', '.NET', 'Cryptanalysis', 'Statistics', 'Frequency Analysis'],
    cipherType: 'vigenere',
    hasInteractiveDemo: true,
    keyFeatures: [
      'Polyalphabetic encryption and decryption with arbitrary key lengths',
      'Automated key length deduction via Index of Coincidence (IoC) calculation',
      'Single-letter frequency chi-squared fitting to crack ciphertexts autonomously',
    ],
    isFeatured: true,
  },
  {
    id: 'playfair-cipher',
    title: 'Playfair Digraph Cipher Engine',
    category: 'crypto',
    importanceRank: 12,
    shortDescription:
      'Digraph substitution cipher using a 5x5 key-derived matrix with automated duplicate padding and coordinate arithmetic.',
    fullDescription:
      'A faithful implementation of the classic 5x5 Playfair digraph substitution cipher. Automatically constructs the key table omitting duplicate letters (I/J combined), splits plaintext into paired digraphs with filler characters (X), and applies row, column, and rectangle coordinate rules.',
    techStack: ['C#', '.NET', 'Matrix Arithmetic', 'String Manipulation'],
    cipherType: 'playfair',
    hasInteractiveDemo: true,
    keyFeatures: [
      'Interactive 5x5 key matrix visualizer with dynamic letter placement',
      'Step-by-step digraph parsing and transformation logger',
      'Support for both encryption and decryption modes',
    ],
    isFeatured: false,
  },
  {
    id: 'hill-cipher',
    title: 'Hill Cipher Matrix Engine',
    category: 'crypto',
    importanceRank: 13,
    shortDescription:
      'Polygraphic substitution cipher based on linear algebra matrix multiplication modulo 26 and modular inverse matrix calculation.',
    fullDescription:
      'Linear algebra cipher applying n x n matrix multiplications over modulo 26. Calculates the determinant and adjugate matrix to find the modular matrix inverse for decryption, ensuring the determinant gcd(det, 26) = 1.',
    techStack: ['C#', '.NET', 'Linear Algebra', 'Modular Arithmetic', 'Matrix Math'],
    cipherType: 'hill',
    hasInteractiveDemo: true,
    keyFeatures: [
      'Support for 2x2 and 3x3 invertible key matrices',
      'Modular determinant and adjugate matrix inversion calculator',
      'Vector-matrix dot product encryption engine',
    ],
    isFeatured: false,
  },
  {
    id: 'cryptanalysis-toolkit',
    title: 'Frequency Analysis & Cryptanalysis Diagnostic Toolkit',
    category: 'crypto',
    importanceRank: 14,
    shortDescription:
      'Diagnostic software for analyzing unknown ciphertexts with character frequency charts, entropy calculations, and cipher classification.',
    fullDescription:
      'A developer tool designed to ingest raw ciphertext and generate deep statistical insights: unigram, bigram, and trigram frequencies, Shannon entropy, Index of Coincidence, and likelihood matching against standard Romanian, English, and Russian language distributions.',
    techStack: ['C#', '.NET', 'Information Theory', 'Statistics', 'Charts'],
    keyFeatures: [
      'Real-time frequency histogram plotting against reference language baselines',
      'Index of Coincidence calculator detecting monoalphabetic vs polyalphabetic ciphers',
      'Shannon entropy measurement for detecting encryption vs compression',
    ],
    isFeatured: false,
  },
  {
    id: 'genetic-algorithms-solver',
    title: 'Genetic Algorithms Combinatorial Solver',
    category: 'tools',
    importanceRank: 15,
    shortDescription:
      'Heuristic optimization engine demonstrating population selection, crossover, mutation, and fitness convergence for complex search spaces.',
    fullDescription:
      'An evolutionary computing implementation demonstrating genetic algorithms applied to combinatorial optimization problems (Travelling Salesperson, Knapsack, Function Maximization). Includes configurable selection strategies (Roulette Wheel, Tournament) and mutation rates.',
    techStack: ['C#', '.NET', 'Evolutionary Algorithms', 'Optimization', 'Data Visualization'],
    keyFeatures: [
      'Configurable population sizes, crossover rates, and mutation probabilities',
      'Real-time fitness generation chart displaying best, average, and worst candidates',
      'Won 2nd place at the FMTI 2024 Scientific Conference',
    ],
    isFeatured: false,
  },
  {
    id: 'ms-office-downloader',
    title: 'MS Office Installer & Deployment Downloader',
    category: 'desktop',
    importanceRank: 16,
    shortDescription:
      'Windows C# utility for downloading and automating deployment of Microsoft Office 2019–2024 across editions, channels, and languages.',
    fullDescription:
      'An automated Windows application written in C# that interfaces with the Microsoft Office Deployment Tool (ODT) engine. It generates configuration XML files dynamically based on user selections (Office 2019, 2021, 2024, LTSC, 32/64-bit, specific apps, languages, update channels) and handles download, caching, and silent installation.',
    techStack: ['C#', '.NET', 'WinForms', 'XML Configuration', 'Process Management', 'Windows API'],
    githubUrl: 'https://github.com/lungumihai03/MsOffice24',
    keyFeatures: [
      'Interactive selection of Office versions (2019, 2021, 2024 Pro Plus, Standard, Visio, Project)',
      'Multi-language package selector including Romanian, English, and Russian',
      'Dynamic XML configuration generator avoiding command-line complexity',
      'Live download progress tracking and automated deployment executor',
    ],
    isFeatured: true,
  },
  {
    id: 'affine-cipher',
    title: 'Affine Cipher Engine',
    category: 'crypto',
    importanceRank: 17,
    shortDescription:
      'Monoalphabetic mathematical cipher based on the modular linear congruential function E(x) = (ax + b) mod 26.',
    fullDescription:
      'Interactive implementation of the Affine cipher with coprimality checking for key "a" (ensuring gcd(a, 26) = 1) and modular inverse calculation for key decryption D(y) = a^-1(y - b) mod 26.',
    techStack: ['C#', '.NET', 'Modular Arithmetic', 'Euclidean Algorithm'],
    cipherType: 'affine',
    hasInteractiveDemo: true,
    keyFeatures: [
      'Coprimality validator for slope parameter "a"',
      'Modular multiplicative inverse solver using Extended Euclidean Algorithm',
      'Instant character-by-character translation visualization',
    ],
    isFeatured: false,
  },
  {
    id: 'about-pc-diagnostic',
    title: 'About PC — Hardware & System Information Utility',
    category: 'desktop',
    importanceRank: 18,
    shortDescription:
      'Native Windows hardware diagnostic utility reporting deep CPU, GPU, RAM, thermal sensors, and storage health metrics.',
    fullDescription:
      'A native Windows diagnostic tool built in C# leveraging WMI (Windows Management Instrumentation) and native hardware APIs. Reports deep system metrics including CPU clock speeds, GPU VRAM allocation, memory timings, NVMe SSD health/temperatures, BIOS revision, and driver versions.',
    techStack: ['C#', '.NET', 'WMI', 'Hardware Diagnostics', 'WinForms', 'System Architecture'],
    keyFeatures: [
      'Comprehensive CPU architecture, core counts, and thermal sensor polling',
      'Dedicated GPU metrics (NVIDIA RTX 3050 VRAM, driver status, CUDA availability)',
      'Dual-channel memory layout and NVMe SSD health diagnostics',
    ],
    isFeatured: false,
  },
  {
    id: 'notepad-developer-editor',
    title: 'Notepad & Text Editor',
    category: 'desktop',
    importanceRank: 19,
    shortDescription:
      'Lightweight Windows text editor with syntax highlighting, line counter, encoding detection, and fast search-and-replace.',
    fullDescription:
      'A responsive desktop text and code editor built with C# and WinForms. Includes custom syntax coloring for C#, SQL, and XML, multiple document tab support, line numbering, character counting, and UTF-8/ANSI encoding preservation.',
    techStack: ['C#', '.NET', 'WinForms', 'File I/O', 'Regex Engine'],
    keyFeatures: [
      'Clean interface with line numbers, status bar statistics, and word wrap',
      'Regex-powered find and replace with case sensitivity toggles',
      'Instant file association and fast startup speed',
    ],
    isFeatured: false,
  },
  {
    id: 'vehicle-registration-system',
    title: 'Vehicle Registration & Fleet Management System',
    category: 'dotnet',
    importanceRank: 20,
    shortDescription:
      'Database application for cataloging vehicle fleets, owner registration, technical inspection dates, and road taxes.',
    fullDescription:
      'A structured database management system designed to track vehicle registries, technical inspection expiration dates, ownership transfers, and tax calculation. Built with a 3-tier architecture separating business logic, data access, and UI layers.',
    techStack: ['C#', '.NET', 'MySQL / SQLite', 'WinForms', 'Data Binding'],
    keyFeatures: [
      'Relational schema connecting vehicles, owners, inspections, and road tax records',
      'Automated expiration alerts for technical inspection and insurance',
      'Advanced filtering by VIN, license plate, make, and year of manufacture',
    ],
    isFeatured: false,
  },
  {
    id: 'personal-portfolio-cv',
    title: 'Personal Developer Portfolio & Interactive CV',
    category: 'web',
    importanceRank: 21,
    shortDescription:
      'Modern, highly polished personal website showcasing projects, cryptography lab, hardware station, and academic publications.',
    fullDescription:
      'The current modern web platform architected with semantic HTML5, modern Tailwind CSS, and interactive TypeScript components. Features an interactive Cryptography Sandbox, filterable project catalog, live hardware diagnostics view, command palette, and print-ready CV generator.',
    techStack: ['TypeScript', 'React', 'Tailwind CSS', 'Motion', 'Lucide Icons'],
    keyFeatures: [
      'Interactive Cryptography Lab with real-time mathematical ciphers',
      'Print-ready CV modal with clean A4 layout formatting',
      'Integrated developer command palette (Ctrl+K) and dark/light themes',
    ],
    isFeatured: true,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'csharp-dotnet',
    name: 'C# & .NET Ecosystem (Primary)',
    description: 'Specialized core strength: modern C#, .NET 8/9, .NET Framework, desktop UI & backend architectures.',
    iconName: 'Code',
    skills: [
      { name: 'C# (C# 10 - 12)', category: 'csharp-dotnet', level: 'Expert', isPrimary: true, badge: 'Primary Lang' },
      { name: '.NET 8 / 9', category: 'csharp-dotnet', level: 'Advanced', isPrimary: true },
      { name: '.NET Framework 4.8 / 4.8.1', category: 'csharp-dotnet', level: 'Advanced', isPrimary: true },
      { name: 'WinUI 3 / Windows App SDK', category: 'csharp-dotnet', level: 'Advanced', isPrimary: true },
      { name: 'Windows Forms (WinForms)', category: 'csharp-dotnet', level: 'Expert', isPrimary: true },
      { name: 'WPF & XAML', category: 'csharp-dotnet', level: 'Advanced' },
      { name: 'LINQ & Collections', category: 'csharp-dotnet', level: 'Expert' },
      { name: 'Entity Framework Core / ADO.NET', category: 'csharp-dotnet', level: 'Advanced' },
      { name: 'P/Invoke & Win32 API', category: 'csharp-dotnet', level: 'Advanced' },
    ],
  },
  {
    id: 'languages',
    name: 'Programming & Web Languages',
    description: 'Full multi-paradigm skillset across system, backend, and frontend stacks.',
    iconName: 'Terminal',
    skills: [
      { name: 'C#', category: 'languages', level: 'Expert', isPrimary: true },
      { name: 'C (ANSI / C99)', category: 'languages', level: 'Advanced' },
      { name: 'PHP', category: 'languages', level: 'Advanced' },
      { name: 'SQL (ANSI / T-SQL / MySQL)', category: 'languages', level: 'Advanced' },
      { name: 'JavaScript (ES6+)', category: 'languages', level: 'Advanced' },
      { name: 'HTML5 & Semantic Web', category: 'languages', level: 'Expert' },
      { name: 'CSS3 & Modern Styling', category: 'languages', level: 'Advanced' },
    ],
  },
  {
    id: 'web-backend',
    name: 'Web & Information Systems',
    description: 'Production systems, academic publishing workflows, and server architectures.',
    iconName: 'Globe',
    skills: [
      { name: 'CSJM Journal Platform Architecture', category: 'web-backend', level: 'Expert', isPrimary: true },
      { name: 'RESTful API Engineering', category: 'web-backend', level: 'Advanced' },
      { name: 'MySQL & PostgreSQL', category: 'web-backend', level: 'Advanced' },
      { name: 'Apache & XAMPP Environment', category: 'web-backend', level: 'Advanced' },
      { name: 'Cloudflare Workers & Edge Scripting', category: 'web-backend', level: 'Proficient' },
      { name: 'Bootstrap & jQuery', category: 'web-backend', level: 'Advanced' },
      { name: 'CodeMirror Integration', category: 'web-backend', level: 'Advanced' },
      { name: 'Docker Containerization', category: 'web-backend', level: 'Proficient' },
    ],
  },
  {
    id: 'crypto-algorithms',
    name: 'Cryptography & Computer Science',
    description: 'Deep mathematical foundations, symmetric ciphers, and algorithmic research.',
    iconName: 'Lock',
    skills: [
      { name: 'Markovski Quasigroup Ciphers', category: 'crypto-algorithms', level: 'Expert', isPrimary: true },
      { name: 'RSA Public-Key & Modular Exp', category: 'crypto-algorithms', level: 'Expert', isPrimary: true },
      { name: 'Latin Groupoid Isotopes', category: 'crypto-algorithms', level: 'Advanced', isPrimary: true },
      { name: 'Classical Ciphers (Vigenère, Playfair, Hill)', category: 'crypto-algorithms', level: 'Expert' },
      { name: 'Cryptanalysis (Kasiski, IoC, Chi-Sq)', category: 'crypto-algorithms', level: 'Advanced' },
      { name: 'Genetic Algorithms & Optimization', category: 'crypto-algorithms', level: 'Advanced' },
      { name: 'Data Structures & Algorithmic Complexity', category: 'crypto-algorithms', level: 'Expert' },
    ],
  },
  {
    id: 'ai-hardware',
    name: 'AI, Local LLMs & Hardware Systems',
    description: 'Local model deployment, hardware diagnostics, and low-level optimization.',
    iconName: 'Cpu',
    skills: [
      { name: 'Local LLM Inference (LM Studio, Open WebUI)', category: 'ai-hardware', level: 'Advanced' },
      { name: 'Quantization & GGUF Formats (Q4_K_M, Q8_0)', category: 'ai-hardware', level: 'Advanced' },
      { name: 'Model Architecture (Qwen, Gemma, Llama)', category: 'ai-hardware', level: 'Advanced' },
      { name: 'VRAM & GPU Offloading (RTX 3050 4GB CUDA)', category: 'ai-hardware', level: 'Advanced' },
      { name: 'Hardware Diagnostics & Windows Optimization', category: 'ai-hardware', level: 'Expert' },
      { name: 'Visual Studio 2022 & VS Code', category: 'ai-hardware', level: 'Expert' },
    ],
  },
];

export const HARDWARE_SPECS: HardwareItem[] = [
  {
    component: 'Primary Machine',
    specification: 'ASUS ROG Strix G15 (G513QC)',
    details: 'High-performance developer laptop tuned for compiling, local testing, and hardware monitoring.',
    iconName: 'Laptop',
  },
  {
    component: 'Processor (CPU)',
    specification: 'AMD Ryzen 5 5600H',
    details: '6 Cores / 12 Threads, 3.3 GHz Base to 4.2 GHz Boost, 16MB L3 Cache, Zen 3 Architecture.',
    iconName: 'Cpu',
  },
  {
    component: 'Graphics (GPU)',
    specification: 'NVIDIA GeForce RTX 3050 Laptop GPU',
    details: '4 GB GDDR6 VRAM, Ampere Architecture, CUDA Cores, GPU offloading for quantized local AI models.',
    iconName: 'Layers',
  },
  {
    component: 'Memory (RAM)',
    specification: '32 GB DDR4 @ 3200 MHz',
    details: 'Dual-Channel high-speed memory for running visual IDEs, container virtualization, and local LLM context.',
    iconName: 'HardDrive',
  },
  {
    component: 'Storage (NVMe SSD)',
    specification: '1.5 TB Total NVMe SSDs (512 GB + 1 TB)',
    details: 'Dual ultra-fast PCIe NVMe drives providing zero-lag compilation, database storage, and quick OS boot.',
    iconName: 'Server',
  },
  {
    component: 'OS & Development Environment',
    specification: 'Windows 11 Pro (Custom Optimized)',
    details: 'Visual Studio 2022, VS Code, Git, Docker Desktop, LM Studio, Open WebUI, custom BIOS and thermal profiles.',
    iconName: 'ShieldCheck',
  },
];

export const LANGUAGES_SPOKEN: LanguageSkill[] = [
  {
    name: 'Romanian',
    nativeName: 'Română',
    code: 'ro',
    level: 'Native Proficiency',
    cefr: 'C2',
    percentage: 100,
    role: 'Native language, full academic and professional fluency.',
  },
  {
    name: 'Russian',
    nativeName: 'Русский',
    code: 'ru',
    level: 'Fluent Proficiency',
    cefr: 'C1',
    percentage: 92,
    role: 'Fluent in speaking, writing, and professional technical communication.',
  },
  {
    name: 'English',
    nativeName: 'English',
    code: 'en',
    level: 'Intermediate (B1+)',
    cefr: 'B1',
    percentage: 68,
    role: 'Technical reading, software documentation, actively improving via practical conversation.',
  },
];

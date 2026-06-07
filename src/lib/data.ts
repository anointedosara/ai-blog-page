export const portrait = (gender: "men" | "women", id: number) =>
  `https://randomuser.me/api/portraits/${gender}/${id}.jpg`;

export const ux = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "News", href: "/news" },
  { label: "Podcasts", href: "/podcasts" },
  { label: "Resources", href: "/resources" },
] as const;

export const stats = [
  { value: "300", suffix: "+", label: "Resources available" },
  { value: "12k", suffix: "+", label: "Total Downloads" },
  { value: "10k", suffix: "+", label: "Active Users" },
];

export const heroHighlights = [
  {
    icon: "news",
    title: "Latest News Updates",
    tag: "Stay Current",
    desc: "Over 1,000 articles published monthly",
  },
  {
    icon: "experts",
    title: "Expert Contributors",
    tag: "Trusted Insights",
    desc: "50+ renowned AI experts on our team",
  },
  {
    icon: "global",
    title: "Global Readership",
    tag: "Worldwide Impact",
    desc: "2 million monthly readers",
  },
] as const;

export const heroAvatars = [
  portrait("men", 32),
  portrait("women", 44),
  portrait("men", 86),
  portrait("women", 65),
];

export const heroRaysImage = ux("photo-1462331940025-496dfbfc7564", 1200);

export const features = [
  {
    title: "Future Technology Blog",
    desc: "Stay informed with our blog section dedicated to future technology.",
    items: [
      {
        title: "Quantity",
        desc: "Over 1,000 articles on emerging tech trends and breakthroughs.",
      },
      {
        title: "Variety",
        desc: "Articles cover fields like AI, robotics, biotechnology, and more.",
      },
      {
        title: "Frequency",
        desc: "Fresh content added daily to keep you up to date.",
      },
      {
        title: "Authoritative",
        desc: "Written by our team of tech experts and industry professionals.",
      },
    ],
  },
  {
    title: "Research Insights Blogs",
    desc: "Dive deep into future technology concepts with our research section.",
    items: [
      {
        title: "Depth",
        desc: "500+ research articles for in-depth understanding.",
      },
      {
        title: "Graphics",
        desc: "Visual aids and infographics to enhance comprehension.",
      },
      {
        title: "Trends",
        desc: "Explore emerging trends in future technology research.",
      },
      {
        title: "Contributors",
        desc: "Contributions from tech researchers and academics.",
      },
    ],
  },
];

export const blogCategories = [
  "All",
  "Quantum Computing",
  "AI Ethics",
  "Space Exploration",
  "Biotechnology",
  "Renewable Energy",
] as const;

export const blogPosts = [
  {
    author: "John Techson",
    avatar: portrait("men", 32),
    category: "Quantum Computing",
    date: "October 15, 2023",
    title: "The Quantum Leap in Computing",
    excerpt:
      "Explore the revolution in quantum computing, its applications, and its potential impact on various industries.",
    likes: "24.5k",
    comments: 50,
    shares: 20,
  },
  {
    author: "Sarah Ethicist",
    avatar: portrait("women", 68),
    category: "AI Ethics",
    date: "November 5, 2023",
    title: "The Ethical Dilemmas of AI",
    excerpt:
      "A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency.",
    likes: "32k",
    comments: 72,
    shares: 18,
  },
  {
    author: "Astronomer X",
    avatar: portrait("men", 75),
    category: "Space Exploration",
    date: "December 10, 2023",
    title: "The Mars Colonization Challenge",
    excerpt:
      "Exploring the technical and logistical challenges of human colonization on Mars.",
    likes: "20k",
    comments: 31,
    shares: 12,
  },
  {
    author: "Dr. Gene Splicer",
    avatar: portrait("women", 90),
    category: "Biotechnology",
    date: "January 8, 2024",
    title: "Rewriting Life with CRISPR",
    excerpt:
      "How gene-editing breakthroughs are reshaping medicine, agriculture, and the future of biology.",
    likes: "18k",
    comments: 44,
    shares: 15,
  },
  {
    author: "Maya Power",
    avatar: portrait("women", 12),
    category: "Renewable Energy",
    date: "February 2, 2024",
    title: "The Solar Revolution Ahead",
    excerpt:
      "Next-generation solar tech and storage solutions driving the global shift to clean energy.",
    likes: "15k",
    comments: 28,
    shares: 11,
  },
  {
    author: "Liam Qubit",
    avatar: portrait("men", 14),
    category: "Quantum Computing",
    date: "March 3, 2024",
    title: "Quantum Supremacy: Fact vs Hype",
    excerpt:
      "Separating genuine quantum breakthroughs from marketing buzz, and what real-world advantage looks like.",
    likes: "17k",
    comments: 39,
    shares: 16,
  },
  {
    author: "Dr. Nadia Bias",
    avatar: portrait("women", 28),
    category: "AI Ethics",
    date: "March 18, 2024",
    title: "Building Responsible AI Systems",
    excerpt:
      "Practical frameworks for fairness, accountability, and transparency in production AI.",
    likes: "21k",
    comments: 54,
    shares: 23,
  },
  {
    author: "Captain Vega",
    avatar: portrait("men", 60),
    category: "Space Exploration",
    date: "April 5, 2024",
    title: "Mining the Asteroid Belt",
    excerpt:
      "The technology, economics, and ethics of extracting resources from near-Earth objects.",
    likes: "13k",
    comments: 25,
    shares: 9,
  },
  {
    author: "Dr. Cell Forge",
    avatar: portrait("women", 52),
    category: "Biotechnology",
    date: "April 22, 2024",
    title: "Synthetic Biology's Next Decade",
    excerpt:
      "Programmable cells, lab-grown materials, and the engineering of life at scale.",
    likes: "16k",
    comments: 33,
    shares: 14,
  },
  {
    author: "Sol Watts",
    avatar: portrait("men", 91),
    category: "Renewable Energy",
    date: "May 9, 2024",
    title: "Grid-Scale Battery Breakthroughs",
    excerpt:
      "How new storage chemistries are solving renewable energy's biggest challenge: intermittency.",
    likes: "14k",
    comments: 30,
    shares: 12,
  },
];

export const resources = [
  {
    title: "Ebooks",
    desc: "Explore our collection of ebooks covering a wide spectrum of future technology topics.",
    cta: "Download Ebooks Now",
    image:
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Students learning with virtual reality headsets",
    topicTitle: "Variety of Topics",
    topicDesc:
      "Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%), and biotechnology (15%).",
    statLabel: "Total Ebooks",
    statValue: "Over 100 ebooks",
    formatValue: "PDF format for access.",
    expertise:
      "Ebooks are authored by renowned experts with an average of 15 years of experience",
    downloadedAvatars: [
      portrait("men", 32),
      portrait("women", 44),
      portrait("men", 86),
      portrait("women", 65),
    ],
  },
  {
    title: "Whitepapers",
    desc: "Dive into comprehensive reports and analyses with our collection of whitepapers.",
    cta: "Download Whitepapers Now",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "A finger touching a glowing technology circuit board",
    topicTitle: "Topics Coverage",
    topicDesc:
      "Whitepapers cover quantum computing (20%), AI ethics (15%), space mining prospects (20%), AI in healthcare (15%), and renewable energy strategies (30%).",
    statLabel: "Total Whitepapers",
    statValue: "Over 50 whitepapers",
    formatValue: "PDF format for access.",
    expertise:
      "Whitepapers are authored by subject matter experts with an average of 20 years of experience.",
    downloadedAvatars: [
      portrait("men", 45),
      portrait("men", 52),
      portrait("women", 33),
      portrait("women", 90),
    ],
  },
];

export const testimonials = [
  {
    name: "Sarah Thompson",
    location: "San Francisco, USA",
    avatar: portrait("women", 12),
    quote:
      "The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.",
  },
  {
    name: "Raj Patel",
    location: "Mumbai, India",
    avatar: portrait("men", 45),
    quote:
      "The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis, helping me make informed decisions.",
  },
  {
    name: "Emily Adams",
    location: "London, UK",
    avatar: portrait("women", 33),
    quote:
      "The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care.",
  },
  {
    name: "Alan Jackson",
    location: "Houston, USA",
    avatar: portrait("men", 52),
    quote:
      "The reports on space mining prospects have fueled my passion for space exploration. They provide a comprehensive view of what lies beyond Earth.",
  },
  {
    name: "Jessica Miller",
    location: "Boston, USA",
    avatar: portrait("women", 90),
    quote:
      "The research papers on genomic breakthroughs have been a goldmine of information. They've shaped the direction of my research in genomics.",
  },
  {
    name: "Diego Lopez",
    location: "Barcelona, Spain",
    avatar: portrait("men", 40),
    quote:
      "The ebooks on renewable energy strategies have given me the insights I needed to pivot our startup toward sustainability.",
  },
  {
    name: "Amara Okafor",
    location: "Lagos, Nigeria",
    avatar: portrait("women", 57),
    quote:
      "FutureTech's quantum computing series demystified a notoriously hard topic. It's now required reading for my entire research team.",
  },
  {
    name: "Kenji Sato",
    location: "Tokyo, Japan",
    avatar: portrait("men", 73),
    quote:
      "The depth of the AI ethics whitepapers is unmatched. They've directly informed our company's responsible-AI policy.",
  },
  {
    name: "Isabella Rossi",
    location: "Rome, Italy",
    avatar: portrait("women", 16),
    quote:
      "I rely on the weekly podcasts during my commute. The interviews with industry leaders are consistently insightful and practical.",
  },
  {
    name: "Daniel Weber",
    location: "Berlin, Germany",
    avatar: portrait("men", 36),
    quote:
      "The reports on biotechnology breakthroughs helped our lab secure funding. The data and citations are rigorous and trustworthy.",
  },
  {
    name: "Sofia Martinez",
    location: "Mexico City, Mexico",
    avatar: portrait("women", 79),
    quote:
      "As an educator, the AI in education resources transformed how I design my curriculum. My students are more engaged than ever.",
  },
  {
    name: "Arjun Mehta",
    location: "Bangalore, India",
    avatar: portrait("men", 48),
    quote:
      "The machine learning explainers strike the perfect balance between theory and hands-on code. Easily my favorite tech resource.",
  },
];

/* ----------------------------- News page ----------------------------- */

export const featuredNews = {
  image:
    "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80",
  imageAlt: "Wind turbines silhouetted against an orange sunset",
  title: "Global Climate Summit Addresses Urgent Climate Action",
  excerpt:
    "World leaders gathered at the Global Climate Summit to discuss urgent climate action, emissions reductions, and renewable energy targets.",
  category: "Environment",
  date: "October 10, 2023",
  author: "Jane Smith",
  likes: "14k",
  shares: 204,
};

export const newsCards = [
  {
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Two people shaking hands at sunset",
    title: "A Decisive Victory for Progressive Policies",
    category: "Politics",
    likes: "2.2k",
    shares: 60,
  },
  {
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
    imageAlt: "A person interacting with futuristic AI technology",
    title: "Tech Giants Unveil Cutting-Edge AI Innovations",
    category: "Technology",
    likes: "6k",
    shares: 92,
  },
  {
    image:
      "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Gloved hands holding a medical test sample",
    title: "COVID-19 Variants",
    category: "Health",
    likes: "10k",
    shares: 124,
  },
];

export const newsCategories = [
  "All",
  "Technology",
  "Politics",
  "Health",
  "Environment",
  "Sports",
] as const;

export const newsPosts = [
  // Technology
  {
    author: "John Techson",
    avatar: portrait("men", 32),
    category: "Technology",
    date: "October 15, 2023",
    title: "Tech Giants Announce New Product Line",
    excerpt:
      "Explore the latest innovations from tech industry leaders, unveiling new products that promise to transform the digital landscape.",
    likes: "24.5k",
    comments: 50,
    shares: 20,
  },
  {
    author: "Sarah Ethicist",
    avatar: portrait("women", 68),
    category: "Technology",
    date: "October 11, 2023",
    title: "The Future of Autonomous Vehicles",
    excerpt:
      "An in-depth analysis of the rapid advancements in autonomous vehicle technology and their impact on transportation.",
    likes: "32k",
    comments: 72,
    shares: 18,
  },
  // Politics
  {
    author: "Helen Voss",
    avatar: portrait("women", 24),
    category: "Politics",
    date: "October 9, 2023",
    title: "A Decisive Victory for Progressive Policies",
    excerpt:
      "Landmark legislation passes after months of negotiation, reshaping the national policy agenda for years to come.",
    likes: "2.2k",
    comments: 41,
    shares: 60,
  },
  {
    author: "Marcus Reed",
    avatar: portrait("men", 11),
    category: "Politics",
    date: "September 30, 2023",
    title: "Global Leaders Convene on Trade Reform",
    excerpt:
      "Delegations from forty nations meet to renegotiate trade frameworks amid shifting economic alliances.",
    likes: "4.1k",
    comments: 33,
    shares: 47,
  },
  // Health
  {
    author: "Dr. Alan Cure",
    avatar: portrait("men", 52),
    category: "Health",
    date: "September 28, 2023",
    title: "Breakthrough in Personalized Medicine",
    excerpt:
      "New gene-based diagnostics are enabling treatments tailored to individual patients with remarkable precision.",
    likes: "11k",
    comments: 38,
    shares: 21,
  },
  {
    author: "Priya Nair",
    avatar: portrait("women", 9),
    category: "Health",
    date: "October 4, 2023",
    title: "COVID-19 Variants Under the Microscope",
    excerpt:
      "Researchers track emerging variants and the evolving strategies to keep vaccines and treatments effective.",
    likes: "10k",
    comments: 47,
    shares: 124,
  },
  // Environment
  {
    author: "Maria Green",
    avatar: portrait("women", 33),
    category: "Environment",
    date: "November 2, 2023",
    title: "Coastal Cities Brace for Rising Seas",
    excerpt:
      "How coastal communities are adapting infrastructure and policy to confront accelerating sea-level rise.",
    likes: "9k",
    comments: 27,
    shares: 14,
  },
  {
    author: "Jane Smith",
    avatar: portrait("women", 76),
    category: "Environment",
    date: "October 10, 2023",
    title: "Global Climate Summit Sets Bold Targets",
    excerpt:
      "World leaders commit to ambitious emissions reductions and renewable energy goals at this year's summit.",
    likes: "14k",
    comments: 63,
    shares: 204,
  },
  // Sports
  {
    author: "Carlos Mendes",
    avatar: portrait("men", 18),
    category: "Sports",
    date: "October 14, 2023",
    title: "Underdogs Clinch the Championship",
    excerpt:
      "A stunning final sees the season's underdogs lift the trophy in a result no analyst predicted.",
    likes: "21k",
    comments: 88,
    shares: 76,
  },
  {
    author: "Aiko Tanaka",
    avatar: portrait("women", 41),
    category: "Sports",
    date: "October 2, 2023",
    title: "Wearable Tech Transforms Training",
    excerpt:
      "Elite athletes turn to data-driven wearables to fine-tune performance and prevent injury.",
    likes: "7.9k",
    comments: 26,
    shares: 31,
  },
];

export const featuredVideos = [
  {
    image:
      "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=900&q=80",
    imageAlt: "The surface of Mars under a distant sun",
    title: "Mars Exploration: Unveiling Alien Landscapes",
    desc: "Embark on a journey through the Red Planet's breathtaking landscapes and uncover the mysteries of Mars.",
    duration: "2:30 min",
  },
  {
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Cryptocurrency coins arranged on a dark surface",
    title: "Blockchain Explained: A Revolution in Finance",
    desc: "Delve into the world of blockchain technology and its transformative impact on the financial industry.",
    duration: "2:30 min",
  },
  {
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Abstract illustration of the human mind",
    title: "Breaking the Silence: Mental Health Awareness in the Workplace",
    desc: "An exploration of the importance of mental health awareness and the initiatives reshaping workplaces for employee well-being.",
    duration: "2:30 min",
  },
  {
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    imageAlt: "A rising financial chart on a screen",
    title: "Revolutionizing Investment Strategies",
    desc: "An in-depth look at global efforts to conserve biodiversity and safeguard endangered species from extinction.",
    duration: "2:30 min",
  },
];

/* --------------------------- Article detail --------------------------- */

export const article = {
  slug: "the-rise-of-artificial-intelligence-in-healthcare",
  title: "The Rise of Artificial Intelligence in Healthcare",
  heroImage:
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80",
  heroAlt: "A gloved hand holding a medical sample with a digital overlay",
  likes: "24.5k",
  views: "50k",
  shares: 206,
  date: "October 15, 2023",
  category: "Healthcare",
  readingTime: "10 Min",
  author: "Dr. Emily Walker",
  intro:
    "Artificial Intelligence (AI) has emerged as a transformative force in the healthcare industry, reshaping patient care, diagnostics, and research. In this blog post, we explore the profound impact of AI in healthcare, from revolutionizing diagnostic accuracy to enhancing patient outcomes.",
  toc: [
    "Introduction",
    "AI in Diagnostic Imaging",
    "Predictive Analytics and Disease Prevention",
    "Personalized Treatment Plans",
    "Drug Discovery and Research",
    "AI in Telemedicine",
    "Ethical Considerations",
    "The Future of AI in Healthcare",
    "Conclusion",
  ],
  sections: [
    {
      heading: "Artificial Intelligence (AI)",
      paragraphs: [
        "Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
        "Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
      ],
    },
    {
      heading: "Predictive Analytics and Disease Prevention",
      paragraphs: [
        "One of the most prominent applications of AI in healthcare is in diagnostic imaging. AI algorithms have demonstrated remarkable proficiency in interpreting medical images such as X-rays, MRIs, and CT scans. They can identify anomalies and deviations that might be overlooked by the human eye. This is particularly valuable in early disease detection. For instance, AI can flag potential tumors, fractures, or other irregularities in scans, enabling earlier intervention and better outcomes for patients.",
      ],
    },
  ],
};

/* ---------------------------- Podcasts page --------------------------- */

export const podcastHero = {
  title: "Unlock the World of Artificial Intelligence through Podcasts",
  desc: "Dive deep into the AI universe with our collection of insightful podcasts. Explore the latest trends, breakthroughs, and discussions on artificial intelligence. Whether you're an enthusiast or a professional, our AI podcasts offer a gateway to knowledge and innovation.",
};

export const featuredPodcasts = [
  {
    title: "AI Revolution",
    host: "Dr. Sarah Mitchell",
    image: ux("photo-1620712943543-bcc4688e7485"),
    imageAlt: "Abstract artificial intelligence brain visualization",
    tagline: "Delves into the transformative impact of AI",
    desc: "Join Dr. Sarah Mitchell as she delves into the transformative impact of AI on industries, featuring expert interviews and real-world case studies. Explore the possibilities of AI in healthcare, finance, and more.",
    episodes: "50",
    length: "30 min",
    frequency: "Weekly",
  },
  {
    title: "AI Conversations",
    host: "Mark Anderson",
    image: ux("photo-1535378917042-10a22c95931a"),
    imageAlt: "A robotic hand shaking a human hand",
    tagline: "Engage in thought-provoking conversations with leading experts.",
    desc: "Mark discusses the future of AI, the impact on society, and how it's shaping industries worldwide. Engage in thought-provoking conversations with leading experts.",
    episodes: "40",
    length: "40 min",
    frequency: "Monthly",
  },
];

export const podcastEpisodes = [
  {
    image: ux("photo-1581595219315-a187dd40c322"),
    imageAlt: "Healthcare professionals using AI technology",
    title: "AI in Healthcare",
    desc: "Dr. Lisa Adams discusses how AI is revolutionizing healthcare, from diagnostic tools to patient care.",
    duration: "2:30 min",
  },
  {
    image: ux("photo-1677442136019-21780ecad995"),
    imageAlt: "Glowing AI hologram",
    title: "AI Ethics",
    desc: "Explore the ethical dilemmas and considerations surrounding AI with guest speaker Dr. Michael Turner.",
    duration: "2:30 min",
  },
  {
    image: ux("photo-1485827404703-89b55fcc595e"),
    imageAlt: "A white humanoid robot",
    title: "Machine Learning Explained",
    desc: "Dive into the intricacies of machine learning with AI expert Sarah Davis. In this episode.",
    duration: "2:30 min",
  },
  {
    image: ux("photo-1593508512255-86ab42a8e620"),
    imageAlt: "Person using virtual reality at work",
    title: "AI and the Future of Work",
    desc: "Dr. Olivia White joins John Parker to discuss the evolving role of AI in the workplace.",
    duration: "2:30 min",
  },
  {
    image: ux("photo-1531545514256-b1400bc00f31"),
    imageAlt: "Students using virtual reality in a classroom",
    title: "AI in Education",
    desc: "Explore the role of AI in education as Emily Turner discusses how AI is transforming the learning experience.",
    duration: "2:30 min",
  },
  {
    image: ux("photo-1550751827-4bd374c3f58b"),
    imageAlt: "Abstract neural network visualization",
    title: "AI in Entertainment",
    desc: "David Smith as they explore the influence of AI in the entertainment industry.",
    duration: "2:30 min",
  },
];

/* ---------------------------- Resources page -------------------------- */

export const resourcesHero = {
  title: "Unlock a World of Knowledge",
  desc: "Dive deep into the AI universe with our collection of insightful resources. Explore the latest trends, breakthroughs, and discussions on artificial intelligence. Whether you're an enthusiast or a professional, our resources offer a gateway to knowledge and innovation.",
};

export const resourceStats = [
  { value: "300", suffix: "+", label: "Resources available" },
  { value: "12k", suffix: "+", label: "Total Downloads" },
  { value: "10k", suffix: "+", label: "Active Users" },
  { value: "100", suffix: "+", label: "Countries Accesses Our Content" },
];

export const resourceTabs = ["Whitepapers", "Ebooks", "Reports"] as const;

type ResourceFeatured = {
  title: string;
  blurb: string;
  desc: string;
  image: string;
  imageAlt: string;
  date: string;
  category: string;
  author: string;
  href: string;
};

type ResourceCard = {
  title: string;
  desc: string;
  image: string;
  imageAlt: string;
  href: string;
};

/**
 * Resource catalogue populated with real, freely available AI
 * publications, ebooks and reports (links open the original source).
 */
export const resourceCatalogue: Record<
  string,
  { featured: ResourceFeatured[]; cards: ResourceCard[] }
> = {
  Whitepapers: {
    featured: [
      {
        title: "Attention Is All You Need",
        blurb:
          "The landmark paper that introduced the Transformer architecture behind modern AI.",
        desc: "Introduces the Transformer, a model architecture based entirely on attention mechanisms — the foundation of today's large language models.",
        image: ux("photo-1635070041078-e363dbe005cb"),
        imageAlt: "Abstract data wave visualization",
        date: "June 2017",
        category: "Deep Learning",
        author: "Vaswani et al. (Google)",
        href: "https://arxiv.org/abs/1706.03762",
      },
      {
        title: "Artificial Intelligence Index Report 2024",
        blurb:
          "Stanford HAI's flagship, data-driven survey of the global state of AI.",
        desc: "A comprehensive analysis of AI progress across research, industry investment, policy, and responsible-AI trends, with new chapters on AI in science and medicine.",
        image: ux("photo-1639322537228-f710d846310a"),
        imageAlt: "Glowing abstract particle network",
        date: "April 2024",
        category: "AI Policy & Trends",
        author: "Stanford HAI",
        href: "https://aiindex.stanford.edu/wp-content/uploads/2024/05/HAI_AI-Index-Report-2024.pdf",
      },
    ],
    cards: [
      {
        title: "AI Index Report 2024 (arXiv)",
        desc: "The archived edition of Stanford's flagship AI Index report.",
        image: ux("photo-1558494949-ef010cbdcc31"),
        imageAlt: "Network of connected nodes",
        href: "https://arxiv.org/abs/2405.19522",
      },
      {
        title: "Understanding Deep Learning",
        desc: "A modern, freely available textbook on the principles of deep learning.",
        image: ux("photo-1550751827-4bd374c3f58b"),
        imageAlt: "Neural network visualization",
        href: "https://udlbook.github.io/udlbook/",
      },
      {
        title: "The Little Book of Deep Learning",
        desc: "A concise, free PDF covering deep-learning fundamentals.",
        image: ux("photo-1492011221367-f47e3ccd77a0"),
        imageAlt: "Light trails at night",
        href: "https://fleuret.org/public/lbdl.pdf",
      },
    ],
  },
  Ebooks: {
    featured: [
      {
        title: "Deep Learning",
        blurb:
          "The definitive MIT Press textbook on deep learning — free to read online.",
        desc: "Covers the mathematical and conceptual background, modern deep networks, and active research perspectives. An essential reference for students and practitioners.",
        image: ux("photo-1550751827-4bd374c3f58b"),
        imageAlt: "Abstract neural network",
        date: "2016",
        category: "Deep Learning",
        author: "Goodfellow, Bengio & Courville",
        href: "https://www.deeplearningbook.org/",
      },
      {
        title: "Dive into Deep Learning",
        blurb:
          "An interactive, code-first deep learning book used in 500+ universities.",
        desc: "Hands-on notebooks with PyTorch, TensorFlow, and JAX implementations, blending math, code, and discussion into a single interactive resource.",
        image: ux("photo-1526374965328-7f61d4dc18c5"),
        imageAlt: "Streams of digital data",
        date: "2023",
        category: "Hands-on ML",
        author: "Zhang, Lipton, Li & Smola",
        href: "https://d2l.ai/d2l-en.pdf",
      },
    ],
    cards: [
      {
        title: "Understanding Deep Learning",
        desc: "Simon J.D. Prince's freely available deep-learning textbook.",
        image: ux("photo-1635070041078-e363dbe005cb"),
        imageAlt: "Abstract data wave",
        href: "https://udlbook.github.io/udlbook/",
      },
      {
        title: "The Little Book of Deep Learning",
        desc: "François Fleuret's pocket-sized free PDF on deep learning.",
        image: ux("photo-1639322537228-f710d846310a"),
        imageAlt: "Particle network",
        href: "https://fleuret.org/public/lbdl.pdf",
      },
      {
        title: "100+ Free Machine Learning Books",
        desc: "A curated collection of free ML and AI ebooks to download.",
        image: ux("photo-1512820790803-83ca734da794"),
        imageAlt: "A stack of books",
        href: "https://www.theinsaneapp.com/2020/12/download-free-machine-learning-books.html",
      },
    ],
  },
  Reports: {
    featured: [
      {
        title: "Stanford AI Index Report 2024",
        blurb:
          "Data-driven analysis of AI's global trajectory across research, industry, and policy.",
        desc: "Features new chapters on AI in science and medicine, training-cost estimates, and the responsible-AI landscape — one of the most cited AI references worldwide.",
        image: ux("photo-1558494949-ef010cbdcc31"),
        imageAlt: "Connected data network",
        date: "April 2024",
        category: "Industry Report",
        author: "Stanford HAI",
        href: "https://aiindex.stanford.edu/wp-content/uploads/2024/05/HAI_AI-Index-Report-2024.pdf",
      },
      {
        title: "Quantum Computing for Health Care",
        blurb:
          "Can today's quantum machines solve real health-care problems? A $5M prize aims to find out.",
        desc: "An in-depth report on the near-term, practical applications of quantum computing in medicine and the competition driving the research.",
        image: ux("photo-1635070041078-e363dbe005cb"),
        imageAlt: "Abstract quantum data wave",
        date: "March 2026",
        category: "Quantum Computing",
        author: "MIT Technology Review",
        href: "https://www.technologyreview.com/2026/03/19/1134409/a-5-million-prize-awaits-proof-that-quantum-computers-can-solve-health-care-problems/",
      },
    ],
    cards: [
      {
        title: "10 Breakthrough Technologies",
        desc: "MIT's annual list of the technologies set to shape the year ahead.",
        image: ux("photo-1492011221367-f47e3ccd77a0"),
        imageAlt: "Light trails",
        href: "https://www.technologyreview.com/10-breakthrough-technologies/",
      },
      {
        title: "AI in Space Exploration",
        desc: "How space agencies are already deploying AI across mission phases.",
        image: ux("photo-1457364887197-9150188c107b"),
        imageAlt: "An astronaut in space",
        href: "https://www.ie.edu/uncover-ie/ai-in-space-exploration-school-of-science-and-technology/",
      },
      {
        title: "Medicine and Generative AI",
        desc: "A peer-reviewed look at generative AI's role in modern medicine.",
        image: ux("photo-1531746790731-6c087fecd65a"),
        imageAlt: "Blue AI robot interface",
        href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11333062/",
      },
    ],
  },
};

export const ctaCards = [
  {
    title: "Resource Access",
    desc: "Visitors can access a wide range of resources, including ebooks, whitepapers, reports.",
    href: "/resources",
  },
  {
    title: "Community Forum",
    desc: "Join our active community forum to discuss industry trends, share insights, and collaborate with peers.",
    href: "/contact",
  },
  {
    title: "Tech Events",
    desc: "Stay updated on upcoming tech events, webinars, and conferences to enhance your knowledge.",
    href: "/contact",
  },
];

export const footerColumns = [
  {
    heading: "Home",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Blogs", href: "/#blogs" },
      { label: "Resources", href: "/resources", badge: "New" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Contact Us", href: "/contact" },
      { label: "Newsletter", href: "/#newsletter" },
    ],
  },
  {
    heading: "News",
    links: [
      { label: "Trending Stories", href: "/news" },
      { label: "Featured Videos", href: "/news" },
      { label: "Technology", href: "/news" },
      { label: "Health", href: "/news" },
      { label: "Politics", href: "/news" },
      { label: "Environment", href: "/news" },
    ],
  },
  {
    heading: "Blogs",
    links: [
      { label: "Quantum Computing", href: "/#blogs" },
      { label: "AI Ethics", href: "/#blogs" },
      { label: "Space Exploration", href: "/#blogs" },
      { label: "Biotechnology", href: "/#blogs", badge: "New" },
      { label: "Renewable Energy", href: "/#blogs" },
      { label: "Biohacking", href: "/#blogs" },
    ],
  },
  {
    heading: "Podcasts",
    links: [
      { label: "AI Revolution", href: "/podcasts" },
      { label: "AI Revolution", href: "/podcasts", badge: "New" },
      { label: "TechTalk AI", href: "/podcasts" },
      { label: "AI Conversations", href: "/podcasts" },
    ],
  },
] as const;

export const footerResources = [
  { label: "Whitepapers", href: "/resources" },
  { label: "Ebooks", href: "/resources" },
  { label: "Reports", href: "/resources" },
  { label: "Research Papers", href: "/resources" },
];

/* ---------------------------- Contact page ---------------------------- */

export const contactChannels = [
  {
    heading: "General Inquiries",
    items: [
      { label: "contact@ai-podcasts.com", href: "mailto:contact@ai-podcasts.com" },
      { label: "+1 (123) 456-7890", href: "tel:+11234567890" },
    ],
  },
  {
    heading: "Technical Support",
    items: [
      { label: "support@ai-podcasts.com", href: "mailto:support@ai-podcasts.com" },
      { label: "+1 (123) 456-7890", href: "tel:+11234567890" },
    ],
  },
];

export const contactOffice = {
  heading: "Our Office",
  address: "Address: 123 AI Tech Avenue, Techville, 54321",
  directionsHref: "https://maps.google.com",
};

/* ------------------------ Dynamic article registry ------------------------ */

export type ArticleSection = { heading: string; paragraphs: string[] };

export type Article = {
  slug: string;
  title: string;
  heroImage: string;
  heroAlt: string;
  author: string;
  date: string;
  category: string;
  readingTime: string;
  likes: string;
  views: string;
  shares: number;
  intro: string;
  toc: string[];
  sections: ArticleSection[];
};

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const categoryImage: Record<string, string> = {
  "Quantum Computing": "photo-1635070041078-e363dbe005cb",
  "AI Ethics": "photo-1677442136019-21780ecad995",
  "Space Exploration": "photo-1457364887197-9150188c107b",
  Biotechnology: "photo-1558494949-ef010cbdcc31",
  "Renewable Energy": "photo-1466611653911-95081537e5b7",
  Technology: "photo-1581091226825-a6a2a5aee158",
  Politics: "photo-1521791136064-7986c2920216",
  Health: "photo-1576091160550-2173dba999ef",
  Healthcare: "photo-1576091160550-2173dba999ef",
  Environment: "photo-1466611653911-95081537e5b7",
  Sports: "photo-1526374965328-7f61d4dc18c5",
};

type ArticleSeed = {
  title: string;
  excerpt?: string;
  category: string;
  author?: string;
  date?: string;
  image?: string;
  likes?: string;
  comments?: number;
  shares?: number;
};

function buildArticle(seed: ArticleSeed): Article {
  const cat = seed.category;
  const intro =
    seed.excerpt ??
    `A closer look at ${seed.title.toLowerCase()} and what it means for the future of ${cat.toLowerCase()}.`;
  const sections: ArticleSection[] = [
    {
      heading: "Overview",
      paragraphs: [
        intro,
        `As ${cat.toLowerCase()} continues to advance at a remarkable pace, "${seed.title}" has become a focal point for researchers, industry leaders, and the public alike. In this article we unpack the key developments, their real-world implications, and what they signal about the road ahead.`,
      ],
    },
    {
      heading: `The State of ${cat}`,
      paragraphs: [
        `The landscape of ${cat.toLowerCase()} has shifted dramatically over the past few years. Breakthroughs that once felt decades away are now being prototyped, tested, and in some cases deployed at scale. This momentum is driven by a combination of better data, more capable models, and a growing appetite for innovation across both public and private sectors.`,
        `Yet progress is rarely linear. For every headline breakthrough there are difficult questions around cost, accessibility, ethics, and long-term impact — challenges that the community is only beginning to address in earnest.`,
      ],
    },
    {
      heading: "Why It Matters",
      paragraphs: [
        `The significance of ${seed.title.toLowerCase()} extends well beyond the lab. From the way we work and learn to how we diagnose disease and explore the cosmos, the ripple effects touch nearly every corner of modern life. Understanding these shifts early is the difference between leading change and reacting to it.`,
      ],
    },
    {
      heading: "Looking Ahead",
      paragraphs: [
        `Looking to the future, expect ${cat.toLowerCase()} to become more integrated, more responsible, and more collaborative. The organizations that thrive will be those that pair technical ambition with a clear sense of purpose — and that keep people at the center of every decision.`,
        `FutureTech will continue to track these developments closely, bringing you the analysis, interviews, and resources you need to stay ahead.`,
      ],
    },
  ];

  return {
    slug: slugify(seed.title),
    title: seed.title,
    heroImage: ux(
      (seed.image && seed.image.match(/photo-[\w-]+/)?.[0]) ??
        categoryImage[cat] ??
        "photo-1518770660439-4636190af475",
      1600,
    ),
    heroAlt: `${seed.title} — ${cat}`,
    author: seed.author ?? "FutureTech Editorial",
    date: seed.date ?? "2024",
    category: cat,
    readingTime: "7 Min",
    likes: seed.likes ?? "12k",
    views: "48k",
    shares: seed.shares ?? 64,
    intro,
    toc: ["Introduction", ...sections.map((s) => s.heading), "Conclusion"],
    sections,
  };
}

// Collect every post/card that should be readable as an article.
const articleSeeds: ArticleSeed[] = [
  ...blogPosts,
  ...newsPosts,
  ...newsCards.map((c) => ({
    title: c.title,
    category: c.category,
    image: c.image,
    likes: c.likes,
    shares: c.shares,
    author: "FutureTech Newsroom",
    date: "2024",
  })),
  {
    title: featuredNews.title,
    excerpt: featuredNews.excerpt,
    category: featuredNews.category,
    author: featuredNews.author,
    date: featuredNews.date,
    image: featuredNews.image,
    likes: featuredNews.likes,
    shares: featuredNews.shares,
  },
];

export const articleMap: Record<string, Article> = {};
for (const seed of articleSeeds) {
  const a = buildArticle(seed);
  if (!articleMap[a.slug]) articleMap[a.slug] = a;
}
// The hand-written flagship article overrides any generated version.
articleMap[article.slug] = article as Article;

export const articleSlugs = Object.keys(articleMap);

export function getArticle(slug: string): Article | undefined {
  return articleMap[slug];
}

export const faqs = [
  {
    q: "What is AI?",
    a: "AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines. It enables them to perform tasks like problem-solving, learning, and decision-making.",
  },
  {
    q: "How can I listen to your podcasts?",
    a: "You can stream every episode directly here on the site, or subscribe through Apple Podcasts, Spotify, and Google Podcasts to listen on the go.",
  },
  {
    q: "Are your podcasts free to listen to?",
    a: "Yes. All of our podcast episodes are completely free to stream and download — no subscription required.",
  },
  {
    q: "Can I download episodes to listen offline?",
    a: "Absolutely. Each episode page includes a download option so you can save it and listen offline whenever you like.",
  },
  {
    q: "How often do you release new episodes?",
    a: "We publish new episodes on a weekly basis, with bonus interviews and special features released throughout the month.",
  },
];

export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const myProjects = [
  {
    title: 'Interactive Hologram',
    desc: 'The interactive hologram enables users to display 3D objects and interact with those using only your hands.',
    subdesc:
      'Built using Python, Mediapipe and OpenCV for vocal recognition and Pyautogui for the interactions with the 3D object displayed.',
    href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/ift.jpeg',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/python.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/opencv.svg',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/mediapipe.svg',
      },
    ],
  },
  {
    title: 'VertiTech - Eco-responsible products marketplace',
    desc: 'VertiTech is a marketplace that promotes eco-responsible products from european companies.',
    subdesc:
      'Built using the website editor wordpress and FastAPI Python to connect vendors with the marketplace enabling them to easily manage products, stocks and payments.',
    href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/fastapi.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/html.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/css.svg',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/php.svg',
      },
      {
        id: 5,
        name: 'Framer Motion',
        path: '/assets/python.svg',
      },
    ],
  },
  {
    title: 'Nvemo - AI assistant',
    desc: 'A SAS (software as service) powered by LLAMA3',
    subdesc:
      'Enables users to have an AI vocal assistant, generate images and pdf resumes. Built using Pytorch for fine-tuning, FastAPI, Next.js and React.',
    href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/nvemo-logo.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/next.svg',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/fastapi.svg',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/python.svg',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/pytorch.svg',
      },
    ],
  },
  {
    title: 'Interface for flower store management',
    desc: 'The interface enables users to manage system and access information according to your role: employee or manager. You can also use it as a customer to buy flowers.',
    subdesc:
      'Built using C# and MySQL.',
    href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/csharp.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/mysql-logo.svg',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'VertiTech',
    pos: 'Founder',
    duration: 'March 2023 - July 2024',
    title: "VertiTech is an eco-responsible products marketplace designed to help french people to buy high quality and sustainable products. The main difficulty was to connect each vendors with the marketplace using FastAPI in order to help them manage products, stocks and payments. The solution designed was robust efficient and easy to use.",
    icon: '/assets/project-logo2.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'OOTI',
    pos: 'Backend developer intern (5 months)',
    duration: 'April 2024 - August 2024',
    title: "OOTI is a platform that helps architects manage their projects. As a backend developper, I had to enhance the API to simplify communication with other APIs, create connectors and integrations with popular APIs, test existing API structure, ensure CI/CD efficiency by improving reliability of unit and integration tests and optimize and refactor the API to prepare for future front-end developments",
    icon: '/assets/ooti.png',
    animation: 'clapping',
  },
];

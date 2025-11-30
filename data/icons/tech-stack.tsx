import { FaJs, FaReact, FaGithub, FaAws } from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiPostman,
  SiDocker,
  SiApachekafka,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiOpenai,
  SiGithubactions,
  SiNestjs,
  SiNodedotjs,
  SiKubernetes,
  SiJenkins,
  SiJest,
  SiCypress,
  SiPrisma,
  SiDrizzle,
  SiMysql,
  SiRedis,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

export const webdev = [
  {
    name: 'JavaScript',
    description: 'Languages of the web',
    icon: <FaJs className="text-yellow-400 text-4xl" />,
  },
  {
    name: 'TypeScript',
    description: 'JavaScript with Types',
    icon: <SiTypescript className="text-blue-400 text-3xl" />,
  },
  {
    name: 'ReactJS',
    description: 'A JavaScript Library',
    icon: <FaReact className="text-sky-400 text-4xl" />,
  },
  {
    name: 'React Native',
    description: 'building mobile apps',
    icon: <FaReact className="text-sky-400 text-4xl" />,
  },
  {
    name: 'Tailwind CSS',
    description: 'CSS Frameworks',
    icon: <SiTailwindcss className="text-cyan-500 dark:text-cyan-400 text-4xl" />,
  },
  {
    name: 'NextJS',
    description: 'React Framework',
    icon: <SiNextdotjs className="text-foreground text-4xl" />,
  },
  {
    name: 'NestJS',
    description: 'Nest.js Framework',
    icon: <SiNestjs className="text-red-400 text-4xl" />,
  },
  {
    name: 'NodeJs',
    description: 'Node.js Framework',
    icon: <SiNodedotjs className="text-green-400 text-4xl" />,
  },
  {
    name: 'ExpressJS',
    description: 'Web Framework for Node.js',
    icon: <SiExpress className="text-gray-800 dark:text-gray-400 text-4xl" />,
  },
];

export const tools = [
  {
    name: 'Git & GitHub',
    description: 'Version Control',
    icon: <FaGithub className="text-gray-800 dark:text-gray-400 text-4xl" />,
  },
  {
    name: 'VS Code',
    description: 'Code Editor',
    icon: <VscVscode className="text-blue-500 text-4xl" />,
  },
  {
    name: 'Postman',
    description: 'API Testing',
    icon: <SiPostman className="text-orange-500 text-4xl" />,
  },
  {
    name: 'OpenAI',
    description: 'AI and Machine Learning',
    icon: <SiOpenai className=" text-4xl" />,
  },
  {
    name: 'Jest',
    description: 'JavaScript Testing Framework',
    icon: <SiJest className="text-yellow-400 text-4xl" />,
  },
  {
    name: 'Cypress',
    description: 'JavaScript End-to-End Testing Framework',
    icon: <SiCypress className="text-purple-500 text-4xl" />,
  },
];

export const database = [
  {
    name: 'MongoDB',
    description: 'NoSQL Database',
    icon: <SiMongodb className="text-green-500 text-4xl" />,
  },
  {
    name: 'PostgreSQL',
    description: 'Relational Database',
    icon: <SiPostgresql className="text-blue-400 text-4xl" />,
  },
  {
    name: 'Prisma',
    description: 'Database ORM',
    icon: <SiPrisma className="text-blue-600 text-4xl" />,
  },
  {
    name: 'Drizzle',
    description: 'Type-safe database client',
    icon: <SiDrizzle className="text-yellow-500 text-4xl" />,
  },
  {
    name: 'MySQL',
    description: 'Relational Database',
    icon: <SiMysql className="text-blue-700 text-4xl" />,
  },
  {
    name: 'Redis',
    description: 'In-memory Data Structure Store',
    icon: <SiRedis className="text-red-500 text-4xl" />,
  },
];

export const devops = [
  {
    name: 'Docker',
    description: 'Containerization',
    icon: <SiDocker className="text-blue-400 text-4xl" />,
  },
  {
    name: 'Apache Kafka',
    description: 'Distributed Streaming Platform',
    icon: <SiApachekafka className="text-gray-500 text-4xl" />,
  },
  {
    name: 'AWS',
    description: 'Cloud Computing',
    icon: <FaAws className="text-orange-500 text-4xl" />,
  },
  {
    name: 'Kubernetes',
    description: 'Container Orchestration',
    icon: <SiKubernetes className="text-blue-500 text-4xl" />,
  },
  {
    name: 'CI/CD',
    description: 'CI/CD with GitHub Actions',
    icon: <SiGithubactions className="text-gray-800 dark:text-gray-400 text-4xl" />,
  },
  {
    name: 'Jenkins',
    description: 'CI/CD with GitHub Actions',
    icon: <SiJenkins className="text-gray-800 dark:text-gray-400 text-4xl" />,
  },
];

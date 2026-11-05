export type Lang = 'es' | 'en';

export interface Project {
  title: string;
  status: string;
  desc: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
}

export interface StackGroup {
  title: string;
  items: string[];
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

export interface Content {
  navLabel: string;
  navProjects: string;
  navStack: string;
  navContact: string;
  eyebrow: string;
  headline: string;
  sub: string;
  ctaProjects: string;
  ctaContact: string;
  aboutLabel: string;
  aboutTitle: string;
  about: string;
  projectsLabel: string;
  projectsTitle: string;
  demoLabel: string;
  codeLabel: string;
  projects: Project[];
  stackLabel: string;
  stackTitle: string;
  stack: StackGroup[];
  contactLabel: string;
  contactTitle: string;
  contactText: string;
  contacts: ContactLink[];
  footer: string;
}

const FORZA_DEMO = 'https://forza-momentum.vercel.app';
const EMAIL = 'crcamiloramirez@hotmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/crcamiloramirez/';
const GITHUB = 'https://github.com/juancamilorc';

export const CONTENT: Record<Lang, Content> = {
  es: {
    navLabel: 'Principal',
    navProjects: 'Proyectos',
    navStack: 'Tecnologías',
    navContact: 'Contacto',
    eyebrow: 'Ingeniero de sistemas · Medellín, Colombia',
    headline: 'Ingeniería de software con enfoque en backend y arquitectura.',
    sub: 'Tres años de experiencia diseñando y construyendo aplicaciones web con Angular, Node.js y NestJS, con foco en calidad de código y diseño de soluciones.',
    ctaProjects: 'Ver proyectos',
    ctaContact: 'Contactar',
    aboutLabel: '01 · Perfil',
    aboutTitle: 'Software claro, mantenible y bien diseñado.',
    about:
      'Ingeniero de sistemas con tres años de experiencia en desarrollo de software. Diseño y construyo aplicaciones web de extremo a extremo con Angular, Node.js y NestJS, y desarrollo sitios institucionales en PHP.',
    projectsLabel: '02 · Proyectos',
    projectsTitle: 'Lo que he construido',
    demoLabel: 'Ver demo',
    codeLabel: 'Ver código',
    projects: [
      {
        title: 'FORZA',
        status: 'En desarrollo',
        desc: 'Plataforma de gestión para academias deportivas: atletas, entrenadores, planes y evaluaciones. Monorepo con Angular y NestJS sobre Supabase. Demo pública con datos de ejemplo.',
        tags: ['Angular', 'NestJS', 'Supabase', 'Nx'],
        // TODO: cambiar demoUrl por la del showcase de FORZA y agregar codeUrl cuando esté listo
        demoUrl: FORZA_DEMO,
      },
      {
        title: 'FinCore',
        status: 'Próximamente',
        desc: 'Aplicación de finanzas personales: cuentas, ingresos, gastos y presupuesto mensual. Arquitectura hexagonal, backend en Java y Spring Boot, frontend en Angular, despliegue en AWS.',
        tags: ['Java', 'Spring Boot', 'Hexagonal', 'AWS'],
      },
    ],
    stackLabel: '03 · Tecnologías',
    stackTitle: 'Con lo que trabajo',
    stack: [
      { title: 'Frontend', items: ['Angular', 'TypeScript', 'HTML', 'CSS'] },
      { title: 'Backend', items: ['Node.js', 'NestJS', 'PHP', 'Joomla', 'Java'] },
      { title: 'Datos y despliegue', items: ['Supabase', 'Docker', 'Git', 'Vercel', 'Render'] },
    ],
    contactLabel: '04 · Contacto',
    contactTitle: 'Hablemos',
    contactText: 'Abierto a conversar sobre oportunidades en desarrollo backend y fullstack.',
    contacts: [
      { label: 'Correo', value: EMAIL, href: `mailto:${EMAIL}` },
      { label: 'LinkedIn', value: 'in/crcamiloramirez', href: LINKEDIN, external: true },
      { label: 'GitHub', value: 'github.com/juancamilorc', href: GITHUB, external: true },
    ],
    footer: '© 2026 Juan Camilo Ramírez Cardona',
  },
  en: {
    navLabel: 'Main',
    navProjects: 'Projects',
    navStack: 'Stack',
    navContact: 'Contact',
    eyebrow: 'Systems engineer · Medellín, Colombia',
    headline: 'Software engineering focused on backend and architecture.',
    sub: 'Three years of experience designing and building web applications with Angular, Node.js and NestJS, with a focus on code quality and solution design.',
    ctaProjects: 'View projects',
    ctaContact: 'Contact me',
    aboutLabel: '01 · Profile',
    aboutTitle: 'Clear, maintainable, well-designed software.',
    about:
      'Systems engineer with three years of experience in software development. I design and build end-to-end web applications with Angular, Node.js and NestJS, and develop institutional websites in PHP.',
    projectsLabel: '02 · Projects',
    projectsTitle: 'What I’ve built',
    demoLabel: 'View demo',
    codeLabel: 'View code',
    projects: [
      {
        title: 'FORZA',
        status: 'In development',
        desc: 'Management platform for sports academies: athletes, trainers, plans and evaluations. Monorepo with Angular and NestJS on Supabase. Public demo with sample data.',
        tags: ['Angular', 'NestJS', 'Supabase', 'Nx'],
        // TODO: cambiar demoUrl por la del showcase de FORZA y agregar codeUrl cuando esté listo
        demoUrl: FORZA_DEMO,
      },
      {
        title: 'FinCore',
        status: 'Coming soon',
        desc: 'Personal finance application: accounts, income, expenses and monthly budget. Hexagonal architecture, Java and Spring Boot backend, Angular frontend, deployed on AWS.',
        tags: ['Java', 'Spring Boot', 'Hexagonal', 'AWS'],
      },
    ],
    stackLabel: '03 · Stack',
    stackTitle: 'What I work with',
    stack: [
      { title: 'Frontend', items: ['Angular', 'TypeScript', 'HTML', 'CSS'] },
      { title: 'Backend', items: ['Node.js', 'NestJS', 'PHP', 'Joomla', 'Java'] },
      { title: 'Data and deployment', items: ['Supabase', 'Docker', 'Git', 'Vercel', 'Render'] },
    ],
    contactLabel: '04 · Contact',
    contactTitle: 'Get in touch',
    contactText: 'Open to discussing backend and full-stack development opportunities.',
    contacts: [
      { label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
      { label: 'LinkedIn', value: 'in/crcamiloramirez', href: LINKEDIN, external: true },
      { label: 'GitHub', value: 'github.com/juancamilorc', href: GITHUB, external: true },
    ],
    footer: '© 2026 Juan Camilo Ramírez Cardona',
  },
};

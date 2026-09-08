import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

export type Language = "en" | "pt";

const STORAGE_KEY = "asbel_language";

export interface CertItem {
  title: string;
  description: string;
}

export interface IndexMessages {
  nav: {
    viewCv: string;
    about: string;
    skills: string;
    certifications: string;
    contact: string;
  };
  hero: {
    badge: string;
    hello: string;
    typewriter: string;
    viewCv: string;
    contactMe: string;
    createCv: string;
    location: string;
    relocation: string;
  };
  cvSection: {
    title: string;
    subtitle: string;
  };
  about: {
    title: string;
    p1: string;
    p2: string;
  };
  skills: {
    title: string;
  };
  certifications: {
    title: string;
    items: CertItem[];
  };
  footer: {
    interested: string;
    cta: string;
    rights: string;
    location: string;
  };
}

export interface CVExperience {
  title: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface CVData {
  name: string;
  address: string;
  email: string;
  dateOfBirth: string;
  profileTitle: string;
  profile: string;
  experienceTitle: string;
  experience: CVExperience[];
  educationTitle: string;
  educationDegree: string;
  educationSchool: string;
  availabilityTitle: string;
  availability: string;
  coverLetterTitle: string;
  coverLetter: string[];
}

const messages: Record<Language, IndexMessages> = {
  en: {
    nav: {
      viewCv: "View CV",
      about: "About",
      skills: "Skills",
      certifications: "Certifications",
      contact: "Contact",
    },
    hero: {
      badge: "Available for opportunities in Dublin",
      hello: "Hello, I'm",
      typewriter:
        "Thank you for taking the time to review my CV. Below you'll find a summary of my experience, skills, and qualifications — and I'm happy to share more details on request.",
      viewCv: "View CV",
      contactMe: "Contact Me",
      createCv: "Create your CV",
      location: "Dublin, Ireland",
      relocation: "Open to relocation",
    },
    cvSection: {
      title: "View CV",
      subtitle:
        "A snapshot of my professional background, education, and what I can bring to your team.",
    },
    about: {
      title: "About Me",
      p1: "Reliable, adaptable, and detail-oriented professional based in Dublin, Ireland, with experience in hospitality, cleaning, cargo operations, quality inspection and customer-facing environments.",
      p2: "Adaptable to different industries and committed to continuous professional development, always eager to learn new tasks quickly and contribute positively to the team.",
    },
    skills: {
      title: "Skills",
    },
    certifications: {
      title: "Certifications",
      items: [
        {
          title: "Criminal Background Check Certificate",
          description: "Verified and available upon request",
        },
        {
          title: "AWS Cloud Foundations",
          description: "Amazon Web Services",
        },
        {
          title: "Introduction to Front-End Development",
          description: "Web Development Fundamentals",
        },
        {
          title: "UX Design: Digital Products",
          description: "User Experience Design",
        },
      ],
    },
    footer: {
      interested: "Interested in working together?",
      cta: "Get in Touch",
      rights: "© 2026 Asbel Nascimento",
      location: "Dublin, Ireland",
    },
  },
  pt: {
    nav: {
      viewCv: "Ver Currículo",
      about: "Sobre",
      skills: "Habilidades",
      certifications: "Certificações",
      contact: "Contato",
    },
    hero: {
      badge: "Disponível para oportunidades em Dublin",
      hello: "Olá, eu sou",
      typewriter:
        "Obrigado por dedicar seu tempo para avaliar meu currículo. Abaixo você encontrará um resumo da minha experiência, habilidades e qualificações — e terei prazer em compartilhar mais detalhes se necessário.",
      viewCv: "Ver Currículo",
      contactMe: "Fale Comigo",
      createCv: "Crie seu Currículo",
      location: "Dublin, Irlanda",
      relocation: "Aberto a relocação",
    },
    cvSection: {
      title: "Ver Currículo",
      subtitle:
        "Um resumo do meu histórico profissional, formação e o que posso contribuir com a sua equipe.",
    },
    about: {
      title: "Sobre Mim",
      p1: "Profissional confiável, adaptável e detalhista, atualmente em Dublin, Irlanda, com experiência em hospitalidade, limpeza, operações de carga, inspeção de qualidade e atendimento ao cliente.",
      p2: "Adaptável a diferentes setores e comprometido com o desenvolvimento profissional contínuo, sempre disposto a aprender novas tarefas rapidamente e contribuir positivamente com a equipe.",
    },
    skills: {
      title: "Habilidades",
    },
    certifications: {
      title: "Certificações",
      items: [
        {
          title: "Certificado de Antecedentes Criminais",
          description: "Verificado e disponível mediante solicitação",
        },
        {
          title: "AWS Cloud Foundations",
          description: "Amazon Web Services",
        },
        {
          title: "Introdução ao Desenvolvimento Front-End",
          description: "Fundamentos de Desenvolvimento Web",
        },
        {
          title: "UX Design: Produtos Digitais",
          description: "Experiência do Usuário",
        },
      ],
    },
    footer: {
      interested: "Interessado em trabalhar juntos?",
      cta: "Entre em Contato",
      rights: "© 2026 Asbel Nascimento",
      location: "Dublin, Irlanda",
    },
  },
};

const cvData: Record<Language, CVData> = {
  en: {
    name: "Asbel Nascimento",
    address: "50 Collegewood, Castleknock D15 R6W4 Dublin, Ireland",
    email: "asbel.nascimento123456@gmail.com",
    dateOfBirth: "02/04/2004",
    profileTitle: "Professional Profile",
    profile:
      "Reliable, adaptable, and detail-oriented professional with strong organizational, teamwork, and time management skills. Able to work independently or as part of a team in fast-paced environments while maintaining high standards of quality and professionalism.",
    experienceTitle: "Work Experience",
    experience: [
      {
        title: "House Keeper",
        company: "Casa Grande Hotel | Guarujá, Brazil",
        period: "19/07/2026 – 29/08/2026",
        bullets: [
          "Cleaning and maintaining guest rooms/private residences to a high standart.",
          "Changing bed linens and towels, ensuring cleanliness and comfort.",
          "Dusting, vaccuming mooping floor, and sanitizing bathrooms within deadlines.",
        ],
      },
      {
        title: "Cargo Surveyor",
        company: "Control Union | Port of Santos, Brazil",
        period: "2023 – 07/2026",
        bullets: [
          "Inspected and monitored cargo operations, including grains and agricultural products. Monitored loading and unloading operations.",
          "Collaborated with teams, clients, and operational staff.",
        ],
      },
      {
        title: "Cleaner",
        company: "Praiamar Shopping | Santos, Brazil",
        period: "2022 – 2023",
        bullets: [
          "Cleaning and sanitizing common areas, including restrooms, corridors, food court, and entrances. Replenishing hygiene supplies like toilet paper, soap, paper towels, others.",
          "Working as part of a team to maintain a clean, organized and safe environment for costumers and staff.",
        ],
      },
    ],
    educationTitle: "Education",
    educationDegree: "General English Intermediate Level (B1)",
    educationSchool: "Academic Bridge English Language School – Dublin, Ireland",
    availabilityTitle: "Availability",
    availability:
      "Open to part-time roles during the weekdays, full-time on weekends, immediate start.",
    coverLetterTitle: "Cover Letter",
    coverLetter: [
      "I am writing to express my interest in any suitable opportunities within your organisation. I am a reliable, adaptable and hardworking professional with experience in hospitality, cleaning, cargo operations and customer-facing environments.",
      "Throughout my previous roles, I have developed strong organisational skills, attention to detail, teamwork and the ability to work independently in fast-paced environments. My experience as a Housekeeper and Cleaner has given me a strong understanding of maintaining high standards of cleanliness, organisation and safety, while my experience as a Cargo Surveyor has strengthened my responsibility, communication, accuracy and ability to follow procedures.",
      "I am currently based in Dublin and studying General English at an intermediate level. I am comfortable working with different teams, learning new tasks quickly and adapting to new working environments. I am committed to being punctual, professional and reliable, and I am always willing to contribute positively to the team.",
      "I am available for part-time work during weekdays and full-time availability at weekends, with an immediate start. I would welcome the opportunity to discuss how my skills and experience could contribute to your organisation.",
      "Thank you for considering my application. I look forward to hearing from you.",
      "Kind regards, Asbel Nascimento, Dublin, Ireland, asbel.nascimento123456@gmail.com",
    ],
  },
  pt: {
    name: "Asbel Nascimento",
    address: "50 Collegewood, Castleknock D15 R6W4 Dublin, Irlanda",
    email: "asbel.nascimento123456@gmail.com",
    dateOfBirth: "02/04/2004",
    profileTitle: "Perfil Profissional",
    profile:
      "Profissional confiável, adaptável e detalhista, com fortes habilidades de organização, trabalho em equipe e gestão de tempo. Capaz de trabalhar de forma independente ou como parte de uma equipe em ambientes dinâmicos, mantendo altos padrões de qualidade e profissionalismo.",
    experienceTitle: "Experiência Profissional",
    experience: [
      {
        title: "Camareiro(a)",
        company: "Casa Grande Hotel | Guarujá, Brasil",
        period: "19/07/2026 – 29/08/2026",
        bullets: [
          "Limpeza e manutenção de quartos de hóspedes e residências particulares com alto padrão.",
          "Troca de roupas de cama e toalhas, garantindo limpeza e conforto.",
          "Tirar pó, aspirar, lavar pisos e higienizar banheiros dentro dos prazos.",
        ],
      },
      {
        title: "Vistoriador de Cargas",
        company: "Control Union | Porto de Santos, Brasil",
        period: "2023 – 07/2026",
        bullets: [
          "Inspecionou e monitorou operações de carga, incluindo grãos e produtos agrícolas. Monitorou operações de carregamento e descarregamento.",
          "Colaborou com equipes, clientes e equipe operacional.",
        ],
      },
      {
        title: "Auxiliar de Limpeza",
        company: "Praiamar Shopping | Santos, Brasil",
        period: "2022 – 2023",
        bullets: [
          "Limpeza e higienização de áreas comuns, incluindo banheiros, corredores, praça de alimentação e entradas. Reposição de suprimentos de higiene, como papel higiênico, sabonete, papel toalha, entre outros.",
          "Trabalho em equipe para manter um ambiente limpo, organizado e seguro para clientes e funcionários.",
        ],
      },
    ],
    educationTitle: "Educação",
    educationDegree: "Inglês Geral Nível Intermediário (B1)",
    educationSchool: "Academic Bridge English Language School – Dublin, Irlanda",
    availabilityTitle: "Disponibilidade",
    availability:
      "Disponível para trabalhos de meio período durante a semana, período integral aos fins de semana, início imediato.",
    coverLetterTitle: "Carta de Apresentação",
    coverLetter: [
      "Escrevo para manifestar meu interesse em oportunidades adequadas dentro da sua organização. Sou um profissional confiável, adaptável e dedicado, com experiência em hospitalidade, limpeza, operações de carga e ambientes de atendimento ao cliente.",
      "Ao longo das minhas experiências anteriores, desenvolvi fortes habilidades organizacionais, atenção aos detalhes, trabalho em equipe e a capacidade de trabalhar de forma independente em ambientes dinâmicos. Minha experiência como Camareiro(a) e Auxiliar de Limpeza me proporcionou uma sólida compreensão da manutenção de altos padrões de limpeza, organização e segurança, enquanto minha experiência como Vistoriador de Cargas fortaleceu minha responsabilidade, comunicação, precisão e capacidade de seguir procedimentos.",
      "Atualmente moro em Dublin e estudo Inglês Geral em nível intermediário. Tenho facilidade em trabalhar com diferentes equipes, aprender novas tarefas rapidamente e me adaptar a novos ambientes de trabalho. Sou comprometido com pontualidade, profissionalismo e confiabilidade, e estou sempre disposto a contribuir positivamente com a equipe.",
      "Estou disponível para trabalho de meio período durante a semana e período integral aos fins de semana, com início imediato. Terei prazer em discutir como minhas habilidades e experiência podem contribuir para a sua organização.",
      "Agradeço pela consideração da minha candidatura. Aguardo seu contato.",
      "Atenciosamente, Asbel Nascimento, Dublin, Irlanda, asbel.nascimento123456@gmail.com",
    ],
  },
};

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  messages: IndexMessages;
  cv: CVData;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLanguage(): Language {
  try {
    return localStorage.getItem(STORAGE_KEY) === "pt" ? "pt" : "en";
  } catch {
    return "en";
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {}
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  }, [language]);

  const value = useMemo<LanguageContextValue>(
    () => ({ language, setLanguage, messages: messages[language], cv: cvData[language] }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useI18n must be used within a LanguageProvider");
  return ctx;
}
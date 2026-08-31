export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export interface Language {
  name: string;
  level: string;
}

export interface Course {
  title: string;
  image: string;
}

export interface Education {
  degree: string;
  institution: string;
  period?: string;
}

export interface Project {
  name: string;
  description: string;
  technologies?: string[];
}

export interface Position {
  id: string;
  title: string;
  emoji: string;
  cardDescription: string;
  coverLetter: string;
  summary: string;
  coreSkills: string[];
  experience: Experience[];
  languages: Language[];
  personalStrengths: string[];
  courses?: Course[];
  website?: string;
  phone?: string;
  education?: Education[];
  careerObjective?: string;
  projects?: Project[];
}

const workExperience: Experience[] = [
  {
    title: "Housekeeper",
    company: "Casa Grande Hotel | Guarujá, Brazil",
    period: "19/07/2026 – 29/08/2026",
    description: [
      "Cleaning and maintaining guest rooms and private residences to a high standard.",
      "Changing bed linens and towels, ensuring cleanliness and comfort.",
      "Dusting, vacuuming, mopping floors, and sanitizing bathrooms within deadlines.",
    ],
  },
  {
    title: "Cargo Surveyor",
    company: "Control Union | Port of Santos, Brazil",
    period: "2023 – 07/2026",
    description: [
      "Inspected and monitored cargo operations, including grains and agricultural products.",
      "Monitored loading and unloading operations.",
      "Collaborated with teams, clients, and operational staff.",
    ],
  },
  {
    title: "Cleaner",
    company: "Praiamar Shopping | Santos, Brazil",
    period: "2022 – 2023",
    description: [
      "Cleaning and sanitizing common areas, including restrooms, corridors, food court, and entrances.",
      "Replenishing hygiene supplies like toilet paper, soap, paper towels, and other essentials.",
      "Working as part of a team to maintain a clean, organized and safe environment for customers and staff.",
    ],
  },
];

export const positions: Position[] = [
  {
    id: "warehouse-operative",
    title: "Warehouse Operative",
    emoji: "📦",
    cardDescription: "Inventory • Picking • Packing",
    coverLetter: `Dear Hiring Manager,

I am writing to express my sincere interest in the Warehouse Operative position within your team. I am excited about the opportunity to bring my dedication, reliability, and strong work ethic to your warehouse environment.

I am a hardworking and dependable individual who enjoys working in fast-paced environments where teamwork is essential. Through my previous roles, I have demonstrated exceptional attention to detail and the ability to perform efficiently under pressure when maintaining excellent quality standards.

I take pride in being reliable, punctual, and physically fit, capable of standing for long periods and lifting heavy items safely. I am confident that my motivation, adaptability, and willingness to learn new systems will make me a valuable member of your warehouse team.

Thank you for considering my application. I would welcome the opportunity to discuss how I can contribute to your organization.

Yours sincerely,
Asbel Nascimento`,
    summary:
      "Reliable, hardworking, and motivated professional with a strong commitment to maintaining high standards of hygiene and operational efficiency. Committed to maintaining high standards of hygiene and preparation while supporting colleagues in a busy environment.",
    coreSkills: [
      "Forklift Operation",
      "Stock Organization",
      "Warehouse Organization",
      "Quality Control",
      "Time Management",
      "Teamwork",
    ],
    experience: workExperience,
    languages: [
      { name: "Portuguese", level: "Native" },
      { name: "English", level: "Intermediate (Improving Daily)" },
    ],
    personalStrengths: [
      "Positive attitude",
      "Fast learner",
      "Friendly personality",
      "Excellent teamwork",
    ],
  },
  {
    id: "kitchen-porter",
    title: "Kitchen Porter",
    emoji: "🍽️",
    cardDescription: "Hygiene • Food Safety • Teamwork",
    coverLetter: `Dear Hiring Manager,

I am writing to express my sincere interest in the Kitchen Porter position. I am excited about the opportunity to join your team.

I am a friendly, energetic and customer-focused professional with experience providing excellent customer service. I enjoy working in fast-paced environments and have a genuine interest in the hospitality industry.

I have strong dedication, time management skills, as well as the ability to follow procedures carefully and maintain high standards of hygiene, food safety, and positive attitude and flexible schedule.

I have a genuine interest in coffee culture and I am eager to improve my knowledge in this area. What attracts me most to this opportunity is the possibility of speaking with you in an interview.

Thank you for considering my application. I look forward to hearing from you.

Yours sincerely,
Asbel Nascimento`,
    summary:
      "Friendly, energetic and customer-focused professional with experience providing excellent customer service. Fast learner with a positive attitude and flexible schedule.",
    coreSkills: [
      "Coffee Preparation Basics",
      "Customer Service",
      "Communication",
      "Time Management",
      "Attention to Detail",
      "POS Systems",
    ],
    experience: workExperience,
    languages: [
      { name: "Portuguese", level: "Native" },
      { name: "English", level: "Intermediate (Improving Daily)" },
    ],
    personalStrengths: [
      "Positive attitude",
      "Fast learner",
      "Professional appearance",
      "Excellent teamwork",
    ],
  },
  {
    id: "housekeeper",
    title: "Housekeeper",
    emoji: "🏨",
    cardDescription: "Cleaning • Organization • Detail",
    coverLetter: `Dear Hiring Manager,

I am writing to express my sincere interest in the Housekeeper position. I am excited about the opportunity to join your team.

I am a hardworking, reliable, and motivated individual who enjoys working in fast-paced environments where teamwork is essential. Through my previous roles, I have demonstrated exceptional attention to detail and the ability to perform efficiently under pressure when maintaining excellent quality standards.

I take pride in being reliable, punctual, and physically fit, capable of standing for long periods while maintaining high standards of hygiene, food safety, and physical organization. I am confident that my reliability, hard work ethic, and willingness to learn new systems will make me a valuable member of your housekeeping team.

Thank you for considering my application. I would welcome the opportunity to discuss how I can contribute to your organization.

Yours sincerely,
Asbel Nascimento`,
    summary:
      "Hardworking, reliable, and motivated professional with experience ensuring cleanliness and organization in fast-paced environments where teamwork is essential. Committed to maintaining high standards of hygiene and procedures carefully and maintain high standards of cleanliness.",
    coreSkills: [
      "Housekeeping",
      "Health & Safety Awareness",
      "Warehouse Organization",
      "Quality Control",
      "Time Management",
      "Teamwork",
    ],
    experience: workExperience,
    languages: [
      { name: "Portuguese", level: "Native" },
      { name: "English", level: "Intermediate (Improving Daily)" },
    ],
    personalStrengths: [
      "Positive attitude",
      "Fast learner",
      "Professional appearance",
      "Excellent teamwork",
    ],
  },
  {
    id: "it-support",
    title: "IT Support",
    emoji: "💻",
    cardDescription: "Troubleshooting • Hardware • Networking",
    coverLetter: `Dear Hiring Manager,

I am writing to express my sincere interest in the IT Support position. I am excited about the opportunity to join your team.

Technology has always been one of my greatest interests, and I have a genuine passion for using my technical knowledge, customer service experience, and problem solving abilities to assist users.

In my previous roles, I developed valuable skills in communication, time management, technical troubleshooting, and customer support.

I am a quick learner who enjoys working in fast-paced environments and I am eager to take on new challenges and responsibilities. I am confident that my motivation, adaptability, and dedication can benefit your organization.

Thank you for considering my application. I would welcome the opportunity to discuss how I can contribute to your organization.

Yours sincerely,
Asbel Nascimento`,
    summary:
      "Motivated and customer-focused IT professional with a strong commitment to technical support and problem-solving. Passionate about delivering excellent IT support and thoroughly developing technical expertise.",
    coreSkills: [
      "IT Support",
      "Technical Troubleshooting",
      "Microsoft Office",
      "Customer Support",
      "Time Management",
      "Fast Learner",
    ],
    experience: workExperience,
    languages: [
      { name: "Portuguese", level: "Native" },
      { name: "English", level: "Intermediate (Improving Daily)" },
    ],
    personalStrengths: [
      "Positive attitude",
      "Fast learner",
      "Reliable",
      "Customer-focused",
    ],
    courses: [
      { title: "Amazon Bedrock", image: "https://i.ibb.co/tP86STmT/Amazon-bedrock.png" },
      { title: "Administrative Assistant", image: "https://i.ibb.co/Hp9WDCnB/Auxiliar-administrativo.png" },
      { title: "AWS Course - Foundations of Prompt Engineering", image: "https://i.ibb.co/bgWhtP5v/AWS-COURSE-COMPLETE.png" },
      { title: "AWS for Games", image: "https://i.ibb.co/VpgMZDwd/AWS-for-games.png" },
      { title: "Bootcamp - Understanding Client x Server Communication", image: "https://i.ibb.co/mVHGLP1N/BOOTCAMP-DIO.png" },
      { title: "Bootcamp - Git and GitHub Code Versioning", image: "https://i.ibb.co/wh8CS9zb/BOOTCAMP2-DIO.png" },
      { title: "Java - First Application", image: "https://i.ibb.co/fdyy95Ln/Certificado-Alura-Java.png" },
      { title: "Getting Started in Programming", image: "https://i.ibb.co/7Jn4w9X4/COME-ANDO-EM-PROGRAMA-O.png" },
      { title: "UX Design: Digital Products", image: "https://i.ibb.co/PJsJX0C/Curso-UX-Design-Conhe-a-o-universo-da-experi-ncia-em-produtos-digitais-Alura-1.png" },
      { title: "Data Analysis - Google Sheets", image: "https://i.ibb.co/MDkp2DLR/DATA-ANALYSIS-CERTIFICADO.png" },
      { title: "Introduction to Front-End Development", image: "https://i.ibb.co/HfvWrRXX/INTRODU-O-AO-DESENVOLVIMENTO.jpg" },
      { title: "Masterclass Figma", image: "https://i.ibb.co/dwxgwJNJ/MASTERCLASS-FIGMA-CERTIFICADO.png" },
      { title: "Career Transition to IT", image: "https://i.ibb.co/zTFvyZhv/TRANSI-O-DE-CARREIRA-CERTIFICADO.png" },
    ],
    website: "https://asbeldev.com",
  },
  {
    id: "barista",
    title: "Barista",
    emoji: "☕",
    cardDescription: "Coffee • Customer Service • POS",
    coverLetter: `Dear Hiring Manager,

I am writing to express my sincere interest in the Barista position. I am excited about the opportunity to join your team.

I am a quick learner who enjoys working in fast-paced environments and contributes to creating a positive customer experience. Technology has always been one of my interests, and I am eager to improve my knowledge in the art and science of coffee preparation.

I have a genuine interest in coffee culture and I am eager to improve my knowledge in this area. I take pride in being reliable, punctual, and physically fit, capable of standing for long periods and lifting heavy items when needed.

What attracts me to this opportunity is the possibility of speaking with you in an interview to discuss how I can contribute to your organization.

Thank you for considering my application. I look forward to hearing from you.

Yours sincerely,
Asbel Nascimento`,
    summary:
      "Friendly, energetic and customer-focused professional with a genuine interest in coffee culture and I am eager to improve my knowledge in this area. I have a quick learner with a positive attitude and strong work ethic.",
    coreSkills: [
      "Coffee Preparation Basics",
      "Customer Service",
      "Communication",
      "Time Management",
      "Attention to Detail",
      "POS Systems",
    ],
    experience: workExperience,
    languages: [
      { name: "Portuguese", level: "Native" },
      { name: "English", level: "Intermediate (Improving Daily)" },
    ],
    personalStrengths: [
      "Positive attitude",
      "Fast learner",
      "Flexible schedule",
      "Customer-focused",
    ],
  },
];

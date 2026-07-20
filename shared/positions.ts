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
}

export const positions: Position[] = [
  {
    id: "warehouse-operative",
    title: "Warehouse Operative",
    emoji: "📦",
    cardDescription: "Inventory \u2022 Picking \u2022 Packing",
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
    experience: [
      {
        title: "Quality Inspector",
        company: "Brazil",
        period: "July 2024 - Present",
        description: [
          "Worked in a fast-paced environment while following strict procedures.",
          "Inspected products to ensure compliance with company procedures.",
          "Demonstrated reliability, punctuality, and a strong work ethic.",
          "Collaborated with different teams to ensure efficient operations.",
        ],
      },
      {
        title: "Orcas Pimentel | S\u00e3o Vicente, Brazil",
        company: "September 2023 - July 2024",
        period: "",
        description: [
          "Maintained clean and organized work areas while complying with procedures.",
          "Supported daily business activities and administrative tasks.",
          "Derived excellent customer feedback and maintained professionalism and efficiency.",
          "Collaborated with different team members to ensure efficient operations.",
        ],
      },
    ],
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
    cardDescription: "Hygiene \u2022 Food Safety \u2022 Teamwork",
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
    experience: [
      {
        title: "Customer Service Assistant",
        company: "Brazil",
        period: "August 2024 - Present",
        description: [
          "Maintained a pleasant relationship with customers by ensuring a clean and organized environment.",
          "Worked closely with team members to provide excellent customer service.",
          "Developed strong communication and interpersonal skills.",
          "Worked efficiently and ensured smooth daily operations.",
        ],
      },
      {
        title: "Quality Inspector",
        company: "Orcas Pimentel | S\u00e3o Vicente, Brazil",
        period: "September 2023 - July 2024",
        description: [
          "Delivered exceptional customer relationships by ensuring a clean and organized professional workplace.",
          "Assisted customers by identifying issues and providing detailed resolutions.",
          "Demonstrated reliability, punctuality, and a strong work ethic.",
          "Supported safe work areas while complying with operational tasks.",
        ],
      },
    ],
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
    cardDescription: "Cleaning \u2022 Organization \u2022 Detail",
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
    experience: [
      {
        title: "Quality Inspector",
        company: "Brazil",
        period: "July 2024 - Present",
        description: [
          "Worked in a fast-paced environment while following strict procedures.",
          "Maintained clean and organized work areas while complying with procedures.",
          "Inspected areas to ensure compliance with company standards.",
          "Collaborated with different teams to ensure efficient operations.",
        ],
      },
      {
        title: "Orcas Pimentel | S\u00e3o Vicente, Brazil",
        company: "September 2023 - July 2024",
        period: "",
        description: [
          "Maintained clean and organized work areas while complying with procedures.",
          "Supported daily business activities and administrative tasks.",
          "Derived excellent customer feedback and maintained professionalism and efficiency.",
          "Collaborated with different team members to ensure efficient operations.",
        ],
      },
    ],
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
    cardDescription: "Troubleshooting \u2022 Hardware \u2022 Networking",
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
    experience: [
      {
        title: "IT Support",
        company: "Brazil",
        period: "July 2024 - Present",
        description: [
          "Investigated issues and followed detailed procedures to ensure efficient IT support and maintaining high quality standards.",
          "Maintained accurate documentation and completed detailed reports.",
          "Consistently demonstrated reliability, punctuality, and a strong work ethic.",
          "Maintained excellent customer relationships by ensuring seamless IT solutions.",
        ],
      },
      {
        title: "Orcas Pimentel | S\u00e3o Vicente, Brazil",
        company: "September 2023 - July 2024",
        period: "",
        description: [
          "Assisted customers by identifying IT issues and providing detailed problem-solving.",
          "Demonstrated reliability, punctuality, and strong work ethic.",
          "Supported multiple customers while managing IT support systems.",
          "Developed excellent communication and interpersonal skills.",
        ],
      },
    ],
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
  },
  {
    id: "barista",
    title: "Barista",
    emoji: "☕",
    cardDescription: "Coffee \u2022 Customer Service \u2022 POS",
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
    experience: [
      {
        title: "Customer Service Assistant",
        company: "Brazil",
        period: "August 2024 - Present",
        description: [
          "Maintained a pleasant relationship with customers by ensuring a clean and organized environment.",
          "Organized and welcoming environment.",
          "Developed strong communication and interpersonal skills.",
          "Worked efficiently and ensured smooth daily operations.",
        ],
      },
      {
        title: "Quality Inspector",
        company: "Orcas Pimentel | S\u00e3o Vicente, Brazil",
        period: "September 2023 - July 2024",
        description: [
          "Delivered exceptional customer relationships by maintaining a clean and organized professional workplace.",
          "Assisted customers by identifying issues and providing detailed resolutions.",
          "Demonstrated reliability, punctuality, and a strong work ethic.",
          "Supported safe work areas while complying with operational tasks.",
        ],
      },
    ],
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

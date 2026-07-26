import { jsPDF } from "jspdf";
import type { Position } from "@shared/positions";

const MARGIN_LEFT = 20;
const MARGIN_RIGHT = 20;
const PAGE_WIDTH = 210;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN_LEFT - MARGIN_RIGHT;
const CONTACT = {
  name: "Asbel Nascimento",
  email: "asbel.nascimento123456@gmail.com",
  location: "Dublin, Ireland",
  linkedin: "linkedin.com/in/asbelnascimento",
  instagram: "instagram.com/eubebel.ofc",
};

function addSectionTitle(doc: jsPDF, y: number, title: string): number {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(0, 0, 0);
  doc.text(title.toUpperCase(), MARGIN_LEFT, y);
  doc.setDrawColor(0, 0, 0);
  doc.setLineWidth(0.3);
  doc.line(MARGIN_LEFT, y + 1, PAGE_WIDTH - MARGIN_RIGHT, y + 1);
  return y + 7;
}

function wrapText(doc: jsPDF, text: string, y: number, maxWidth: number): number {
  const lines = doc.splitTextToSize(text, maxWidth);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(30, 30, 30);
  lines.forEach((line: string) => {
    doc.text(line, MARGIN_LEFT, y);
    y += 4.5;
  });
  return y;
}

function checkPageBreak(doc: jsPDF, y: number, needed: number): number {
  if (y + needed > 270) {
    doc.addPage();
    return 20;
  }
  return y;
}

export function generateCV(position: Position): void {
  const doc = new jsPDF("p", "mm", "a4");
  let y = 20;

  // === HEADER ===
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.setTextColor(0, 0, 0);
  doc.text(CONTACT.name, MARGIN_LEFT, y);
  y += 7;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(60, 60, 60);
  doc.text(CONTACT.email, MARGIN_LEFT, y);
  y += 4;
  doc.text(CONTACT.location, MARGIN_LEFT, y);
  y += 4;
  doc.text(`${CONTACT.linkedin}  |  ${CONTACT.instagram}`, MARGIN_LEFT, y);
  y += 9;

  // === PROFESSIONAL SUMMARY ===
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(0, 0, 0);
  doc.text("PROFESSIONAL SUMMARY", MARGIN_LEFT, y);
  doc.setDrawColor(0, 0, 0);
  doc.setLineWidth(0.3);
  doc.line(MARGIN_LEFT, y + 1, PAGE_WIDTH - MARGIN_RIGHT, y + 1);
  y += 7;
  y = wrapText(doc, position.summary, y, CONTENT_WIDTH);
  y += 5;

  // === CORE SKILLS ===
  y = checkPageBreak(doc, y, 20);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(0, 0, 0);
  doc.text("CORE SKILLS", MARGIN_LEFT, y);
  doc.setDrawColor(0, 0, 0);
  doc.setLineWidth(0.3);
  doc.line(MARGIN_LEFT, y + 1, PAGE_WIDTH - MARGIN_RIGHT, y + 1);
  y += 7;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(30, 30, 30);
  const skillsText = position.coreSkills.join("  |  ");
  const skillLines = doc.splitTextToSize(skillsText, CONTENT_WIDTH);
  skillLines.forEach((line: string) => {
    doc.text(line, MARGIN_LEFT, y);
    y += 4.5;
  });
  y += 5;

  // === RELEVANT EXPERIENCE ===
  y = checkPageBreak(doc, y, 20);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(0, 0, 0);
  doc.text("RELEVANT EXPERIENCE", MARGIN_LEFT, y);
  doc.setDrawColor(0, 0, 0);
  doc.setLineWidth(0.3);
  doc.line(MARGIN_LEFT, y + 1, PAGE_WIDTH - MARGIN_RIGHT, y + 1);
  y += 7;

  position.experience.forEach((exp) => {
    y = checkPageBreak(doc, y, 25);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text(exp.title, MARGIN_LEFT, y);

    const periodText = exp.period || exp.company;
    if (periodText) {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(80, 80, 80);
      doc.text(periodText, PAGE_WIDTH - MARGIN_RIGHT, y, { align: "right" });
    }

    y += 5;

    if (exp.company && exp.period) {
      doc.setFont("helvetica", "italic");
      doc.setFontSize(9);
      doc.setTextColor(80, 80, 80);
      doc.text(exp.company, MARGIN_LEFT, y);
      y += 5;
    }

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(30, 30, 30);
    exp.description.forEach((item) => {
      y = checkPageBreak(doc, y, 8);
      doc.text(`•  ${item}`, MARGIN_LEFT + 2, y);
      y += 4.5;
    });
    y += 4;
  });

  y += 3;

  // === LANGUAGES ===
  y = checkPageBreak(doc, y, 15);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(0, 0, 0);
  doc.text("LANGUAGES", MARGIN_LEFT, y);
  doc.setDrawColor(0, 0, 0);
  doc.setLineWidth(0.3);
  doc.line(MARGIN_LEFT, y + 1, PAGE_WIDTH - MARGIN_RIGHT, y + 1);
  y += 7;

  position.languages.forEach((lang) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(30, 30, 30);
    doc.text(`${lang.name} — ${lang.level}`, MARGIN_LEFT, y);
    y += 4.5;
  });
  y += 5;

  // === PERSONAL STRENGTHS ===
  y = checkPageBreak(doc, y, 15);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(0, 0, 0);
  doc.text("PERSONAL STRENGTHS", MARGIN_LEFT, y);
  doc.setDrawColor(0, 0, 0);
  doc.setLineWidth(0.3);
  doc.line(MARGIN_LEFT, y + 1, PAGE_WIDTH - MARGIN_RIGHT, y + 1);
  y += 7;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(30, 30, 30);
  doc.text(position.personalStrengths.join("  |  "), MARGIN_LEFT, y);

  // === COURSES / CERTIFICATES ===
  if (position.courses && position.courses.length > 0) {
    y += 10;
    y = checkPageBreak(doc, y, 15);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.text("COURSES / CERTIFICATES", MARGIN_LEFT, y);
    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(0.3);
    doc.line(MARGIN_LEFT, y + 1, PAGE_WIDTH - MARGIN_RIGHT, y + 1);
    y += 7;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(30, 30, 30);
    position.courses.forEach((course) => {
      y = checkPageBreak(doc, y, 6);
      doc.text(`•  ${course.title}`, MARGIN_LEFT + 2, y);
      y += 4.5;
    });
  }

  doc.save(`CV_Asbel_Nascimento_${position.title.replace(/\s+/g, "_")}.pdf`);
}

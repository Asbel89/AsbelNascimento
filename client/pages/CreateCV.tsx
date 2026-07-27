import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Download, Plus, X, Briefcase, Instagram } from "lucide-react";
import jsPDF from "jspdf";

interface ExperienceEntry {
  id: string;
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  currentlyWorking: boolean;
  description: string;
}

interface CVData {
  fullName: string;
  email: string;
  linkedin: string;
  city: string;
  professionalSummary: string;
  coreSkills: string[];
  experiences: ExperienceEntry[];
  languages: string[];
  personalStrengths: string[];
  coverLetter: string;
}

const emptyExperience = (): ExperienceEntry => ({
  id: crypto.randomUUID(),
  jobTitle: "",
  company: "",
  startDate: "",
  endDate: "",
  currentlyWorking: false,
  description: "",
});

const emptyCV: CVData = {
  fullName: "",
  email: "",
  linkedin: "",
  city: "",
  professionalSummary: "",
  coreSkills: [],
  experiences: [emptyExperience()],
  languages: [],
  personalStrengths: [],
  coverLetter: "",
};

function TextInput({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm"
      />
    </div>
  );
}

function TextArea({
  value,
  onChange,
  placeholder,
  rows = 4,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  rows?: number;
}) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      className="w-full px-4 py-3 rounded-xl bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm resize-none"
    />
  );
}

function ChipInput({
  values,
  onChange,
  placeholder,
}: {
  values: string[];
  onChange: (v: string[]) => void;
  placeholder: string;
}) {
  const [input, setInput] = useState("");

  const add = () => {
    const trimmed = input.trim();
    if (trimmed && !values.includes(trimmed)) {
      onChange([...values, trimmed]);
      setInput("");
    }
  };

  const remove = (item: string) => {
    onChange(values.filter((v) => v !== item));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      add();
    }
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-3">
        {values.map((v) => (
          <span
            key={v}
            className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-primary/15 text-primary text-sm"
          >
            {v}
            <button
              type="button"
              onClick={() => remove(v)}
              className="text-primary/60 hover:text-primary"
            >
              <X size={14} />
            </button>
          </span>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="flex-1 px-4 py-3 rounded-xl bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm"
        />
        <button type="button" onClick={add} className="btn-secondary !px-4">
          <Plus size={16} />
        </button>
      </div>
    </div>
  );
}

function ExperienceCard({
  entry,
  onChange,
  onRemove,
  canRemove,
}: {
  entry: ExperienceEntry;
  onChange: (e: ExperienceEntry) => void;
  onRemove: () => void;
  canRemove: boolean;
}) {
  return (
    <div className="rounded-xl border border-border/40 bg-background/40 p-5 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
          <Briefcase size={14} />
          Experience Entry
        </div>
        {canRemove && (
          <button
            type="button"
            onClick={onRemove}
            className="text-destructive/70 hover:text-destructive transition-colors"
          >
            <X size={16} />
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TextInput
          label="Job Title"
          value={entry.jobTitle}
          onChange={(v) => onChange({ ...entry, jobTitle: v })}
          placeholder="e.g. Customer Service Representative"
        />
        <TextInput
          label="Company"
          value={entry.company}
          onChange={(v) => onChange({ ...entry, company: v })}
          placeholder="e.g. Amazon"
        />
        <TextInput
          label="Start Date"
          value={entry.startDate}
          onChange={(v) => onChange({ ...entry, startDate: v })}
          placeholder="e.g. Jan 2022"
        />
        <div>
          {!entry.currentlyWorking ? (
            <TextInput
              label="End Date"
              value={entry.endDate}
              onChange={(v) => onChange({ ...entry, endDate: v })}
              placeholder="e.g. Dec 2023"
            />
          ) : (
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                End Date
              </label>
              <div className="px-4 py-3 rounded-xl bg-card border border-border/50 text-muted-foreground text-sm">
                Present
              </div>
            </div>
          )}
          <label className="inline-flex items-center gap-2 mt-2 text-sm text-muted-foreground cursor-pointer select-none">
            <input
              type="checkbox"
              checked={entry.currentlyWorking}
              onChange={(e) =>
                onChange({
                  ...entry,
                  currentlyWorking: e.target.checked,
                  endDate: "",
                })
              }
              className="rounded border-border accent-primary"
            />
            Currently working here
          </label>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Description
        </label>
        <TextArea
          value={entry.description}
          onChange={(v) => onChange({ ...entry, description: v })}
          placeholder="Describe your responsibilities, achievements, and key contributions..."
          rows={4}
        />
      </div>
    </div>
  );
}

/* ─────────────────── LIVE PREVIEW ─────────────────── */

function CVPreview({ data }: { data: CVData }) {
  const hasExperience = data.experiences.some(
    (e) => e.jobTitle || e.company || e.description
  );

  return (
    <div className="bg-white text-gray-900 rounded-2xl shadow-2xl border border-gray-200 overflow-hidden text-[11px] leading-[1.5] font-sans">
      {/* Header */}
      <div className="px-8 pt-8 pb-5 border-b border-gray-200">
        <h1 className="text-[22px] font-bold text-gray-900 tracking-tight">
          {data.fullName || "Your Name"}
        </h1>
        <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2 text-gray-500 text-[11px]">
          {data.email && <span>{data.email}</span>}
          {data.city && (
            <>
              {(data.email || data.linkedin) && (
                <span className="text-gray-300">|</span>
              )}
              <span>{data.city}</span>
            </>
          )}
          {data.linkedin && (
            <>
              {(data.email || data.city) && (
                <span className="text-gray-300">|</span>
              )}
              <span>{data.linkedin}</span>
            </>
          )}
        </div>
      </div>

      <div className="px-8 py-6 space-y-5">
        {/* Professional Summary */}
        {data.professionalSummary && (
          <PreviewSection title="Professional Summary">
            <p className="text-gray-700 whitespace-pre-line">
              {data.professionalSummary}
            </p>
          </PreviewSection>
        )}

        {/* Core Skills */}
        {data.coreSkills.length > 0 && (
          <PreviewSection title="Core Skills">
            <div className="flex flex-wrap gap-1.5">
              {data.coreSkills.map((s) => (
                <span
                  key={s}
                  className="inline-block px-2 py-0.5 bg-gray-100 rounded text-gray-700 text-[10px]"
                >
                  {s}
                </span>
              ))}
            </div>
          </PreviewSection>
        )}

        {/* Relevant Experience */}
        {hasExperience && (
          <PreviewSection title="Relevant Experience">
            <div className="space-y-4">
              {data.experiences
                .filter((e) => e.jobTitle || e.company || e.description)
                .map((exp) => (
                  <div key={exp.id}>
                    <div className="flex items-baseline justify-between gap-4">
                      <div>
                        <span className="font-semibold text-gray-900">
                          {exp.jobTitle}
                        </span>
                        {exp.company && (
                          <span className="text-gray-600">
                            {" "}
                            — {exp.company}
                          </span>
                        )}
                      </div>
                      {(exp.startDate || exp.endDate || exp.currentlyWorking) && (
                        <span className="text-gray-400 text-[10px] whitespace-nowrap flex-shrink-0">
                          {exp.startDate}
                          {exp.startDate &&
                            (exp.endDate || exp.currentlyWorking) &&
                            " – "}
                          {exp.currentlyWorking ? "Present" : exp.endDate}
                        </span>
                      )}
                    </div>
                    {exp.description && (
                      <p className="text-gray-700 mt-1 whitespace-pre-line">
                        {exp.description}
                      </p>
                    )}
                  </div>
                ))}
            </div>
          </PreviewSection>
        )}

        {/* Languages */}
        {data.languages.length > 0 && (
          <PreviewSection title="Languages">
            <p className="text-gray-700">{data.languages.join(" · ")}</p>
          </PreviewSection>
        )}

        {/* Personal Strengths */}
        {data.personalStrengths.length > 0 && (
          <PreviewSection title="Personal Strengths">
            <p className="text-gray-700">
              {data.personalStrengths.join(" · ")}
            </p>
          </PreviewSection>
        )}

        {/* Cover Letter */}
        {data.coverLetter && (
          <PreviewSection title="Cover Letter">
            <p className="text-gray-700 whitespace-pre-line">
              {data.coverLetter}
            </p>
          </PreviewSection>
        )}
      </div>
    </div>
  );
}

function PreviewSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-[13px] font-bold text-gray-900 uppercase tracking-wider mb-1.5">
        {title}
      </h2>
      {children}
    </div>
  );
}

/* ─────────────────── PDF GENERATION (ATS-friendly) ─────────────────── */

function generatePDF(data: CVData) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const marginLeft = 25;
  const marginRight = 25;
  const contentWidth = pageWidth - marginLeft - marginRight;
  let y = 25;
  const lineSpacing = 5;

  const checkPage = (needed: number) => {
    if (y + needed > pageHeight - 25) {
      doc.addPage();
      y = 25;
    }
  };

  const writeLine = (text: string, opts?: { bold?: boolean; size?: number; color?: [number, number, number] }) => {
    doc.setFont("helvetica", opts?.bold ? "bold" : "normal");
    doc.setFontSize(opts?.size || 10);
    doc.setTextColor(opts?.color ? opts.color[0] : 33, opts?.color ? opts.color[1] : 33, opts?.color ? opts.color[2] : 33);
    checkPage(6);
    doc.text(text, marginLeft, y);
    y += lineSpacing;
  };

  const writeMultiline = (text: string, opts?: { bold?: boolean; size?: number; color?: [number, number, number] }) => {
    doc.setFont("helvetica", opts?.bold ? "bold" : "normal");
    doc.setFontSize(opts?.size || 10);
    doc.setTextColor(opts?.color ? opts.color[0] : 33, opts?.color ? opts.color[1] : 33, opts?.color ? opts.color[2] : 33);
    const lines = doc.splitTextToSize(text, contentWidth);
    for (const line of lines) {
      checkPage(5);
      doc.text(line, marginLeft, y);
      y += lineSpacing;
    }
  };

  const sectionHeading = (title: string) => {
    y += 4;
    checkPage(18);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(33, 33, 33);
    doc.text(title.toUpperCase(), marginLeft, y);
    y += 2;
    doc.setDrawColor(33, 33, 33);
    doc.setLineWidth(0.15);
    doc.line(marginLeft, y, marginLeft + contentWidth, y);
    y += 7;
  };

  const bulletList = (items: string[]) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(50, 50, 50);
    for (const item of items) {
      checkPage(5);
      doc.text(item, marginLeft + 4, y);
      y += lineSpacing;
    }
  };

  // ── NAME ──
  writeLine(data.fullName || "Your Name", { bold: true, size: 20 });

  // ── CONTACT ──
  const contactParts: string[] = [];
  if (data.email) contactParts.push(data.email);
  if (data.city) contactParts.push(data.city);
  if (data.linkedin) contactParts.push(data.linkedin);
  if (contactParts.length > 0) {
    writeLine(contactParts.join("  |  "), { size: 9, color: [80, 80, 80] });
  }
  y += 6;

  // ── PROFESSIONAL SUMMARY ──
  if (data.professionalSummary.trim()) {
    sectionHeading("Professional Summary");
    writeMultiline(data.professionalSummary);
  }

  // ── CORE SKILLS ──
  if (data.coreSkills.length > 0) {
    sectionHeading("Core Skills");
    bulletList(data.coreSkills);
  }

  // ── RELEVANT EXPERIENCE ──
  const filledExps = data.experiences.filter(
    (e) => e.jobTitle || e.company || e.description
  );
  if (filledExps.length > 0) {
    sectionHeading("Relevant Experience");
    for (const exp of filledExps) {
      checkPage(20);

      // Job Title — Company
      const titleLine = exp.company
        ? `${exp.jobTitle}, ${exp.company}`
        : exp.jobTitle;
      writeLine(titleLine, { bold: true, size: 10 });

      // Dates
      if (exp.startDate || exp.endDate || exp.currentlyWorking) {
        const dateStr = `${exp.startDate || ""}${exp.startDate && (exp.endDate || exp.currentlyWorking) ? " - " : ""}${exp.currentlyWorking ? "Present" : exp.endDate || ""}`;
        writeLine(dateStr, { size: 9, color: [100, 100, 100] });
      }

      // Description
      if (exp.description) {
        writeMultiline(exp.description);
      }

      y += 3;
    }
  }

  // ── LANGUAGES ──
  if (data.languages.length > 0) {
    sectionHeading("Languages");
    bulletList(data.languages);
  }

  // ── PERSONAL STRENGTHS ──
  if (data.personalStrengths.length > 0) {
    sectionHeading("Personal Strengths");
    bulletList(data.personalStrengths);
  }

  // ── COVER LETTER ──
  if (data.coverLetter.trim()) {
    sectionHeading("Cover Letter");
    writeMultiline(data.coverLetter);
  }

  doc.save(`${(data.fullName || "CV").replace(/\s+/g, "_")}_CV.pdf`);
}

/* ─────────────────── PAGE ─────────────────── */

export default function CreateCV() {
  const navigate = useNavigate();
  const [cv, setCV] = useState<CVData>(emptyCV);
  const [showFollowModal, setShowFollowModal] = useState(false);
  const [clickedInstagram, setClickedInstagram] = useState(false);
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    if (!clickedInstagram) return;
    setCountdown(30);
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [clickedInstagram]);

  const update = <K extends keyof CVData>(key: K, value: CVData[K]) => {
    setCV((prev) => ({ ...prev, [key]: value }));
  };

  const updateExperience = (index: number, entry: ExperienceEntry) => {
    setCV((prev) => {
      const next = [...prev.experiences];
      next[index] = entry;
      return { ...prev, experiences: next };
    });
  };

  const addExperience = () => {
    setCV((prev) => ({
      ...prev,
      experiences: [...prev.experiences, emptyExperience()],
    }));
  };

  const removeExperience = (index: number) => {
    setCV((prev) => ({
      ...prev,
      experiences: prev.experiences.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="border-b border-border/50">
        <div className="container-main py-10">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm mb-6"
          >
            <ArrowLeft size={16} />
            Back to Home
          </button>
          <h1 className="text-4xl md:text-5xl font-bold font-display">
            Create Your <span className="text-primary">CV</span>
          </h1>
          <p className="text-muted-foreground mt-3 max-w-lg">
            Fill in your details and see a live preview. Download a
            professional, ATS-friendly PDF when you're ready.
          </p>
        </div>
      </section>

      {/* Form + Preview */}
      <section className="section-spacing">
        <div className="max-w-[1400px] mx-auto px-5">
          <div className="flex flex-col xl:flex-row gap-10">
            {/* ── Left: Form ── */}
            <div className="flex-1 min-w-0 space-y-8">
              {/* 1 — Personal Information */}
              <div className="card-base p-8 space-y-6">
                <h2 className="text-lg font-bold font-display flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-primary/15 text-primary flex items-center justify-center text-xs font-bold">
                    1
                  </span>
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <TextInput
                    label="Full Name"
                    value={cv.fullName}
                    onChange={(v) => update("fullName", v)}
                    placeholder="John Doe"
                  />
                  <TextInput
                    label="Email"
                    value={cv.email}
                    onChange={(v) => update("email", v)}
                    placeholder="john@example.com"
                    type="email"
                  />
                  <TextInput
                    label="City"
                    value={cv.city}
                    onChange={(v) => update("city", v)}
                    placeholder="Dublin, Ireland"
                  />
                  <TextInput
                    label="LinkedIn"
                    value={cv.linkedin}
                    onChange={(v) => update("linkedin", v)}
                    placeholder="linkedin.com/in/johndoe"
                  />
                </div>
              </div>

              {/* 2 — Professional Summary */}
              <div className="card-base p-8 space-y-4">
                <h2 className="text-lg font-bold font-display flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-primary/15 text-primary flex items-center justify-center text-xs font-bold">
                    2
                  </span>
                  Professional Summary
                </h2>
                <TextArea
                  value={cv.professionalSummary}
                  onChange={(v) => update("professionalSummary", v)}
                  placeholder="Write a brief summary about your professional background, goals, and what you bring to the table..."
                  rows={4}
                />
              </div>

              {/* 3 — Core Skills */}
              <div className="card-base p-8 space-y-4">
                <h2 className="text-lg font-bold font-display flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-primary/15 text-primary flex items-center justify-center text-xs font-bold">
                    3
                  </span>
                  Core Skills
                </h2>
                <ChipInput
                  values={cv.coreSkills}
                  onChange={(v) => update("coreSkills", v)}
                  placeholder="Type a skill and press Enter..."
                />
              </div>

              {/* 4 — Relevant Experience */}
              <div className="card-base p-8 space-y-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold font-display flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-primary/15 text-primary flex items-center justify-center text-xs font-bold">
                      4
                    </span>
                    Relevant Experience
                  </h2>
                  <button
                    type="button"
                    onClick={addExperience}
                    className="btn-secondary !px-4 !py-2 text-xs"
                  >
                    <Plus size={14} />
                    Add
                  </button>
                </div>
                <div className="space-y-4">
                  {cv.experiences.map((exp, i) => (
                    <ExperienceCard
                      key={exp.id}
                      entry={exp}
                      onChange={(e) => updateExperience(i, e)}
                      onRemove={() => removeExperience(i)}
                      canRemove={cv.experiences.length > 1}
                    />
                  ))}
                </div>
              </div>

              {/* 5 — Languages */}
              <div className="card-base p-8 space-y-4">
                <h2 className="text-lg font-bold font-display flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-primary/15 text-primary flex items-center justify-center text-xs font-bold">
                    5
                  </span>
                  Languages
                </h2>
                <ChipInput
                  values={cv.languages}
                  onChange={(v) => update("languages", v)}
                  placeholder="e.g. English (Fluent), Portuguese (Native)..."
                />
              </div>

              {/* 6 — Personal Strengths */}
              <div className="card-base p-8 space-y-4">
                <h2 className="text-lg font-bold font-display flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-primary/15 text-primary flex items-center justify-center text-xs font-bold">
                    6
                  </span>
                  Personal Strengths
                </h2>
                <ChipInput
                  values={cv.personalStrengths}
                  onChange={(v) => update("personalStrengths", v)}
                  placeholder="e.g. Teamwork, Adaptability, Problem Solving..."
                />
              </div>

              {/* 7 — Cover Letter */}
              <div className="card-base p-8 space-y-4">
                <h2 className="text-lg font-bold font-display flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-primary/15 text-primary flex items-center justify-center text-xs font-bold">
                    7
                  </span>
                  Cover Letter
                </h2>
                <TextArea
                  value={cv.coverLetter}
                  onChange={(v) => update("coverLetter", v)}
                  placeholder="Write your cover letter here. Explain why you're a great fit for the role..."
                  rows={8}
                />
              </div>

              {/* Download */}
              <div className="flex justify-center pt-4 pb-10">
                <button
                  onClick={() => setShowFollowModal(true)}
                  className="btn-primary !px-10 !py-4 text-base"
                >
                  <Download size={18} />
                  Download CV as PDF
                </button>
              </div>
            </div>

            {/* ── Right: Live Preview ── */}
            <div className="hidden xl:block w-[420px] flex-shrink-0">
              <div className="sticky top-8">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                  Live Preview
                </p>
                <div className="max-h-[85vh] overflow-y-auto rounded-2xl">
                  <CVPreview data={cv} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Follow Gate Modal */}
      {showFollowModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-5">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowFollowModal(false)}
          />
          <div className="relative card-base p-10 max-w-md w-full text-center space-y-6 animate-in fade-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-orange-400 flex items-center justify-center mx-auto">
              <Instagram size={28} className="text-white" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold font-display text-foreground">
                Follow me on Instagram
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                To download your CV, please follow my Instagram account first.
                It takes just a second!
              </p>
            </div>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/eubebel.ofc/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setClickedInstagram(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 text-white hover:scale-105"
              >
                <Instagram size={16} />
                Follow @eubebel.ofc
              </a>
              <div className="h-6">
                {clickedInstagram && countdown > 0 && (
                  <p className="text-xs text-muted-foreground">
                    Download available in {countdown}s...
                  </p>
                )}
                {clickedInstagram && countdown === 0 && (
                  <button
                    onClick={() => {
                      setShowFollowModal(false);
                      generatePDF(cv);
                    }}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-2"
                  >
                    I already followed — download now
                  </button>
                )}
              </div>
            </div>
            <button
              onClick={() => setShowFollowModal(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

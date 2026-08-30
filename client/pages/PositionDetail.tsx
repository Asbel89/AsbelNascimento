import { useParams, useNavigate } from "react-router-dom";
import { positions } from "@shared/positions";
import { PositionSwitcher } from "@/components/PositionSwitcher";
import { SectionHeader } from "@/components/SectionHeader";
import { SkillBadge } from "@/components/SkillBadge";
import { ExperienceItem } from "@/components/ExperienceItem";
import { ChevronLeft, Download, FileText, Mail, MapPin, ExternalLink, Globe, Phone } from "lucide-react";
import { useEditMode } from "@/hooks/useEditMode";
import { EditableSection } from "@/components/ui/EditableSection";
import { EditControls } from "@/components/ui/EditControls";
import type { ReactNode } from "react";

export default function PositionDetail() {
  const { positionId } = useParams();
  const navigate = useNavigate();
  const position = positions.find((p) => p.id === positionId);

  const edit = useEditMode(`position-${positionId || "unknown"}`, [
    { id: "cover-letter", label: "Cover Letter", visible: true },
    { id: "summary", label: "Professional Summary", visible: true },
    { id: "core-skills", label: "Core Skills", visible: true },
    { id: "experience", label: "Relevant Experience", visible: true },
    { id: "languages", label: "Languages", visible: true },
    { id: "strengths", label: "Personal Strengths", visible: true },
    { id: "courses", label: "Courses & Certificates", visible: true },
    { id: "education", label: "Education", visible: true },
    { id: "projects", label: "Projects", visible: true },
    { id: "career-objective", label: "Career Objective", visible: true },
    { id: "criminal-check", label: "Criminal Background Check", visible: true },
    { id: "cta", label: "Call to Action", visible: true },
  ]);

  if (!position) {
    return (
      <div className="min-h-screen bg-white text-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 font-display">Position not found</h1>
          <button onClick={() => navigate("/")} className="btn-primary">
            Back to Selection
          </button>
        </div>
      </div>
    );
  }

  const sectionsContent: Record<string, ReactNode> = {
    "cover-letter": (
      <section className="mb-14">
        <SectionHeader title="Cover Letter" />
        <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-7 shadow-sm space-y-4">
          {position.coverLetter.split("\n\n").map((paragraph, idx) => (
            <p key={idx} className="text-[14.5px] leading-relaxed text-slate-600 whitespace-pre-wrap">
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    ),
    summary: (
      <section className="mb-14">
        <SectionHeader title="Professional Summary" />
        <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-7 shadow-sm">
          <p className="text-[14.5px] leading-relaxed text-slate-600">{position.summary}</p>
        </div>
      </section>
    ),
    "core-skills": (
      <section className="mb-14">
        <SectionHeader title="Core Skills" />
        <div className="flex flex-wrap gap-2.5">
          {position.coreSkills.map((skill) => (
            <SkillBadge key={skill} skill={skill} variant="primary" />
          ))}
        </div>
      </section>
    ),
    experience: (
      <section className="mb-14">
        <SectionHeader title="Relevant Experience" />
        <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-7 shadow-sm">
          {position.experience.map((exp, idx) => (
            <ExperienceItem key={idx} {...exp} />
          ))}
        </div>
      </section>
    ),
    languages: (
      <section className="mb-14">
        <SectionHeader title="Languages" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {position.languages.map((lang) => (
            <div
              key={lang.name}
              className="flex justify-between items-center p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-blue-200 transition-colors"
            >
              <span className="text-sm font-semibold text-slate-900">{lang.name}</span>
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-50 border border-slate-100 text-slate-600">{lang.level}</span>
            </div>
          ))}
        </div>
      </section>
    ),
    strengths: (
      <section className="mb-14">
        <SectionHeader title="Personal Strengths" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {position.personalStrengths.map((strength) => (
            <div
              key={strength}
              className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-3 hover:border-blue-200 transition-colors"
            >
              <div className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" />
              <span className="text-sm font-medium text-slate-700">{strength}</span>
            </div>
          ))}
        </div>
      </section>
    ),
    courses:
      position.courses && position.courses.length > 0 ? (
        <section className="mb-14">
          <SectionHeader title="Courses & Certificates" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {position.courses.map((course) => (
              <a
                key={course.title}
                href={course.image}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="aspect-video overflow-hidden bg-slate-50">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors duration-200 flex items-center gap-2">
                    {course.title}
                    <ExternalLink
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-slate-400"
                    />
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>
      ) : null,
    "career-objective": position.careerObjective ? (
      <section className="mb-14">
        <SectionHeader title="Career Objective" />
        <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-7 shadow-sm">
          <p className="text-[14.5px] leading-relaxed text-slate-600">{position.careerObjective}</p>
        </div>
      </section>
    ) : null,
    education: position.education && position.education.length > 0 ? (
      <section className="mb-14">
        <SectionHeader title="Education" />
        <div className="space-y-3">
          {position.education.map((edu, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-200 transition-colors"
            >
              <p className="text-sm font-semibold text-slate-900">{edu.degree}</p>
              <p className="text-sm text-slate-500 mt-0.5">{edu.institution}</p>
              {edu.period && (
                <p className="text-xs text-slate-400 mt-1.5 inline-flex px-2 py-1 rounded-full bg-slate-50 border border-slate-100">{edu.period}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    ) : null,
    projects: position.projects && position.projects.length > 0 ? (
      <section className="mb-14">
        <SectionHeader title="Projects" />
        <div className="space-y-3">
          {position.projects.map((proj, idx) => (
            <div
              key={idx}
              className="p-5 md:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-200 transition-colors"
            >
              <p className="text-sm font-semibold text-slate-900">{proj.name}</p>
              <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">{proj.description}</p>
              {proj.technologies && proj.technologies.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {proj.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    ) : null,
    "criminal-check": (
      <section className="mb-14">
        <SectionHeader title="Criminal Background Check" />
        <a
          href="/criminal-check.png"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 font-medium shadow-sm hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-200"
        >
          <FileText size={18} strokeWidth={1.6} />
          View Certificate
          <ExternalLink size={14} className="text-slate-400" />
        </a>
      </section>
    ),
    cta: (
      <section className="py-10 px-8 rounded-2xl bg-slate-900 text-white text-center shadow-[0_8px_24px_rgba(15,23,42,0.12)]">
        <h3 className="text-xl font-semibold font-display tracking-tight mb-2">
          Interested in working together?
        </h3>
        <p className="text-slate-400 mb-6 max-w-md mx-auto text-sm leading-relaxed">
          Feel free to reach out if you'd like to discuss how I can contribute to your organization.
        </p>
        <a href="mailto:asbel.nascimento123456@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 text-sm font-semibold hover:bg-slate-50 transition-colors shadow-sm">
          <Mail size={16} strokeWidth={1.7} />
          Get in Touch
        </a>
      </section>
    ),
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-200">
        <div className="max-w-content mx-auto px-5 py-3 flex items-center justify-between gap-3">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-1.5 text-slate-500 hover:text-blue-600 transition-colors duration-200 shrink-0"
          >
            <ChevronLeft size={18} strokeWidth={1.7} />
            <span className="hidden sm:inline text-sm font-medium">Back</span>
          </button>

          <div className="flex items-center gap-2.5">
            <div className="hidden md:flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-full shrink-0">
              <MapPin size={14} className="text-slate-400" />
              <span>Dublin, Ireland</span>
            </div>
            <button
              onClick={async () => {
                const { generateCV } = await import("@/lib/generateCV");
                generateCV(position);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-sm hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50 transition-all"
            >
              <Download size={14} strokeWidth={1.7} />
              <span className="hidden sm:inline">Download CV</span>
            </button>
            <PositionSwitcher
              currentPositionId={position.id}
              onPositionChange={(id) => navigate(`/position/${id}`)}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-content mx-auto px-5 py-10 md:py-12">
        {/* Position Title & Contact */}
        <div className="mb-10 pb-8 border-b border-slate-200">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold tracking-wide mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            Tailored resume
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight font-display text-slate-900 mb-5">{position.title}</h1>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 shadow-sm">
              <MapPin size={14} className="text-slate-400" />
              Dublin, Ireland
            </span>
            <a
              href="mailto:asbel.nascimento123456@gmail.com"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-200 shadow-sm transition-colors"
            >
              <Mail size={14} className="text-slate-400" />
              asbel.nascimento123456@gmail.com
            </a>
            {position.phone && (
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 shadow-sm">
                <Phone size={14} className="text-slate-400" />
                {position.phone}
              </span>
            )}
            {position.website && (
              <a
                href={position.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 shadow-sm transition-all"
              >
                <Globe size={14} strokeWidth={1.7} />
                Meu site
                <ExternalLink size={12} />
              </a>
            )}
          </div>
        </div>

        {edit.sections.map((section) => {
          const content =
            section.type === "custom"
              ? null
              : sectionsContent[section.id];

          if (section.type !== "custom" && content === undefined) return null;

          if (
            section.type !== "custom" &&
            section.id === "courses" &&
            !(position.courses && position.courses.length > 0)
          )
            return null;

          if (
            section.type !== "custom" &&
            section.id === "education" &&
            !(position.education && position.education.length > 0)
          )
            return null;

          if (
            section.type !== "custom" &&
            section.id === "projects" &&
            !(position.projects && position.projects.length > 0)
          )
            return null;

          if (
            section.type !== "custom" &&
            section.id === "career-objective" &&
            !position.careerObjective
          )
            return null;

          return (
            <EditableSection
              key={section.id}
              id={section.id}
              label={section.label}
              visible={section.visible}
              isAuthorized={edit.isAuthorized}
              isCustom={section.type === "custom"}
              onMoveUp={edit.moveUp}
              onMoveDown={edit.moveDown}
              onToggleVisible={edit.toggleVisible}
              onAddSection={edit.addSection}
              onRemoveSection={edit.removeSection}
              onEditContent={section.type === "custom" ? edit.editSectionContent : undefined}
              onEditLabel={edit.editSectionLabel}
            >
              {section.type === "custom" ? (
                <section className="mb-14">
                  <SectionHeader title={section.label} />
                  <p className="text-slate-600 leading-relaxed whitespace-pre-wrap bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                    {section.content}
                  </p>
                </section>
              ) : (
                content
              )}
            </EditableSection>
          );
        })}
      </main>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-200 bg-white">
        <div className="max-w-content mx-auto px-5 text-center">
          <p className="text-sm text-slate-400">&copy; 2026 Asbel Nascimento — Dublin, Ireland</p>
        </div>
      </footer>

      <EditControls
        isAuthorized={edit.isAuthorized}
        showPassword={edit.showPassword}
        passwordError={edit.passwordError}
        onRequestAuth={edit.requestAuth}
        onDismissPassword={edit.dismissPassword}
        onAuthenticate={edit.authenticate}
        onLogout={edit.logout}
      />
    </div>
  );
}

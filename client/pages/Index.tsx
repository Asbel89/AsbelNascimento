import { PositionCard } from "@/components/PositionCard";
import { SkillBadge } from "@/components/SkillBadge";
import { ShaderBackground } from "@/components/ui/ass";
import { Typewriter } from "@/components/ui/typewriter-text";
import { positions } from "@shared/positions";
import { Link } from "react-router-dom";
import { Linkedin, Mail, ArrowRight, FileText, MapPin } from "lucide-react";
import { useEditMode } from "@/hooks/useEditMode";
import { EditableSection } from "@/components/ui/EditableSection";
import { EditControls } from "@/components/ui/EditControls";
import type { ReactNode } from "react";

const allSkills = [
  "Customer Service",
  "Warehouse",
  "Cleaning",
  "Food Safety",
  "Communication",
  "Problem Solving",
  "Teamwork",
  "Adaptability",
  "Time Management",
  "IT Support",
  "Microsoft Office",
  "Hardware",
  "Networking",
  "HTML",
  "CSS",
  "JavaScript",
  "Git",
  "Figma",
];

export default function Index() {
  const edit = useEditMode("index", [
    { id: "hero", label: "Hero", visible: true },
    { id: "positions", label: "Select a Position", visible: true },
    { id: "about", label: "About Me", visible: true },
    { id: "skills", label: "Skills", visible: true },
    { id: "certifications", label: "Certifications", visible: true },
    { id: "footer", label: "Footer", visible: true },
  ]);

  const sectionsContent: Record<string, ReactNode> = {
    hero: (
      <section className="section-spacing">
        <div className="container-main">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-20">
            <div className="flex-1 text-center md:text-left min-w-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold tracking-wide mb-5 fade-in-up">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                Available for opportunities in Dublin
              </div>
              <p className="text-slate-500 text-[13px] font-semibold tracking-widest uppercase mb-3 fade-in-up">
                Hello, I'm
              </p>
              <h1 className="text-[42px] md:text-6xl lg:text-[64px] font-extrabold font-display leading-[0.95] tracking-tight mb-5 fade-in-up fade-in-up-delay-1">
                <span className="text-slate-900">ASBEL</span>{" "}
                <span className="text-blue-600">NASCIMENTO</span>
              </h1>
              <div className="text-[16.5px] leading-relaxed text-slate-600 mb-8 max-w-[560px] mx-auto md:mx-0 fade-in-up fade-in-up-delay-2">
                <Typewriter
                  text="Thank you for taking the time to review my application. Please select the position I applied for to view a version of my resume tailored specifically for that role."
                  speed={28}
                  cursor=""
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start fade-in-up fade-in-up-delay-3">
                <a href="#positions" className="btn-primary">
                  View Resume
                  <ArrowRight size={16} strokeWidth={1.7} />
                </a>
                <a href="mailto:asbel.nascimento123456@gmail.com" className="btn-secondary">
                  Contact Me
                </a>
                <Link to="/create-cv" className="btn-secondary">
                  <FileText size={16} strokeWidth={1.7} />
                  Create your CV
                </Link>
              </div>
              <div className="mt-8 flex items-center justify-center md:justify-start gap-2 text-sm text-slate-500 fade-in-up fade-in-up-delay-3">
                <MapPin size={14} className="text-slate-400" />
                <span>Dublin, Ireland</span>
                <span className="w-1 h-1 rounded-full bg-slate-300 mx-1" />
                <span>Open to relocation</span>
              </div>
            </div>
            <div className="flex-shrink-0 flex flex-col items-center gap-6 fade-in-up fade-in-up-delay-2">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-100 to-slate-100 blur-xl opacity-60 scale-110" />
                <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full p-1.5 bg-white shadow-[0_4px_24px_rgba(15,23,42,0.08),0_12px_40px_rgba(15,23,42,0.08)] border border-slate-100">
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-100">
                    <img
                      src="/profile.jpeg"
                      alt="Asbel Nascimento"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-emerald-500 border-[3px] border-white shadow-sm flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/asbelnascimento/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 shadow-sm transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} strokeWidth={1.7} />
                </a>
                <a
                  href="mailto:asbel.nascimento123456@gmail.com"
                  className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 shadow-sm transition-all duration-200"
                  aria-label="Email"
                >
                  <Mail size={18} strokeWidth={1.7} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    ),
    positions: (
      <section id="positions" className="section-spacing border-t border-slate-100 bg-slate-50/50">
        <div className="container-main">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-[28px] md:text-[30px] font-bold tracking-tight font-display text-slate-900 mb-3 fade-in-up">
              Select a Position
            </h2>
            <p className="text-[15px] leading-relaxed text-slate-500 max-w-md mx-auto fade-in-up fade-in-up-delay-1">
              Choose the role you'd like to review. Each version is tailored specifically for that
              position.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 fade-in-up fade-in-up-delay-2">
            {positions.map((position) => (
              <PositionCard
                key={position.id}
                id={position.id}
                title={position.title}
                emoji={position.emoji}
                description={position.cardDescription}
              />
            ))}
          </div>
        </div>
      </section>
    ),
    about: (
      <section className="section-spacing border-t border-slate-100">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[28px] font-bold tracking-tight font-display text-slate-900 mb-3 fade-in-up">About Me</h2>
            <div className="h-1 w-8 bg-blue-600 rounded-full mb-8 fade-in-up fade-in-up-delay-1" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 fade-in-up fade-in-up-delay-2">
              <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                <p className="text-[14.5px] leading-relaxed text-slate-600">
                  Motivated professional relocating to Ireland with experience in quality inspection,
                  logistics and customer service. Passionate about learning, teamwork and delivering
                  excellent results.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                <p className="text-[14.5px] leading-relaxed text-slate-600">
                  Adaptable to different industries and committed to continuous professional
                  development, based in Dublin, Ireland.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    ),
    skills: (
      <section className="section-spacing border-t border-slate-100 bg-slate-50/50">
        <div className="container-main">
          <div className="max-w-3xl mx-auto md:mx-0">
            <h2 className="text-[28px] font-bold tracking-tight font-display text-slate-900 mb-3 fade-in-up">Skills</h2>
            <div className="h-1 w-8 bg-blue-600 rounded-full mb-8 fade-in-up fade-in-up-delay-1" />
            <div className="flex flex-wrap gap-2.5 fade-in-up fade-in-up-delay-2">
              {allSkills.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </section>
    ),
    certifications: (
      <section className="section-spacing border-t border-slate-100">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[28px] font-bold tracking-tight font-display text-slate-900 mb-3 fade-in-up">Certifications</h2>
            <div className="h-1 w-8 bg-blue-600 rounded-full mb-8 fade-in-up fade-in-up-delay-1" />
            <div className="space-y-3 fade-in-up fade-in-up-delay-2">
              {[
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
              ].map((cert) => (
                <div
                  key={cert.title}
                  className="group flex items-center justify-between p-4 md:p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-200 hover:bg-blue-50/30 hover:shadow-sm transition-all duration-200"
                >
                  <div className="flex gap-4 items-start">
                    <div className="hidden sm:flex w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-blue-50 group-hover:border-blue-100 items-center justify-center flex-shrink-0 transition-colors">
                      <FileText size={16} className="text-slate-400 group-hover:text-blue-600" strokeWidth={1.6} />
                    </div>
                    <div>
                      <p className="text-[14px] font-semibold tracking-tight text-slate-900">{cert.title}</p>
                      <p className="text-sm text-slate-500 mt-0.5">{cert.description}</p>
                    </div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-blue-600/20 group-hover:bg-blue-600 flex-shrink-0 ml-4 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    ),
    footer: (
      <footer className="section-spacing border-t border-slate-100 bg-slate-900 text-white">
        <div className="container-main text-center">
          <p className="text-slate-300 text-[17px] leading-relaxed mb-6 fade-in-up">
            Interested in working together?
          </p>
          <a
            href="mailto:asbel.nascimento123456@gmail.com"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-white text-slate-900 text-sm font-semibold hover:bg-slate-50 transition-colors shadow-sm mb-10 fade-in-up fade-in-up-delay-1"
          >
            Get in Touch
            <Mail size={16} strokeWidth={1.7} />
          </a>
          <div className="flex items-center justify-center gap-3 mb-8 fade-in-up fade-in-up-delay-2">
            <a
              href="https://www.linkedin.com/in/asbelnascimento/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white/80 hover:bg-white hover:text-slate-900 transition-all duration-200"
            >
              <Linkedin size={18} strokeWidth={1.6} />
            </a>
            <a
              href="mailto:asbel.nascimento123456@gmail.com"
              className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white/80 hover:bg-white hover:text-slate-900 transition-all duration-200"
            >
              <Mail size={18} strokeWidth={1.6} />
            </a>
          </div>
          <p className="text-sm text-white/50">&copy; 2026 Asbel Nascimento — Dublin, Ireland</p>
        </div>
      </footer>
    ),
  };

  return (
    <>
      <div className="relative min-h-screen overflow-hidden bg-white">
        <ShaderBackground className="absolute inset-0 z-0 opacity-[0.55]" />
        <div className="relative z-10 min-h-screen bg-white/72 backdrop-blur-[0.5px] text-foreground">
          {edit.sections.map((section) => (
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
                <section className="section-spacing border-t border-slate-100">
                  <div className="container-main">
                    <h2 className="text-[28px] font-bold tracking-tight font-display text-slate-900 mb-3">{section.label}</h2>
                    <div className="h-1 w-8 bg-blue-600 rounded-full mb-8" />
                    <p className="text-slate-600 leading-relaxed whitespace-pre-wrap max-w-3xl bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                      {section.content}
                    </p>
                  </div>
                </section>
              ) : (
                sectionsContent[section.id]
              )}
            </EditableSection>
          ))}
        </div>
      </div>

      <EditControls
        isAuthorized={edit.isAuthorized}
        showPassword={edit.showPassword}
        passwordError={edit.passwordError}
        onRequestAuth={edit.requestAuth}
        onDismissPassword={edit.dismissPassword}
        onAuthenticate={edit.authenticate}
        onLogout={edit.logout}
      />
    </>
  );
}

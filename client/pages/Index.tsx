import { SkillBadge } from "@/components/SkillBadge";
import { ShaderBackground } from "@/components/ui/ass";
import { Typewriter } from "@/components/ui/typewriter-text";
import { Header } from "@/components/Header";
import { CVResume } from "@/components/CVResume";
import { Link } from "react-router-dom";
import { Linkedin, Mail, ArrowRight, FileText, MapPin } from "lucide-react";
import { useEditMode } from "@/hooks/useEditMode";
import { EditableSection } from "@/components/ui/EditableSection";
import { EditControls } from "@/components/ui/EditControls";
import { useI18n } from "@/lib/i18n";
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
  const { messages } = useI18n();

  const edit = useEditMode("index-v2", [
    { id: "hero", label: "Hero", visible: true },
    { id: "cv", label: "View CV", visible: true },
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
                {messages.hero.badge}
              </div>
              <p className="text-slate-500 text-[13px] font-semibold tracking-widest uppercase mb-3 fade-in-up">
                {messages.hero.hello}
              </p>
              <h1 className="text-[42px] md:text-6xl lg:text-[64px] font-extrabold font-display leading-[0.95] tracking-tight mb-5 fade-in-up fade-in-up-delay-1">
                <span className="text-slate-900">ASBEL</span>{" "}
                <span className="text-blue-600">NASCIMENTO</span>
              </h1>
              <div className="text-[16.5px] leading-relaxed text-slate-600 mb-8 max-w-[560px] mx-auto md:mx-0 fade-in-up fade-in-up-delay-2">
                <Typewriter text={messages.hero.typewriter} speed={28} cursor="" />
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start fade-in-up fade-in-up-delay-3">
                <a href="#cv" className="btn-primary">
                  {messages.hero.viewCv}
                  <ArrowRight size={16} strokeWidth={1.7} />
                </a>
                <a href="mailto:asbel.nascimento123456@gmail.com" className="btn-secondary">
                  {messages.hero.contactMe}
                </a>
                <Link to="/create-cv" className="btn-secondary">
                  <FileText size={16} strokeWidth={1.7} />
                  {messages.hero.createCv}
                </Link>
              </div>
              <div className="mt-8 flex items-center justify-center md:justify-start gap-2 text-sm text-slate-500 fade-in-up fade-in-up-delay-3">
                <MapPin size={14} className="text-slate-400" />
                <span>{messages.hero.location}</span>
                <span className="w-1 h-1 rounded-full bg-slate-300 mx-1" />
                <span>{messages.hero.relocation}</span>
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
    cv: (
      <section id="cv" className="section-spacing border-t border-slate-100 bg-slate-50/50">
        <div className="container-main">
          <div className="max-w-2xl mx-auto text-center mb-10 fade-in-up">
            <h2 className="text-[28px] md:text-[30px] font-bold tracking-tight font-display text-slate-900 mb-3">
              {messages.cvSection.title}
            </h2>
            <p className="text-[15px] leading-relaxed text-slate-500 max-w-md mx-auto fade-in-up fade-in-up-delay-1">
              {messages.cvSection.subtitle}
            </p>
          </div>
          <div className="fade-in-up fade-in-up-delay-2">
            <CVResume />
          </div>
        </div>
      </section>
    ),
    about: (
      <section id="about" className="section-spacing border-t border-slate-100">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[28px] font-bold tracking-tight font-display text-slate-900 mb-3 fade-in-up">{messages.about.title}</h2>
            <div className="h-1 w-8 bg-blue-600 rounded-full mb-8 fade-in-up fade-in-up-delay-1" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 fade-in-up fade-in-up-delay-2">
              <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                <p className="text-[14.5px] leading-relaxed text-slate-600">{messages.about.p1}</p>
              </div>
              <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                <p className="text-[14.5px] leading-relaxed text-slate-600">{messages.about.p2}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    ),
    skills: (
      <section id="skills" className="section-spacing border-t border-slate-100 bg-slate-50/50">
        <div className="container-main">
          <div className="max-w-3xl mx-auto md:mx-0">
            <h2 className="text-[28px] font-bold tracking-tight font-display text-slate-900 mb-3 fade-in-up">{messages.skills.title}</h2>
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
      <section id="certifications" className="section-spacing border-t border-slate-100">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[28px] font-bold tracking-tight font-display text-slate-900 mb-3 fade-in-up">{messages.certifications.title}</h2>
            <div className="h-1 w-8 bg-blue-600 rounded-full mb-8 fade-in-up fade-in-up-delay-1" />
            <div className="space-y-3 fade-in-up fade-in-up-delay-2">
              {messages.certifications.items.map((cert) => (
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
      <footer id="contact" className="section-spacing border-t border-slate-100 bg-slate-900 text-white">
        <div className="container-main text-center">
          <p className="text-slate-300 text-[17px] leading-relaxed mb-6 fade-in-up">
            {messages.footer.interested}
          </p>
          <a
            href="mailto:asbel.nascimento123456@gmail.com"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-white text-slate-900 text-sm font-semibold hover:bg-slate-50 transition-colors shadow-sm mb-10 fade-in-up fade-in-up-delay-1"
          >
            {messages.footer.cta}
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
          <p className="text-sm text-white/50">
            {messages.footer.rights} — {messages.footer.location}
          </p>
        </div>
      </footer>
    ),
  };

  return (
    <>
      <Header />
      <div className="relative min-h-screen overflow-hidden bg-white">
        <ShaderBackground className="absolute inset-0 z-0 opacity-[0.55]" />
        <div className="relative z-10 min-h-screen bg-white/72 backdrop-blur-[0.5px] text-foreground">
          {edit.sections.map((section) => {
            if (section.type !== "custom" && sectionsContent[section.id] === undefined)
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
            );
          })}
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
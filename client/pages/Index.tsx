import { PositionCard } from "@/components/PositionCard";
import { SkillBadge } from "@/components/SkillBadge";
import { ShaderBackground } from "@/components/ui/ass";
import { Typewriter } from "@/components/ui/typewriter-text";
import { positions } from "@shared/positions";
import { Link } from "react-router-dom";
import { Linkedin, Mail, ArrowRight, FileText } from "lucide-react";
import { useEditMode } from "@/hooks/useEditMode";
import { EditableSection } from "@/components/ui/EditableSection";
import { EditControls } from "@/components/ui/EditControls";

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

  const sectionVisible = (id: string) => {
    const s = edit.sections.find((s) => s.id === id);
    return s ? s.visible : true;
  };

  return (
    <>
    <div className="relative min-h-screen overflow-hidden">
      <ShaderBackground className="absolute inset-0 z-0" />
      <div className="relative z-10 min-h-screen bg-background/80 text-foreground">
        {sectionVisible("hero") && (
          <EditableSection
            id="hero"
            label="Hero"
            visible
            isAuthorized={edit.isAuthorized}
            onMoveUp={edit.moveUp}
            onMoveDown={edit.moveDown}
            onToggleVisible={edit.toggleVisible}
            onAddSection={edit.addSection}
            onRemoveSection={edit.removeSection}
            onEditLabel={edit.editSectionLabel}
          >
            <section className="section-spacing">
              <div className="container-main">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
                  <div className="flex-1 text-center md:text-left">
                    <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase mb-4 fade-in-up">
                      Hello, I'm
                    </p>
                    <h1 className="text-5xl md:text-6xl lg:text-[64px] font-bold font-display leading-[1.1] mb-6 fade-in-up fade-in-up-delay-1">
                      <span className="text-primary">ASBEL</span>
                    </h1>
                    <div className="text-lg text-secondary-text leading-relaxed mb-8 max-w-lg fade-in-up fade-in-up-delay-2">
                      <Typewriter
                        text="Thank you for taking the time to review my application. Please select the position I applied for to view a version of my resume tailored specifically for that role."
                        speed={30}
                        cursor=""
                      />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start fade-in-up fade-in-up-delay-3">
                      <a href="#positions" className="btn-primary">
                        View Resume
                        <ArrowRight size={16} />
                      </a>
                      <a href="mailto:asbel.nascimento123456@gmail.com" className="btn-secondary">
                        Contact Me
                      </a>
                      <Link to="/create-cv" className="btn-secondary">
                        <FileText size={16} />
                        Create your CV
                      </Link>
                    </div>
                  </div>
                  <div className="flex-shrink-0 flex flex-col items-center gap-6 fade-in-up fade-in-up-delay-2">
                    <div className="relative w-40 h-40 md:w-52 md:h-52">
                      <div className="absolute inset-0 rounded-full animate-pulse-ring" />
                      <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/40">
                        <img
                          src="/profile.jpeg"
                          alt="Asbel Nascimento"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <a
                        href="https://www.linkedin.com/in/asbelnascimento/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-250"
                      >
                        <Linkedin size={20} strokeWidth={1.5} />
                      </a>
                      <a
                        href="mailto:asbel.nascimento123456@gmail.com"
                        className="p-3 rounded-xl border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-250"
                      >
                        <Mail size={20} strokeWidth={1.5} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </EditableSection>
        )}

        {sectionVisible("positions") && (
          <EditableSection
            id="positions"
            label="Select a Position"
            visible
            isAuthorized={edit.isAuthorized}
            onMoveUp={edit.moveUp}
            onMoveDown={edit.moveDown}
            onToggleVisible={edit.toggleVisible}
            onAddSection={edit.addSection}
            onRemoveSection={edit.removeSection}
            onEditLabel={edit.editSectionLabel}
          >
            <section id="positions" className="section-spacing border-t border-border/50">
              <div className="container-main">
                <h2 className="text-[28px] font-bold font-display text-center mb-3 fade-in-up">
                  Select a Position
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-md mx-auto fade-in-up fade-in-up-delay-1">
                  Choose the role you'd like to review. Each version is tailored specifically for that
                  position.
                </p>
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
          </EditableSection>
        )}

        {sectionVisible("about") && (
          <EditableSection
            id="about"
            label="About Me"
            visible
            isAuthorized={edit.isAuthorized}
            onMoveUp={edit.moveUp}
            onMoveDown={edit.moveDown}
            onToggleVisible={edit.toggleVisible}
            onAddSection={edit.addSection}
            onRemoveSection={edit.removeSection}
            onEditLabel={edit.editSectionLabel}
          >
            <section className="section-spacing border-t border-border/50">
              <div className="container-main">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-[28px] font-bold font-display mb-3 fade-in-up">About Me</h2>
                  <div className="h-[2px] w-10 bg-primary rounded-full mb-8 fade-in-up fade-in-up-delay-1" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 fade-in-up fade-in-up-delay-2">
                    <div>
                      <p className="text-secondary-text leading-relaxed">
                        Motivated professional relocating to Ireland with experience in quality
                        inspection, logistics and customer service. Passionate about learning, teamwork
                        and delivering excellent results.
                      </p>
                    </div>
                    <div>
                      <p className="text-secondary-text leading-relaxed">
                        Adaptable to different industries and committed to continuous professional
                        development, based in Dublin, Ireland.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </EditableSection>
        )}

        {sectionVisible("skills") && (
          <EditableSection
            id="skills"
            label="Skills"
            visible
            isAuthorized={edit.isAuthorized}
            onMoveUp={edit.moveUp}
            onMoveDown={edit.moveDown}
            onToggleVisible={edit.toggleVisible}
            onAddSection={edit.addSection}
            onRemoveSection={edit.removeSection}
            onEditLabel={edit.editSectionLabel}
          >
            <section className="section-spacing border-t border-border/50">
              <div className="container-main">
                <h2 className="text-[28px] font-bold font-display mb-3 fade-in-up">Skills</h2>
                <div className="h-[2px] w-10 bg-primary rounded-full mb-8 fade-in-up fade-in-up-delay-1" />
                <div className="flex flex-wrap gap-3 fade-in-up fade-in-up-delay-2">
                  {allSkills.map((skill) => (
                    <SkillBadge key={skill} skill={skill} />
                  ))}
                </div>
              </div>
            </section>
          </EditableSection>
        )}

        {sectionVisible("certifications") && (
          <EditableSection
            id="certifications"
            label="Certifications"
            visible
            isAuthorized={edit.isAuthorized}
            onMoveUp={edit.moveUp}
            onMoveDown={edit.moveDown}
            onToggleVisible={edit.toggleVisible}
            onAddSection={edit.addSection}
            onRemoveSection={edit.removeSection}
            onEditLabel={edit.editSectionLabel}
          >
            <section className="section-spacing border-t border-border/50">
              <div className="container-main">
                <h2 className="text-[28px] font-bold font-display mb-3 fade-in-up">Certifications</h2>
                <div className="h-[2px] w-10 bg-primary rounded-full mb-8 fade-in-up fade-in-up-delay-1" />
                <div className="space-y-4 fade-in-up fade-in-up-delay-2">
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
                      className="flex items-center justify-between p-4 rounded-xl border border-border/50 bg-card/50 hover:border-primary/20 transition-all duration-250"
                    >
                      <div>
                        <p className="text-foreground font-medium">{cert.title}</p>
                        <p className="text-sm text-muted-foreground mt-0.5">{cert.description}</p>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-primary/60 flex-shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </EditableSection>
        )}

        {sectionVisible("footer") && (
          <EditableSection
            id="footer"
            label="Footer"
            visible
            isAuthorized={edit.isAuthorized}
            onMoveUp={edit.moveUp}
            onMoveDown={edit.moveDown}
            onToggleVisible={edit.toggleVisible}
            onAddSection={edit.addSection}
            onRemoveSection={edit.removeSection}
            onEditLabel={edit.editSectionLabel}
          >
            <footer className="section-spacing border-t border-border/50">
              <div className="container-main text-center">
                <p className="text-secondary-text text-lg mb-6 fade-in-up">
                  Interested in working together?
                </p>
                <a
                  href="mailto:asbel.nascimento123456@gmail.com"
                  className="btn-primary mb-10 fade-in-up fade-in-up-delay-1"
                >
                  Get in Touch
                  <Mail size={16} />
                </a>
                <div className="flex items-center justify-center gap-6 mb-8 fade-in-up fade-in-up-delay-2">
                  <a
                    href="https://www.linkedin.com/in/asbelnascimento/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-250"
                  >
                    <Linkedin size={20} strokeWidth={1.5} />
                  </a>
                  <a
                    href="mailto:asbel.nascimento123456@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors duration-250"
                  >
                    <Mail size={20} strokeWidth={1.5} />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground">&copy; 2026 Asbel Nascimento</p>
              </div>
            </footer>
          </EditableSection>
        )}

        {/* Custom sections */}
        {edit.sections
          .filter((s) => s.type === "custom" && s.visible)
          .map((section) => (
            <EditableSection
              key={section.id}
              id={section.id}
              label={section.label}
              visible
              isAuthorized={edit.isAuthorized}
              isCustom
              onMoveUp={edit.moveUp}
              onMoveDown={edit.moveDown}
              onToggleVisible={edit.toggleVisible}
              onAddSection={edit.addSection}
              onRemoveSection={edit.removeSection}
              onEditContent={edit.editSectionContent}
              onEditLabel={edit.editSectionLabel}
            >
              <section className="section-spacing border-t border-border/50">
                <div className="container-main">
                  <h2 className="text-[28px] font-bold font-display mb-3">{section.label}</h2>
                  <div className="h-[2px] w-10 bg-primary rounded-full mb-8" />
                  <p className="text-secondary-text leading-relaxed whitespace-pre-wrap">
                    {section.content}
                  </p>
                </div>
              </section>
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

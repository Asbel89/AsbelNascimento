import { useParams, useNavigate } from "react-router-dom";
import { positions } from "@shared/positions";
import { PositionSwitcher } from "@/components/PositionSwitcher";
import { SectionHeader } from "@/components/SectionHeader";
import { SkillBadge } from "@/components/SkillBadge";
import { ExperienceItem } from "@/components/ExperienceItem";
import { ChevronLeft, Download, FileText, Mail, MapPin, ExternalLink, Globe } from "lucide-react";
import { useEditMode } from "@/hooks/useEditMode";
import { EditableSection } from "@/components/ui/EditableSection";
import { EditControls } from "@/components/ui/EditControls";

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
    { id: "criminal-check", label: "Criminal Background Check", visible: true },
    { id: "cta", label: "Call to Action", visible: true },
  ]);

  const sectionVisible = (id: string) => {
    const s = edit.sections.find((s) => s.id === id);
    return s ? s.visible : true;
  };

  if (!position) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 font-display">Position not found</h1>
          <button onClick={() => navigate("/")} className="btn-primary">
            Back to Selection
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-content mx-auto px-5 py-3 flex items-center justify-between gap-3">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors duration-250 shrink-0"
          >
            <ChevronLeft size={18} />
            <span className="hidden sm:inline text-sm font-medium">Back</span>
          </button>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-1.5 text-xs text-muted-foreground shrink-0">
              <MapPin size={14} />
              <span>Dublin, Ireland</span>
            </div>
            <button
              onClick={async () => {
                const { generateCV } = await import("@/lib/generateCV");
                generateCV(position);
              }}
              className="btn-secondary !py-2 !px-4 !text-xs"
            >
              <Download size={14} />
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
      <main className="max-w-content mx-auto px-5 py-12">
        {/* Position Title & Contact */}
        <div className="mb-12 pb-10 border-b border-border/50">
          <h1 className="text-3xl md:text-4xl font-bold font-display mb-6">{position.title}</h1>
          <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>Dublin, Ireland</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <a
                href="mailto:asbel.nascimento123456@gmail.com"
                className="hover:text-primary transition-colors duration-250"
              >
                asbel.nascimento123456@gmail.com
              </a>
            </div>
            {position.website && (
              <a
                href={position.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-all duration-250"
              >
                <Globe size={14} />
                Meu site
                <ExternalLink size={12} />
              </a>
            )}
          </div>
        </div>

        {sectionVisible("cover-letter") && (
          <EditableSection
            id="cover-letter"
            label="Cover Letter"
            visible
            isAuthorized={edit.isAuthorized}
            onMoveUp={edit.moveUp}
            onMoveDown={edit.moveDown}
            onToggleVisible={edit.toggleVisible}
            onAddSection={edit.addSection}
            onRemoveSection={edit.removeSection}
            onEditLabel={edit.editSectionLabel}
          >
            <section className="mb-16">
              <SectionHeader title="Cover Letter" />
              <div className="max-w-none space-y-4">
                {position.coverLetter.split("\n\n").map((paragraph, idx) => (
                  <p key={idx} className="text-secondary-text leading-relaxed whitespace-pre-wrap">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          </EditableSection>
        )}

        {sectionVisible("summary") && (
          <EditableSection
            id="summary"
            label="Professional Summary"
            visible
            isAuthorized={edit.isAuthorized}
            onMoveUp={edit.moveUp}
            onMoveDown={edit.moveDown}
            onToggleVisible={edit.toggleVisible}
            onAddSection={edit.addSection}
            onRemoveSection={edit.removeSection}
            onEditLabel={edit.editSectionLabel}
          >
            <section className="mb-16">
              <SectionHeader title="Professional Summary" />
              <p className="text-secondary-text leading-relaxed">{position.summary}</p>
            </section>
          </EditableSection>
        )}

        {sectionVisible("core-skills") && (
          <EditableSection
            id="core-skills"
            label="Core Skills"
            visible
            isAuthorized={edit.isAuthorized}
            onMoveUp={edit.moveUp}
            onMoveDown={edit.moveDown}
            onToggleVisible={edit.toggleVisible}
            onAddSection={edit.addSection}
            onRemoveSection={edit.removeSection}
            onEditLabel={edit.editSectionLabel}
          >
            <section className="mb-16">
              <SectionHeader title="Core Skills" />
              <div className="flex flex-wrap gap-2.5">
                {position.coreSkills.map((skill) => (
                  <SkillBadge key={skill} skill={skill} variant="primary" />
                ))}
              </div>
            </section>
          </EditableSection>
        )}

        {sectionVisible("experience") && (
          <EditableSection
            id="experience"
            label="Relevant Experience"
            visible
            isAuthorized={edit.isAuthorized}
            onMoveUp={edit.moveUp}
            onMoveDown={edit.moveDown}
            onToggleVisible={edit.toggleVisible}
            onAddSection={edit.addSection}
            onRemoveSection={edit.removeSection}
            onEditLabel={edit.editSectionLabel}
          >
            <section className="mb-16">
              <SectionHeader title="Relevant Experience" />
              <div>
                {position.experience.map((exp, idx) => (
                  <ExperienceItem key={idx} {...exp} />
                ))}
              </div>
            </section>
          </EditableSection>
        )}

        {sectionVisible("languages") && (
          <EditableSection
            id="languages"
            label="Languages"
            visible
            isAuthorized={edit.isAuthorized}
            onMoveUp={edit.moveUp}
            onMoveDown={edit.moveDown}
            onToggleVisible={edit.toggleVisible}
            onAddSection={edit.addSection}
            onRemoveSection={edit.removeSection}
            onEditLabel={edit.editSectionLabel}
          >
            <section className="mb-16">
              <SectionHeader title="Languages" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {position.languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex justify-between items-center p-4 rounded-xl border border-border/50 bg-card/50"
                  >
                    <span className="font-medium text-foreground">{lang.name}</span>
                    <span className="text-sm text-muted-foreground">{lang.level}</span>
                  </div>
                ))}
              </div>
            </section>
          </EditableSection>
        )}

        {sectionVisible("strengths") && (
          <EditableSection
            id="strengths"
            label="Personal Strengths"
            visible
            isAuthorized={edit.isAuthorized}
            onMoveUp={edit.moveUp}
            onMoveDown={edit.moveDown}
            onToggleVisible={edit.toggleVisible}
            onAddSection={edit.addSection}
            onRemoveSection={edit.removeSection}
            onEditLabel={edit.editSectionLabel}
          >
            <section className="mb-16">
              <SectionHeader title="Personal Strengths" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {position.personalStrengths.map((strength) => (
                  <div
                    key={strength}
                    className="p-4 rounded-xl border border-border/50 bg-card/50 flex items-center gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-foreground">{strength}</span>
                  </div>
                ))}
              </div>
            </section>
          </EditableSection>
        )}

        {position.courses &&
          position.courses.length > 0 &&
          sectionVisible("courses") && (
            <EditableSection
              id="courses"
              label="Courses & Certificates"
              visible
              isAuthorized={edit.isAuthorized}
              onMoveUp={edit.moveUp}
              onMoveDown={edit.moveDown}
              onToggleVisible={edit.toggleVisible}
              onAddSection={edit.addSection}
              onRemoveSection={edit.removeSection}
              onEditLabel={edit.editSectionLabel}
            >
              <section className="mb-16">
                <SectionHeader title="Courses & Certificates" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {position.courses.map((course) => (
                    <a
                      key={course.title}
                      href={course.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block rounded-xl border border-border/50 bg-card/50 overflow-hidden hover:border-primary/30 transition-all duration-250"
                    >
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-250 flex items-center gap-2">
                          {course.title}
                          <ExternalLink
                            size={12}
                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-250"
                          />
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </section>
            </EditableSection>
          )}

        {sectionVisible("criminal-check") && (
          <EditableSection
            id="criminal-check"
            label="Criminal Background Check"
            visible
            isAuthorized={edit.isAuthorized}
            onMoveUp={edit.moveUp}
            onMoveDown={edit.moveDown}
            onToggleVisible={edit.toggleVisible}
            onAddSection={edit.addSection}
            onRemoveSection={edit.removeSection}
            onEditLabel={edit.editSectionLabel}
          >
            <section className="mb-16">
              <SectionHeader title="Criminal Background Check" />
              <a
                href="/criminal-check.png"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl border border-border/50 bg-card/50 text-foreground font-medium hover:border-primary/30 hover:text-primary transition-all duration-250"
              >
                <FileText size={18} strokeWidth={1.5} />
                View Certificate
                <ExternalLink size={14} className="text-muted-foreground" />
              </a>
            </section>
          </EditableSection>
        )}

        {sectionVisible("cta") && (
          <EditableSection
            id="cta"
            label="Call to Action"
            visible
            isAuthorized={edit.isAuthorized}
            onMoveUp={edit.moveUp}
            onMoveDown={edit.moveDown}
            onToggleVisible={edit.toggleVisible}
            onAddSection={edit.addSection}
            onRemoveSection={edit.removeSection}
            onEditLabel={edit.editSectionLabel}
          >
            <section className="py-12 px-8 rounded-2xl border border-border/50 bg-card/30 text-center">
              <h3 className="text-xl font-semibold font-display mb-3">
                Interested in working together?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Feel free to reach out if you'd like to discuss how I can contribute to your
                organization.
              </p>
              <a href="mailto:asbel.nascimento123456@gmail.com" className="btn-primary">
                <Mail size={16} />
                Get in Touch
              </a>
            </section>
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
              <section className="mb-16">
                <SectionHeader title={section.label} />
                <p className="text-secondary-text leading-relaxed whitespace-pre-wrap">
                  {section.content}
                </p>
              </section>
            </EditableSection>
          ))}
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50 mt-12">
        <div className="max-w-content mx-auto px-5 text-center">
          <p className="text-sm text-muted-foreground">&copy; 2026 Asbel Nascimento</p>
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

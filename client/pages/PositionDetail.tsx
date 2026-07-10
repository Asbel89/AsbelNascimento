import { useParams, useNavigate } from "react-router-dom";
import { positions } from "@shared/positions";
import { PositionSwitcher } from "@/components/PositionSwitcher";
import { SectionHeader } from "@/components/SectionHeader";
import { SkillBadge } from "@/components/SkillBadge";
import { ExperienceItem } from "@/components/ExperienceItem";
import { ChevronLeft, Download } from "lucide-react";
import { generateCV } from "@/lib/generateCV";

export default function PositionDetail() {
  const { positionId } = useParams();
  const navigate = useNavigate();
  const position = positions.find((p) => p.id === positionId);

  if (!position) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Position not found</h1>
          <button
            onClick={() => navigate("/")}
            className="inline-block px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Back to Selection
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card border-b border-border backdrop-blur-sm bg-opacity-90">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors shrink-0"
          >
            <ChevronLeft size={20} />
            <span className="hidden sm:inline">Back</span>
          </button>

          <div className="flex items-center gap-2 min-w-0">
            <div className="hidden md:flex items-center gap-2 text-sm shrink-0">
              <span>📍 Dublin, Ireland (Available from August 2026)</span>
            </div>
            <button
              onClick={() => generateCV(position)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-border bg-card text-foreground hover:bg-secondary transition-colors text-sm font-medium shrink-0"
            >
              <Download size={16} />
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
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Position Title & Contact */}
        <div className="mb-8 pb-8 border-b border-border">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
            <span className="text-4xl">{position.emoji}</span>
            {position.title}
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>Dublin, Ireland (Available from August 2026)</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✉️</span>
              <a
                href="mailto:asbel.nascimento123456@gmail.com"
                className="hover:text-primary transition-colors"
              >
                asbel.nascimento123456@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Cover Letter Section */}
        <section className="mb-12">
          <SectionHeader title="Cover Letter" />
          <div className="prose prose-invert max-w-none">
            {position.coverLetter.split("\n\n").map((paragraph, idx) => (
              <p key={idx} className="text-foreground mb-4 whitespace-pre-wrap">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Professional Summary */}
        <section className="mb-12">
          <SectionHeader title="Professional Summary" />
          <p className="text-foreground leading-relaxed mb-6">
            {position.summary}
          </p>
        </section>

        {/* Core Skills */}
        <section className="mb-12">
          <SectionHeader title="Core Skills" />
          <div className="flex flex-wrap gap-2">
            {position.coreSkills.map((skill) => (
              <SkillBadge key={skill} skill={skill} variant="primary" />
            ))}
          </div>
        </section>

        {/* Relevant Experience */}
        <section className="mb-12">
          <SectionHeader title="Relevant Experience" />
          <div className="space-y-6">
            {position.experience.map((exp, idx) => (
              <ExperienceItem key={idx} {...exp} />
            ))}
          </div>
        </section>

        {/* Languages */}
        <section className="mb-12">
          <SectionHeader title="Languages" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {position.languages.map((lang) => (
              <div
                key={lang.name}
                className="flex justify-between items-center p-3 rounded-lg bg-card border border-border"
              >
                <span className="font-medium">{lang.name}</span>
                <span className="text-sm text-muted-foreground">{lang.level}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Personal Strengths */}
        <section className="mb-12">
          <SectionHeader title="Personal Strengths" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {position.personalStrengths.map((strength) => (
              <div
                key={strength}
                className="p-3 rounded-lg bg-card border border-border text-foreground flex items-center gap-2"
              >
                <span className="text-primary">✓</span>
                <span>{strength}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Courses / Certificates */}
        {position.courses && position.courses.length > 0 && (
          <section className="mb-12">
            <SectionHeader title="Courses / Certificates" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {position.courses.map((course) => (
                <a
                  key={course.title}
                  href={course.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-lg bg-card border border-border overflow-hidden hover:border-primary transition-colors"
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-3">
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {course.title}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Video Introduction */}
        <section className="mb-12">
          <SectionHeader title="Video Introduction" />
          <div className="aspect-video bg-card border-2 border-border rounded-lg flex items-center justify-center mb-4">
            <div className="text-center">
              <div className="text-4xl mb-3">🎬</div>
              <p className="text-muted-foreground">A Quick Introduction</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            ⭐⭐⭐⭐⭐ Video introduction available on request
          </p>
        </section>

        {/* Criminal Background Check Certificate */}
        <section className="mb-12">
          <SectionHeader title="Criminal Background Check Certificate" />
          <a
            href="/criminal-check.png"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
            View Certificate
          </a>
        </section>

        {/* Call to Action */}
        <section className="mb-12 py-8 px-6 rounded-lg bg-card border border-border text-center">
          <h3 className="text-xl font-semibold mb-4">
            Liked my resume? Let's create one that works for you too.
          </h3>
          <p className="text-muted-foreground mb-6">
            Feel free to reach out if you'd like to discuss how I can contribute
            to your organization.
          </p>
          <a
            href="mailto:asbel.nascimento123456@gmail.com"
            className="inline-block px-6 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </a>
        </section>
      </main>
    </div>
  );
}

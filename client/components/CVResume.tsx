import { Mail, MapPin, CalendarDays, User } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function CVResume() {
  const { cv } = useI18n();

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_8px_32px_rgba(15,23,42,0.08)] overflow-hidden">
        <div className="px-6 md:px-12 py-8 md:py-12">
          {/* Contact header */}
          <div className="text-center mb-10">
            <h3 className="text-[32px] md:text-4xl font-extrabold tracking-tight font-display text-slate-900">
              {cv.name}
            </h3>
            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 text-[13.5px] text-slate-600">
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 text-left">
                <span className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-blue-600" strokeWidth={1.7} />
                </span>
                <span className="leading-snug">{cv.address}</span>
              </div>
              <a
                href={`mailto:${cv.email}`}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 text-left hover:border-blue-200 hover:bg-blue-50/60 transition-all duration-200"
              >
                <span className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-blue-600" strokeWidth={1.7} />
                </span>
                <span className="leading-snug break-all">{cv.email}</span>
              </a>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 text-left">
                <span className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center flex-shrink-0">
                  <CalendarDays size={16} className="text-blue-600" strokeWidth={1.7} />
                </span>
                <span className="leading-snug whitespace-nowrap">{cv.dateOfBirth}</span>
              </div>
            </div>
          </div>

          {/* Professional Profile */}
          <CVSection title={cv.profileTitle}>
            <p className="text-[14.5px] leading-relaxed text-slate-600">{cv.profile}</p>
          </CVSection>

          {/* Work Experience */}
          <CVSection title={cv.experienceTitle}>
            <div className="space-y-7">
              {cv.experience.map((exp) => (
                <div key={`${exp.company}-${exp.period}`}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1.5">
                    <h4 className="text-[15px] font-semibold tracking-tight text-slate-900">
                      {exp.title}
                    </h4>
                    <span className="text-xs font-medium tracking-wide text-slate-500 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-full whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-blue-600 mt-1 mb-2.5">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex gap-3 text-[13.5px] leading-relaxed text-slate-600">
                        <span className="mt-2 w-1 h-1 rounded-full bg-slate-300 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CVSection>

          {/* Education */}
          <CVSection title={cv.educationTitle}>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 items-center justify-center hidden sm:flex flex-shrink-0">
                <User size={16} className="text-slate-400" />
              </div>
              <div>
                <p className="text-[15px] font-semibold tracking-tight text-slate-900">
                  {cv.educationDegree}
                </p>
                <p className="text-[13.5px] text-slate-500 mt-0.5">{cv.educationSchool}</p>
              </div>
            </div>
          </CVSection>

          {/* Availability */}
          <CVSection title={cv.availabilityTitle}>
            <p className="text-[14.5px] leading-relaxed text-slate-600">{cv.availability}</p>
          </CVSection>

          {/* Cover Letter */}
          <CVSection title={cv.coverLetterTitle}>
            <div className="space-y-4">
              {cv.coverLetter.map((paragraph, idx) => (
                <p key={idx} className="text-[14.5px] leading-relaxed text-slate-600">
                  {paragraph}
                </p>
              ))}
            </div>
          </CVSection>
        </div>
      </div>
    </div>
  );
}

function CVSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-9">
      <h4 className="text-[13px] font-bold uppercase tracking-widest text-blue-600 mb-4 flex items-center gap-3">
        <span className="w-1.5 h-4 bg-blue-600 rounded-full" />
        {title}
      </h4>
      {children}
    </div>
  );
}
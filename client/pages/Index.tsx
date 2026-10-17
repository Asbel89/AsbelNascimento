import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Download,
  ArrowRight,
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  Linkedin,
  Sparkles,
  GraduationCap,
  BookOpen,
  Code2,
  Cloud,
  Palette,
  GitBranch,
  Database,
  HeartHandshake,
  Users,
  Lightbulb,
  Clock,
  ChevronRight,
  Star,
  Coffee,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Config                                                             */
/* ------------------------------------------------------------------ */
const NAME = "Asbel Nascimento";
const TAGLINE = "Learning technology, one step at a time";
const LOCATION = "Dublin, Ireland";
const PHONE_DISPLAY = "+353 83 844 6234";
const WHATSAPP_NUMBER = "353838446234";
const EMAIL = "asbel.nascimento157@gmail.com";
const LINKEDIN = "https://linkedin.com/in/asbelnascimento";
const PROFILE =
  "Curious technology learner based in Dublin, Ireland. I studied Systems Analysis and Development and Information Systems in Brazil, and I'm now building my skills in web development, cloud and design — one step at a time. I'm open to opportunities where I can learn, contribute and grow with a team.";

const waLink = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

function WhatsAppIcon({
  size = 16,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */
const learning = [
  {
    icon: Code2,
    title: "HTML & CSS",
    desc: "Building clean, responsive layouts and getting comfortable with modern styling.",
  },
  {
    icon: GitBranch,
    title: "Git & GitHub",
    desc: "Version control, branching and collaborating on code the right way.",
  },
  {
    icon: Cloud,
    title: "Cloud & AWS",
    desc: "Exploring cloud foundations, prompt engineering and AI services.",
  },
  {
    icon: Palette,
    title: "UI/UX & Figma",
    desc: "Designing simple, usable interfaces with a user-first mindset.",
  },
  {
    icon: Database,
    title: "Databases",
    desc: "Getting to know the basics of data, SQL and how systems store information.",
  },
  {
    icon: BookOpen,
    title: "Always something new",
    desc: "Programming fundamentals, Java, Node.js — if it sparks curiosity, I explore it.",
  },
];

const studies = [
  {
    degree: "Systems Analysis and Development",
    institution: "Brazil",
    note: "Studied for 2 years — not completed",
    desc: "Built a solid foundation in programming logic, software concepts and how systems come together.",
  },
  {
    degree: "Information Systems",
    institution: "Brazil",
    note: "Started — paused",
    desc: "Began the course and had to pause it when I moved to Ireland to start a new chapter.",
  },
];

const certifications = [
  "AWS Cloud Foundations",
  "AWS — Foundations of Prompt Engineering",
  "Amazon Bedrock",
  "Introduction to Front-End Development",
  "UX Design: Digital Products",
  "Data Analysis — Google Sheets",
  "Java — First Application",
  "Getting Started in Programming",
  "Bootcamp — Git & GitHub",
  "Bootcamp — Client x Server",
  "Career Transition to IT",
  "Masterclass Figma",
  "Administrative Assistant",
];

const strengths = [
  {
    icon: BookOpen,
    title: "Always learning",
    desc: "Curiosity is my engine. I pick up new tools and technologies because I genuinely enjoy it.",
  },
  {
    icon: Users,
    title: "Team player",
    desc: "I work well with others, communicate clearly and enjoy being part of a good team.",
  },
  {
    icon: Lightbulb,
    title: "Problem solver",
    desc: "I like figuring things out — breaking a problem down until it makes sense.",
  },
  {
    icon: Clock,
    title: "Reliable & organised",
    desc: "Punctual, dependable and careful with details, even under pressure.",
  },
  {
    icon: HeartHandshake,
    title: "Positive attitude",
    desc: "Friendly, adaptable and open to feedback — I bring good energy to a team.",
  },
  {
    icon: Sparkles,
    title: "Adaptable",
    desc: "Brasil to Ireland, one challenge to the next — I adapt quickly and keep going.",
  },
];

type NicheIcon = typeof Code2;

/* ------------------------------------------------------------------ */
/*  Download CV as PDF                                                 */
/* ------------------------------------------------------------------ */
function downloadPortfolioCV() {
  void import("jspdf").then(({ jsPDF }) => {
    const doc = new jsPDF("p", "mm", "a4");
    const M = 20;
    const PW = 210;
    const CW = PW - M * 2;
    let y = 20;

    const pageBreak = (need: number) => {
      if (y + need > 275) {
        doc.addPage();
        y = 20;
      }
    };

    const heading = (t: string) => {
      pageBreak(14);
      y += 3;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.setTextColor(20, 20, 20);
      doc.text(t.toUpperCase(), M, y);
      doc.setDrawColor(180, 120, 20);
      doc.setLineWidth(0.4);
      doc.line(M, y + 1.5, PW - M, y + 1.5);
      y += 7;
    };

    const paragraph = (t: string) => {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(50, 50, 50);
      const lines = doc.splitTextToSize(t, CW);
      lines.forEach((line: string) => {
        pageBreak(6);
        doc.text(line, M, y);
        y += 4.8;
      });
    };

    const bullets = (items: string[]) => {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(50, 50, 50);
      items.forEach((it) => {
        pageBreak(6);
        const lines = doc.splitTextToSize(`•  ${it}`, CW);
        lines.forEach((line: string) => {
          doc.text(line, M, y);
          y += 4.8;
        });
      });
    };

    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.setTextColor(20, 20, 20);
    doc.text(NAME, M, y);
    y += 7;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(90, 90, 90);
    doc.text(TAGLINE, M, y);
    y += 6;
    doc.text(`${PHONE_DISPLAY}  |  ${EMAIL}  |  ${LOCATION}`, M, y);
    y += 4.5;
    doc.text("LinkedIn: linkedin.com/in/asbelnascimento", M, y);
    y += 8;

    heading("Profile");
    paragraph(PROFILE);

    heading("Currently Learning");
    paragraph(learning.map((l) => l.title).join("  ·  "));

    heading("Education");
    studies.forEach((s) => {
      pageBreak(16);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(20, 20, 20);
      doc.text(s.degree, M, y);
      y += 4.8;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(90, 90, 90);
      doc.text(`${s.institution} — ${s.note}`, M, y);
      y += 4.8;
      doc.setFontSize(9.5);
      doc.setTextColor(60, 60, 60);
      const ls = doc.splitTextToSize(s.desc, CW);
      ls.forEach((l: string) => {
        doc.text(l, M, y);
        y += 4.5;
      });
      y += 2;
    });

    heading("Certificates");
    bullets(certifications);

    heading("Strengths");
    bullets(strengths.map((s) => `${s.title}: ${s.desc}`));

    heading("Languages");
    paragraph("Portuguese — Native        English — Intermediate (improving daily)");

    doc.save("Asbel_Nascimento_CV.pdf");
  });
}

/* ------------------------------------------------------------------ */
/*  Reveal on scroll                                                   */
/* ------------------------------------------------------------------ */
function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal"));
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);

  useReveal();

  const nav = [
    { label: "About", href: "#about" },
    { label: "Learning", href: "#learning" },
    { label: "Studies", href: "#studies" },
    { label: "Certificates", href: "#certificates" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-[#09090d] text-zinc-100 overflow-x-hidden">
      {/* ---------- Sticky nav ---------- */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-[#09090d]/85 backdrop-blur-xl">
        <div className="container-main flex items-center justify-between h-[68px]">
          <a href="#home" className="flex items-center gap-2.5">
            <img
              src="/minhafoto.jpeg"
              alt={NAME}
              className="w-9 h-9 rounded-xl object-cover border border-white/15"
            />
            <span className="leading-tight">
              <span className="block font-display font-extrabold tracking-tight text-[15px]">
                {NAME}
              </span>
              <span className="block text-[11px] text-zinc-400 tracking-wide">
                LEARNING TECH • IE
              </span>
            </span>
          </a>
          <nav className="hidden lg:flex items-center gap-7 text-sm text-zinc-300">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="hover:text-amber-300 transition-colors font-medium"
              >
                {n.label}
              </a>
            ))}
            <button
              onClick={() => setCvOpen(true)}
              className="hover:text-amber-300 transition-colors font-medium"
            >
              View CV
            </button>
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={waLink("Hi Asbel! Nice to meet you.")}
              target="_blank"
              rel="noreferrer"
              className="btn-gold !px-5 !py-2.5"
            >
              <WhatsAppIcon size={16} /> Say hello
            </a>
          </div>
          <button
            className="lg:hidden p-2 text-zinc-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="lg:hidden border-t border-white/10 bg-[#09090d] px-5 py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setMenuOpen(false)}
                className="py-2.5 text-[15px] text-zinc-200 border-b border-white/5 last:border-0 flex items-center justify-between"
              >
                {n.label} <ChevronRight size={16} className="text-zinc-500" />
              </a>
            ))}
            <button
              onClick={() => {
                setMenuOpen(false);
                setCvOpen(true);
              }}
              className="py-2.5 text-[15px] text-zinc-200 border-b border-white/5 last:border-0 flex items-center justify-between text-left"
            >
              View CV <ChevronRight size={16} className="text-zinc-500" />
            </button>
            <a
              href={waLink("Hi Asbel! Nice to meet you.")}
              target="_blank"
              rel="noreferrer"
              className="btn-gold mt-3"
            >
              <WhatsAppIcon size={16} /> Say hello
            </a>
          </nav>
        )}
      </header>

      <main id="home">
        {/* ---------- 1. HERO ---------- */}
        <section className="relative pt-[130px] pb-16 md:pt-[160px] md:pb-24">
          <div className="absolute inset-0 hero-grid" />
          <div className="absolute inset-0 gold-glow" />
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-orange-600/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="container-main relative max-w-3xl mx-auto text-center">
            <div className="reveal">
              <span className="eyebrow">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                Based in Dublin, Ireland
              </span>
              <h1 className="h-display text-[40px] leading-[1.05] sm:text-5xl md:text-[62px] mt-6">
                Hi, I'm Asbel — a curious mind{" "}
                <span className="text-gradient-gold">learning technology.</span>
              </h1>
              <p className="mt-6 text-zinc-400 text-[16px] md:text-lg leading-relaxed max-w-[620px] mx-auto">
                I'm not here to label myself with a single title. I'm someone who
                loves learning, building and growing — currently deepening my
                skills in web development, cloud and design, one step at a time.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <a href="#learning" className="btn-gold">
                  See what I'm learning <ArrowRight size={17} />
                </a>
                <a href="#contact" className="btn-ghost">
                  <MessageCircle size={16} className="text-emerald-400" /> Get in touch
                </a>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-zinc-400">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={15} className="text-amber-300" /> {LOCATION}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Phone size={15} className="text-amber-300" /> {PHONE_DISPLAY}
                </span>
              </div>
            </div>
          </div>

          {/* platform strip */}
          <div className="container-main relative mt-14">
            <div className="overflow-hidden border-y border-white/10 py-4 text-zinc-500 text-sm font-semibold tracking-[0.2em]">
              <div className="flex gap-10 whitespace-nowrap animate-marquee w-max">
                {Array.from({ length: 2 }).flatMap((_, k) =>
                  [
                    "HTML",
                    "CSS",
                    "JAVASCRIPT",
                    "REACT",
                    "TYPESCRIPT",
                    "GIT",
                    "FIGMA",
                    "AWS",
                    "ALWAYS LEARNING",
                  ].map((t, i) => (
                    <span key={`${k}-${i}`} className="flex items-center gap-10">
                      {t} <span className="text-amber-500">✦</span>
                    </span>
                  ))
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ---------- 2. ABOUT ---------- */}
        <section id="about" className="py-20 md:py-28 border-t border-white/5">
          <div className="container-main grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-zinc-800 to-zinc-950 aspect-[4/5] max-w-[420px] mx-auto">
                <img
                  src="/minhafoto.jpeg"
                  alt="Portrait of Asbel Nascimento"
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) =>
                    ((e.target as HTMLImageElement).style.display = "none")
                  }
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                <div className="absolute bottom-0 p-6 inset-x-0">
                  <p className="font-display font-extrabold text-xl">{NAME}</p>
                  <p className="text-amber-300 text-sm font-medium flex items-center gap-1.5 mt-1">
                    <MapPin size={14} /> {LOCATION}
                  </p>
                </div>
                <span className="absolute top-4 left-4 text-[11px] font-bold tracking-widest bg-amber-400 text-black px-3 py-1.5 rounded-full">
                  HELLO THERE
                </span>
              </div>
            </div>
            <div className="reveal order-1 lg:order-2">
              <span className="eyebrow">About me</span>
              <h2 className="h-display text-3xl md:text-[44px] leading-tight mt-5">
                A non-stop learner who{" "}
                <span className="text-gradient-gold">doesn't fit one box.</span>
              </h2>
              <p className="mt-6 text-zinc-400 leading-relaxed">
                I'm Asbel, a Brazilian who moved to Dublin to start a new chapter.
                I've always been drawn to technology — I studied Systems Analysis
                and Development and Information Systems, and even though I
                haven't finished them, what I learned there sparked something that
                never turned off.
              </p>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                Today I keep that curiosity alive from Ireland. I don't claim to
                be an expert in one speciality yet — instead, I'm hands-on
                learning web development, cloud and design, and I enjoy every part
                of the process. I bring a positive attitude, teamwork and a real
                willingness to grow with the right people.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-3 max-w-[480px]">
                {[
                  ["2 yrs", "Studied tech"],
                  ["13+", "Certificates"],
                  ["100%", "Curiosity"],
                ].map(([n, l]) => (
                  <div key={l} className="card-dark p-4 text-center">
                    <p className="font-display font-extrabold text-2xl text-amber-300">
                      {n}
                    </p>
                    <p className="text-xs text-zinc-400 mt-1">{l}</p>
                  </div>
                ))}
              </div>
              <a href="#contact" className="btn-ghost mt-8">
                Let's talk <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* ---------- 3. LEARNING ---------- */}
        <section
          id="learning"
          className="py-20 md:py-28 border-t border-white/5 bg-white/[0.015]"
        >
          <div className="container-main">
            <div className="reveal max-w-2xl">
              <span className="eyebrow">Currently learning</span>
              <h2 className="h-display text-3xl md:text-[44px] leading-tight mt-5">
                Technologies I'm exploring{" "}
                <span className="text-gradient-gold">right now.</span>
              </h2>
              <p className="text-zinc-400 mt-4">
                No single speciality — just a broad, honest picture of what I'm
                studying and practising today.
              </p>
            </div>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {learning.map((s, i) => {
                const Icon = s.icon as NicheIcon;
                return (
                  <article
                    key={s.title}
                    className="reveal card-dark p-7"
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    <span className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/25 flex items-center justify-center text-amber-300">
                      <Icon size={22} />
                    </span>
                    <h3 className="font-display font-bold text-lg mt-5">
                      {s.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed mt-2">
                      {s.desc}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------- 4. STUDIES ---------- */}
        <section id="studies" className="py-20 md:py-28 border-t border-white/5">
          <div className="container-main">
            <div className="reveal max-w-2xl">
              <span className="eyebrow">My studies</span>
              <h2 className="h-display text-3xl md:text-[44px] leading-tight mt-5">
                Where my journey{" "}
                <span className="text-gradient-gold">started.</span>
              </h2>
              <p className="text-zinc-400 mt-4">
                Honest and open: I started both courses before moving to Ireland.
                Life took a turn, but the foundation stays with me.
              </p>
            </div>
            <div className="mt-10 grid md:grid-cols-2 gap-4">
              {studies.map((s, i) => (
                <article
                  key={s.degree}
                  className="reveal card-dark p-7"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <span className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/25 flex items-center justify-center text-amber-300">
                    <GraduationCap size={22} />
                  </span>
                  <h3 className="font-display font-bold text-xl mt-5">
                    {s.degree}
                  </h3>
                  <p className="text-sm text-zinc-500 mt-1">{s.institution}</p>
                  <span className="inline-block mt-3 text-[11px] font-bold tracking-widest text-amber-300 bg-amber-400/10 border border-amber-400/25 px-3 py-1 rounded-full uppercase">
                    {s.note}
                  </span>
                  <p className="text-sm text-zinc-400 leading-relaxed mt-4">
                    {s.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- 5. CERTIFICATES ---------- */}
        <section
          id="certificates"
          className="py-20 md:py-28 border-t border-white/5 bg-white/[0.015]"
        >
          <div className="container-main">
            <div className="reveal max-w-xl">
              <span className="eyebrow">Certificates</span>
              <h2 className="h-display text-3xl md:text-[44px] leading-tight mt-5">
                Small steps,{" "}
                <span className="text-gradient-gold">real progress.</span>
              </h2>
              <p className="text-zinc-400 mt-4">
                Certificates I've completed while studying and working — proof
                that I keep showing up and learning.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-2.5">
              {certifications.map((c, i) => (
                <span
                  key={c}
                  className="reveal rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 hover:border-amber-400/40 transition-colors"
                  style={{ transitionDelay: `${i * 30}ms` }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- 6. STRENGTHS ---------- */}
        <section id="strengths" className="py-20 md:py-28 border-t border-white/5">
          <div className="container-main">
            <div className="reveal max-w-xl">
              <span className="eyebrow">What I bring</span>
              <h2 className="h-display text-3xl md:text-[44px] leading-tight mt-5">
                More than skills —{" "}
                <span className="text-gradient-gold">a mindset.</span>
              </h2>
            </div>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {strengths.map((b, i) => (
                <div
                  key={b.title}
                  className="reveal card-dark p-6"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <b.icon size={22} className="text-amber-300" />
                  <h3 className="font-display font-bold mt-3">{b.title}</h3>
                  <p className="text-sm text-zinc-400 mt-1.5 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- 7. CTA ---------- */}
        <section className="py-16 md:py-24">
          <div className="container-main">
            <div className="reveal relative overflow-hidden rounded-[28px] border border-amber-400/25 bg-gradient-to-br from-amber-500/15 via-orange-600/10 to-transparent p-10 md:p-16 text-center">
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[240px] bg-amber-500/25 blur-[100px] rounded-full pointer-events-none" />
              <span className="eyebrow relative">
                <Star size={13} /> Open to opportunities
              </span>
              <h2 className="h-display text-3xl md:text-5xl relative mt-5">
                Let's grow together.
              </h2>
              <p className="text-zinc-300 mt-4 max-w-xl mx-auto relative">
                If you're looking for someone curious, reliable and eager to learn,
                I'd love to have a chat. Grab my number below or message me on
                WhatsApp.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 relative">
                <a
                  href={waLink("Hi Asbel! I'd like to have a chat.")}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gold"
                >
                  <MessageCircle size={17} /> WhatsApp me
                </a>
                <a href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`} className="btn-ghost">
                  <Phone size={16} className="text-amber-300" /> {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- 8. CONTACT ---------- */}
        <section id="contact" className="py-20 md:py-28 border-t border-white/5">
          <div className="container-main grid lg:grid-cols-2 gap-10 items-center">
            <div className="reveal">
              <span className="eyebrow">Contact</span>
              <h2 className="h-display text-3xl md:text-[44px] leading-tight mt-5">
                Say hello —{" "}
                <span className="text-gradient-gold">I always reply.</span>
              </h2>
              <p className="text-zinc-400 mt-4">
                Easiest and fastest way to reach me is WhatsApp or a quick call.
              </p>
              <div className="mt-7 grid gap-3">
                <a
                  href={waLink("Hi Asbel! Nice to meet you.")}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-4 hover:bg-emerald-400/15 transition-colors"
                >
                  <span className="w-11 h-11 rounded-xl bg-emerald-400 text-black flex items-center justify-center shrink-0">
                    <MessageCircle size={20} />
                  </span>
                  <span>
                    <span className="block text-xs font-bold tracking-widest text-emerald-300">
                      WHATSAPP • FASTEST
                    </span>
                    <span className="block font-display font-bold">
                      {PHONE_DISPLAY}
                    </span>
                  </span>
                  <ArrowRight size={18} className="ml-auto text-emerald-300" />
                </a>
                <a
                  href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`}
                  className="flex items-center gap-4 card-dark p-4"
                >
                  <span className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-amber-300" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold tracking-widest text-zinc-500">
                      IRISH MOBILE
                    </span>
                    <span className="block font-semibold text-[15px]">
                      {PHONE_DISPLAY}
                    </span>
                  </span>
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-4 card-dark p-4"
                >
                  <span className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-amber-300" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold tracking-widest text-zinc-500">
                      EMAIL
                    </span>
                    <span className="block font-semibold text-[15px] break-all">
                      {EMAIL}
                    </span>
                  </span>
                </a>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 card-dark p-4"
                >
                  <span className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Linkedin size={20} className="text-amber-300" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold tracking-widest text-zinc-500">
                      LINKEDIN
                    </span>
                    <span className="block font-semibold text-[15px]">
                      /in/asbelnascimento
                    </span>
                  </span>
                </a>
              </div>
            </div>

            <div className="reveal card-dark p-8 md:p-10 !transform-none">
              <span className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/25 flex items-center justify-center text-amber-300">
                <Coffee size={22} />
              </span>
              <h3 className="font-display font-extrabold text-2xl mt-5">
                Let's meet at the job expo.
              </h3>
              <p className="text-zinc-400 mt-3 leading-relaxed">
                I'm excited to meet new people and teams. If you'd like to know
                more about me, my studies or what I'm learning — come say hi or
                send me a message. I'm always happy to talk.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Curious", "Friendly", "Reliable", "Fast learner", "Team player"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-zinc-300"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
              <a
                href={waLink("Hi Asbel! Nice to meet you.")}
                target="_blank"
                rel="noreferrer"
                className="btn-gold w-full mt-7"
              >
                <MessageCircle size={16} /> Message me on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ---------- FOOTER ---------- */}
      <footer className="border-t border-white/10 bg-black/40">
        <div className="container-main py-12 grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <img
                src="/minhafoto.jpeg"
                alt={NAME}
                className="w-9 h-9 rounded-xl object-cover border border-white/15"
              />
              <span className="font-display font-extrabold">{NAME}</span>
            </div>
            <p className="text-sm text-zinc-500 mt-4 leading-relaxed">
              {TAGLINE}. Building my future in technology from Dublin, Ireland.
            </p>
            <div className="flex gap-2.5 mt-5">
              {[
                { icon: Linkedin, href: LINKEDIN, label: "LinkedIn" },
                {
                  icon: MessageCircle,
                  href: waLink("Hi Asbel!"),
                  label: "WhatsApp",
                },
                { icon: Mail, href: `mailto:${EMAIL}`, label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-zinc-300 hover:text-amber-300 hover:border-amber-400/40 transition-all"
                >
                  <s.icon size={17} />
                </a>
              ))}
            </div>
          </div>
          <nav aria-label="Footer">
            <p className="text-xs font-bold tracking-[0.18em] text-zinc-500">
              EXPLORE
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-zinc-300">
              {[
                ["About", "#about"],
                ["Learning", "#learning"],
                ["Studies", "#studies"],
                ["Certificates", "#certificates"],
                ["Strengths", "#strengths"],
                ["Contact", "#contact"],
              ].map(([l, h]) => (
                <li key={h}>
                  <a href={h} className="hover:text-amber-300 transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setCvOpen(true)}
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-300 hover:text-amber-200 transition-colors"
            >
              <Download size={14} /> View CV
            </button>
          </nav>
          <div>
            <p className="text-xs font-bold tracking-[0.18em] text-zinc-500">
              GET IN TOUCH
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-zinc-300">
              <li>
                <a
                  className="hover:text-amber-300"
                  href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`}
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a className="hover:text-amber-300" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-1.5 text-zinc-500">
                <MapPin size={14} /> {LOCATION}
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="container-main py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-600">
            <p>
              © {new Date().getFullYear()} {NAME}. All rights reserved.
            </p>
            <p>Learning &amp; growing in Dublin</p>
          </div>
        </div>
      </footer>

      {/* ---------- CV MODAL ---------- */}
      {cvOpen && (
        <div className="fixed inset-0 z-[60] overflow-y-auto">
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            onClick={() => setCvOpen(false)}
          />
          <div className="relative mx-auto w-full max-w-3xl px-4 py-6 md:py-10">
            <div className="flex items-center justify-end gap-2 mb-3 sticky top-4 z-10">
              <button
                onClick={downloadPortfolioCV}
                className="btn-gold !px-5 !py-2.5"
              >
                <Download size={16} /> Download PDF
              </button>
              <button
                onClick={() => setCvOpen(false)}
                aria-label="Close CV"
                className="w-11 h-11 rounded-xl border border-white/15 bg-white/5 flex items-center justify-center text-zinc-200 hover:text-white hover:border-white/30 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="bg-white text-slate-900 rounded-2xl shadow-2xl p-6 md:p-12">
              {/* Header */}
              <div className="pb-6 border-b border-slate-200">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-display text-slate-900">
                  {NAME}
                </h2>
                <p className="text-sm font-medium text-amber-600 mt-1.5">
                  {TAGLINE}
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-[13px] text-slate-500">
                  <span className="inline-flex items-center gap-1.5">
                    <Phone size={13} className="text-slate-400" /> {PHONE_DISPLAY}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Mail size={13} className="text-slate-400" /> {EMAIL}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={13} className="text-slate-400" /> {LOCATION}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Linkedin size={13} className="text-slate-400" />
                    /in/asbelnascimento
                  </span>
                </div>
              </div>

              <div className="pt-6 space-y-7">
                <div>
                  <h3 className="text-[12px] font-bold uppercase tracking-widest text-amber-600 mb-2">
                    Profile
                  </h3>
                  <p className="text-[14px] leading-relaxed text-slate-600">
                    {PROFILE}
                  </p>
                </div>

                <div>
                  <h3 className="text-[12px] font-bold uppercase tracking-widest text-amber-600 mb-2">
                    Currently Learning
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {learning.map((l) => (
                      <span
                        key={l.title}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-[12px]"
                      >
                        {l.title}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-[12px] font-bold uppercase tracking-widest text-amber-600 mb-2">
                    Education
                  </h3>
                  <div className="space-y-3">
                    {studies.map((s) => (
                      <div key={s.degree}>
                        <p className="text-[14px] font-semibold text-slate-900">
                          {s.degree}
                        </p>
                        <p className="text-[12px] text-slate-500 mt-0.5">
                          {s.institution} — {s.note}
                        </p>
                        <p className="text-[13px] text-slate-600 mt-1 leading-relaxed">
                          {s.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-[12px] font-bold uppercase tracking-widest text-amber-600 mb-2">
                    Certificates
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
                    {certifications.map((c) => (
                      <li
                        key={c}
                        className="text-[13px] text-slate-600 flex gap-2"
                      >
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-amber-500 flex-shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-[12px] font-bold uppercase tracking-widest text-amber-600 mb-2">
                    Strengths
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {strengths.map((s) => (
                      <div
                        key={s.title}
                        className="rounded-xl border border-slate-200 p-3"
                      >
                        <p className="text-[13px] font-semibold text-slate-900">
                          {s.title}
                        </p>
                        <p className="text-[12px] text-slate-600 mt-0.5 leading-relaxed">
                          {s.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-[12px] font-bold uppercase tracking-widest text-amber-600 mb-2">
                    Languages
                  </h3>
                  <p className="text-[13px] text-slate-600">
                    Portuguese — Native &nbsp;·&nbsp; English — Intermediate
                    (improving daily)
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
                <button onClick={downloadPortfolioCV} className="btn-gold">
                  <Download size={16} /> Download PDF
                </button>
                <button
                  onClick={() => setCvOpen(false)}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating WhatsApp */}
      <a
        href={waLink("Hi Asbel! Nice to meet you.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#25D366] text-black flex items-center justify-center shadow-[0_10px_35px_-5px_rgba(37,211,102,0.7)] hover:scale-110 transition-transform"
      >
        <MessageCircle size={26} className="fill-black/10" />
      </a>
    </div>
  );
}

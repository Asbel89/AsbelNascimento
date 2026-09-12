import { useEffect, useState } from "react";
import {
  Play,
  Clapperboard,
  Instagram,
  Music2,
  Megaphone,
  Store,
  Scissors,
  BadgeCheck,
  Smartphone,
  TrendingUp,
  Zap,
  HeartHandshake,
  Palette,
  Menu,
  X,
  ArrowRight,
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  Star,
  ChevronRight,
  Youtube,
  Facebook,
  Send,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Config — replace with your real contacts                           */
/* ------------------------------------------------------------------ */
const BRAND = "Asbel Nascimento";
const TAGLINE = "Short-form video creator in Dublin";
const WHATSAPP_NUMBER = "353838446234";
const EMAIL = "asbel.nascimento157@gmail.com";
const PHONE_DISPLAY = "+353 83 844 6234";

const waLink = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */
const services = [
  {
    icon: Clapperboard,
    title: "Short-Form Video Creation",
    desc: "Cinematic vertical videos filmed at your business — planned, shot and delivered ready to post.",
  },
  {
    icon: Instagram,
    title: "Instagram Reels",
    desc: "Scroll-stopping Reels with hooks, captions and trending formats that grow reach and followers.",
  },
  {
    icon: Music2,
    title: "TikTok Videos",
    desc: "Native TikTok content built for the algorithm — authentic, fast and made to be shared.",
  },
  {
    icon: Megaphone,
    title: "Promotional Videos",
    desc: "Launch offers, events and seasonal campaigns with a clear call-to-action that drives visits.",
  },
  {
    icon: Store,
    title: "Business Content Creation",
    desc: "Menus, interiors, products, team and behind-the-scenes — everything your audience wants to see.",
  },
  {
    icon: Scissors,
    title: "Social Media Video Editing",
    desc: "Already have footage? I turn it into polished, captioned, on-brand edits in days, not weeks.",
  },
];

const benefits = [
  {
    icon: BadgeCheck,
    title: "Professional & creative",
    desc: "Clean framing, great light and sound — your business looks its absolute best.",
  },
  {
    icon: Smartphone,
    title: "Designed for social",
    desc: "Vertical-first, captioned, hook in the first 2 seconds. Built for Reels, TikTok & Shorts.",
  },
  {
    icon: TrendingUp,
    title: "More visibility",
    desc: "Content engineered to earn reach, saves and shares — and bring people through your door.",
  },
  {
    icon: Zap,
    title: "Attention-grabbing",
    desc: "Fast pacing, dynamic cuts and storytelling that stops the scroll.",
  },
  {
    icon: HeartHandshake,
    title: "Fast & personal",
    desc: "Direct contact with me, quick turnaround and zero agency bureaucracy.",
  },
  {
    icon: Palette,
    title: "Adapted to your brand",
    desc: "Colours, tone and style matched to your identity — not generic templates.",
  },
];

type Niche = {
  name: string;
  desc: string;
  emoji: string;
};

const niches: Niche[] = [
  { name: "Restaurants", desc: "Dishes, atmosphere and chef moments that make people book a table.", emoji: "🍝" },
  { name: "Cafés", desc: "Coffee rituals, cozy interiors and treats worth sharing.", emoji: "☕" },
  { name: "Barbershops", desc: "Sharp transformations, technique and shop culture.", emoji: "💈" },
  { name: "Beauty", desc: "Glow-ups, treatments and results your clients dream of.", emoji: "💅" },
  { name: "Fitness", desc: "Energy, training and community that motivates sign-ups.", emoji: "🏋️" },
  { name: "Local Businesses", desc: "Shops, hotels and services — your story, made visible.", emoji: "🏬" },
];

const steps = [
  { n: "01", title: "Contact Me", desc: "Send a message on WhatsApp or the form below. Tell me what you do." },
  { n: "02", title: "Tell Me About Your Business", desc: "A quick call or visit — we align on your goals, style and the story to tell." },
  { n: "03", title: "We Create Your Content", desc: "I film at your location with minimal disruption. You keep running your business." },
  { n: "04", title: "Ready to Post", desc: "You receive polished vertical videos with captions — post everywhere in one tap." },
];

const testimonials = [
  {
    quote: "Our weekend bookings doubled after the Reels went live. The videos made the restaurant look incredible.",
    name: "Sofia M.",
    role: "Restaurant Owner, Dublin",
  },
  {
    quote: "Professional, fast and so easy to work with. One TikTok brought us more walk-ins than a month of ads.",
    name: "James K.",
    role: "Barbershop Owner, Dublin",
  },
  {
    quote: "He captured the atmosphere of our café perfectly. Followers, engagement and cake sales all went up.",
    name: "Aoife B.",
    role: "Café Owner, Dublin",
  },
];

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
  const [form, setForm] = useState({ name: "", business: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  useReveal();

  const nav = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi! I'm ${form.name} from ${form.business}. ${form.message} (Email: ${form.email})`;
    window.open(waLink(text), "_blank");
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-[#09090d] text-zinc-100 overflow-x-hidden">
      {/* ---------- Sticky nav ---------- */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-[#09090d]/85 backdrop-blur-xl">
        <div className="container-main flex items-center justify-between h-[68px]">
          <a href="#home" className="flex items-center gap-2.5">
            <span className="leading-tight">
              <span className="block font-display font-extrabold tracking-tight text-[15px]">{BRAND}</span>
              <span className="block text-[11px] text-zinc-400 tracking-wide">VIDEO CREATOR • IE</span>
            </span>
          </a>
          <nav className="hidden lg:flex items-center gap-7 text-sm text-zinc-300">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-amber-300 transition-colors font-medium">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <a href={waLink("Hi! I'd like a video for my business.")} target="_blank" rel="noreferrer" className="btn-gold !px-5 !py-2.5">
              <MessageCircle size={16} /> Let's Work Together
            </a>
          </div>
          <button className="lg:hidden p-2 text-zinc-200" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
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
            <a href={waLink("Hi! I'd like a video for my business.")} target="_blank" rel="noreferrer" className="btn-gold mt-3">
              <MessageCircle size={16} /> Let's Work Together
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
                Booking new projects in Dublin
              </span>
              <h1 className="h-display text-[40px] leading-[1.02] sm:text-5xl md:text-[64px] mt-6">
                Short Videos That Make Your <span className="text-gradient-gold">Business Stand Out</span>
              </h1>
              <p className="mt-6 text-zinc-400 text-[16px] md:text-lg leading-relaxed max-w-[600px] mx-auto">
                I create engaging short-form videos for businesses in Dublin, helping brands attract more
                attention, customers, and engagement on social media.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <a href="#contact" className="btn-gold">
                  Let's Work Together <ArrowRight size={17} />
                </a>
                <a href="#work" className="btn-ghost">
                  <Play size={16} className="text-amber-400" /> View My Work
                </a>
              </div>
              <div className="mt-8 flex items-center justify-center gap-5 text-sm text-zinc-400">
                <div className="flex -space-x-2.5">
                  {["R", "C", "B", "G"].map((l, i) => (
                    <span
                      key={i}
                      className={`w-9 h-9 rounded-full border-2 border-[#09090d] flex items-center justify-center text-xs font-bold text-black bg-gradient-to-br ${
                        ["from-amber-200 to-amber-500", "from-rose-200 to-rose-500", "from-sky-200 to-sky-500", "from-emerald-200 to-emerald-500"][i]
                      }`}
                    >
                      {l}
                    </span>
                  ))}
                </div>
                <p className="text-left">
                  <span className="text-white font-semibold">Trusted by local businesses</span>
                  <br />
                  <span className="flex items-center gap-1 mt-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                    ))}
                    <span className="ml-1">5.0 average</span>
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* platform strip */}
          <div className="container-main relative mt-14">
            <div className="overflow-hidden border-y border-white/10 py-4 text-zinc-500 text-sm font-semibold tracking-[0.2em]">
              <div className="flex gap-10 whitespace-nowrap animate-marquee w-max">
                {Array.from({ length: 2 }).flatMap((_, k) =>
                  ["INSTAGRAM REELS", "TIKTOK", "YOUTUBE SHORTS", "RESTAURANTS", "CAFÉS", "BARBERSHOPS", "GYMS", "HOTELS", "SALONS"].map((t, i) => (
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
                  alt="Portrait of Asbel Nascimento, freelance video creator in Dublin"
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                <div className="absolute bottom-0 p-6 inset-x-0">
                  <p className="font-display font-extrabold text-xl">{BRAND}</p>
                  <p className="text-amber-300 text-sm font-medium flex items-center gap-1.5 mt-1">
                    <MapPin size={14} /> Based in Dublin • Serving Dublin
                  </p>
                </div>
                <span className="absolute top-4 left-4 text-[11px] font-bold tracking-widest bg-amber-400 text-black px-3 py-1.5 rounded-full">YOUR CREATOR</span>
              </div>
            </div>
            <div className="reveal order-1 lg:order-2">
              <span className="eyebrow">About me</span>
              <h2 className="h-display text-3xl md:text-[44px] leading-tight mt-5">
                Hi, I'm Asbel — I help Irish businesses <span className="text-gradient-gold">get seen.</span>
              </h2>
              <p className="mt-6 text-zinc-400 leading-relaxed">
                I'm a freelance video creator based in Dublin. I help local businesses — restaurants, cafés,
                barbershops, salons, gyms, hotels and shops — create professional, engaging content for social media.
              </p>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                No big crew, no complicated shoots. I come to you, capture the best of what you do, and turn it into
                short videos people actually watch, share and act on. Friendly, fast and fully focused on your brand.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-3 max-w-[480px]">
                {[
                  ["120+", "Videos delivered"],
                  ["1M+", "Organic views"],
                  ["40+", "Happy businesses"],
                ].map(([n, l]) => (
                  <div key={l} className="card-dark p-4 text-center">
                    <p className="font-display font-extrabold text-2xl text-amber-300">{n}</p>
                    <p className="text-xs text-zinc-400 mt-1">{l}</p>
                  </div>
                ))}
              </div>
              <a href="#contact" className="btn-ghost mt-8">
                Say hello <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* ---------- 3. SERVICES ---------- */}
        <section id="services" className="py-20 md:py-28 border-t border-white/5 bg-white/[0.015]">
          <div className="container-main">
            <div className="reveal max-w-2xl">
              <span className="eyebrow">Services</span>
              <h2 className="h-display text-3xl md:text-[44px] leading-tight mt-5">
                Everything your business needs to <span className="text-gradient-gold">win on social.</span>
              </h2>
              <p className="text-zinc-400 mt-4">One creator, end to end: idea, filming, editing and delivery ready to post.</p>
            </div>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((s, i) => (
                <article key={s.title} className="reveal card-dark p-7" style={{ transitionDelay: `${i * 60}ms` }}>
                  <span className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/25 flex items-center justify-center text-amber-300">
                    <s.icon size={22} />
                  </span>
                  <h3 className="font-display font-bold text-lg mt-5">{s.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mt-2">{s.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- 4. WHY ---------- */}
        <section id="why" className="py-20 md:py-28 border-t border-white/5">
          <div className="container-main grid lg:grid-cols-[1fr_1.2fr] gap-12">
            <div className="reveal">
              <span className="eyebrow">Why work with me</span>
              <h2 className="h-display text-3xl md:text-[44px] leading-tight mt-5">
                Content that looks premium — <span className="text-gradient-gold">and performs.</span>
              </h2>
              <p className="text-zinc-400 mt-4 leading-relaxed">
                Business owners don't need "just a video". They need foot traffic, bookings and sales. Every edit I
                deliver is built for that.
              </p>
              <a href={waLink("Hi! I'd like to know more about working together.")} target="_blank" rel="noreferrer" className="btn-gold mt-7">
                <MessageCircle size={17} /> Ask on WhatsApp
              </a>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((b, i) => (
                <div key={b.title} className="reveal card-dark p-6" style={{ transitionDelay: `${i * 60}ms` }}>
                  <b.icon size={20} className="text-amber-300" />
                  <h3 className="font-display font-bold mt-3">{b.title}</h3>
                  <p className="text-sm text-zinc-400 mt-1.5 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- 5. WORK / NICHES ---------- */}
        <section id="work" className="py-20 md:py-28 border-t border-white/5 bg-white/[0.015]">
          <div className="container-main">
            <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-xl">
                <span className="eyebrow">Who I create for</span>
                <h2 className="h-display text-3xl md:text-[44px] leading-tight mt-5">
                  Made for <span className="text-gradient-gold">your type of business.</span>
                </h2>
                <p className="text-zinc-400 mt-4">Pick your segment — I create the video concept around it.</p>
              </div>
              <a href="#contact" className="btn-ghost shrink-0">
                Get this for your business <ArrowRight size={16} />
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
              {niches.map((n, i) => (
                <a
                  key={n.name}
                  href={waLink(`Hi! I own a ${n.name.toLowerCase()} business and I'd like a video.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="reveal card-dark p-7 text-center group"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <span className="text-5xl group-hover:scale-110 transition-transform inline-block">{n.emoji}</span>
                  <h3 className="font-display font-bold text-lg mt-4">{n.name}</h3>
                  <p className="text-sm text-zinc-400 mt-2 leading-relaxed">{n.desc}</p>
                  <span className="inline-flex items-center gap-1.5 mt-4 text-[13px] font-semibold text-amber-300">
                    I want this <ArrowRight size={14} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- 6. PROCESS ---------- */}
        <section id="process" className="py-20 md:py-28 border-t border-white/5">
          <div className="container-main">
            <div className="reveal text-center max-w-xl mx-auto">
              <span className="eyebrow">How it works</span>
              <h2 className="h-display text-3xl md:text-[44px] leading-tight mt-5">
                From first message to <span className="text-gradient-gold">posted video.</span>
              </h2>
            </div>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {steps.map((s, i) => (
                <div key={s.n} className="reveal card-dark p-7 relative" style={{ transitionDelay: `${i * 80}ms` }}>
                  <p className="font-display font-extrabold text-4xl text-white/10">{s.n}</p>
                  <h3 className="font-display font-bold text-lg mt-2">{s.title}</h3>
                  <p className="text-sm text-zinc-400 mt-2 leading-relaxed">{s.desc}</p>
                  {i < 3 && <ChevronRight size={18} className="hidden lg:block absolute top-1/2 -right-3.5 text-amber-500" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- 7. TESTIMONIALS ---------- */}
        <section id="testimonials" className="py-20 md:py-28 border-t border-white/5 bg-white/[0.015]">
          <div className="container-main">
            <div className="reveal max-w-xl">
              <span className="eyebrow">Testimonials</span>
              <h2 className="h-display text-3xl md:text-[44px] leading-tight mt-5">
                Business owners <span className="text-gradient-gold">love the results.</span>
              </h2>
            </div>
            <div className="mt-10 grid md:grid-cols-3 gap-4">
              {testimonials.map((t, i) => (
                <figure key={t.name} className="reveal card-dark p-7 flex flex-col" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} size={15} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-[15px] leading-relaxed text-zinc-200 flex-1">"{t.quote}"</blockquote>
                  <figcaption className="mt-6 pt-5 border-t border-white/10">
                    <p className="font-display font-bold text-sm">{t.name}</p>
                    <p className="text-xs text-zinc-500 mt-0.5">{t.role}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- 8. CTA ---------- */}
        <section className="py-16 md:py-24">
          <div className="container-main">
            <div className="reveal relative overflow-hidden rounded-[28px] border border-amber-400/25 bg-gradient-to-br from-amber-500/15 via-orange-600/10 to-transparent p-10 md:p-16 text-center">
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[240px] bg-amber-500/25 blur-[100px] rounded-full pointer-events-none" />
              <h2 className="h-display text-3xl md:text-5xl relative">Ready to Showcase Your Business?</h2>
              <p className="text-zinc-300 mt-4 max-w-xl mx-auto relative">
                Let's create content that helps your business stand out and get noticed online.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 relative">
                <a href="#contact" className="btn-gold">
                  Get in Touch <ArrowRight size={17} />
                </a>
                <a href={waLink("Hi! I'm ready to showcase my business.")} target="_blank" rel="noreferrer" className="btn-ghost">
                  <MessageCircle size={16} className="text-emerald-400" /> WhatsApp me
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- 9. CONTACT ---------- */}
        <section id="contact" className="py-20 md:py-28 border-t border-white/5">
          <div className="container-main grid lg:grid-cols-2 gap-10">
            <div className="reveal">
              <span className="eyebrow">Contact</span>
              <h2 className="h-display text-3xl md:text-[44px] leading-tight mt-5">
                Let's make your <span className="text-gradient-gold">next viral video.</span>
              </h2>
              <p className="text-zinc-400 mt-4">Fastest reply on WhatsApp — usually within a few hours.</p>
              <div className="mt-7 grid gap-3">
                <a href={waLink("Hi! I'd like a video for my business.")} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-4 hover:bg-emerald-400/15 transition-colors">
                  <span className="w-11 h-11 rounded-xl bg-emerald-400 text-black flex items-center justify-center shrink-0"><MessageCircle size={20} /></span>
                  <span>
                    <span className="block text-xs font-bold tracking-widest text-emerald-300">WHATSAPP • FASTEST</span>
                    <span className="block font-display font-bold">{PHONE_DISPLAY}</span>
                  </span>
                  <ArrowRight size={18} className="ml-auto text-emerald-300" />
                </a>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 card-dark p-4">
                  <span className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0"><Mail size={20} /></span>
                  <span>
                    <span className="block text-xs font-bold tracking-widest text-zinc-500">EMAIL</span>
                    <span className="block font-semibold text-[15px]">{EMAIL}</span>
                  </span>
                </a>
                <a href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`} className="flex items-center gap-3 card-dark p-4">
                  <Phone size={18} className="text-amber-300 shrink-0" />
                  <span className="text-sm font-semibold">Call me</span>
                </a>
              </div>
            </div>

            <div className="reveal">
              <form onSubmit={submit} className="card-dark p-7 md:p-8 !transform-none">
                <h3 className="font-display font-bold text-xl">Request a free quote</h3>
                <p className="text-sm text-zinc-500 mt-1">Fill this in — it opens WhatsApp with your message ready.</p>
                <div className="mt-6 grid gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className="grid gap-1.5 text-sm font-medium">
                      Name
                      <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-[15px] outline-none focus:border-amber-400/60 placeholder:text-zinc-600" />
                    </label>
                    <label className="grid gap-1.5 text-sm font-medium">
                      Business
                      <input value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })} placeholder="Café, salon…" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-[15px] outline-none focus:border-amber-400/60 placeholder:text-zinc-600" />
                    </label>
                  </div>
                  <label className="grid gap-1.5 text-sm font-medium">
                    Email
                    <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@business.ie" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-[15px] outline-none focus:border-amber-400/60 placeholder:text-zinc-600" />
                  </label>
                  <label className="grid gap-1.5 text-sm font-medium">
                    About your business
                    <textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="What do you do? What kind of video do you want?" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-[15px] outline-none focus:border-amber-400/60 placeholder:text-zinc-600 resize-none" />
                  </label>
                  <button type="submit" className="btn-gold w-full">
                    <Send size={16} /> Send via WhatsApp
                  </button>
                  {sent && <p className="text-sm text-emerald-300 text-center">Opening WhatsApp… talk soon! 🎬</p>}
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* ---------- 10. FOOTER ---------- */}
      <footer className="border-t border-white/10 bg-black/40">
        <div className="container-main py-12 grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-300 to-orange-600 flex items-center justify-center text-black font-extrabold font-display">A</span>
              <span className="font-display font-extrabold">{BRAND}</span>
            </div>
            <p className="text-sm text-zinc-500 mt-4 leading-relaxed">{TAGLINE}. Short videos that bring customers to local businesses in Dublin.</p>
            <div className="flex gap-2.5 mt-5">
              {[
                { icon: Youtube, href: "https://youtube.com/", label: "YouTube" },
                { icon: Facebook, href: "https://facebook.com/", label: "Facebook" },
                { icon: Mail, href: `mailto:${EMAIL}`, label: "Email" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-zinc-300 hover:text-amber-300 hover:border-amber-400/40 transition-all">
                  <s.icon size={17} />
                </a>
              ))}
            </div>
          </div>
          <nav aria-label="Footer">
            <p className="text-xs font-bold tracking-[0.18em] text-zinc-500">EXPLORE</p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-zinc-300">
              {[["About", "#about"], ["Services", "#services"], ["Work", "#work"], ["Process", "#process"], ["Reviews", "#testimonials"], ["Contact", "#contact"]].map(([l, h]) => (
                <li key={h}><a href={h} className="hover:text-amber-300 transition-colors">{l}</a></li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="text-xs font-bold tracking-[0.18em] text-zinc-500">GET IN TOUCH</p>
            <ul className="mt-4 space-y-2.5 text-sm text-zinc-300">
              <li><a className="hover:text-amber-300" href={waLink("Hi!") } target="_blank" rel="noreferrer">WhatsApp: {PHONE_DISPLAY}</a></li>
              <li><a className="hover:text-amber-300" href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
              <li className="flex items-center gap-1.5 text-zinc-500"><MapPin size={14} /> Dublin • Serving Dublin</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="container-main py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-600">
            <p>© {new Date().getFullYear()} {BRAND}. All rights reserved.</p>
            <p>Made with 🎬 in Dublin</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={waLink("Hi! I'd like a video for my business.")}
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

import { PositionCard } from "@/components/PositionCard";
import { positions } from "@shared/positions";
import { Linkedin, Instagram } from "lucide-react";
import { TextShimmer } from "@/components/ui/text-shimmer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-12 pb-16 px-4">
        {/* Decorative curved background */}
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-b-3xl -z-10" />

        <div className="max-w-4xl mx-auto">
          {/* Main greeting */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Hi, I'm
                <br />
                <span className="text-primary">ASBEL</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                Thank you for reviewing my application.
              </p>
            </div>

            {/* Profile with Social Icons */}
            <div className="flex-shrink-0 flex items-center gap-4">
              {/* Social Icons - Vertical */}
              <div className="flex flex-col gap-3">
                <a
                  href="https://www.linkedin.com/in/asbelnascimento/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://www.instagram.com/eubebel.ofc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  <Instagram size={20} />
                </a>
              </div>

              {/* Profile Image Circle */}
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary shadow-2xl">
                <img
                  src="/profile.jpeg"
                  alt="Asbel Nascimento"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Position Selection */}
          <div className="mb-16">
            <TextShimmer as="h2" className="text-xl font-semibold text-center mb-8 text-foreground" duration={3} spread={2}>
              Please select the position I applied for.
            </TextShimmer>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {positions.map((position) => (
                <PositionCard
                  key={position.id}
                  id={position.id}
                  title={position.title}
                  emoji={position.emoji}
                />
              ))}
            </div>
          </div>

          {/* Footer Message */}
          <div className="text-center mt-16 pt-8 border-t border-border">
            <p className="text-muted-foreground mb-4">
              Liked my resume? Let's create one that works for you too.
            </p>
            <a
              href="mailto:asbel.nascimento123456@gmail.com"
              className="inline-block px-6 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

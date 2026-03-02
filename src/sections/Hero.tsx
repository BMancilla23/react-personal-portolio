import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { LinkButton } from "@/components/LinkButton";
import { ArrowRight, Download, Github, Linkedin, Twitter } from "lucide-react";

const skills = [
  "React",
  "Nextjs",
  "TypeScript",
  "Nodejs",
  "Nestjs",
  "Laravel",
  "Vue.js",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
  "Git",
];
export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
    >
      {/* bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-backgound/80 to-background"></div>
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>
      {/* Content */}
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Desarrollador de software - Full stack
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <Heading
                as="h1"
                size="xl"
                className="animate-fade-in animation-delay-100"
              >
                Creando
                <span className="text-primary glow-text"> experiencias</span>
                <br />
                digitales con
                <br />
                <span className="font-serif italic font-normal text-white">
                  precisión
                </span>
              </Heading>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Desarrollador de software con mentalidad de crecimiento y visión
                de producto. Busco impulsar proyectos que integren tecnología,
                innovación y buenas prácticas de desarrollo.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <LinkButton href="#contact" size="lg">
                Contáctame <ArrowRight className="w-5 h-5" />
              </LinkButton>
              {/* <AnimatedBorderButton> */}
              <a
                href="/curriculum_vitae.pdf"
                target="_black"
                rel="noopener"
                className="flex gap-2 items-center bg-transparent border border-border text-foreground hover:border-primary/50 transition-all duration-1000 px-8 py-4 text-lg font-medium rounded-full"
              >
                <Download className="w-5 h-5" />
                <span>Descargar CV</span>
              </a>
              {/* </AnimatedBorderButton> */}
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Sigueme:</span>
              {[
                {
                  icon: Github,
                  href: "#",
                },
                {
                  icon: Linkedin,
                  href: "#",
                },
                {
                  icon: Twitter,
                  href: "#",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transtion-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Profile Image  */}
          <div className="relative animate-fade-in  animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0  rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10  blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-photo.png"
                  alt="Profile photo"
                  className="w-full aspect-4/5 object-cover rounded-2xl "
                />
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Tecnologías con las que trabajo
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

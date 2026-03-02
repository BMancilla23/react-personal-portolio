import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";

const studies = [
  {
    institution: "Instituto CERTUS",
    degree: "Desarrollo de Software",
    period: "2021 - 2024",
    description:
      "Formación en desarrollo de software con énfasis en tecnologías web modernas.",
    technologies: ["javascript", "nodejs", "mysql", "react"],
  },
  {
    institution: "Plataforma de Educación Virtual Udemy",
    degree: "Desarrollo full stack",
    period: "2024 - Actualidad",
    description:
      "Cursos especializados en desarrollo full stack, abarcando desde frontend hasta backend.",
    technologies: ["typescript", "nextjs", "nestjs", "laravel", "vuejs"],
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <Container className="relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Carrera Profesional
          </span>
          <Heading
            as="h2"
            size="lg"
            className="mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground"
          >
            Mi trayectoria{" "}
            <span className="font-serif italic font-normal text-white">
              académica
            </span>
          </Heading>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Desde mis inicios en el desarrollo de software, he buscado
            constantemente ampliar mis conocimientos y habilidades.
          </p>
        </div>
        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32, 178, 166, 0.8)]" />

          {/* Education Items */}
          <div className="space-y-12">
            {studies.map((std, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0  w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {std.period && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-8 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}
                >
                  <div
                    className={
                      "glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500"
                    }
                  >
                    <span className="text-sm text-primary font-medium">
                      {std.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{std.degree}</h3>
                    <p className="text-muted-foreground">{std.institution}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {std.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {std.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "Project One",
    description: "A web application built with React and Node.js.",
    image: "https://via.placeholder.com/400x300",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#",
    github: "https://github.com/example/project-one",
  },
  {
    title: "Project Two",
    description: "A mobile app developed using Flutter.",
    image: "https://via.placeholder.com/400x300",
    tags: ["Flutter", "Dart", "Firebase"],
    link: "#",
    github: "https://github.com/example/project-two",
  },
  {
    title: "Project Three",
    description: "An e-commerce platform built with Laravel.",
    image: "https://via.placeholder.com/400x300",
    tags: ["Laravel", "PHP", "MySQL"],
    link: "#",
    github: "https://github.com/example/project-three",
  },
  {
    title: "Project Four",
    description: "A machine learning project using Python and TensorFlow.",
    image: "https://via.placeholder.com/400x300",
    tags: ["Python", "TensorFlow", "Machine Learning"],
    link: "#",
    github: "https://github.com/example/project-four",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-12 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}

        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Proyecto Destacado
          </span>
          <Heading
            as="h2"
            size="lg"
            align="center"
            className="mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground"
          >
            Proyectos que{" "}
            <span className="font-serif italic font-normal text-white">
              generan impacto.
            </span>
          </Heading>
          <p className="text-muted-foreground animate-fade-in animate-delay-200">
            Una selección de mi trabajo reciente, desde complejas aplicaciones
            web hasta herramientas innovadoras que resuelven problemas del mundo
            real.
          </p>
        </div>
        {/* Projects Grid */}
        <Container className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Container>
        {/* View All CTA */}
        <div className="flex justify-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            Ver Todos los Proyectos <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};

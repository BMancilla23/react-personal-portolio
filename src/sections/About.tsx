import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highLights = [
  {
    icon: Code2,
    title: "Código limpio",
    description:
      "Me esfuerzo por escribir código que sea fácil de entender y mantener a largo plazo.",
  },
  {
    icon: Rocket,
    title: "Rendimiento",
    description:
      "Optimizo el rendimiento de las aplicaciones para ofrecer una experiencia fluida al usuario.",
  },
  {
    icon: Users,
    title: "Colaboración",
    description:
      "Me adapto bien a trabajar en equipo, compartiendo conocimientos y aprendiendo de otros desarrolladores.",
  },
  {
    icon: Lightbulb,
    title: "Innovación",
    description:
      "Estoy siempre buscando nuevas tecnologías y enfoques para mejorar mis proyectos y mantenerme actualizado con las últimas tendencias en desarrollo.",
  },
];
export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <Container className="relative z-10">
        <div className="grid  grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                Sobre mí
              </span>
            </div>
            <Heading
              as="h2"
              size="lg"
              className="animate-fade-in animation-delay-100o text-secondary-foreground"
            >
              Construyendo el futuro.{" "}
              <span className="font-serif italic font-normal text-white">
                Un componente o módulo a la vez
              </span>
            </Heading>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Soy un desarrollador de software que crea experiencias digitales
                que sean tanto funcionales como estéticamente atractivas. Con
                una formación en desarrollo full stack.
              </p>
              <p>
                Me especializo en construir aplicaciones web modernas utilizando
                tecnologías como React, Laravel, Vue.js Node.js y bases de datos
                SQL y NoSQL.
              </p>
              <p>
                Mi enfoque se centra en escribir código limpio, optimizar el
                rendimiento. Siempre estoy buscando aprender nuevas tecnologías
                y mejorar mis habilidades para mantenerme a la vanguardia en el
                campo del desarrollo de software
              </p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "Mi misión es crear aplicaciones que no solo cumplan con los
                requisitos funcionales, sino que también ofrezcan una
                experiencia de usuario excepcional."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highLights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{
                  animationDelay: `${(idx + 1) * 100}ms`,
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

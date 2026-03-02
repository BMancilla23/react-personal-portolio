import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { LinkButton } from "@/components/LinkButton";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

type Props = {};

const navLinks = [
  { href: "#about", label: "Sobre mí" },
  { href: "#projects", label: "Proyectos" },
  { href: "#education", label: "Educación" },
  { href: "#contact", label: "Contacto" },
];

export const Navbar = ({}: Props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    // console.log(
    //   Array.from(document.querySelectorAll("section[id]")).map((s) => s.id),
    // );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      },

      // (entries) => {
      //   let maxRatio = 0;
      //   let visibleSection = "";

      //   entries.forEach((entry) => {
      //     if (entry.intersectionRatio > maxRatio) {
      //       maxRatio = entry.intersectionRatio;
      //       visibleSection = entry.target.id;
      //     }
      //   });

      //   if (visibleSection) {
      //     setActiveSection(visibleSection);
      //   }
      // },
      // {
      //   threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      // },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0  right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3 border-none" : "bg-transparent py-5"} z-50`}
    >
      <Container>
        <nav className="flex justify-between items-center">
          <a
            href=""
            className="text-xl font-bold tracking-tight hover:text-primary"
          >
            BM <span className="text-primary">.</span>
          </a>
          {/* Desktop Nav */}
          <div className=" hidden md:flex items-center gap-1">
            <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={index}
                    href={link.href}
                    className={`px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface ${isActive ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <LinkButton href="#contact" size="sm">
              Contáctame
            </LinkButton>
          </div>

          {/* Mobile Menu Button*/}
          <button
            className="md:hidden p-2 text-foreground cursor-pointer"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </a>
            ))}
            <Button onClick={() => setIsMobileMenuOpen(false)}>
              Contáctame
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

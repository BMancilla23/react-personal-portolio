import { Container } from "@/components/Container";
import { Github, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "#",
    label: "Github",
  },
  {
    icon: Linkedin,
    href: "#",
    label: "Linkedin",
  },
  {
    icon: Twitter,
    href: "#",
    label: "Twitter",
  },
];

const footerLinks = [
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#projects",
    label: "Projects",
  },
  {
    href: "#experience",
    label: "Experience",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-12 border-t border-border">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              BM <span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              &copy; {currentYear} Bryan Mancilla. Todos los derechos reservados
            </p>
          </div>

          {/* links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                href={social.href}
                key={social.label}
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

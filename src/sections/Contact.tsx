import { Button } from "@/components/Button";
import {
  AlertCircle,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "bmancilla119@gmail.com",
    href: "mailto:bmancilla@example.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+51 935855675",
    href: "tel:+51935855675",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "SJL - Lima",
    href: "#",
  },
];
type submitStatusType = "success" | "error" | null;

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [submitStatus, setSubmitStatus] = useState<{
    type: submitStatusType;
    message: string;
  }>({
    type: null,
    message: "",
  });

  useEffect(() => {
    if (submitStatus.type) {
      const timer = setTimeout(() => {
        setSubmitStatus({
          type: null,
          message: "",
        });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus.type]);

  const handleChange =
    (field: keyof typeof formData) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));

      if (submitStatus.type) {
        setSubmitStatus({ type: null, message: "" });
      }
    };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailsJS configuration is missing. Please check your environment variables",
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey,
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err: unknown) {
      console.log("EmailJS error:", err);
      const message =
        err instanceof Error
          ? err.message
          : "Failed to send message. Please try again later.";
      setSubmitStatus({
        type: "error",
        message: message,
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4  right-1/4 w-64 h-64 bg-highlight rounded-full blur-3xl" />
      </div> */}

      <Container className="px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Ponerse en contacto
          </span>
          <Heading
            as="h2"
            align="center"
            className="mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground"
          >
            Construyamos{" "}
            <span className="font-serif italic font-normal text-white">
              algo genial.
            </span>
          </Heading>

          <p className="text-muted-foreground animate-fade-in">
            ¿Tienes un proyecto en mente? Me encantaría escucharlo. Envíame un
            mensaje y discutamos cómo podemos trabajar juntos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
            <form action="" className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Tu nombre..."
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  value={formData.name}
                  // onChange={(e) =>
                  //   setFormData({ ...formData, name: e.target.value })
                  // }
                  onChange={handleChange("name")}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Correo
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="Example@email.com"
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  value={formData.email}
                  // onChange={(e) =>
                  //   setFormData({ ...formData, email: e.target.value })
                  // }
                  onChange={handleChange("email")}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  required
                  placeholder="Tu mensaje..."
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                  rows={5}
                  value={formData.message}
                  // onChange={(e) =>
                  //   setFormData({ ...formData, message: e.target.value })
                  // }
                  onChange={handleChange("message")}
                />
              </div>

              <Button
                className="w-full"
                type="submit"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>Enviando...</>
                ) : (
                  <>
                    Enviar mensaje <Send className="size-4" />
                  </>
                )}
              </Button>

              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-300 ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/20 text-green-500"
                      : "bg-red-500/10 border border-red-500/20 text-red-500"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 shrink-0" />
                  ) : (
                    <AlertCircle className="size-5 shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact info */}
          <div className="space-y-6 animate-fade-in animation-delay-400">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Información de contacto
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    href={item.href}
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>

                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="glass rounded-3xl p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Actualmente disponible</span>
              </div>

              <p className="text-muted-foreground text-sm">
                Actualmente estoy abierto a nuevas oportunidades y proyectos,
                ¡hablemos!
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

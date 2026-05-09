import { Link } from "wouter";
import { Linkedin, Youtube, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logoImg from "@assets/logo_280_9x95_1_1766715570899a.png";
import logoDarkImg from "@assets/logo_dark.png";

const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/pedromachado-aicron",
    icon: Linkedin,
    color: "hover:text-[#0A66C2]",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@pedromachado-aicron",
    icon: Youtube,
    color: "hover:text-[#FF0000]",
  },
];

export function Footer() {
  const { t, language } = useLanguage();

  const links =
    language === "es"
      ? [
          { label: "Inicio", href: "/" },
          { label: "Servicios", href: "/services" },
        ]
      : [
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ];

  const tagline =
    language === "es"
      ? "Sistemas tecnológicos que generan resultados reales."
      : "Technological systems that generate real results.";

  const rights =
    language === "es"
      ? `© ${new Date().getFullYear()} AICRON. Todos los derechos reservados.`
      : `© ${new Date().getFullYear()} AICRON. All rights reserved.`;

  const locationLabel =
    language === "es"
      ? "Houston, TX · América Latina & EE.UU."
      : "Houston, TX · Latin America & USA";

  return (
    <footer className="bg-gray-900 dark:bg-black border-t border-gray-800 text-gray-400">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Marca */}
          <div className="space-y-4">
            <Link href="/">
              <img src={logoDarkImg} alt="AICRON" className="h-9 w-auto cursor-pointer" />
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">{tagline}</p>
            <div className="flex items-center gap-1.5 text-sm">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <span>{locationLabel}</span>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
              {language === "es" ? "Páginas" : "Pages"}
            </p>
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <p className="text-sm hover:text-white transition-colors cursor-pointer w-fit">
                  {link.label}
                </p>
              </Link>
            ))}
          </div>

          {/* Redes sociales */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
              {language === "es" ? "Síguenos" : "Follow us"}
            </p>
            <div className="flex flex-col gap-3">
              {socials.map(({ label, href, icon: Icon, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2.5 text-sm transition-colors ${color}`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <span>{rights}</span>
          <span className="text-gray-700">
            {language === "es" ? "Hecho con intención en Houston, TX" : "Built with intent in Houston, TX"}
          </span>
        </div>
      </div>
    </footer>
  );
}

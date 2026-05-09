import express, { type Express, type Request, type Response } from "express";
import fs from "fs";
import path from "path";

type Lang = "es" | "en";

interface RouteMeta {
  lang: string;
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  canonical: string;
}

const BASE_URL = process.env.BASE_URL ?? "https://aicron.cloud";

const routeMeta: Record<string, Record<Lang, RouteMeta>> = {
  "/": {
    es: {
      lang: "es",
      title: "AICRON — Automatización con IA para empresas en LATAM y EE.UU.",
      description: "Automatizamos procesos, implementamos IA y eliminamos fricción operativa. Agencia B2B en Houston, TX. Chatbots, CRM, flujos automáticos y blockchain. Diagnóstico gratuito.",
      keywords: "automatización con IA, agencia de automatización, chatbots para empresas, integración CRM, automatización de procesos, inteligencia artificial para negocios, Houston TX, LATAM",
      ogTitle: "AICRON — Automatización con IA para empresas",
      ogDescription: "Eliminamos la fricción operativa con IA y automatización. Diagnóstico gratuito · ROI medible · Houston, TX.",
      canonical: `${BASE_URL}/`,
    },
    en: {
      lang: "en",
      title: "AICRON — AI Automation Agency for Businesses in LATAM & USA",
      description: "We automate processes, implement AI, and eliminate operational friction. B2B agency in Houston, TX. Chatbots, CRM, automated workflows, and blockchain. Free diagnosis.",
      keywords: "AI automation agency, business automation, chatbots for businesses, CRM integration, process automation, artificial intelligence for business, Houston TX, LATAM",
      ogTitle: "AICRON — AI Automation for Businesses",
      ogDescription: "We eliminate operational friction with AI and automation. Free diagnosis · Measurable ROI · Houston, TX.",
      canonical: `${BASE_URL}/`,
    },
  },
  "/services": {
    es: {
      lang: "es",
      title: "Servicios y Precios — Automatización IA, Blockchain | AICRON",
      description: "Paquetes Starter ($450), Growth ($1,800) y Enterprise ($6,900+). Chatbots, flujos automáticos, diseño de sistemas, contratos inteligentes. Elige según tu problema real.",
      keywords: "servicios automatización IA, precios chatbot empresas, paquetes automatización, contratos inteligentes blockchain, diseño de sistemas empresariales, CRM automation",
      ogTitle: "Servicios AICRON — Automatización IA y Blockchain",
      ogDescription: "Paquetes desde $450. Chatbots, flujos automáticos, CRM, blockchain. Cada solución diseñada para tu operación.",
      canonical: `${BASE_URL}/services`,
    },
    en: {
      lang: "en",
      title: "Services & Pricing — AI Automation, Blockchain | AICRON",
      description: "Starter ($450), Growth ($1,800) and Enterprise ($6,900+) packages. Chatbots, automated workflows, systems design, smart contracts. Choose based on your real problem.",
      keywords: "AI automation services, business chatbot pricing, automation packages, blockchain smart contracts, enterprise systems design, CRM automation services",
      ogTitle: "AICRON Services — AI Automation & Blockchain",
      ogDescription: "Packages from $450. Chatbots, automated workflows, CRM, blockchain. Every solution designed for your operation.",
      canonical: `${BASE_URL}/services`,
    },
  },
  "/about": {
    es: {
      lang: "es",
      title: "Pedro Machado — Fundador de AICRON | Ingeniero IA & Blockchain",
      description: "Ingeniero en Telecomunicaciones, blockchain developer desde 2021, pivot a IA en 2025. Fundador de AICRON en Houston, TX. Construcción real, honestidad técnica, ROI medible.",
      keywords: "Pedro Machado AICRON, fundador agencia IA, ingeniero blockchain Houston, automatización IA Houston TX, blockchain developer LATAM",
      ogTitle: "Pedro Machado — Fundador de AICRON",
      ogDescription: "De Cuba a Houston construyendo sistemas de IA reales. Ingeniero, blockchain dev desde 2021, fundador de AICRON.",
      canonical: `${BASE_URL}/about`,
    },
    en: {
      lang: "en",
      title: "Pedro Machado — AICRON Founder | AI & Blockchain Engineer",
      description: "Telecommunications engineer, blockchain developer since 2021, AI pivot in 2025. AICRON founder in Houston, TX. Real building, technical honesty, measurable ROI.",
      keywords: "Pedro Machado AICRON, AI agency founder, blockchain engineer Houston, AI automation Houston TX, blockchain developer LATAM",
      ogTitle: "Pedro Machado — AICRON Founder",
      ogDescription: "From Cuba to Houston building real AI systems. Engineer, blockchain dev since 2021, AICRON founder.",
      canonical: `${BASE_URL}/about`,
    },
  },
};

const defaultMeta = routeMeta["/"];

function detectLang(req: Request): Lang {
  const acceptLang = (req.headers["accept-language"] || "").toLowerCase();
  return acceptLang.startsWith("es") ? "es" : "en";
}

function getRouteMeta(pathname: string, lang: Lang): RouteMeta {
  const normalized = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  return (routeMeta[normalized] ?? defaultMeta)[lang];
}

const orgSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${BASE_URL}/#organization`,
  name: "AICRON",
  url: BASE_URL,
  logo: `${BASE_URL}/favicon.png`,
  image: `${BASE_URL}/og-image.png`,
  email: "hello@aicron.cloud",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Houston",
    addressRegion: "TX",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Mexico" },
    { "@type": "Country", name: "Colombia" },
    { "@type": "Country", name: "Argentina" },
    { "@type": "Country", name: "Venezuela" },
    { "@type": "Country", name: "Chile" },
    { "@type": "Country", name: "Peru" },
  ],
  knowsLanguage: ["es", "en"],
  founder: { "@id": `${BASE_URL}/about#pedro-machado` },
  sameAs: [
    "https://linkedin.com/in/pedromachado-aicron",
    "https://www.youtube.com/@pedromachado-aicron",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Automation Services",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Starter",
        description: "Automatización de un proceso concreto. Primer impacto visible con inversión mínima.",
        priceSpecification: { "@type": "PriceSpecification", minPrice: "450", maxPrice: "1500", priceCurrency: "USD" },
      },
      {
        "@type": "Offer",
        name: "Growth",
        description: "Sistema comercial automatizado con ROI medible en conversión y eficiencia operativa.",
        priceSpecification: { "@type": "PriceSpecification", minPrice: "1800", maxPrice: "6900", priceCurrency: "USD" },
      },
      {
        "@type": "Offer",
        name: "Enterprise",
        description: "IA integrada a procesos críticos. Capacidad, control y reducción de riesgo operativo.",
        priceSpecification: { "@type": "PriceSpecification", minPrice: "6900", priceCurrency: "USD" },
      },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "AICRON",
  description: "Agencia de automatización con IA y blockchain para empresas B2B en LATAM y USA",
  inLanguage: ["es", "en"],
  publisher: { "@id": `${BASE_URL}/#organization` },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${BASE_URL}/about#pedro-machado`,
  name: "Pedro Machado",
  jobTitle: "Founder & CEO at AICRON",
  url: `${BASE_URL}/about`,
  image: `${BASE_URL}/pedro_machado.jpg`,
  sameAs: [
    "https://linkedin.com/in/pedromachado-aicron",
    "https://www.youtube.com/@pedromachado-aicron",
  ],
  worksFor: { "@id": `${BASE_URL}/#organization` },
  knowsAbout: ["AI Automation", "Blockchain", "Smart Contracts", "Solana", "EVM", "CRM Integration"],
  alumniOf: {
    "@type": "EducationalOrganization",
    description: "Ingeniería en Telecomunicaciones y Electrónica, graduado 2018",
  },
};

function buildSchemas(pathname: string): string {
  const schemas: object[] = [orgSchema, websiteSchema];
  if (pathname === "/about") schemas.push(personSchema);
  return schemas
    .map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`)
    .join("\n  ");
}

function injectMeta(html: string, meta: RouteMeta, pathname: string): string {
  // lang attribute
  html = html.replace(/<html lang="[^"]*">/, `<html lang="${meta.lang}">`);

  // title
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`);

  // description
  html = html.replace(
    /<meta name="description"[^>]*>/,
    `<meta name="description" content="${meta.description}" />`,
  );

  // canonical + hreflang (inserted after description)
  const linkBlock = `\n  <link rel="canonical" href="${meta.canonical}" />\n  <link rel="alternate" hreflang="es" href="${meta.canonical}" />\n  <link rel="alternate" hreflang="en" href="${meta.canonical}" />\n  <link rel="alternate" hreflang="x-default" href="${meta.canonical}" />`;
  html = html.replace(
    /(<meta name="description"[^>]*>)/,
    `$1${linkBlock}`,
  );

  // keywords (inserted after canonical block)
  html = html.replace(
    /(<link rel="alternate" hreflang="x-default"[^>]*>)/,
    `$1\n  <meta name="keywords" content="${meta.keywords}" />`,
  );

  // Open Graph
  html = html.replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${meta.ogTitle}" />`);
  html = html.replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${meta.ogDescription}" />`);
  html = html.replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${meta.canonical}" />`);

  // Twitter
  html = html.replace(/<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${meta.ogTitle}" />`);
  html = html.replace(/<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${meta.ogDescription}" />`);

  // JSON-LD schemas
  const schemaBlock = buildSchemas(pathname);
  html = html.replace("</head>", `  ${schemaBlock}\n</head>`);

  return html;
}

let cachedHtml: string | null = null;

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath, { index: false }));

  app.use("*", (req: Request, res: Response) => {
    const indexPath = path.resolve(distPath, "index.html");

    if (!cachedHtml || process.env.NODE_ENV !== "production") {
      cachedHtml = fs.readFileSync(indexPath, "utf-8");
    }

    const lang = detectLang(req);
    const pathname = req.originalUrl.split("?")[0];
    const meta = getRouteMeta(pathname, lang);
    const html = injectMeta(cachedHtml, meta, pathname);

    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.send(html);
  });
}

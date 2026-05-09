import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  en: {
    title: "Privacy Policy",
    updated: "Last updated: May 2026",
    footer: "AICRON - Intelligent Automation for Businesses",
    sections: [
      {
        heading: "1. Introduction",
        body: "At AICRON, we take your privacy very seriously. This Privacy Policy explains how we collect, use, and protect your personal information in accordance with applicable international data protection standards.",
      },
      {
        heading: "2. Information We Collect",
        intro: "Through our contact form, we collect the following information:",
        list: [
          "Full name.",
          "Email address.",
          "Phone number / WhatsApp.",
          "Company name.",
          "Business type or industry.",
          "Website or LinkedIn profile (optional).",
          "Preferred contact language.",
          "Main operational challenge you want to solve.",
          "Preferred availability and time slot for contact.",
        ],
      },
      {
        heading: "3. Purpose, Legal Basis, Data Categories and Consent",
        subsections: [
          {
            subheading: "3.1 Purpose of Processing",
            intro: "The personal data provided is processed for the following purposes:",
            list: [
              "To evaluate and propose intelligent automation solutions tailored to your business.",
              "To respond to inquiries submitted through our contact channels.",
              "To schedule and confirm the free exploration session at the requested availability.",
              "To communicate information strictly related to the requested services.",
            ],
            closing: "Personal data will not be used for purposes other than those described above.",
          },
          {
            subheading: "3.2 Minors",
            body: "This website is not intended for individuals under the age of 18. If we become aware that a minor has provided personal data without the required consent of a parent or legal guardian, such data will be deleted immediately.",
          },
          {
            subheading: "3.3 Legal Basis for Processing",
            body: "The processing of personal data is carried out based on the explicit consent of the user, granted by accepting this Privacy Policy and submitting their information through our form.",
          },
          {
            subheading: "3.4 Data Categories",
            body: "The data collected consists of identification, contact, and professional information and does not include special categories of personal data as defined by applicable data protection regulations.",
          },
          {
            subheading: "3.5 Data Retention Period",
            body: "Personal data will be retained for as long as a business relationship exists or until the user requests its deletion. Data may be blocked or retained for the period required by applicable laws before final deletion.",
          },
        ],
      },
      {
        heading: "4. Data Security",
        body: "We implement technical and organizational security measures to protect your data against unauthorized access, loss, or alteration. We use SSL encryption for all communications and secure storage in databases with restricted access.",
      },
      {
        heading: "5. User Rights",
        body: "You have the right to access, correct, restrict, or delete your personal data at any time. To exercise these rights, contact us at the email provided below.",
      },
      {
        heading: "6. International Transfers",
        body: "AICRON complies with legal frameworks for international data transfers, ensuring that our service providers (such as cloud storage and automation webhooks) meet equivalent protection standards.",
      },
      {
        heading: "7. Changes to This Privacy Policy",
        body: "AICRON reserves the right to modify this Privacy Policy at any time in order to adapt it to legislative or regulatory changes, as well as to changes in the provision of our services. Any modification will be published and made available through this website.",
      },
      {
        heading: "8. Contact",
        intro: "For any questions, inquiries, or requests regarding your personal data or this Privacy Policy, you may contact us at:",
        contact: { name: "AICRON", email: "hello@aicron.cloud" },
      },
    ],
  },
  es: {
    title: "Política de Privacidad",
    updated: "Última actualización: mayo de 2026",
    footer: "AICRON - Automatización Inteligente para Empresas",
    sections: [
      {
        heading: "1. Introducción",
        body: "En AICRON, nos tomamos tu privacidad muy en serio. Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos tu información personal de conformidad con los estándares internacionales de protección de datos aplicables.",
      },
      {
        heading: "2. Información que Recopilamos",
        intro: "A través de nuestro formulario de contacto, recopilamos la siguiente información:",
        list: [
          "Nombre completo.",
          "Correo electrónico.",
          "Teléfono / WhatsApp.",
          "Nombre de la empresa.",
          "Tipo de negocio o sector.",
          "Sitio web o perfil de LinkedIn (opcional).",
          "Idioma de contacto preferido.",
          "Principal reto operativo que deseas resolver.",
          "Disponibilidad y franja horaria preferida para el contacto.",
        ],
      },
      {
        heading: "3. Finalidad, Base Legal, Categorías de Datos y Consentimiento",
        subsections: [
          {
            subheading: "3.1 Finalidad del Tratamiento",
            intro: "Los datos personales facilitados se tratan con las siguientes finalidades:",
            list: [
              "Evaluar y proponer soluciones de automatización inteligente adaptadas a tu negocio.",
              "Responder a las consultas enviadas a través de nuestros canales de contacto.",
              "Agendar y confirmar la sesión de exploración gratuita en la disponibilidad solicitada.",
              "Comunicar información estrictamente relacionada con los servicios solicitados.",
            ],
            closing: "Los datos personales no serán utilizados para finalidades distintas a las descritas.",
          },
          {
            subheading: "3.2 Menores de Edad",
            body: "Este sitio web no está dirigido a personas menores de 18 años. Si tenemos conocimiento de que un menor ha facilitado datos personales sin el consentimiento requerido de su padre, madre o tutor legal, dichos datos serán eliminados de inmediato.",
          },
          {
            subheading: "3.3 Base Legal del Tratamiento",
            body: "El tratamiento de los datos personales se realiza con base en el consentimiento explícito del usuario, otorgado al aceptar esta Política de Privacidad y enviar su información a través de nuestro formulario.",
          },
          {
            subheading: "3.4 Categorías de Datos",
            body: "Los datos recopilados son de carácter identificativo, de contacto y profesional, y no incluyen categorías especiales de datos personales conforme a la normativa aplicable.",
          },
          {
            subheading: "3.5 Plazo de Conservación",
            body: "Los datos personales se conservarán mientras exista una relación comercial o hasta que el usuario solicite su supresión. Los datos podrán bloquearse o conservarse durante el período exigido por la legislación aplicable antes de su eliminación definitiva.",
          },
        ],
      },
      {
        heading: "4. Seguridad de los Datos",
        body: "Aplicamos medidas de seguridad técnicas y organizativas para proteger tus datos frente a accesos no autorizados, pérdidas o alteraciones. Usamos cifrado SSL en todas las comunicaciones y almacenamiento seguro en bases de datos con acceso restringido.",
      },
      {
        heading: "5. Derechos del Usuario",
        body: "Tienes derecho a acceder, rectificar, limitar o suprimir tus datos personales en cualquier momento. Para ejercer estos derechos, contáctanos en el correo indicado a continuación.",
      },
      {
        heading: "6. Transferencias Internacionales",
        body: "AICRON cumple con los marcos legales aplicables a las transferencias internacionales de datos, garantizando que nuestros proveedores de servicios (como almacenamiento en la nube y webhooks de automatización) cumplan estándares de protección equivalentes.",
      },
      {
        heading: "7. Modificaciones de esta Política",
        body: "AICRON se reserva el derecho de modificar esta Política de Privacidad en cualquier momento para adaptarla a cambios legislativos, normativos o en la prestación de nuestros servicios. Cualquier modificación será publicada y estará disponible en este sitio web.",
      },
      {
        heading: "8. Contacto",
        intro: "Para cualquier pregunta, consulta o solicitud relacionada con tus datos personales o esta Política de Privacidad, puedes contactarnos en:",
        contact: { name: "AICRON", email: "hello@aicron.cloud" },
      },
    ],
  },
};

type Section = (typeof content.en.sections)[number];

function renderSection(section: Section, idx: number) {
  if ("subsections" in section && section.subsections) {
    return (
      <section key={idx}>
        <h3 className="text-lg font-semibold text-foreground">{section.heading}</h3>
        {section.subsections.map((sub, si) => (
          <section key={si} className="mt-3">
            <h4 className="font-semibold text-foreground">{sub.subheading}</h4>
            {"intro" in sub && sub.intro && <p>{sub.intro}</p>}
            {"list" in sub && sub.list && (
              <ul className="list-disc pl-5 space-y-1">
                {sub.list.map((item, li) => <li key={li}>{item}</li>)}
              </ul>
            )}
            {"closing" in sub && sub.closing && <p>{sub.closing}</p>}
            {"body" in sub && sub.body && <p>{sub.body}</p>}
          </section>
        ))}
      </section>
    );
  }

  if ("contact" in section && section.contact) {
    return (
      <section key={idx}>
        <h3 className="text-lg font-semibold text-foreground">{section.heading}</h3>
        {section.intro && <p>{section.intro}</p>}
        <p>
          <strong>{section.contact.name}</strong><br />
          Email:{" "}
          <a href={`mailto:${section.contact.email}`} className="underline">
            {section.contact.email}
          </a>
        </p>
      </section>
    );
  }

  return (
    <section key={idx}>
      <h3 className="text-lg font-semibold text-foreground">{section.heading}</h3>
      {"intro" in section && section.intro && <p>{section.intro}</p>}
      {"list" in section && section.list && (
        <ul className="list-disc pl-5 space-y-1">
          {section.list.map((item, li) => <li key={li}>{item}</li>)}
        </ul>
      )}
      {"body" in section && section.body && <p>{section.body}</p>}
    </section>
  );
}

export function PrivacyPolicyDialog({ trigger }: { trigger: React.ReactNode }) {
  const { language } = useLanguage();
  const c = content[language] ?? content.en;

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className="max-w-2xl max-h-[80vh] p-0 overflow-hidden bg-white flex flex-col">
        <DialogHeader className="p-6 border-b flex-shrink-0">
          <DialogTitle className="text-2xl font-bold">{c.title}</DialogTitle>
          <DialogDescription>{c.updated}</DialogDescription>
        </DialogHeader>

        <ScrollArea className="flex-1 overflow-auto p-6">
          <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
            {c.sections.map((section, idx) => renderSection(section as Section, idx))}
          </div>
        </ScrollArea>

        <div className="p-4 border-t bg-gray-50 text-center text-xs text-muted-foreground flex-shrink-0">
          {c.footer}
        </div>
      </DialogContent>
    </Dialog>
  );
}

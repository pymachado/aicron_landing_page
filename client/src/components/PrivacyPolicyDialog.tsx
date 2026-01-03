import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

export function PrivacyPolicyDialog({ trigger }: { trigger: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>

      {/* DialogContent con max-height, overflow-auto para permitir scroll flexible */}
      <DialogContent className="max-w-2xl max-h-[80vh] p-0 overflow-hidden bg-white flex flex-col">
        <DialogHeader className="p-6 border-b flex-shrink-0">
          <DialogTitle className="text-2xl font-bold">Privacy Policy</DialogTitle>
          <DialogDescription>Last updated: December 2025</DialogDescription>
        </DialogHeader>

        {/* ScrollArea con flex-1 y overflow-auto para contenido completo */}
        <ScrollArea className="flex-1 overflow-auto p-6">
          <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
            <section>
              <h3 className="text-lg font-semibold text-foreground">1. Introduction</h3>
              <p>
                At AICRON, we take your privacy very seriously. This Privacy Policy explains how we collect, use, and protect your personal information in accordance with the General Data Protection Regulation (GDPR) and other international data protection standards.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground">2. Information We Collect</h3>
              <p>Through our contact form, we collect the following information:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Full name and professional position.</li>
                <li>Company name and business type.</li>
                <li>Contact information (email and phone number).</li>
                <li>Approximate annual revenue and business processes you wish to automate.</li>
                <li>Website or LinkedIn profile.</li>
                <li>Preferred contact language.</li>
              </ul>
            </section>

           <section>
  <h3 className="text-lg font-semibold text-foreground">
    3. Purpose, Legal Basis, Data Categories and Consent
  </h3>

  <section>
    <h4 className="font-semibold text-foreground">
      3.1 Purpose of Processing
    </h4>
    <p>
      The personal data provided by users is processed for the following purposes:
    </p>
    <ul className="list-disc pl-5 space-y-1">
      <li>
        To evaluate and propose intelligent automation solutions tailored to the user's business.
      </li>
      <li>
        To respond to inquiries submitted through our contact channels.
      </li>
      <li>
        To communicate information strictly related to the requested services.
      </li>
    </ul>
    <p>
      Personal data will not be used for purposes other than those described above.
    </p>
  </section>

  <section>
    <h4 className="font-semibold text-foreground">
      3.2 Minors
    </h4>
    <p>
      This website is not intended for individuals under the age of 18. If we become aware
      that a minor has provided personal data without the required consent of a parent or
      legal guardian, such data will be deleted immediately.
    </p>
  </section>

  <section>
    <h4 className="font-semibold text-foreground">
      3.3 Legal Basis for Processing
    </h4>
    <p>
      The processing of personal data is carried out based on the explicit consent of the user,
      granted by accepting this Privacy Policy and submitting their information through our
      forms.
    </p>
  </section>

  <section>
    <h4 className="font-semibold text-foreground">
      3.4 Data Categories
    </h4>
    <p>
      The data collected consists of identification, contact, and professional information and
      does not include special categories of personal data as defined by applicable data
      protection regulations.
    </p>
  </section>

<section>
    <h4 className="font-semibold text-foreground">
        3.5 Data Retention Period
            </h4>
                <p>
                    Personal data will be retained for as long as a business relationship exists or until the
                    user requests its deletion. Data may be blocked or retained for the period required by
                    applicable laws before final deletion.
                </p>
            </section>
        </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground">4. Data Security</h3>
              <p>
                We implement technical and organizational security measures to protect your data against unauthorized access, loss, or alteration. We use SSL encryption for all communications and secure storage in databases with restricted access.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground">5. User Rights</h3>
              <p>
                You have the right to access, correct, restrict, or delete your personal data at any time. To exercise these rights, you can contact us via the email provided on our website.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground">6. International Transfers</h3>
              <p>
                AICRON complies with legal frameworks for international data transfers, ensuring that our service providers (such as cloud storage and automation webhooks) meet equivalent protection standards.
              </p>
            </section>
            
            <section>
                <h3 className="text-lg font-semibold text-foreground">7. Changes to This Privacy Policy
                    </h3>
                        <p>
                              AICRON reserves the right to modify this Privacy Policy at any time in order
                              to adapt it to legislative or regulatory changes, as well as to changes in
                              the provision of our services. Any modification will be published and made
                              available through this website.
                        </p>
            </section>

                      <section>
                          <h3 className="text-lg font-semibold text-foreground">
                              8. Contact
                          </h3>
                          <p>
                              For any questions, inquiries, or requests regarding your personal data or this
                              Privacy Policy, you may contact us at:
                          </p>
                          <p>
                              <strong>AICRON</strong><br />
                              Email: <a href="mailto:hello@aicron.cloud">hello@aicron.cloud</a>
                          </p>
                      </section>
          </div>
        </ScrollArea>

        <div className="p-4 border-t bg-gray-50 text-center text-xs text-muted-foreground flex-shrink-0">
          AICRON - Intelligent Automation for Businesses
        </div>
      </DialogContent>
    </Dialog>
  );
}

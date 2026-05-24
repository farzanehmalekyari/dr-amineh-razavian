import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Dr. Arefeh Lotfi" },
      { name: "description", content: "How Dr. Arefeh Lotfi's practice collects, uses and protects your personal information." },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 prose-sm">
      <p className="eyebrow mb-3">Legal</p>
      <h1 className="font-serif text-4xl sm:text-5xl">Privacy Policy</h1>
      <div className="mt-8 space-y-5 text-sm text-foreground/85 leading-relaxed">
        <p>This privacy policy explains how Dr. Arefeh Lotfi's practice ("we", "our") collects, uses and safeguards information you provide when you use this website or book a consultation.</p>
        <h2 className="font-serif text-2xl mt-8">Information we collect</h2>
        <p>When you submit the booking form we collect your name, WhatsApp number, optional email, location, preferred treatment, language, message and any photo you choose to share. We may also collect basic analytics about your visit.</p>
        <h2 className="font-serif text-2xl mt-8">How we use it</h2>
        <p>We use this information only to respond to your consultation request, schedule appointments and improve our services. We do not sell your data.</p>
        <h2 className="font-serif text-2xl mt-8">Data protection</h2>
        <p>Information shared in connection with a dental consultation is treated as confidential and stored securely. You may request access, correction or deletion at any time by contacting us.</p>
        <h2 className="font-serif text-2xl mt-8">Contact</h2>
        <p>For any privacy question please reach us via the contact details on our Contact page.</p>
      </div>
    </article>
  );
}

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/medical-disclaimer")({
  head: () => ({
    meta: [
      { title: "Medical Disclaimer | Dr. Zahra Salehi" },
      { name: "description", content: "Information on this website is for educational purposes only and does not replace medical consultation." },
      { property: "og:url", content: "/medical-disclaimer" },
    ],
    links: [{ rel: "canonical", href: "/medical-disclaimer" }],
  }),
  component: Disclaimer,
});

function Disclaimer() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <p className="eyebrow mb-3">Legal</p>
      <h1 className="font-serif text-4xl sm:text-5xl">Medical Disclaimer</h1>
      <div className="mt-8 space-y-5 text-sm text-foreground/85 leading-relaxed">
        <p>Information on this website is for educational purposes only and does not replace medical consultation. Content does not constitute medical advice, diagnosis or treatment recommendations.</p>
        <p>All aesthetic treatments require a personal consultation. The suitability of any procedure depends on individual anatomy, skin condition, health history and treatment goals. Results may vary from person to person.</p>
        <p>Before/after images shown on this site reflect real treatment cases. Individual outcomes will differ. We do not guarantee specific results.</p>
        <p>If you are pregnant, breastfeeding or have a medical condition, please discuss all options with your physician before booking any aesthetic procedure.</p>
        <p>For any concern, please contact us directly via the Contact page to schedule a consultation.</p>
      </div>
    </article>
  );
}

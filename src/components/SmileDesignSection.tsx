import { useLang } from "@/i18n/LanguageContext";
import { SectionHeading } from "@/components/SectionHeading";

import step1 from "@/assets/smile-journey/step-1.jpg";
import step2 from "@/assets/smile-journey/step-2.jpg";
import step3 from "@/assets/smile-journey/step-3.jpg";
import step4 from "@/assets/smile-journey/step-4.jpg";

export function SmileDesignSection() {
  const { t, dir } = useLang();

  const steps = [
    {
      image: step1,
      title: t.smileJourney.steps[0].title,
      desc: t.smileJourney.steps[0].desc,
    },
    {
      image: step2,
      title: t.smileJourney.steps[1].title,
      desc: t.smileJourney.steps[1].desc,
    },
    {
      image: step3,
      title: t.smileJourney.steps[2].title,
      desc: t.smileJourney.steps[2].desc,
    },
    {
      image: step4,
      title: t.smileJourney.steps[3].title,
      desc: t.smileJourney.steps[3].desc,
    },
  ];

  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.smileJourney.eyebrow}
          title={t.smileJourney.title}
          subtitle={t.smileJourney.subtitle}
        />

        <div className="relative mt-14 space-y-14">
          <div className="absolute left-1/2 top-10 bottom-10 hidden lg:block -translate-x-1/2 border-l-4 border-dashed border-primary/40" />
          {steps.map((step, index) => {
            const reverseDesktop =
              dir === "ltr"
                ? index % 2 === 1
                : index % 2 === 0;

            return (
              <div
                key={index}
                className={`grid items-center gap-6 lg:gap-10 ${
                  reverseDesktop
                    ? "lg:grid-cols-2"
                    : "lg:grid-cols-2"
                }`}
              >
                <div
                  className={`${
                    reverseDesktop ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="overflow-hidden rounded-3xl bg-card shadow-elegant border border-border">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="h-[320px] sm:h-[420px] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div
                  className={`${
                    reverseDesktop ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="max-w-2xl">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-soft">
                      0{index + 1}
                    </div>

                    <h3 className="font-serif text-3xl sm:text-4xl leading-tight">
                      {step.title}
                    </h3>

                    <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
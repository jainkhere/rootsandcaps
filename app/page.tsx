import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SocialLinks } from "@/components/SocialLinks";
import { WhatsAppForm } from "@/components/WhatsAppForm";
import {
  getClinic,
  getDoctor,
  getHome,
  getServices,
  getTestimonials,
} from "@/lib/content";
import { telHref } from "@/lib/phone";
import { resolveContentSrc } from "@/lib/urls";

const btnPrimary =
  "tap-highlight inline-flex items-center justify-center rounded-full bg-blue-800 text-sm font-semibold text-white shadow transition duration-150 ease-out hover:bg-blue-900 active:scale-[0.97] active:brightness-95 motion-reduce:active:scale-100 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400";

export default function HomePage() {
  const home = getHome();
  const doctor = getDoctor();
  const clinic = getClinic();
  const services = getServices();
  const testimonials = getTestimonials();
  const phoneHref = telHref(clinic.phone);
  const whatsappDigits = clinic.whatsapp.replace(/\D/g, "");

  return (
    <>
      <SiteHeader />
      <main className="overflow-x-hidden">
        <section className="border-b border-slate-100 bg-gradient-to-b from-blue-50 to-white transition-colors duration-300 dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">
          <div className="mx-auto grid max-w-5xl gap-8 px-4 py-12 sm:gap-10 sm:py-16 md:grid-cols-2 md:items-center md:gap-10">
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <h1 className="text-balance text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl md:text-4xl">
                {home.hero.headline}
              </h1>
              <p className="mt-3 max-w-prose text-pretty text-base text-slate-600 dark:text-slate-300 sm:mt-4 sm:text-lg">
                {home.hero.subheadline}
              </p>
              <a
                href={phoneHref}
                className={`${btnPrimary} mt-6 self-center px-6 py-3 sm:mt-8 md:self-start`}
              >
                {home.hero.ctaLabel}
              </a>
            </div>
            <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 md:mx-0 md:max-w-none">
              {/* eslint-disable-next-line @next/next/no-img-element -- CMS URLs may be any host; basePath applied in resolveContentSrc */}
              <img
                src={resolveContentSrc(home.hero.image)}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                fetchPriority="high"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-6 sm:py-8">
          <p className="text-center text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
            {home.intro}
          </p>
        </section>

        <section id="services" className="scroll-mt-28 bg-white py-12 transition-colors duration-300 dark:bg-slate-950 sm:py-16">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
              Our services
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 sm:text-base">
              Editable in the CMS under{" "}
              <code className="rounded bg-slate-100 px-1 py-0.5 text-xs dark:bg-slate-800 sm:text-sm">
                content/services
              </code>
              .
            </p>
            <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {services.map((s) => (
                <article
                  key={s.id}
                  className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50/50 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900/80"
                >
                  <div className="relative aspect-video bg-slate-200 dark:bg-slate-800">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={resolveContentSrc(s.image)}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-slate-900 dark:text-white">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {s.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-8 flex justify-center sm:mt-10">
              <a href={phoneHref} className={`${btnPrimary} px-6 py-3`}>
                Call now
              </a>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="scroll-mt-28 border-y border-slate-100 bg-slate-50 py-12 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900/60 sm:py-16"
        >
          <div className="mx-auto grid max-w-5xl items-center gap-8 px-4 sm:gap-10 md:grid-cols-2 md:gap-10">
            <div className="order-1 flex justify-center md:order-1 md:justify-start">
              <div className="relative aspect-square w-full max-w-[280px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:max-w-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={resolveContentSrc(doctor.image)}
                  alt={doctor.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="order-2 text-center md:order-2 md:text-left">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
                About us
              </h2>
              <p className="mt-1 font-medium text-blue-900 dark:text-sky-300">{doctor.degree}</p>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white sm:text-xl">
                {doctor.name}
              </h3>
              <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
                {doctor.bio}
              </p>
              <a
                href={phoneHref}
                className={`${btnPrimary} mt-6 inline-flex px-6 py-3`}
              >
                Call now
              </a>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
              Testimonials
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {testimonials.map((t) => (
                <figure
                  key={t.id}
                  className="flex min-h-[220px] flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="relative mx-auto h-14 w-14 shrink-0 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={resolveContentSrc(t.image)}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <blockquote className="mt-3 flex-1 text-center text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    “{t.text}”
                  </blockquote>
                  <figcaption className="mt-3 text-center text-xs font-semibold text-slate-900 dark:text-white">
                    {t.name}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="scroll-mt-28 border-t border-slate-100 bg-white py-12 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950 sm:py-16"
        >
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
              Contact
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 lg:mt-10 lg:grid-cols-3 lg:gap-8">
              <div className="rounded-xl border border-slate-200 p-4 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900/70 sm:p-5">
                <h3 className="font-semibold text-slate-900 dark:text-white">Clinic</h3>
                <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {clinic.address}
                </p>
                <SocialLinks
                  facebookUrl={clinic.facebookUrl}
                  instagramUrl={clinic.instagramUrl}
                />
                <a
                  href={phoneHref}
                  className={`${btnPrimary} mt-4 px-4 py-2.5 text-sm`}
                >
                  Call {clinic.phone}
                </a>
              </div>
              <div className="rounded-xl border border-slate-200 p-4 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900/70 sm:p-5">
                <h3 className="font-semibold text-slate-900 dark:text-white">Hours &amp; map</h3>
                <ul className="mt-3 divide-y divide-slate-200 overflow-hidden rounded-lg border border-slate-200 bg-slate-50/80 transition-colors duration-300 dark:divide-slate-800 dark:border-slate-800 dark:bg-slate-900/80">
                  {clinic.hours.map((row) => (
                    <li
                      key={row.day}
                      className="flex flex-col gap-0.5 px-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-2.5"
                    >
                      <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                        {row.day}
                      </span>
                      <span className="text-sm text-slate-600 dark:text-slate-400 sm:text-right">
                        {row.hours}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 aspect-video min-h-[180px] overflow-hidden rounded-lg border border-slate-200 bg-slate-100 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:min-h-0">
                  <iframe
                    title="Clinic map"
                    src={clinic.mapEmbedUrl}
                    className="h-full min-h-[180px] w-full sm:min-h-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
              <div className="rounded-xl border border-slate-200 p-4 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900/70 sm:p-5">
                <h3 className="font-semibold text-slate-900 dark:text-white">Message us</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  Opens WhatsApp with your details prefilled.
                </p>
                <WhatsAppForm whatsappDigits={whatsappDigits} />
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-100 px-4 py-10 text-center transition-colors duration-300 dark:border-slate-800 sm:py-12">
          <Link
            href="/blog"
            className="tap-highlight inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold text-blue-800 transition hover:bg-blue-50 hover:underline active:scale-[0.98] dark:text-sky-300 dark:hover:bg-slate-900"
          >
            Visit our blog →
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

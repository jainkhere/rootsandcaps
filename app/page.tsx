import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
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
      <main>
        <section className="border-b border-slate-100 bg-gradient-to-b from-blue-50 to-white">
          <div className="mx-auto grid max-w-5xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                {home.hero.headline}
              </h1>
              <p className="mt-4 text-lg text-slate-600">
                {home.hero.subheadline}
              </p>
              <a
                href={phoneHref}
                className="mt-8 inline-flex rounded-full bg-blue-800 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-blue-900"
              >
                {home.hero.ctaLabel}
              </a>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
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

        <section className="mx-auto max-w-5xl px-4 py-6">
          <p className="text-center text-slate-600">{home.intro}</p>
        </section>

        <section id="services" className="scroll-mt-20 bg-white py-16">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="text-2xl font-bold text-slate-900">Our services</h2>
            <p className="mt-2 text-slate-600">
              Editable in the CMS under <code className="text-sm">content/services</code>.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <article
                  key={s.id}
                  className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50/50"
                >
                  <div className="relative aspect-video bg-slate-200">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={resolveContentSrc(s.image)}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-slate-900">{s.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{s.description}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-10 text-center">
              <a
                href={phoneHref}
                className="inline-flex rounded-full bg-blue-800 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-900"
              >
                Call now
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 border-y border-slate-100 bg-slate-50 py-16">
          <div className="mx-auto grid max-w-5xl gap-10 px-4 md:grid-cols-2 md:items-center">
            <div className="relative aspect-square max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={resolveContentSrc(doctor.image)}
                alt={doctor.name}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">About us</h2>
              <p className="mt-1 font-medium text-blue-900">{doctor.degree}</p>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                {doctor.name}
              </h3>
              <p className="mt-3 whitespace-pre-line text-slate-600">{doctor.bio}</p>
              <a
                href={phoneHref}
                className="mt-6 inline-flex rounded-full bg-blue-800 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-900"
              >
                Call now
              </a>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="text-2xl font-bold text-slate-900">Testimonials</h2>
            <div className="mt-8 flex gap-4 overflow-x-auto pb-2">
              {testimonials.map((t) => (
                <figure
                  key={t.id}
                  className="min-w-[260px] max-w-xs shrink-0 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="relative mx-auto h-14 w-14 overflow-hidden rounded-full bg-slate-200">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={resolveContentSrc(t.image)}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <blockquote className="mt-3 text-sm text-slate-700">
                    “{t.text}”
                  </blockquote>
                  <figcaption className="mt-2 text-center text-xs font-semibold text-slate-900">
                    {t.name}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 border-t border-slate-100 bg-white py-16">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="text-2xl font-bold text-slate-900">Contact</h2>
            <div className="mt-10 grid gap-8 lg:grid-cols-3">
              <div className="rounded-xl border border-slate-200 p-5">
                <h3 className="font-semibold text-slate-900">Clinic</h3>
                <p className="mt-2 text-sm text-slate-600 whitespace-pre-line">
                  {clinic.address}
                </p>
                <div className="mt-4 flex flex-col gap-2 text-sm">
                  <a className="text-blue-800 hover:underline" href={clinic.facebookUrl}>
                    Facebook
                  </a>
                  <a className="text-blue-800 hover:underline" href={clinic.instagramUrl}>
                    Instagram
                  </a>
                </div>
                <a
                  href={phoneHref}
                  className="mt-4 inline-flex rounded-full bg-blue-800 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-900"
                >
                  Call {clinic.phone}
                </a>
              </div>
              <div className="rounded-xl border border-slate-200 p-5">
                <h3 className="font-semibold text-slate-900">Hours &amp; map</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {clinic.hours.map((row) => (
                    <li key={row.day} className="flex justify-between gap-4">
                      <span>{row.day}</span>
                      <span>{row.hours}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 aspect-video overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
                  <iframe
                    title="Clinic map"
                    src={clinic.mapEmbedUrl}
                    className="h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
              <div className="rounded-xl border border-slate-200 p-5">
                <h3 className="font-semibold text-slate-900">Message us</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Opens WhatsApp with your details prefilled (PRD flow).
                </p>
                <WhatsAppForm whatsappDigits={whatsappDigits} />
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-100 py-12 text-center">
          <Link href="/blog" className="text-blue-800 font-semibold hover:underline">
            Visit our blog →
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

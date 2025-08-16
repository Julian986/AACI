import site from '../content/site'
import Seo from '../components/Seo'
import Section from '../components/Section'
import TestimonialsCarousel from '../components/TestimonialsCarousel'

export default function Testimonials() {
  return (
    <div className="relative">
      <Seo title="Testimonios — AACI Mar del Plata" description="Experiencias de estudiantes y familias en nuestra comunidad." />

      <div aria-hidden className="pointer-events-none select-none blur-[2px] md:blur-sm opacity-20">
        <Section title="Testimonios" subtitle="Historias reales de nuestra comunidad.">
          <TestimonialsCarousel
            items={site.testimonials.map(t => ({ quote: t.quote, name: t.name, role: t.role }))}
            className="max-w-6xl mx-auto"
          />
        </Section>

        <Section title="Más experiencias" subtitle="Algunas reseñas destacadas.">
          <ul className="grid gap-6 md:grid-cols-3">
            {site.testimonials.map((t, i) => (
              <li key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <figure className="text-center">
                  <svg className="h-8 mx-auto mb-3 text-gray-400" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                  </svg>
                  <blockquote>
                    <p className="text-lg font-medium text-slate-900">“{t.quote}”</p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center mt-4 space-x-3">
                    <img className="w-6 h-6 rounded-full" src={'/images/placeholder-3.svg'} alt={t.name} loading="lazy" />
                    <div className="flex items-center divide-x-2 divide-gray-200">
                      <div className="pr-3 font-medium text-slate-900">{t.name}</div>
                      {t.role && <div className="pl-3 text-sm font-light text-slate-500">{t.role}</div>}
                    </div>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </Section>
      </div>

      <div className="absolute inset-0 flex justify-center items-start pt-16 md:pt-24 p-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">Próximamente</h2>
          <p className="mt-2 text-slate-700">Esta página es un adelanto. Si te interesa, escribinos y la activamos.</p>
          <a
            href={site.links.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
          >
            Obtener
          </a>
        </div>
      </div>
    </div>
  )
}



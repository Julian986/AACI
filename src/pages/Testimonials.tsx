import site from '../content/site'
import Seo from '../components/Seo'
import Section from '../components/Section'

export default function Testimonials() {
  return (
    <div>
      <Seo title="Testimonios — AACI Mar del Plata" description="Experiencias de estudiantes y familias en nuestra comunidad." />
      <Section title="Testimonios">
        <ul className="grid gap-6 md:grid-cols-3">
          {site.testimonials.map((t, i) => (
            <li key={i} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <blockquote className="text-sm text-slate-800">“{t.quote}”</blockquote>
              <p className="mt-2 text-xs text-slate-600">{t.name} — {t.role}</p>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  )
}



import site from '../content/site'
import Seo from '../components/Seo'
import Section from '../components/Section'

export default function Exams() {
  return (
    <div>
      <Seo title="Exámenes internacionales — AACI Mar del Plata" description="Preparación para exámenes Cambridge y Trinity. Acompañamiento personalizado y simulacros." />

      <Section title="Exámenes internacionales" subtitle="Preparación integral: práctica, estrategias y simulacros.">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="font-semibold text-slate-900">Cambridge</h2>
            <ul className="mt-3 list-disc pl-6 text-sm text-slate-800">
              {site.exams.cambridge.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="font-semibold text-slate-900">Trinity</h2>
            <ul className="mt-3 list-disc pl-6 text-sm text-slate-800">
              {site.exams.trinity.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-6 text-sm text-slate-700">
          Preparamos a estudiantes para rendir con confianza. Consultá por calendarios y requisitos o escribinos por
          <a className="text-indigo-700 hover:underline ml-1" href={site.links.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>.
        </p>
      </Section>

      <Section title="Beneficios de certificar">
        <ul className="grid gap-3 list-disc pl-6 text-sm text-slate-800">
          <li>Reconocimiento internacional de habilidades lingüísticas.</li>
          <li>Puertas abiertas para estudios y trabajo en el exterior.</li>
          <li>Motivación y objetivos claros para el progreso.</li>
        </ul>
      </Section>
    </div>
  )
}



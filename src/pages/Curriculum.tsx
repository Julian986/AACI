import site from '../content/site'
import Seo from '../components/Seo'
import Section from '../components/Section'

export default function Curriculum() {
  return (
    <div>
      <Seo title="Plan de estudios — AACI Mar del Plata" description="Detalle por año: geografía, historia y literatura inglesa con lecturas sugeridas en 6º año." />

      <Section title="Plan de estudios" subtitle="Contenidos por año y ejes formativos.">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="font-semibold text-slate-900">4º año</h2>
            <p className="mt-1 text-sm text-slate-700">{site.curriculum.year4}</p>
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="font-semibold text-slate-900">5º año</h2>
            <p className="mt-1 text-sm text-slate-700">{site.curriculum.year5}</p>
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="font-semibold text-slate-900">6º año</h2>
            <p className="mt-1 text-sm text-slate-700">{site.curriculum.year6}</p>
          </article>
        </div>
      </Section>

      <Section title="Lecturas sugeridas (6º año)">
        <ul className="list-disc pl-6 text-sm text-slate-800 grid gap-2">
          {site.curriculum.suggestedReadings.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </Section>
    </div>
  )
}



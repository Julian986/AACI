import Seo from '../components/Seo'
import Section from '../components/Section'

export default function News() {
  return (
    <div>
      <Seo title="Novedades — AACI Mar del Plata" description="Noticias, actividades y fechas importantes." />
      <Section title="Novedades" subtitle="Comunicaciones y actividades (placeholders).">
        <ul className="grid gap-6 md:grid-cols-2">
          {[1, 2].map((i) => (
            <li key={i} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="font-semibold text-slate-900">Título de novedad {i} (placeholder)</h2>
              <p className="mt-1 text-sm text-slate-700">Descripción breve de la novedad. Editar con la información correspondiente.</p>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  )
}



import site from '../content/site'
import Seo from '../components/Seo'
import Section from '../components/Section'
import CourseCard from '../components/CourseCard'

export default function Courses() {
  return (
    <div>
      <Seo title="Cursos — AACI Mar del Plata" description="Cursos de inglés para niños, adolescentes y adultos. Niveles principiante, intermedio y avanzado." />

      <Section title="Cursos" subtitle={`Niños, adolescentes y adultos. Niveles: ${site.courses.levels.join(', ')}.`}>
        <div className="grid gap-6 md:grid-cols-3">
          {site.courses.segments.map((s) => (
            <CourseCard key={s.title} title={s.title} description={s.description} imageUrl={s.imageUrl} />
          ))}
        </div>
      </Section>

      <Section title="Plan de estudios por año" subtitle="Contenidos por año con lecturas sugeridas (6º año).">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-slate-900">4º año</h3>
            <p className="mt-1 text-sm text-slate-700">{site.curriculum.year4}</p>
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-slate-900">5º año</h3>
            <p className="mt-1 text-sm text-slate-700">{site.curriculum.year5}</p>
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-slate-900">6º año</h3>
            <p className="mt-1 text-sm text-slate-700">{site.curriculum.year6}</p>
          </article>
        </div>
        <div className="mt-8">
          <h4 className="font-semibold text-slate-900">Lecturas sugeridas (6º año)</h4>
          <ul className="mt-3 list-disc pl-6 text-sm text-slate-800 grid gap-1">
            {site.curriculum.suggestedReadings.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section title="Metodología" subtitle="Aprendizaje comunicativo, proyectos y evaluación formativa.">
        <div className="prose prose-slate max-w-none text-slate-800">
          <p>
            Diseñamos actividades auténticas que promueven la comunicación real y el desarrollo de habilidades
            integradas: comprensión lectora y auditiva, producción oral y escrita. Acompañamos con feedback claro.
          </p>
          <ul>
            <li>Grupos reducidos y atención personalizada.</li>
            <li>Materiales actuales y variedad de recursos.</li>
            <li>Seguimiento del progreso y comunicación con familias.</li>
          </ul>
        </div>
      </Section>

      <Section title="Preguntas frecuentes">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">¿Cómo se define el nivel?</h3>
            <p className="mt-2 text-sm text-slate-700">Sugerimos un diagnóstico inicial para ubicar el mejor punto de partida.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">¿Hay grupos reducidos?</h3>
            <p className="mt-2 text-sm text-slate-700">Sí, priorizamos la atención personalizada en todos los cursos.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">¿Preparan exámenes?</h3>
            <p className="mt-2 text-sm text-slate-700">Sí, contamos con preparación para Cambridge y Trinity.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">¿Ofrecen clases para adultos?</h3>
            <p className="mt-2 text-sm text-slate-700">Sí, con foco práctico para trabajo, viajes y desarrollo personal.</p>
          </div>
        </div>
      </Section>
    </div>
  )
}



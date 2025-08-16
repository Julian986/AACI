import site from '../content/site'
import Seo from '../components/Seo'
import Section from '../components/Section'
import CourseCard from '../components/CourseCard'
import FAQ from '../components/FAQ'

export default function Courses() {
  return (
    <div>
      <Seo
        title="Cursos — AACI Mar del Plata"
        description="Cursos de inglés para niños, adolescentes y adultos. Niveles principiante, intermedio y avanzado."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: '¿Cómo se define el nivel?',
              acceptedAnswer: {
                '@type': 'Answer',
                text:
                  'Realizamos una entrevista y diagnóstico inicial sin costo para ubicar el mejor punto de partida. Si ya estudiás inglés, contemplamos certificados previos y una breve evaluación.',
              },
            },
            {
              '@type': 'Question',
              name: '¿Cuándo inician y hay vacantes?',
              acceptedAnswer: {
                '@type': 'Answer',
                text:
                  'El ciclo lectivo va de marzo a diciembre. Mantenemos inscripciones abiertas durante el año según disponibilidad de vacantes. Consultá por lugares y turnos por WhatsApp.',
              },
            },
            {
              '@type': 'Question',
              name: '¿Trabajan con grupos reducidos?',
              acceptedAnswer: { '@type': 'Answer', text: 'Sí, priorizamos grupos de 8–12 estudiantes.' },
            },
            {
              '@type': 'Question',
              name: '¿Preparan exámenes internacionales?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sí, preparación para Cambridge y Trinity con simulacros y acompañamiento durante la inscripción.',
              },
            },
            {
              '@type': 'Question',
              name: '¿Qué edades y niveles cubren?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Niños, adolescentes y adultos. Niveles: Principiante, Intermedio y Avanzado.',
              },
            },
            {
              '@type': 'Question',
              name: '¿Cómo me inscribo?',
              acceptedAnswer: {
                '@type': 'Answer',
                text:
                  'Podés escribirnos por email o WhatsApp, o completar el formulario de contacto. Te proponemos una visita y nivelación inicial.',
              },
            },
          ],
        }}
      />

      <Section title="Cursos" subtitle={`Niños, adolescentes y adultos. Niveles: ${site.courses.levels.join(', ')}.`}>
        <div className="grid gap-6 md:grid-cols-3">
          {site.courses.segments.map((s) => (
            <CourseCard key={s.title} title={s.title} description={s.description} imageUrl={s.imageUrl} />
          ))}
        </div>
      </Section>

      <Section title="Plan de estudios por año" subtitle="Contenidos por año con lecturas sugeridas (6º año).">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: '1º año', content: site.curriculum.year1, chips: ['Saludos', 'Colores', 'Aula'] },
            { title: '2º año', content: site.curriculum.year2, chips: ['Rutinas', 'Familia', 'Presente simple'] },
            { title: '3º año', content: site.curriculum.year3, chips: ['Ciudad', 'Clima', 'Pasado simple'] },
            { title: '4º año', content: site.curriculum.year4, chips: ['Geografía', 'Presentaciones', 'Mapas'] },
            { title: '5º año', content: site.curriculum.year5, chips: ['Historia', 'Biografías', 'Línea de tiempo'] },
            { title: '6º año', content: site.curriculum.year6, chips: ['Literatura', 'Análisis', 'Escritura'] },
          ].map(({ title, content, chips }) => (
            <article key={title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm hover:shadow transition-shadow">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                  </svg>
                </span>
                <h3 className="font-semibold text-slate-900">{title}</h3>
              </div>
              <p className="mt-2 text-sm text-slate-700">{content}</p>
              <ul className="mt-3 flex flex-wrap gap-2 text-xs text-slate-700">
                {chips.map((chip) => (
                  <li key={chip} className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-2.5 py-1 ring-1 ring-slate-200">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {chip}
                  </li>
                ))}
              </ul>
            </article>
          ))}
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

      <FAQ
        title="Preguntas frecuentes"
        items={[
          {
            value: 'faq-1',
            question: '¿Cómo se define el nivel? ',
            answer: (
              <>
                <p>
                  Realizamos una entrevista y diagnóstico inicial sin costo para ubicar el mejor punto de partida según tus objetivos.
                </p>
                <p>
                  Si ya estudiás inglés, contemplamos certificados previos y una breve evaluación de nivel.
                </p>
              </>
            ),
          },
          {
            value: 'faq-2',
            question: '¿Cuándo inician y hay vacantes?',
            answer: (
              <>
                <p>
                  El ciclo lectivo va de marzo a diciembre. Mantenemos inscripciones abiertas durante todo el año según disponibilidad de vacantes.
                </p>
                <p>
                  Consultá por lugares y turnos por WhatsApp: <a className="text-indigo-700 hover:underline" href={site.links.whatsappUrl} target="_blank" rel="noreferrer">{site.contact.phone}</a>.
                </p>
              </>
            ),
          },
          {
            value: 'faq-3',
            question: '¿Trabajan con grupos reducidos?',
            answer: 'Sí. En AACI priorizamos grupos de 8–12 estudiantes para asegurar participación y seguimiento personalizado.',
          },
          {
            value: 'faq-4',
            question: '¿Preparan exámenes internacionales?',
            answer: 'Sí. Ofrecemos preparación para Cambridge y Trinity con simulacros y acompañamiento durante la inscripción.',
          },
          {
            value: 'faq-5',
            question: '¿Qué edades y niveles cubren?',
            answer: `Niños, adolescentes y adultos. Niveles: ${site.courses.levels.join(', ')}.`,
          },
          {
            value: 'faq-6',
            question: '¿Cómo me inscribo?',
            answer: (
              <>
                <p>
                  Podés escribirnos a <a className="text-indigo-700 hover:underline" href={`mailto:${site.contact.email}`}>{site.contact.email}</a>,
                  contactarnos por WhatsApp o completar el formulario en la sección Contacto.
                </p>
                <p>
                  Te proponemos una visita para conocer la institución y realizar la nivelación inicial.
                </p>
              </>
            ),
          },
        ]}
      />
    </div>
  )
}



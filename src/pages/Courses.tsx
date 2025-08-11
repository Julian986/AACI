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
          <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-slate-900">1º año</h3>
            <p className="mt-1 text-sm text-slate-700">{site.curriculum.year1}</p>
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-slate-900">2º año</h3>
            <p className="mt-1 text-sm text-slate-700">{site.curriculum.year2}</p>
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-slate-900">3º año</h3>
            <p className="mt-1 text-sm text-slate-700">{site.curriculum.year3}</p>
          </article>
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



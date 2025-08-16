import { Link, useNavigate, useParams } from 'react-router-dom'
import site from '../content/site'
import Section from '../components/Section'
import Seo from '../components/Seo'
import FAQ from '../components/FAQ'
import { toSlug } from '../utils/slug'

export default function CourseDetail() {
  const params = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const segment = site.courses.segments.find((s) => toSlug(s.title) === params.slug)
  function handleBack() {
    if (typeof window !== 'undefined' && window.history.length > 2) {
      navigate(-1)
    } else {
      navigate('/cursos')
    }
  }

  if (!segment) {
    return (
      <Section title="Curso no encontrado">
        <p className="text-slate-700">No pudimos encontrar el curso solicitado.</p>
        <Link to="/cursos" className="mt-4 inline-flex items-center gap-2 text-indigo-700 hover:underline">
          <span aria-hidden>←</span> Volver a cursos
        </Link>
      </Section>
    )
  }

  return (
    <div>
      <Seo title={`${segment.title} — Curso`} description={segment.description || 'Detalle del curso'} />
      <div className="mx-auto max-w-6xl px-4 pt-8">
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 rounded-md px-3 py-2 hover:bg-slate-100 focus-visible:outline focus-visible:ring-2 focus-visible:ring-slate-300 cursor-pointer"
          aria-label="Volver a cursos"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
            <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59Z" />
          </svg>
          <span className="text-base md:text-lg font-medium">Volver</span>
        </button>
      </div>
      <Section title={segment.title} subtitle={segment.description}>
        <div className="grid gap-6 md:grid-cols-2 items-start">
          <div className="rounded-xl overflow-hidden bg-white ring-1 ring-slate-200 shadow-sm">
            <img src={segment.imageUrl || '/images/placeholder-7.svg'} alt={segment.title} className="w-full h-64 object-cover" />
          </div>
          <div>
            <div className="prose prose-slate max-w-none">
              <p>
                Este curso está pensado para fortalecer las habilidades comunicativas con proyectos, lectura, escucha y
                producción oral. Adaptamos la propuesta según el grupo y el nivel.
              </p>
              <ul>
                <li>Grupos reducidos y seguimiento personalizado.</li>
                <li>Materiales actuales y evaluación formativa.</li>
                <li>Opcional: preparación para exámenes internacionales.</li>
              </ul>
            </div>

            <ul className="mt-5 flex flex-wrap gap-2 text-sm text-slate-800">
              {['Práctica real', 'Docentes con experiencia', 'Clima de confianza'].map((chip) => (
                <li key={chip} className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3.5 py-1.5 ring-1 ring-slate-200">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {chip}
                </li>
              ))}
            </ul>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-slate-200 bg-white p-4 text-center">
                <div className="mx-auto h-8 w-8 text-slate-800">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <div className="mt-2 text-sm font-medium text-slate-900">Modalidad</div>
                <div className="text-xs text-slate-600">Presencial con apoyo digital</div>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4 text-center">
                <div className="mx-auto h-8 w-8 text-slate-800">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="mt-2 text-sm font-medium text-slate-900">Duración</div>
                <div className="text-xs text-slate-600">Ciclo lectivo anual</div>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4 text-center">
                <div className="mx-auto h-8 w-8 text-slate-800">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M12 2l9 4-9 4-9-4 9-4zm0 8l9 4-9 4-9-4 9-4z" />
                  </svg>
                </div>
                <div className="mt-2 text-sm font-medium text-slate-900">Certificación</div>
                <div className="text-xs text-slate-600">Opcional Cambridge / Trinity</div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={site.links.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
              >
                Escribinos
              </a>
              <Link
                to="/inscripcion"
                className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90"
                style={{ backgroundColor: 'rgb(39 41 43)' }}
              >
                Inscribirme
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <FAQ
        title="Preguntas frecuentes"
        items={[
          { value: '1', question: '¿Necesito rendir examen de nivel?', answer: 'No es obligatorio. Hacemos un diagnóstico gratuito para ubicarte en el grupo adecuado.' },
          { value: '2', question: '¿Puedo empezar a mitad de año?', answer: 'Sí, evaluamos tu caso y te proponemos el grupo más acorde para que puedas integrarte.' },
          { value: '3', question: '¿Cómo son las clases?', answer: 'Clases participativas con foco en conversación, proyectos y uso real del idioma.' },
        ]}
      />
    </div>
  )
}



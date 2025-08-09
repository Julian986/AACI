import { Link, useNavigate, useParams } from 'react-router-dom'
import site from '../content/site'
import Section from '../components/Section'
import Seo from '../components/Seo'
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
        </div>
      </Section>
    </div>
  )
}



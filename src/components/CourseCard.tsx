import { Link } from 'react-router-dom'
import { toSlug } from '../utils/slug'

type CourseCardProps = { title: string; description: string; imageUrl?: string }

export default function CourseCard({ title, description, imageUrl }: CourseCardProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow transition-shadow overflow-hidden">
      {imageUrl && (
        <img
          src={imageUrl}
          alt=""
          className="h-40 w-full object-cover object-center transform scale-[1.06]"
          loading="lazy"
        />
      )}
      <div className="p-6">
      <header>
        <h3 className="font-semibold text-slate-900">{title}</h3>
      </header>
      <p className="mt-2 text-sm text-slate-700">{description}</p>
      <div className="mt-4">
        <Link to={`/cursos/${toSlug(title)}`} className="inline-flex items-center gap-2 text-sm font-medium text-[#2b2929] hover:underline">
          Saber más
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
            <path d="M13.172 12 8.586 7.414 10 6l6 6-6 6-1.414-1.414L13.172 12Z" />
          </svg>
        </Link>
      </div>
      </div>
    </article>
  )
}



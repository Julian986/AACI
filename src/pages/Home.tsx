import { Link } from 'react-router-dom'
import site from '../content/site'
import Hero from '../components/Hero'
import Section from '../components/Section'
import FeatureCard from '../components/FeatureCard'
import ImageCard from '../components/ImageCard'
import StatsSplit from '../components/StatsSplit'
import CourseCard from '../components/CourseCard'
import Stat from '../components/Stat'
import Seo from '../components/Seo'

export default function Home() {
  return (
    <div>
      <Seo title="AACI Mar del Plata — Inglés desde 1944" description="Cursos de inglés para niños, adolescentes y adultos. Grupos reducidos y atención personalizada." />

      <Hero
        eyebrow="Desde 1944"
        title={site.name}
        subtitle={site.tagline}
        bgUrl={site.heroBackgroundUrl}
        ctas={[
          { label: 'Escribinos por WhatsApp', href: site.links.whatsappUrl, external: true },
          { label: 'Consultá por vacantes', href: '/inscripcion', variant: 'secondary' },
        ]}
      />

      <Section id="institucion" title="Nuestra institución" subtitle="Una trayectoria de excelencia desde 1944.">
        <div className="prose prose-slate max-w-none text-slate-800">
          <p>
            La Asociación Argentina de Cultura Inglesa de Mar del Plata nace en 1944 con la misión de promover el
            aprendizaje del idioma inglés y el intercambio cultural. A lo largo de las décadas, consolidamos un modelo
            educativo que combina calidad académica, cercanía y respeto por cada trayectoria.
          </p>
          <p>
            Somos una comunidad de docentes y familias que creen en el aprendizaje como proceso. Priorizamos grupos
            reducidos, seguimiento personalizado y un clima de confianza para que cada estudiante se anime a expresarse.
          </p>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <ImageCard
            src="/images/placeholder-1.svg"
            alt="AACI — Aula"
            title="Aulas y recursos"
            description="Espacios cuidados y materiales actualizados para favorecer el aprendizaje."
          />
          <ImageCard
            src="/images/placeholder-3.svg"
            alt="AACI — Estudiantes"
            title="Grupos reducidos"
            description="Atención personalizada y clima de confianza en cada clase."
          />
          <ImageCard
            src="/images/placeholder-4.svg"
            alt="AACI — Biblioteca"
            title="Comunidad y cultura"
            description="Actividades y propuestas que fortalecen el vínculo con el inglés."
          />
        </div>
      </Section>

      <StatsSplit />

      <Section title="Resultados reales" subtitle="Excelencia académica con calidez humana.">
        <div className="grid gap-4 md:grid-cols-4">
          <Stat label="Años enseñando" value="80+" />
          <Stat label="Niveles" value="3" />
          <Stat label="Alumnos por grupo" value="8–12" />
          <Stat label="Exámenes prep." value="Cambridge/Trinity" />
        </div>
      </Section>

      <Section title="Nuestros pilares">
        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard title="Grupos reducidos" description="Aprendizaje cercano y seguimiento personalizado." />
          <FeatureCard title="Docentes con experiencia" description="Acompañamiento en cada etapa del proceso." />
          <FeatureCard title="Comunidad" description="Vínculo con familias y estudiantes." />
        </div>
      </Section>

      <Section title="Nuestros cursos" subtitle="Segmentados por edades y niveles.">
        <div className="grid gap-6 md:grid-cols-3">
          {site.courses.segments.map((c) => (
            <CourseCard key={c.title} title={c.title} description={c.description} imageUrl={c.imageUrl} />
          ))}
        </div>
        <div className="mt-6">
          <Link to="/cursos" className="text-indigo-700 hover:underline text-sm">Ver detalle de cursos</Link>
        </div>
      </Section>

      <Section title="Testimonios">
        <ul className="grid gap-6 md:grid-cols-3">
          {site.testimonials.slice(0, 3).map((t, i) => (
            <li key={i} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <blockquote className="text-sm text-slate-800">“{t.quote}”</blockquote>
              <p className="mt-2 text-xs text-slate-600">{t.name} — {t.role}</p>
            </li>
          ))}
        </ul>
        <Link to="/testimonios" className="mt-4 inline-block text-indigo-700 hover:underline text-sm">Ver más testimonios</Link>
      </Section>

      <Section title="¿Listos para empezar?">
        <div className="rounded-xl bg-indigo-600 text-white p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold">Agendá una visita o escribinos por WhatsApp.</h3>
            <p className="text-sm opacity-90">Respondemos de Lun a Vie {site.contact.hours.split(' ')[2] ?? '14:00–20:00'}.</p>
          </div>
          <div className="flex gap-3">
            <a href={site.links.whatsappUrl} target="_blank" rel="noreferrer" className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500">WhatsApp</a>
            <Link to="/inscripcion" className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-indigo-700 shadow-sm hover:bg-slate-50">Inscribirme</Link>
          </div>
        </div>
      </Section>
    </div>
  )
}



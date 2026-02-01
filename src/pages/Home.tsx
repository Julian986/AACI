import { Link } from 'react-router-dom'
import site from '../content/site'
import Hero from '../components/Hero'
import Section from '../components/Section'
// import FeatureCard from '../components/FeatureCard'
import ImageCard from '../components/ImageCard'
import StatsSplit from '../components/StatsSplit'
import CourseCard from '../components/CourseCard'
// import Stat from '../components/Stat'
import Seo from '../components/Seo'
// import TestimonialQuote from '../components/TestimonialQuote'
import TestimonialsCarousel from '../components/TestimonialsCarousel'

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
            src="https://res.cloudinary.com/dzoupwn0e/image/upload/v1755213219/481914922_9118709678237099_2210731255445127606_n_kn4598.webp"
            alt="AACI — Aulas y estudiantes"
            title="Aulas y estudiantes"
            description="Aulas equipadas, clima de estudio y recursos actuales para aprender con comodidad."
          />
          <ImageCard
            src="https://res.cloudinary.com/dzoupwn0e/image/upload/v1755213222/503846847_9741635389277855_1836969040858731267_n_uo9j3o.webp"
            alt="AACI — Biblioteca"
            title="Biblioteca"
            description="Biblioteca con material en inglés y préstamo de libros para acompañar tu progreso."
          />
          <ImageCard
            src="https://res.cloudinary.com/dzoupwn0e/image/upload/v1755213216/481354471_9119498741491526_8148325617762946876_n_wczfni.webp"
            alt="AACI — Grupos reducidos"
            title="Grupos reducidos"
            description="Grupos chicos para participar más, practicar con confianza y recibir seguimiento cercano."
          />
        </div>
      </Section>

      <StatsSplit />

      

      {/* Secciones removidas a pedido: Resultados reales y Nuestros pilares */}

      <Section
        title="Nuestros cursos"
        subtitle="Segmentados por edades y niveles."
        align="center"
        titleClassName="text-[41px] font-extrabold mb-[23px]"
        subtitleAs="h2"
        subtitleClassName="mt-2 text-slate-700 text-center md:text-left text-[20px] font-normal"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {site.courses.segments.map((c) => (
            <CourseCard key={c.title} title={c.title} description={c.description} imageUrl={c.imageUrl} />
          ))}
        </div>
        <div className="mt-6">
          <Link
            to="/cursos"
            className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ backgroundColor: site.brandColor }}
          >
            Ver detalle de cursos
          </Link>
        </div>
      </Section>

      <Section title="Lo que dicen de nosotros" align="center" titleClassName="text-[37px] font-bold mb-[45px]">
        <TestimonialsCarousel
          items={site.testimonials.map(t => ({ quote: t.quote, name: t.name, role: t.role }))}
          className="max-w-6xl mx-auto"
        />
        {/* <Link to="/testimonios" className="mt-4 inline-block text-indigo-700 hover:underline text-sm">Ver más testimonios</Link> */}
      </Section>

      <Section title="¿Listos para empezar?">
        <div className="rounded-xl text-white p-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ backgroundColor: site.brandColor }}>
          <div>
            <h3 className="text-xl font-semibold">Agendá una visita o escribinos por WhatsApp.</h3>
            <p className="text-sm opacity-90">Respondemos {site.contact.hours}.</p>
          </div>
          <div className="flex gap-3">
            <a href={site.links.whatsappUrl} target="_blank" rel="noreferrer" className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50">Escribinos</a>
            <Link to="/inscripcion" className="rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90" style={{ backgroundColor: 'rgb(39 41 43)' }}>Inscribirme</Link>
          </div>
        </div>
      </Section>
    </div>
  )
}



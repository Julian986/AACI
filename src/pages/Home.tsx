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
            src="https://scontent.fmdq6-1.fna.fbcdn.net/v/t39.30808-6/481914922_9118709678237099_2210731255445127606_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFjiP-TJhVOclJ2NOWDFZepNgZdw47ZRMY2Bl3DjtlExpR89g5Vj5_51Wv1eDBBdwPIsvvrVxSbTKUWM6vsqykP&_nc_ohc=QG-Qkd9RWPMQ7kNvwFKUi_Q&_nc_oc=AdkYNYsFUh8-5VU3AXedYTPMY7XAhne9KmrPE0M-1D3ipSTRxTVxGki0UEBYVotV6pMUaPmWHDwV1XPzBeJfJGTd&_nc_zt=23&_nc_ht=scontent.fmdq6-1.fna&_nc_gid=mUMH03OuQRHU_3el7C4e-w&oh=00_AfUSC7t1F7Ysscz5upT9rYCrEe4PveRtrzpCVhzyAS4KXg&oe=68A135DA"
            alt="AACI — Aulas y estudiantes"
            title="Aulas y estudiantes"
            description="Aulas equipadas, clima de estudio y recursos actuales para aprender con comodidad."
          />
          <ImageCard
            src="https://scontent.fmdq6-1.fna.fbcdn.net/v/t39.30808-6/503846847_9741635389277855_1836969040858731267_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeHRU1rYzQvS_dQORxAq_nR2eZUbpP3rt_B5lRuk_eu38K7wmeDH6oF2NrQlt_OV7Myms-i42jB9fosg0XRS9XPf&_nc_ohc=Xy57iF6Q5MkQ7kNvwERQFqg&_nc_oc=AdkyFbFu0OGqZFNt8XMeGpjKuOJ1G7DVEXOdhPK_fGqrYJnhQTXyyxKa_12pl4gp7Bnis6DHE64edrn1OVOzgr4f&_nc_zt=23&_nc_ht=scontent.fmdq6-1.fna&_nc_gid=TDI9xOCYfLSIMyK0FJimXg&oh=00_AfU53Wr7J3C4ktMStv8OdrInnJBiugq90u40d-TaLBqT3g&oe=68A13955"
            alt="AACI — Biblioteca"
            title="Biblioteca"
            description="Biblioteca con material en inglés y préstamo de libros para acompañar tu progreso."
          />
          <ImageCard
            src="https://scontent.fmdq6-1.fna.fbcdn.net/v/t39.30808-6/481354471_9119498741491526_8148325617762946876_n.jpg?stp=dst-jpg_s1080x2048_tt6&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE-obITFrcU46BJ5ImESFDwg8tHPOaHMq-Dy0c85ocyrx7-v2ICOC7uY4qUFKvO0i6IZwYCUVC3-shIzaS9c_I_&_nc_ohc=My5lD5P7ks0Q7kNvwGNdUIF&_nc_oc=AdlBHG5JsN5F5GCBHvLbKd0mR4JLxu6Cs4A9RiExgmyzWOZ5C0koU3_XHOGVxajXDmbqlXSmHN-kW0qrTFCaKadk&_nc_zt=23&_nc_ht=scontent.fmdq6-1.fna&_nc_gid=eZmaJuwCmAjefMyC_e8DWg&oh=00_AfWpyKMmPg2AoFA6qRu9bZeL8_JcVrf3SVcD10lcGgBw3w&oe=68A160E9"
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
        subtitleClassName="mt-2 text-slate-700 text-left text-[20px] font-normal"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {site.courses.segments.map((c) => (
            <CourseCard key={c.title} title={c.title} description={c.description} imageUrl={c.imageUrl} />
          ))}
        </div>
        <div className="mt-6">
          <Link to="/cursos" className="text-indigo-700 hover:underline text-sm">Ver detalle de cursos</Link>
        </div>
      </Section>

      <Section title="Testimonios" align="center" titleClassName="text-[37px] font-bold mb-[45px]">
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



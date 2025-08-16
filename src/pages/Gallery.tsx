import site from '../content/site'
import Seo from '../components/Seo'
import Section from '../components/Section'

export default function Gallery() {
  return (
    <div>
      <Seo title="Galería — AACI Mar del Plata" description="Recorré imágenes de nuestra comunidad y actividades." />
      <Section title="Galería" subtitle="Imágenes de la comunidad.">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {site.gallery.map((img) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              className="w-full h-40 object-cover rounded-md border border-slate-200"
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      </Section>
    </div>
  )
}



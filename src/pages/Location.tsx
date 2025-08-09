import site from '../content/site'
import Seo from '../components/Seo'
import Section from '../components/Section'

const MAP_IFRAME = `https://www.google.com/maps?q=-38.0053915,-57.5529944&z=16&output=embed`

export default function Location() {
  return (
    <div>
      <Seo title="Ubicación — AACI Mar del Plata" description="Cómo llegar y horarios de atención. Abrí el mapa en Google Maps." />

      <Section title="Dónde estamos" subtitle="Mar del Plata, Provincia de Buenos Aires. Consultá horarios y cómo llegar.">
        <div className="aspect-video w-full rounded-lg border border-slate-300 overflow-hidden">
          <iframe
            title="Mapa AACI Mar del Plata"
            src={MAP_IFRAME}
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <a className="mt-4 inline-block text-indigo-700 hover:underline" href={site.links.maps} target="_blank" rel="noreferrer">
          Abrir en Google Maps
        </a>
        <ul className="mt-6 text-sm text-slate-800 list-disc pl-6">
          <li>Líneas de colectivo cercanas (placeholder, editar)</li>
          <li>Estacionamiento en la zona (placeholder, editar)</li>
          <li>Accesibilidad: ingreso a nivel (placeholder, editar)</li>
        </ul>
      </Section>
    </div>
  )
}



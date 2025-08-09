import Seo from '../components/Seo'
import Section from '../components/Section'

export default function Institution() {
  return (
    <div>
      <Seo title="Nuestra institución — AACI Mar del Plata" description="Historia desde 1944, valores y comunidad. Enseñando inglés con excelencia y calidez humana." />

      <Section title="Nuestra institución" subtitle="Una trayectoria de excelencia desde 1944.">
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
        <div className="mt-8 grid gap-6 md:grid-cols-3" aria-hidden="true">
          <img src="/images/placeholder-1.svg" alt="AACI — Aula (placeholder)" className="rounded-lg border border-slate-200" />
          <img src="/images/placeholder-2.svg" alt="AACI — Estudiantes (placeholder)" className="rounded-lg border border-slate-200" />
          <img src="/images/placeholder-3.svg" alt="AACI — Biblioteca (placeholder)" className="rounded-lg border border-slate-200" />
        </div>
      </Section>
    </div>
  )
}



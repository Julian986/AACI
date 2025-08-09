import site from '../content/site'

export default function StatsSplit() {
  const imageSrc = site.gallery?.[0]?.src || site.heroBackgroundUrl || '/images/placeholder-9.svg'
  return (
    <section className="mx-auto max-w-6xl px-4">
      <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-white to-slate-50 shadow-xl">
        <div className="grid gap-0 md:grid-cols-2">
          <div className="relative h-80 md:h-full overflow-hidden">
            <img
              src={imageSrc}
              alt="AACI — Comunidad en clase"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="px-8 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            <p className="text-sm font-semibold text-indigo-600">Nuestra trayectoria</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Confiado por cientos de familias en Mar del Plata
            </h2>
            <p className="mt-4 text-slate-600 max-w-prose">
              Desde 1944 acompañamos a niños, adolescentes y adultos a desarrollar su inglés con calidez y excelencia.
              Creemos en los grupos reducidos, el seguimiento personalizado y el aprendizaje significativo.
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-x-12 gap-y-8 sm:gap-x-16 md:grid-cols-2">
              <div className="flex flex-col">
                <dt className="text-sm text-slate-600">Años enseñando</dt>
                <dd className="mt-1 text-3xl font-semibold tracking-tight text-slate-900">80+</dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-sm text-slate-600">Alumnos por grupo</dt>
                <dd className="mt-1 text-3xl font-semibold tracking-tight text-slate-900">8–12</dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-sm text-slate-600">Niveles</dt>
                <dd className="mt-1 text-3xl font-semibold tracking-tight text-slate-900">3</dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-sm text-slate-600">Egresados</dt>
                <dd className="mt-1 text-3xl font-semibold tracking-tight text-slate-900">1.000+</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}



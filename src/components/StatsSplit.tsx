import site from '../content/site'

export default function StatsSplit() {
  const imageSrc = site.gallery?.[0]?.src || site.heroBackgroundUrl || '/images/placeholder-9.svg'
  return (
    <section className="mx-auto max-w-6xl px-4">
      <div className="relative isolate overflow-hidden rounded-1xl bg-gradient-to-br from-white to-slate-50 shadow-xl">
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
            <p className="text-sm text-slate-600">Si es tu primera vez en AACI, así empezamos:</p>
            <p className="mt-1 text-sm font-semibold text-black-600">Inscripción y orientación</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Diagnóstico de nivel gratuito
            </h2>
            <p className="mt-4 text-slate-600 max-w-prose">
              Coordinamos una entrevista breve para conocer tus objetivos y ubicarte en el nivel adecuado. Sin costo ni compromiso.
            </p>

            <ul className="mt-8 space-y-4 text-slate-700">
              <li className="flex items-center gap-3">
                <span className="inline-flex h-5 w-5 items-center justify-center text-black">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                Escribinos por WhatsApp y contanos tu disponibilidad.
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex h-5 w-5 items-center justify-center text-black">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </span>
                Agendamos tu visita en nuestros horarios: {site.contact.hours}.
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex h-5 w-5 items-center justify-center text-black">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                  </svg>
                </span>
                Hacemos el diagnóstico y te recomendamos el curso y nivel ideal.
              </li>
            </ul>

            {/* Botones removidos a pedido: sección informativa sin CTAs */}
          </div>
        </div>
      </div>
    </section>
  )
}



import site from '../content/site'

type HeroProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  ctas?: Array<{ label: string; href: string; external?: boolean; variant?: 'primary' | 'secondary' }>
  bgUrl?: string
}

export default function Hero({ eyebrow, title, subtitle, ctas = [], bgUrl }: HeroProps) {
  const brandColor = site.brandColor || '#478766'

  return (
    <section className="relative overflow-hidden">
      {/* Fondo con imagen y capas de degradado para mayor profundidad */}
      <div className="absolute inset-0">
        <div
          className="h-full w-full bg-cover bg-no-repeat bg-center md:bg-right"
          style={{
            backgroundImage: bgUrl ? `url(${bgUrl})` : undefined,
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" aria-hidden />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-12 py-16 md:py-24 text-white">
        <div className="grid items-center gap-10 md:grid-cols-12">
          {/* Columna de contenido */}
          <div className="md:col-span-7">
            {eyebrow && (
              <span
                className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset backdrop-blur"
                style={{ color: brandColor, backgroundColor: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.2)', fontSize: '18px' }}
              >
                {eyebrow}
              </span>
            )}
            <h1 className="mt-3 text-4xl leading-tight font-extrabold md:text-6xl">
              <span className="[text-wrap:balance]">{title}</span>
            </h1>
            {subtitle && (
              <p
                className="mt-5 max-w-2xl text-slate-100/90 whitespace-pre-line rounded-2xl border border-white/15 bg-white/10 px-3 py-2 backdrop-blur-md inline-block md:bg-transparent md:border-0 md:px-0 md:py-0 md:backdrop-blur-0"
                style={{ fontSize: 'larger' }}
              >
                {subtitle}
              </p>
            )}

            {/* Chips de confianza */}
            <ul className="mt-6 flex flex-wrap gap-2 text-sm text-white/90">
              {['Grupos reducidos', 'Acompañamiento personalizado', 'Cambridge / Trinity'].map((chip) => (
                <li
                  key={chip}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 ring-1 ring-white/15"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {chip}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            {ctas.length > 0 && (
              <div className="mt-7 flex flex-wrap gap-3">
                {ctas.map((cta) => (
                  <a
                    key={cta.label}
                    href={cta.href}
                    target={cta.external ? '_blank' : undefined}
                    rel={cta.external ? 'noreferrer' : undefined}
                    className={
                      cta.variant === 'secondary'
                        ? 'inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-base font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-white/30 hover:bg-slate-50'
                        : 'inline-flex items-center justify-center rounded-md px-5 py-2.5 text-base font-semibold text-white shadow-sm'
                    }
                    style={cta.variant === 'secondary' ? undefined : { backgroundColor: brandColor }}
                  >
                    {cta.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Columna lateral con tarjeta de información */}
          <div className="md:col-span-5">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-7 backdrop-blur-md shadow-xl">
              <h3 className="text-xl font-semibold">Consultas e inscripción</h3>
              <dl className="mt-5 space-y-3.5 text-base">
                <div className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5" aria-hidden>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72 12.7 12.7 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.22a2 2 0 0 1 2.11-.45 12.7 12.7 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <div>
                    <dt className="text-white/80">WhatsApp</dt>
                    <dd>
                      <a href={site.links.whatsappUrl} target="_blank" rel="noreferrer" className="hover:underline">
                        +{site.links.whatsappUrl.replace('https://wa.me/', '').split('?')[0]}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5" aria-hidden>
                    <path d="M3 8l9 6 9-6" />
                    <path d="M21 8v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8" />
                  </svg>
                  <div>
                    <dt className="text-white/80">Email</dt>
                    <dd><a href={`mailto:${site.contact.email}`} className="hover:underline">{site.contact.email}</a></dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5" aria-hidden>
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <div>
                    <dt className="text-white/80">Horarios</dt>
                    <dd>{site.contact.hours}</dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5" aria-hidden>
                    <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>
                    <dt className="text-white/80">Ubicación</dt>
                    <dd>
                      <a href={site.links.maps} target="_blank" rel="noreferrer" className="hover:underline">
                        {site.contact.address}
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>

              <div className="mt-6 flex items-center justify-between gap-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-sm ring-1 ring-white/15">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M12 2l9 4-9 4-9-4 9-4zm0 8l9 4-9 4-9-4 9-4z" />
                  </svg>
                  Exámenes Cambridge / Trinity
                </div>
                <a
                  href={site.links.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
                >
                  Escribinos
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



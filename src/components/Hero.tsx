type HeroProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  ctas?: Array<{ label: string; href: string; external?: boolean; variant?: 'primary' | 'secondary' }>
  bgUrl?: string
}

export default function Hero({ eyebrow, title, subtitle, ctas = [], bgUrl }: HeroProps) {
  return (
    <section className="relative overflow-hidden min-h-[calc(100dvh-4rem)]">
      <div className="absolute inset-0">
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: bgUrl ? `url(${bgUrl})` : undefined }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-slate-900/60" aria-hidden />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-32 grid gap-10 md:grid-cols-2 items-center text-white min-h-[calc(100dvh-4rem)]">
        <div>
          {eyebrow && <p className="text-sm font-semibold tracking-wide text-indigo-700">{eyebrow}</p>}
          <h1 className="mt-2 text-4xl md:text-5xl font-extrabold leading-tight drop-shadow">{title}</h1>
          {subtitle && <p className="mt-4 text-lg text-slate-100/90 max-w-prose drop-shadow whitespace-pre-line">{subtitle}</p>}
          {ctas.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-3">
              {ctas.map((cta) => (
                <a
                  key={cta.label}
                  href={cta.href}
                  target={cta.external ? '_blank' : undefined}
                  rel={cta.external ? 'noreferrer' : undefined}
                  className={
                    cta.variant === 'secondary'
                      ? 'inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-white/30 hover:bg-slate-50'
                      : 'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm'
                  }
                  style={cta.variant === 'secondary' ? undefined : { backgroundColor: '#478766' }}
                >
                  {cta.label}
                </a>
              ))}
            </div>
          )}
        </div>
        <div className="aspect-video rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm" aria-hidden="true" />
      </div>
    </section>
  )
}



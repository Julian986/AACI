type SectionProps = {
  title: string
  subtitle?: string
  children: React.ReactNode
  id?: string
  className?: string
  align?: 'left' | 'center'
  titleClassName?: string
  subtitleAs?: 'p' | 'h2'
  subtitleClassName?: string
}

export default function Section({
  title,
  subtitle,
  children,
  id,
  className,
  align = 'left',
  titleClassName,
  subtitleAs = 'p',
  subtitleClassName,
}: SectionProps) {
  const isCentered = align === 'center'
  const headerAlignClass = isCentered ? 'text-center' : ''
  const computedTitleClass = `${titleClassName ?? 'text-2xl md:text-3xl'} font-bold text-slate-900`
  const computedSubtitleClass = `${subtitleClassName ?? 'mt-2 text-slate-700'}`

  return (
    <section id={id} className={`max-w-6xl mx-auto px-4 py-12 ${className ?? ''}`}>
      <header className={headerAlignClass}>
        <h2 className={computedTitleClass}>{title}</h2>
        {subtitle && (
          subtitleAs === 'h2' ? (
            <h2 className={computedSubtitleClass}>{subtitle}</h2>
          ) : (
            <p className={computedSubtitleClass}>{subtitle}</p>
          )
        )}
      </header>
      <div className="mt-6">{children}</div>
    </section>
  )
}




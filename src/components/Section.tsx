type SectionProps = {
  title: string
  subtitle?: string
  children: React.ReactNode
  id?: string
  className?: string
}

export default function Section({ title, subtitle, children, id, className }: SectionProps) {
  return (
    <section id={id} className={`max-w-6xl mx-auto px-4 py-12 ${className ?? ''}`}>
      <header>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{title}</h2>
        {subtitle && <p className="mt-2 text-slate-700">{subtitle}</p>}
      </header>
      <div className="mt-6">{children}</div>
    </section>
  )
}




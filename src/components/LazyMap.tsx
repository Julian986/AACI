import { useEffect, useRef, useState } from 'react'

type LazyMapProps = {
  iframeSrc: string
  mapsLink?: string
  title?: string
}

export default function LazyMap({ iframeSrc, mapsLink, title = 'Mapa' }: LazyMapProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (isLoaded) return
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsLoaded(true)
            observer.disconnect()
            break
          }
        }
      },
      { root: null, rootMargin: '200px', threshold: 0.2 }
    )

    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [isLoaded])

  return (
    <div ref={containerRef} className="relative aspect-video w-full rounded-lg border border-slate-300 overflow-hidden bg-slate-50">
      {isLoaded ? (
        <iframe
          title={title}
          src={iframeSrc}
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center">
          <div className="text-center">
            <div className="mx-auto h-8 w-8 rounded-full border-2 border-slate-300 border-t-slate-500 animate-spin" aria-hidden />
            <p className="mt-3 text-sm text-slate-600">Cargando mapa…</p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setIsLoaded(true)}
                className="inline-flex items-center justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
              >
                Cargar mapa ahora
              </button>
              {mapsLink && (
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
                >
                  Abrir en Google Maps
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}



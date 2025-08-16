import { useState, useEffect } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Outlet, Link, NavLink } from 'react-router-dom'
import site from '../content/site'
import WhatsappFloat from '../components/WhatsappFloat'
import ScrollToTop from '../components/ScrollToTop'

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const items: Array<[string, string]> = [
    ['Institución', '/#institucion'],
    ['Cursos', '/cursos'],
    ['Exámenes', '/examenes'],
    ['Galería', '/galeria'],
    ['Testimonios', '/testimonios'],
    ['Contacto', '/contacto'],
  ]
  return (
    <header className="bg-white sticky top-0 z-50 border-b border-slate-200">
      <div className="relative max-w-7xl mx-auto px-4 h-16 flex items-center gap-4 justify-end md:justify-start">
        {/* Texto institucional - solo mobile */}
        <span className="md:hidden text-md font-bold text-slate-700 mr-auto">AACI • Desde 1944</span>
        <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="AACI Mar del Plata">
          <img src={site.logoUrl || '/logo-aaci.svg'} alt="AACI" className="h-8 w-auto rounded" decoding="async" />
          <span className="sr-only">AACI Mar del Plata</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-slate-800">
          {items.map(([label, href]) => (
            <NavLink
              key={href}
              to={href}
              className="text-base font-medium hover:text-slate-900 inline-flex items-center h-16"
            >
              {({ isActive }) => (
                <span
                  className={isActive ? 'pb-1 border-b-2 text-slate-900' : ''}
                  style={isActive ? { borderBottomColor: site.brandColor } : undefined}
                >
                  {label}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto hidden md:flex items-center gap-3">
          <div className="relative">
            <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27a6.471 6.471 0 001.57-4.23C15.99 6.01 13 3 9.5 3S3 6.01 3 9.5 6.01 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
            </span>
            <input
              type="search"
              placeholder="Buscar"
              className="h-9 w-72 rounded-md border border-slate-300 pl-9 pr-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
            />
          </div>
          <a
            href={site.links.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ backgroundColor: site.brandColor }}
          >
            WhatsApp
          </a>
          <Link
            to="/inscripcion"
            className="inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ backgroundColor: 'rgb(39 41 43)' }}
          >
            Inscribirme
          </Link>
        </div>
        <button
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-slate-300"
          aria-label="Abrir menú"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z"/></svg>
        </button>
      </div>
      <div
        className={`md:hidden absolute left-0 right-0 top-full bg-white border-t border-slate-200 shadow-lg z-50 overflow-hidden transition-all duration-300 ease-out ${mobileOpen ? 'opacity-100 max-h-[calc(100vh-4rem)]' : 'pointer-events-none opacity-0 max-h-0'}`}
        aria-hidden={!mobileOpen}
      >
          <div className="px-4 py-3">
            <div className="relative w-85 max-w-full">
              <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27a6.471 6.471 0 001.57-4.23C15.99 6.01 13 3 9.5 3S3 6.01 3 9.5 6.01 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
              </span>
              <input type="search" placeholder="Buscar" className="h-10 w-full rounded-md border border-slate-300 pl-9 pr-3 text-sm" />
            </div>
          </div>
          <nav className="px-4 pb-4 space-y-3">
            {items.map(([label, href]) => (
              <NavLink
                key={href}
                to={href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-slate-800"
              >
                {({ isActive }) => (
                  <span
                    className={`inline-block w-[76%] border-b-2 ${isActive ? 'text-slate-900 font-medium' : ''}`}
                    style={{ borderBottomColor: isActive ? site.brandColor : 'transparent' }}
                  >
                    {label}
                  </span>
                )}
              </NavLink>
            ))}
            <div className="flex gap-2 pt-2">
              <a
                href={site.links.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-semibold text-white"
                style={{ backgroundColor: site.brandColor }}
              >
                WhatsApp
              </a>
              <Link
                to="/inscripcion"
                onClick={() => setMobileOpen(false)}
                className="flex-1 inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-semibold text-white"
                style={{ backgroundColor: 'rgb(39 41 43)' }}
              >
                Inscribirme
              </Link>
            </div>
          </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div>
            <img src={site.logoUrl || '/logo-aaci.svg'} alt="AACI" className="h-7 w-auto rounded" decoding="async" />
            <p className="mt-6 text-base leading-7 text-gray-600 max-w-sm">
              Enseñamos inglés con excelencia y calidez desde 1944 en Mar del Plata.
            </p>
            <div className="mt-6 flex space-x-6">
              <a href={site.links.facebook} className="text-gray-400 hover:text-gray-500" target="_blank" rel="noreferrer">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12.07C22 6.48 17.52 2 11.93 2 6.35 2 1.87 6.48 1.87 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.02H7.9v-2.9h2.41V9.41c0-2.38 1.42-3.7 3.6-3.7 1.04 0 2.13.19 2.13.19v2.34h-1.2c-1.18 0-1.54.73-1.54 1.48v1.77h2.63l-.42 2.9h-2.21V22c4.78-.75 8.44-4.91 8.44-9.93z"/></svg>
              </a>
              <a href={site.links.whatsappUrl} className="text-gray-400 hover:text-gray-500" target="_blank" rel="noreferrer">
                <span className="sr-only">WhatsApp</span>
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.8 11.8 0 0012 0C5.37 0 0 5.37 0 12c0 2.1.54 4.08 1.5 5.79L0 24l6.39-1.67A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12 0-3.21-1.29-6.18-3.48-8.52zM12 21.6c-1.86 0-3.57-.54-5.01-1.47l-.36-.21-3.78.99 1.02-3.69-.24-.39A9.61 9.61 0 012.4 12C2.4 7.05 6.93 2.4 12 2.4c2.55 0 4.86.99 6.57 2.61A9.16 9.16 0 0121.6 12c0 5.01-4.53 9.6-9.6 9.6zm5.55-6.96c-.3-.15-1.74-.87-2.01-.96-.27-.09-.45-.15-.63.15-.18.3-.72.96-.9 1.14-.18.18-.33.21-.63.06-.3-.15-1.26-.46-2.4-1.47-.9-.81-1.5-1.8-1.68-2.1-.18-.3-.02-.45.13-.6.12-.12.27-.3.39-.45.12-.15.18-.27.27-.45.09-.18.03-.33-.03-.48-.06-.15-.63-1.53-.87-2.1-.23-.56-.48-.48-.66-.48-.18 0-.36-.03-.54-.03-.18 0-.48.06-.72.36-.24.3-.93.9-.93 2.19s.96 2.55 1.08 2.73c.12.18 1.88 2.88 4.56 4.05.64.27 1.15.42 1.54.54.65.21 1.24.18 1.71.11.52-.08 1.74-.71 1.98-1.39.24-.68.24-1.26.18-1.38-.06-.12-.24-.18-.54-.33z"/></svg>
              </a>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-semibold leading-7 text-gray-900">Instituto</h3>
                <ul role="list" className="mt-6 space-y-3">
                  <li><Link to="/institucion" className="text-base leading-7 text-gray-600 hover:text-gray-900">Institución</Link></li>
                  <li><Link to="/galeria" className="text-base leading-7 text-gray-600 hover:text-gray-900">Galería</Link></li>
                  <li><Link to="/testimonios" className="text-base leading-7 text-gray-600 hover:text-gray-900">Testimonios</Link></li>
                  <li><Link to="/novedades" className="text-base leading-7 text-gray-600 hover:text-gray-900">Novedades</Link></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Programas</h3>
                <ul role="list" className="mt-6 space-y-3">
                  <li><Link to="/cursos" className="text-base leading-7 text-gray-600 hover:text-gray-900">Cursos</Link></li>
                  <li><Link to="/examenes" className="text-base leading-7 text-gray-600 hover:text-gray-900">Exámenes internacionales</Link></li>
                  <li><Link to="/inscripcion" className="text-base leading-7 text-gray-600 hover:text-gray-900">Inscripción</Link></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-semibold leading-7 text-gray-900">Información</h3>
                <ul role="list" className="mt-6 space-y-3">
                  <li><Link to="/ubicacion" className="text-base leading-7 text-gray-600 hover:text-gray-900">Ubicación</Link></li>
                  <li><a href={site.links.whatsappUrl} target="_blank" rel="noreferrer" className="text-base leading-7 text-gray-600 hover:text-gray-900">Contacto por WhatsApp</a></li>
                  <li><Link to="/privacidad" className="text-base leading-7 text-gray-600 hover:text-gray-900">Política de privacidad</Link></li>
                  <li><a href="#" className="text-base leading-7 text-gray-600 hover:text-gray-900">Términos de servicio</a></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Legal</h3>
                <ul role="list" className="mt-6 space-y-3">
                  <li><a href="#" className="text-base leading-7 text-gray-600 hover:text-gray-900">Términos de servicio</a></li>
                  <li><Link to="/privacidad" className="text-base leading-7 text-gray-600 hover:text-gray-900">Política de privacidad</Link></li>
                  <li><a href="#" className="text-base leading-7 text-gray-600 hover:text-gray-900">Licencia</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-900/10 pt-6 sm:mt-12">
          <p className="text-sm leading-6 text-gray-500">© {new Date().getFullYear()} AACI Mar del Plata. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default function Layout() {
  useEffect(() => {
    // JSON-LD de organización
    const scriptId = 'jsonld-organization'
    let script = document.getElementById(scriptId) as HTMLScriptElement | null
    if (!script) {
      script = document.createElement('script')
      script.id = scriptId
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    const jsonld = {
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      'name': site.name,
      'url': window.location.origin,
      'logo': site.logoUrl || '/logo-aaci.svg',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': site.contact?.address || 'Mar del Plata',
        'addressCountry': 'AR',
      },
      'contactPoint': [{
        '@type': 'ContactPoint',
        'telephone': site.contact?.phone,
        'contactType': 'customer service',
        'areaServed': 'AR',
        'availableLanguage': ['es']
      }]
    }
    script.textContent = JSON.stringify(jsonld)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <a href="#contenido" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white text-slate-900 px-3 py-2 rounded shadow">Saltar al contenido</a>
      <ScrollToTop />
      <Header />
      <main id="contenido" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsappFloat />
    </div>
  )
}



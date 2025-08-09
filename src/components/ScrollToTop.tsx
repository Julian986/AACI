import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    const { hash } = location
    // Caso especial: cuando navegamos a "/#institucion" queremos ir al TOP
    if (location.pathname === '/' && hash === '#institucion') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    if (hash) {
      // Esperar a que el contenido monte
      const id = hash.replace('#', '')
      const scrollToAnchor = () => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
      // Ejecutar en el próximo tick para asegurar render
      setTimeout(scrollToAnchor, 0)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location.pathname, location.hash])

  return null
}



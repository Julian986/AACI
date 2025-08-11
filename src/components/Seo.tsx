import { useEffect } from 'react'

type SeoProps = {
  title: string
  description?: string
  image?: string
  canonical?: string
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>
}

export default function Seo({ title, description, image = '/logo-aaci.svg', canonical, jsonLd }: SeoProps) {
  useEffect(() => {
    document.title = title
    const ensureMeta = (name: string, attr: 'name' | 'property' = 'name') => {
      let el = document.head.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      return el
    }

    if (description) {
      ensureMeta('description').setAttribute('content', description)
      ensureMeta('og:description', 'property').setAttribute('content', description)
      ensureMeta('twitter:description', 'property').setAttribute('content', description)
    }

    ensureMeta('og:title', 'property').setAttribute('content', title)
    ensureMeta('og:type', 'property').setAttribute('content', 'website')
    ensureMeta('og:image', 'property').setAttribute('content', image)
    ensureMeta('twitter:card', 'property').setAttribute('content', 'summary_large_image')

    // Canonical
    const canonicalHref = canonical || window.location.href
    let linkCanonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!linkCanonical) {
      linkCanonical = document.createElement('link')
      linkCanonical.setAttribute('rel', 'canonical')
      document.head.appendChild(linkCanonical)
    }
    linkCanonical.setAttribute('href', canonicalHref)

    // JSON-LD por página
    const scriptId = 'jsonld-page'
    let script = document.getElementById(scriptId) as HTMLScriptElement | null
    if (jsonLd) {
      if (!script) {
        script = document.createElement('script')
        script.id = scriptId
        script.type = 'application/ld+json'
        document.head.appendChild(script)
      }
      script.textContent = JSON.stringify(jsonLd)
    } else if (script) {
      script.remove()
    }
  }, [title, description, image, canonical, jsonLd])

  return null
}







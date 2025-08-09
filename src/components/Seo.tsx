import { useEffect } from 'react'

type SeoProps = {
  title: string
  description?: string
  image?: string
}

export default function Seo({ title, description, image = '/logo-aaci.svg' }: SeoProps) {
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
  }, [title, description, image])

  return null
}




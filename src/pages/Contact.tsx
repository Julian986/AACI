import { useForm } from 'react-hook-form'
import Seo from '../components/Seo'
import Section from '../components/Section'
import LazyMap from '../components/LazyMap'
const MAP_IFRAME = `https://www.google.com/maps?q=-38.0053915,-57.5529944&z=16&output=embed`
import site from '../content/site'

type ContactValues = {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

export default function Contact() {
  const { register, handleSubmit, formState, reset } = useForm<ContactValues>()

  function onSubmit(values: ContactValues) {
    const subject = encodeURIComponent('Mensaje de contacto — AACI Mar del Plata')
    const body = encodeURIComponent(
      `Nombre: ${values.firstName} ${values.lastName}\nEmail: ${values.email}\nTeléfono: ${values.phone}\nMensaje: ${values.message}`,
    )
    window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${body}`
    reset()
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <Seo title="Contacto — AACI Mar del Plata" description="Ponete en contacto con nuestra institución. Horarios, email y teléfono." />

      <Section title="Dónde estamos" subtitle="Mar del Plata, Provincia de Buenos Aires. Consultá horarios y cómo llegar.">
        <LazyMap iframeSrc={MAP_IFRAME} mapsLink={site.links.maps} title="Mapa AACI Mar del Plata" />
      </Section>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="relative isolate overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 sm:p-10">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Ponete en contacto</h1>
          <p className="mt-4 text-slate-700">
            Escribinos y te responderemos a la brevedad. También podés consultarnos por WhatsApp o visitarnos.
          </p>
          <dl className="mt-8 space-y-6 text-sm text-slate-800">
            <div className="flex gap-3">
              <span className="text-slate-400" aria-hidden>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"/></svg>
              </span>
              <div>
                <dt className="font-medium text-slate-900">Dirección</dt>
                <dd className="text-slate-700">{site.contact.address}</dd>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-slate-400" aria-hidden>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V21a1 1 0 0 1-1 1C11.4 22 2 12.6 2 1a1 1 0 0 1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.2 2.2Z"/></svg>
              </span>
              <div>
                <dt className="font-medium text-slate-900">Teléfono</dt>
                <dd className="text-slate-700">{site.contact.phone}</dd>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-slate-400" aria-hidden>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M12 13.065 2 6.5V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6.5l-10 6.565Zm10-9.065H2l10 6.5 10-6.5Z"/></svg>
              </span>
              <div>
                <dt className="font-medium text-slate-900">Email</dt>
                <dd>
                  <a href={`mailto:${site.contact.email}`} className="text-slate-700 hover:underline">
                    {site.contact.email}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-slate-400" aria-hidden>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M20.52 3.48A11.8 11.8 0 0012 0C5.37 0 0 5.37 0 12c0 2.1.54 4.08 1.5 5.79L0 24l6.39-1.67A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12 0-3.21-1.29-6.18-3.48-8.52zM12 21.6c-1.86 0-3.57-.54-5.01-1.47l-.36-.21-3.78.99 1.02-3.69-.24-.39A9.61 9.61 0 012.4 12C2.4 7.05 6.93 2.4 12 2.4c2.55 0 4.86.99 6.57 2.61A9.16 9.16 0 0121.6 12c0 5.01-4.53 9.6-9.6 9.6zm5.55-6.96c-.3-.15-1.74-.87-2.01-.96-.27-.09-.45-.15-.63.15-.18.3-.72.96-.9 1.14-.18.18-.33.21-.63.06-.3-.15-1.26-.46-2.4-1.47-.9-.81-1.5-1.8-1.68-2.1-.18-.3-.02-.45.13-.6.12-.12.27-.3.39-.45.12-.15.18-.27.27-.45.09-.18.03-.33-.03-.48-.06-.15-.63-1.53-.87-2.1-.23-.56-.48-.48-.66-.48-.18 0-.36-.03-.54-.03-.18 0-.48.06-.72.36-.24.3-.93.9-.93 2.19s.96 2.55 1.08 2.73c.12.18 1.88 2.88 4.56 4.05.64.27 1.15.42 1.54.54.65.21 1.24.18 1.71.11.52-.08 1.74-.71 1.98-1.39.24-.68.24-1.26.18-1.38-.06-.12-.24-.18-.54-.33z"/></svg>
              </span>
              <div>
                <dt className="font-medium text-slate-900">WhatsApp</dt>
                <dd>
                  <a href={site.links.whatsappUrl} className="text-slate-700 hover:underline" target="_blank" rel="noreferrer">{site.contact.phone}</a>
                </dd>
              </div>
            </div>
          </dl>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm">
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-900">Nombre</label>
                <input className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200" {...register('firstName', { required: 'Ingresá tu nombre' })} />
                {formState.errors.firstName && <p className="mt-1 text-sm text-red-600">{formState.errors.firstName.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-900">Apellido</label>
                <input className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200" {...register('lastName')} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-900">Email</label>
              <input type="email" className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200" {...register('email', { required: 'Ingresá un email' })} />
              {formState.errors.email && <p className="mt-1 text-sm text-red-600">{formState.errors.email.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-900">Teléfono</label>
              <input className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200" {...register('phone')} />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-900">Mensaje</label>
              <textarea rows={5} className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200" {...register('message', { required: 'Escribí tu mensaje' })} />
              {formState.errors.message && <p className="mt-1 text-sm text-red-600">{formState.errors.message.message}</p>}
            </div>
            <div className="flex justify-end">
              <button type="submit" className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2" style={{ backgroundColor: site.brandColor }}>
                Enviar mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}




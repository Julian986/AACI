import { useForm } from 'react-hook-form'
import site from '../content/site'
import Seo from '../components/Seo'
import Section from '../components/Section'

type FormValues = {
  name: string
  phone: string
  email: string
  ageGroup: 'Niños' | 'Adolescentes' | 'Adultos'
  level: 'Principiante' | 'Intermedio' | 'Avanzado'
  message: string
}

export default function Enroll() {
  const { register, handleSubmit, reset, formState } = useForm<FormValues>({
    defaultValues: {
      ageGroup: 'Niños',
      level: 'Principiante',
    },
  })

  function onSubmit(values: FormValues) {
    const subject = encodeURIComponent('Consulta de inscripción — AACI Mar del Plata')
    const body = encodeURIComponent(
      `Nombre: ${values.name}\nTel: ${values.phone}\nEmail: ${values.email}\nTramo: ${values.ageGroup}\nNivel: ${values.level}\nMensaje: ${values.message}`,
    )
    const mailto = `mailto:${site.contact.email}?subject=${subject}&body=${body}`
    window.location.href = mailto
    reset()
  }

  return (
    <div>
      <Seo title="Inscripción — AACI Mar del Plata" description="Consultas e inscripción. Formulario, WhatsApp y contacto por email." />

      <Section title="Inscripción y contacto" subtitle="Completá el formulario o escribinos por WhatsApp. Te responderemos a la brevedad.">
        <form className="mt-2 space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate aria-live="polite">
        <div>
          <label className="block text-sm font-medium text-slate-900">Nombre y apellido</label>
          <input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200" {...register('name', { required: 'Ingresá tu nombre' })} />
          {formState.errors.name && <p className="mt-1 text-sm text-red-600">{formState.errors.name.message}</p>}
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-slate-900">Teléfono</label>
            <input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200" {...register('phone', { required: 'Ingresá un teléfono' })} />
            {formState.errors.phone && <p className="mt-1 text-sm text-red-600">{formState.errors.phone.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-900">Email</label>
            <input type="email" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200" {...register('email', { required: 'Ingresá un email' })} />
            {formState.errors.email && <p className="mt-1 text-sm text-red-600">{formState.errors.email.message}</p>}
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-slate-900">Tramo etario</label>
            <select className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200" {...register('ageGroup')}>
              <option>Niños</option>
              <option>Adolescentes</option>
              <option>Adultos</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-900">Nivel estimado</label>
            <select className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200" {...register('level')}>
              <option>Principiante</option>
              <option>Intermedio</option>
              <option>Avanzado</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-900">Mensaje</label>
          <textarea rows={4} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200" {...register('message', { required: 'Contanos tu consulta' })} />
          {formState.errors.message && <p className="mt-1 text-sm text-red-600">{formState.errors.message.message}</p>}
        </div>
        <div className="flex flex-wrap gap-3">
          <button type="submit" className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2" style={{ backgroundColor: 'rgb(0 0 0)' }}>Enviar</button>
          <a href={site.links.whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500">WhatsApp</a>
        </div>
        <p className="text-xs text-slate-500">También podés escribirnos a <a className="text-indigo-700 hover:underline" href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.</p>
      </form>

      <details className="mt-10">
        <summary className="cursor-pointer text-sm text-slate-700">Preparado para EmailJS (opcional)</summary>
        <p className="mt-2 text-xs text-slate-600">Definí variables <code>VITE_EMAILJS_*</code> y reemplazá el envío <code>mailto:</code> por el hook interno (a crear).</p>
      </details>
      </Section>
    </div>
  )
}



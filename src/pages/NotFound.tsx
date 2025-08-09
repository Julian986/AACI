import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-20 text-center">
      <h1 className="text-5xl font-extrabold text-slate-900">404</h1>
      <p className="mt-2 text-slate-700">Página no encontrada.</p>
      <Link to="/" className="mt-6 inline-block text-indigo-700 hover:underline">Volver al inicio</Link>
    </section>
  )
}



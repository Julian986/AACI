type FeatureCardProps = { title: string; description: string }

export default function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow transition-shadow">
      <h3 className="font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-700">{description}</p>
    </div>
  )
}


















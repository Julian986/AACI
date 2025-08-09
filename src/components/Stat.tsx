type StatProps = { label: string; value: string }

export default function Stat({ label, value }: StatProps) {
  return (
    <div className="rounded-lg bg-white border border-slate-200 p-5 text-center shadow-sm">
      <div className="text-3xl font-extrabold text-indigo-700">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-wide text-slate-500">{label}</div>
    </div>
  )
}




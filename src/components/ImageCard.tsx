type ImageCardProps = {
  src: string
  alt: string
  title?: string
  description?: string
}

export default function ImageCard({ src, alt, title, description }: ImageCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm transition hover:shadow-md">
      <div className="aspect-[16/9] w-full overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>
      {(title || description) && (
        <div className="p-6">
          {title && <h3 className="text-base font-semibold leading-6 text-slate-900">{title}</h3>}
          {description && <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>}
        </div>
      )}
    </article>
  )
}



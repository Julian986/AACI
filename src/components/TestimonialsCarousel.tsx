import { useRef } from 'react'
import Slider, { type CustomArrowProps } from 'react-slick'
import site from '../content/site'

type Testimonial = {
  name: string
  text: string
  avatar: string
  role?: string
}

const PrevArrow = ({ onClick }: CustomArrowProps) => (
  <button
    aria-label="Anterior"
    onClick={onClick}
    className="absolute -left-3 md:-left-6 top-[0%] md:top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 border border-gray-200 cursor-pointer"
  >
    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
    </svg>
  </button>
)

const NextArrow = ({ onClick }: CustomArrowProps) => (
  <button
    aria-label="Siguiente"
    onClick={onClick}
    className="absolute -right-3 md:-right-6 top-[0%] md:top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 border border-gray-200 cursor-pointer"
  >
    <svg className="w-6 h-6 text-gray-600 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
    </svg>
  </button>
)

type Props = {
  items?: Array<{ name: string; role?: string; quote: string; avatarUrl?: string }>
  className?: string
}

export default function TestimonialsCarousel({ items, className }: Props) {
  const sliderRef = useRef<Slider | null>(null)

  // Mostrar 3 por vez en desktop, 1 en móvil; deslizar de a 3 en desktop
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      }
    ]
  }

  // Construir lista desde props o desde contenido del sitio
  const source = (items ?? site.testimonials) as Array<{ name: string; quote: string; role?: string; avatarUrl?: string }>
  const testimonials: Testimonial[] = source.map((t) => ({
    name: t.name,
    text: t.quote,
    role: t.role,
    avatar: (t as any).avatarUrl || '/images/placeholder-3.svg',
  }))

  return (
    <section className="py-10 bg-white">
      <div className={`max-w-6xl mx-auto px-4 ${className ?? ''}`}>
        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((t, index) => (
              <div key={index} className="px-3">
                <figure className="bg-white p-6 rounded-xl text-center">
                  <svg className="h-8 mx-auto mb-3 text-gray-400" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                  </svg>
                  <blockquote>
                    <p className="text-xl font-medium text-gray-900">“{t.text}”</p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center mt-4 space-x-3">
                    <img className="w-6 h-6 rounded-full" src={t.avatar} alt={t.name} loading="lazy" />
                    <div className="flex items-center divide-x-2 divide-gray-200">
                      <div className="pr-3 font-medium text-gray-900">{t.name}</div>
                      {t.role && <div className="pl-3 text-sm font-light text-gray-500">{t.role}</div>}
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}




const whatsappNumberInternational = '542234478017'
const whatsappMessage = 'Hola AACI Mar del Plata, quisiera hacer una consulta.'
const whatsappUrl = `https://wa.me/${whatsappNumberInternational}?text=${encodeURIComponent(whatsappMessage)}`

const site = {
  name: 'AACI Mar del Plata',
  tagline: `Asociación Argentina de Cultura Inglesa. \nEnseñando inglés con excelencia desde 1944.\n¿Querés estudiar inglés en serio? \nVení a conocer tu nivel e inscribite.`,
  brandColor: '#478766',
  logoUrl:
    'https://res.cloudinary.com/dzoupwn0e/image/upload/v1755213219/311996228_634859431446968_1532899727758762642_n_hrcttf.webp',
  heroBackgroundUrl:
    'https://res.cloudinary.com/dzoupwn0e/image/upload/v1755213221/imagen_fondo_neck0l.webp',
    contact: {
    phone: '2234478017',
    email: 'gloria@aaci-mdp.org', // Editar
    address: 'Mar del Plata, Provincia de Buenos Aires', // Editar
    hours: 'Miércoles y viernes 16:00–19:00', // Editar
  },
  links: {
    facebook: 'https://www.facebook.com/aacimdp/?locale=es_LA',
    whatsappUrl,
    whatsappUrlRaw: `tel:+${whatsappNumberInternational}`,
    maps:
      'https://www.google.com.ar/maps/place/Asociación+Argentina+de+Cultura+Inglesa+de+Mar+del+Plata/@-38.0053872,-57.5555693,17z',
  },
  courses: {
    segments: [
      {
        title: 'Niños',
        description:
          'Primeros pasos en el idioma mediante juegos, canciones y proyectos. Grupos reducidos y atención personalizada.',
        imageUrl:
          'https://res.cloudinary.com/dzoupwn0e/image/upload/v1755213238/159070641_3660698980704890_8727416199826583987_n_vxlieo.webp',
      },
      {
        title: 'Adolescentes',
        description:
          'Comunicación real, proyectos colaborativos y preparación académica. Grupos reducidos y atención personalizada.',
        imageUrl:
          'https://res.cloudinary.com/dzoupwn0e/image/upload/v1755213237/89471551_2692685960839535_3187586476388909056_n_zdzvwk.webp',
      },
      {
        title: 'Adultos',
        description:
          'Inglés práctico para viajes, trabajo y desarrollo personal. Ritmo adaptable.',
        imageUrl:
          'https://res.cloudinary.com/dzoupwn0e/image/upload/v1755213218/481664127_9119499154824818_8541728228583082629_n_oi4voy.webp',
      },
    ],
    levels: ['Principiante', 'Intermedio', 'Avanzado'],
  },
  curriculum: {
    year1: 'Saludos y presentaciones, alfabeto y números, colores, objetos del aula y vocabulario básico. Comprensión y producción de frases simples (I am, You are). Canciones y juegos fonéticos.',
    year2: 'Rutinas diarias y familia, descripciones físicas y de personalidad, vocabulario de casa/escuela. Presente simple (afirmativa/negativa/preguntas) y pronunciación. Lecturas cortas con apoyo visual.',
    year3: 'Tiempo y clima, lugares de la ciudad y direcciones, actividades de tiempo libre. Introducción a pasado simple (verbos regulares) y conectores básicos. Storytelling con imágenes.',
    year4: 'Geografía: vocabulario, lectura y presentación de regiones.',
    year5: 'Historia: eventos, biografías y líneas de tiempo.',
    year6: 'Literatura inglesa: cuentos/poemas, análisis y expresión escrita.',
    suggestedReadings: [
      'Oscar Wilde: “The Happy Prince”, “The Selfish Giant”',
      'Roald Dahl: “Lamb to the Slaughter”',
      'Arthur Conan Doyle: “The Adventure of the Speckled Band”',
      'William Blake: “The Tyger”, “London”',
      'William Shakespeare: Sonetos o “A Midsummer Night’s Dream” (escenas)',
    ],
  },
  exams: {
    cambridge: [
      'Young Learners (Starters, Movers, Flyers)',
      'Key (A2) — KET',
      'Preliminary (B1) — PET',
      'First (B2) — FCE',
      'Advanced (C1) — CAE',
      'Proficiency (C2) — CPE',
    ],
    trinity: ['GESE (Grades)', 'ISE (niveles)'],
  },
  testimonials: [
    { name: 'María G.', role: 'Madre de alumno', quote: 'Excelente acompañamiento y progreso real.' },
    { name: 'Julián R.', role: 'Estudiante', quote: 'Grupos chicos y clases dinámicas. Recomendado.' },
    { name: 'Elena P.', role: 'Adulta', quote: 'Me sentí cómoda desde la primera clase.' },
    { name: 'Sofía L.', role: 'Estudiante', quote: 'Profes comprometidos y clases que motivan.' },
    { name: 'Carlos M.', role: 'Padre', quote: 'Mi hija mejoró muchísimo su confianza al hablar.' },
    { name: 'Ana V.', role: 'Profesional', quote: 'Contenido útil para el trabajo y buena práctica oral.' },
    { name: 'Diego F.', role: 'Ex alumno', quote: 'La preparación para exámenes fue excelente.' },
    { name: 'Lucía T.', role: 'Madre', quote: 'Acompañamiento cercano y comunicación clara.' },
    { name: 'Matías C.', role: 'Estudiante', quote: 'Ambiente amigable y resultados visibles.' },
  ],
  gallery: [
    {
      src: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1755213216/513862064_9914882771953115_1070340485386345805_n_gvqzdd.webp',
      alt: 'Actividad en AACI (1)'
    },
    {
      src: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1755213222/503846847_9741635389277855_1836969040858731267_n_uo9j3o.webp',
      alt: 'Actividad en AACI (2)'
    },
    {
      src: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1755213238/513624019_9914882905286435_5240025462556505941_n_oxeqbo.webp',
      alt: 'Actividad en AACI (3)'
    },
    {
      src: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1755213220/513624100_9914882585286467_273779406322499775_n_iol5hf.webp',
      alt: 'Actividad en AACI (4)'
    },
  ],
}

export default site



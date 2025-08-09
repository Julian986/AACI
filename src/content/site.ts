const whatsappNumberInternational = '542234956513'
const whatsappMessage = 'Hola AACI Mar del Plata, quisiera hacer una consulta.'
const whatsappUrl = `https://wa.me/${whatsappNumberInternational}?text=${encodeURIComponent(whatsappMessage)}`

const site = {
  name: 'AACI Mar del Plata',
  tagline: `Enseñando inglés con excelencia desde 1944.\n¿Querés estudiar inglés en serio? \nVení a conocer tu nivel e inscribite.`,
  brandColor: '#478766',
  logoUrl:
    'https://scontent.fmdq6-1.fna.fbcdn.net/v/t39.30808-1/311996228_634859431446968_1532899727758762642_n.png?stp=dst-png_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=2d3e12&_nc_eui2=AeFSGsg7jddq2QZ5RmqY7vqIXS-3HvvgRtJdL7ce--BG0lTeYPgSvbqH0-4PUnNH7rKLrDs9kkFxMim7hxP09WyO&_nc_ohc=y8IrvvkvMukQ7kNvwGqwu5p&_nc_oc=Admzy9PJnk2bxmQmufatj3D9hUzLpvWcf4e6lpU7FD3X3ey3pmI0MFwC-px-oYX5N6tzcfTNZC6Tu6n_35gsNGJd&_nc_zt=24&_nc_ht=scontent.fmdq6-1.fna&_nc_gid=B_ictQSxIlzOH24fQ1gwKQ&oh=00_AfWE-BmDKEHr0hLoJIbJ6y8I-VFJ_7KhTLFSwbo624qdEA&oe=689C46BD',
  heroBackgroundUrl:
    'https://scontent.fmdq6-1.fna.fbcdn.net/v/t39.30808-6/310124787_634859428113635_535602896506399436_n.png?_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFOT-LVu7zngrKu5mAJmEy_e4CjsBNqf1Z7gKOwE2p_Vt_9-fh7n1FJZApbPXSTel4I85aLUky9GkHimZQlb0LA&_nc_ohc=6Y3oLxaoBLAQ7kNvwGoajii&_nc_oc=AdntKFprfq83W7LcJ8U-errRHbAHYbAH3orLl6YwXPE3IyK07Na7jR54MY1T2APADEhMaE9lue1BaXU2tl8_Rj2k&_nc_zt=23&_nc_ht=scontent.fmdq6-1.fna&_nc_gid=B_ictQSxIlzOH24fQ1gwKQ&oh=00_AfVAAfvLO42CcdATh8hReiTSOMsZwaDsHGrBRxBZKYHkMw&oe=689C71E9',
  contact: {
    phone: '02234956513',
    email: 'contacto@aaci-mdp.org', // Editar
    address: 'Mar del Plata, Provincia de Buenos Aires', // Editar
    hours: 'Lun a Vie 14:00–20:00', // Editar
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
          'https://scontent.fmdq6-1.fna.fbcdn.net/v/t1.6435-9/159070641_3660698980704890_8727416199826583987_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHrE-STENzZch9IbKU7phzzlL4imMotBqeUviKYyi0Gp9FjwIKz83wlWFFBFjDvb_uTxhPdBHJR-iQQT1NcbihI&_nc_ohc=duJdV2_Yq1cQ7kNvwElFPSw&_nc_oc=AdkmBSf30ll_8ZHJbl1Nms6CykUKRFkw5nj55UzvAOh6NWlixItj7FKf2ZqA0-lD4Pmn0pMVZ5X7MF-sWkX4Tg7w&_nc_zt=23&_nc_ht=scontent.fmdq6-1.fna&_nc_gid=idIjj_Jy1gb6Y0YESfBaTQ&oh=00_AfW3XNxCpxaItSMG-v2oVLvBAFlUwgOMx9t4GC8olyP3SA&oe=68BDE3F1',
      },
      {
        title: 'Adolescentes',
        description:
          'Comunicación real, proyectos colaborativos y preparación académica. Grupos reducidos y atención personalizada.',
      },
      {
        title: 'Adultos',
        description:
          'Inglés práctico para viajes, trabajo y desarrollo personal. Ritmo adaptable.',
        imageUrl:
          'https://scontent.fmdq6-1.fna.fbcdn.net/v/t39.30808-6/481664127_9119499154824818_8541728228583082629_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFVzP5R8EpJmNyETCbSWIWi1VFOsY_-UDHVUU6xj_5QMTm7Nvbj08TJAz2TXkow9t1GcHczXuUmUEhgoh5GJtCC&_nc_ohc=GZTJIicpKIQQ7kNvwFbKPYe&_nc_oc=AdmbiCKE6uHVCLiAEgIuqKWIOI4nTL6NbrRPR8WwFr8kUbc3WbMPsFZ_sIqejs3qrgGmsgHcWMW-3sYbAQom_Ajf&_nc_zt=23&_nc_ht=scontent.fmdq6-1.fna&_nc_gid=5UcW2yC0VzzWFkRfdIDrRw&oh=00_AfUIa4Tl30DVEh9jHQ5iT6zHXe4bd3yf4sbbu_Hz1153HA&oe=689C6F87',
      },
    ],
    levels: ['Principiante', 'Intermedio', 'Avanzado'],
  },
  curriculum: {
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
  ],
  gallery: [
    {
      src: 'https://scontent.fmdq6-1.fna.fbcdn.net/v/t39.30808-6/513862064_9914882771953115_1070340485386345805_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHPWRE-zWy82eSIoUiC8AX8C6lnjan_X64LqWeNqf9frjVIGneKI1gdJs7t97-3glHxiob5BZJ_sQWDDzkOICyf&_nc_ohc=Sqrp6-ZpGysQ7kNvwF8iSsM&_nc_oc=AdlCCRHIXKfhdR65w3MQKm9F-obOS_-PJ6Rb8ri34kGbvyMHHL9ZebkZ2LlWXlduyLI6L_pXAZY1HE6n7Q3Q3AOh&_nc_zt=23&_nc_ht=scontent.fmdq6-1.fna&_nc_gid=X-ypVERrAJXlae79XvunZg&oh=00_AfVDQYN8ONUSloFer5x3z7DVjRV1dKuBHe4va7-6jCIKRA&oe=689C4B3C',
      alt: 'Actividad en AACI (1)'
    },
    {
      src: 'https://scontent.fmdq6-1.fna.fbcdn.net/v/t39.30808-6/513668636_9914882951953097_8971529747715601269_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF4NI2jCye6cmzY40vzq2aGev06KlfG6jZ6_ToqV8bqNqe6ZSydl4wEY_nsuY2069QyiLpRK_D2dB1yXUvzRoKu&_nc_ohc=Z_EkvXmb98kQ7kNvwEEYJXE&_nc_oc=AdmOXcf-6z-U0dNaf0V7gATWWfV82sL6qHGbFKkaUsmRXkmD4n0ndDQkN7vwGDko3Br5npDKdN1ColQOj3V9y2L9&_nc_zt=23&_nc_ht=scontent.fmdq6-1.fna&_nc_gid=giul-KAgAOeOTeP08NE4Qg&oh=00_AfVAPH-PtVgRA1IcXqeT7zBzQ7Q_8vPGt5cV3__7doZoQA&oe=689C6A40',
      alt: 'Actividad en AACI (2)'
    },
    {
      src: 'https://scontent.fmdq6-1.fna.fbcdn.net/v/t39.30808-6/513624019_9914882905286435_5240025462556505941_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGiJ7TrsdW07yVcM3ldswvipmlmzAQvfKemaWbMBC98px_06g1msZjmb1I0-xb4LCTQxQCoc84MzPkVrr2t2mkg&_nc_ohc=72-HBpq8IV4Q7kNvwH0ezoj&_nc_oc=AdnW4LSA8XELBUHAs7GjI75vMiFKvwtsvTzxa8SaSd6cGUpwW2UmRzgGVetRzNAkeMEEV3oW3twC9beAH7depiP6&_nc_zt=23&_nc_ht=scontent.fmdq6-1.fna&_nc_gid=iqm8kFnI_O2DfuAelBiCsg&oh=00_AfUYkaJwWVrA6VsmtrMVEorufqdWho5n3MafNrrX-xFRJw&oe=689C7A12',
      alt: 'Actividad en AACI (3)'
    },
    {
      src: 'https://scontent.fmdq6-1.fna.fbcdn.net/v/t39.30808-6/513624100_9914882585286467_273779406322499775_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFPD1IFmdDfGkDpP8yRMrZpf5l_TVIadid_mX9NUhp2J1_lmLdinDWf-RryQ0VTjDPlW4sEc7A-owoy9mQBuz9C&_nc_ohc=-ajJ9BEFClEQ7kNvwFJdqJD&_nc_oc=AdmORjzsZuxhTfYPa-Jw9bwYj_3in2ajA4X7nuA2au8WdNEBkI5Z7R8oe8uQcGk2zHfmGojACW3zL86hEbLtwxi3&_nc_zt=23&_nc_ht=scontent.fmdq6-1.fna&_nc_gid=l62HxnrOc89hnnQktWUYcg&oh=00_AfVDCvlr1TPrhatlaY7yyLICKWYu-xAVAwOL3JD5G1Ri2g&oe=689C5083',
      alt: 'Actividad en AACI (4)'
    },
  ],
}

export default site



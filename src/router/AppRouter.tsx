import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Courses from '../pages/Courses'
import Curriculum from '../pages/Curriculum'
import Exams from '../pages/Exams'
import Enroll from '../pages/Enroll'
import Contact from '../pages/Contact'
import Gallery from '../pages/Gallery'
import Testimonials from '../pages/Testimonials'
import News from '../pages/News'
import NotFound from '../pages/NotFound'
import Layout from '../shared/Layout'
import CourseDetail from '../pages/CourseDetail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'institucion', element: <Navigate to="/#institucion" replace /> },
      { path: 'cursos', element: <Courses /> },
      { path: 'cursos/:slug', element: <CourseDetail /> },
      { path: 'plan-de-estudios', element: <Curriculum /> },
      { path: 'examenes', element: <Exams /> },
      { path: 'inscripcion', element: <Enroll /> },
      // { path: 'ubicacion', element: <Location /> },
      { path: 'contacto', element: <Contact /> },
      { path: 'galeria', element: <Gallery /> },
      { path: 'testimonios', element: <Testimonials /> },
      { path: 'novedades', element: <News /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}



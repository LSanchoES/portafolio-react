import React from 'react'
import { Head } from './components/Head'
import { UiNavbar } from './components/UiNavbar'
import { Tecnologias } from './components/Tecnologias'
import { Sobremi } from './components/Sobremi'
import { Proyectos } from './components/Proyectos'
import { Audiovisual } from './components/Audiovisual'
import { Contacto } from './components/Contacto'

const App = () => {
  return (
    <>
     <UiNavbar />
     <Head />
     <Sobremi />
     <Tecnologias />
     <Proyectos />
     <Audiovisual />
     <Contacto />
    </>
  )
}

export default App

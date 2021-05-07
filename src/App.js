import React from 'react'
import { Head } from './components/Head'
import { UiNavbar } from './components/UiNavbar'
import {Example} from './components/Example'
import { Tecnologias } from './components/Tecnologias'
import { Sobremi } from './components/Sobremi'
import { Proyectos } from './components/Proyectos'

const App = () => {
  return (
    <>
     <UiNavbar />
     <Head />
     <Sobremi />
     <Tecnologias />
     <Proyectos />
    </>
  )
}

export default App

import { useState } from 'react'
import CalendarioCitas from './components/CalendarioCitas'
import SelectorCitas  from './components/SelectorCitas'
import useCitas from './hooks/useCitas'

function App() {
  const {
    listaDecitas,
    seleccionarCita,
    selectCita,
    reservarCita,
    cancelarCita,
    resetFormulario
  } = useCitas()
  

  return (
    <>
   <div className='min-h-screen flex flex-col'>
    <header className='bg-yellow-200 p-4'>
     <h1 className='text-3xl font-bold text-center py-4'>Gestion de citas medicas</h1> 
    </header>
    <main className='flex-grow'>
      <div className=' bg-orange-300 flex justify-center items-center'>
     <CalendarioCitas 
     listaDeCitas={listaDecitas}
     cancelarCita={cancelarCita}
      />
     
      </div>
      <div className=' bg-orange-300 flex justify-center items-center'>
        <SelectorCitas 
        listaDeCitas={listaDecitas}
        seleccionarCita={seleccionarCita}
        selectCita={selectCita}
        reservarCita={reservarCita}
        resetFormulario={resetFormulario}
        
        />
        </div>
    </main>
    <footer className='bg-slate-400 flex justify-center items-center w-full py-8'>
        <p>Todos los derechos reservados</p>
    </footer>
   </div>
    </>
  )
}

export default App

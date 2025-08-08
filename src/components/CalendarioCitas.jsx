import React from 'react'

export default function CalendarioCitas({ listaDeCitas, cancelarCita }) {
  return (
    <div className='flex flex-col'>
      <div className='bg-cyan-300 rounded-lg text-center mt-10'>
  <h2 className='p-2 m-4 font-bold'>
    Programación de Citas Médicas
  </h2>
</div>


      <div className='bg-lime-300 p-4 m-2 text-center rounded-lg mt-4'>
        <h3 className='font-semibold mb-5'>Citas disponibles: </h3>
        {listaDeCitas.map(cita => (
         <div key={cita.id} className="flex items-center justify-between mb-2">
         <p className="mr-4">
           {`${cita.date}, ${cita.time}, ${cita.available ? '(Disponible)' : '(No disponible)'}`}
         </p>
         {!cita.available && (
           <button className='bg-red-500 text-white px-2 py-1 rounded-md'
           onClick={() => cancelarCita(cita.id)}>
             Cancelar 
           </button>
         )}
       </div>
       
        ))}
      </div>
    </div>
  )
}

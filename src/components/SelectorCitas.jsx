import React from 'react'


export default function SelectorCitas({listaDeCitas, seleccionarCita, selectCita, reservarCita, resetFormulario}) {
    
    return (
        <>
        <div className='flex flex-col'>
            <div className='bg-rose-400 m-10 p-4 rounded-lg mb-8'>
                <label htmlFor="citas" className='block text-center font-semibold text-gray-800 mb-5'>
                    Seleccione una cita:
                </label>
                <select name="" 
                id="citas"
                value={seleccionarCita}
                onChange={e => selectCita(Number(e.target.value))}



                className='block mx-auto px-3 py-2 border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'>
                    <option value="">
                        Seleccione...
                    </option>
                    {listaDeCitas.map(cita =>  (
                        <option 
                        key={cita.id}
                        value={cita.id}
                        disabled={!cita.available}
                        >
                           {`${cita.date}, ${cita.time}, ${cita.available ? '(Disponible)' : '(No disponible)'}`}
                        </option>
                    ))}
                </select>
            </div>
           <div className=' bg-green-400 m-10 p-4 rounded-lg mt-8 '>
            <button className=' bg-slate-500 px-2 py-1 ml-4 text-white rounded-md'
            onClick={() => reservarCita(seleccionarCita.id)}>
                Reservar cita 
            </button>
            <button className=' bg-red-600 px-2 py-1 ml-4 text-white rounded-md'
            onClick={resetFormulario}>
                Resetear formulario
            </button>
           </div>
        </div>
        </>
    )
}


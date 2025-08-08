import { useState } from "react";       
import { citas_db } from "../data/citas_db.js";
import { useEffect } from "react";

export default function useCitas() {
    const [listaDecitas, setListaDecitas] = useState(() =>{
        const savedCitas = localStorage.getItem('listaDecitas')
        return savedCitas ? JSON.parse(savedCitas): citas_db
    })
    
    const [seleccionarCita, setSeleccionarCita] = useState('')


    const selectCita = (id) => {
        const citaSelect = listaDecitas.find(cita => cita.id === id)
        setSeleccionarCita(citaSelect)
    }
    const actualizarcita = (id, available) => {
      const updatedCita = listaDecitas.map(cita => cita.id === id ? {...cita, available} : cita)
      setListaDecitas(updatedCita)
    }
    const reservarCita = (id) => { 
        actualizarcita(id, false)
    }
    const cancelarCita = (id) => {
        const citaSelect = listaDecitas.find(cita => cita.id === id)
        
        if (!citaSelect) {
            console.log('Cita no encontrada')
            return
        }
        
        if (citaSelect.available) {
            console.log('La cita ya está disponible')
            return
        }
        
        actualizarcita(id, true)
    }

    const resetFormulario = () => {
        setListaDecitas(citas_db)
        setSeleccionarCita('')
    }
   
    useEffect(() => {
        localStorage.setItem('listaDecitas', JSON.stringify(listaDecitas))
    }, [listaDecitas])

    return {
        listaDecitas,
        seleccionarCita,
        selectCita,
        reservarCita,
        cancelarCita,
        resetFormulario
      
    };
}
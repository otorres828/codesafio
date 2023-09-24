import React, { useEffect, useState } from 'react'
import axios from '../api/axios'
import Recordatorio from './Recordatorio'

function Notificacion() {
    const [notificaciones,setNotificaciones]=useState(null)
    useEffect(()=>{
         axios.get('obtener_notificacion')
         .then((response)=>{
            setNotificaciones(response.data)
         })
    },[])
    
  return (
    <>

        <Recordatorio
            title="Título del recordatorio"
            subtitle="Subtítulo del recordatorio"
            text="Este es el texto del recordatorio. Puedes personalizarlo aquí."
            days="3 días"
          />
    </>
  )
}

export default Notificacion
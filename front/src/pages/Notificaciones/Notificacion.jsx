import React, { useEffect, useState } from 'react'
import axios from '../../api/axios';
import Recordatorio from '../../components/Recordatorio'

function Notificacion() {
    const [recordatorios,setRecordatorios]=useState(null)
    const token_codesafio = localStorage.getItem("token_codesafio");

    const headers ={
      Accept: "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token_codesafio}`
    }

    const obtener_notificaciones=()=>{
        axios.get('recordatorios/obtener_record',{headers:headers})
         .then((response)=>{
            setRecordatorios(response.data.recordatorios)
        })
    }

    useEffect(()=>{
        obtener_notificaciones();
    },[])
    
  return (
    <>
        {recordatorios && recordatorios.map((recordatorio, index) => (
          <Recordatorio
            key={index}
            titulo={recordatorio.titulo}
            materia={recordatorio.materia}
            fecha={recordatorio.fecha}
          />
        ))}

    </>
  )
}

export default Notificacion
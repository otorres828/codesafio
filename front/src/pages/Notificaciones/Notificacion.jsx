import React, { useEffect, useState } from 'react'
import axios from '../../api/axios';
import Recordatorio from '../../components/Recordatorio'

function Notificacion() {
    const [notificaciones,setNotificaciones]=useState(null)
    const token_codesafio = localStorage.getItem("token_codesafio");

    const headers ={
      Accept: "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token_codesafio}`
    }
    useEffect(()=>{
        //  axios.get('obtener_notificacion',{headers:headers})
        //  .then((response)=>{
        //     setNotificaciones(response.data)
        //  })
    },[])
    
  return (
    <>
        <Recordatorio
            titulo="Título del recordatorio"
            materia="Matematicas"
            fecha="25/01/2024"
            dias="3 dias"
          />
    </>
  )
}

export default Notificacion
import React, { useEffect, useState } from 'react';

import axios from '../api/axios';
import { Dialog,DialogActions, DialogContent, DialogTitle } from "@mui/material";

function Lapso() {
  const [lapsos,setLapsos]=useState(null)
  const [lapso,setLapso]=useState(null)
  const token_codesafio = localStorage.getItem("token_codesafio");
  const [nombre, setNombre] = useState('');
  const [lapso_id, setLapso_id] = useState('');

  const headers ={
    Accept: "application/json",
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token_codesafio}`
  }

  function obtener_lapsos() {
    // axios
    //   .get("lapsos/obtener", { headers: headers})
    //   .then((response) => {
    //     setLapsos(response.data);
    //   });
  }

  function agregar_lapso(){
    // axios
    // .post("lapsos/actualizar",{nombre}, { headers: headers})
    // .then((response) => {
    //   obtener_lapsos()
    // });
    navigate('./editar/lapso/',lapso_id)
  }

  function actualizar(){
    axios
    .post("lapsos/actualizar/"+lapso_id,{nombre}, { headers: headers})
    .then((response) => {
      obtener_lapsos()
    });
  }


  function handleClose(){
      setOpen(false);
  }

  useEffect(()=>{
    // obtener_lapsos();
  },[])


  return (
    <>


    </>
  );
}

export default Lapso;

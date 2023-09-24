import React, { useEffect, useState } from 'react';
import {
  Card,
  CardBody,
  Typography,
} from '@material-tailwind/react';
import axios from '../api/axios';

function Lapso({ title, subtitle, days }) {
  const [notificaciones,setNotificaciones]=useState(null)
  const token_codesafio = localStorage.getItem("token_codesafio");

  const headers ={
    Accept: "application/json",
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token_codesafio}`
  }
  useEffect(()=>{
      //  axios.get('obtener_lapsos',{headers:headers})
      //  .then((response)=>{
      //     setNotificaciones(response.data)
      //  })
  },[])
  return (
    <></>
  );
}

export default Lapso;

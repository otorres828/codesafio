import React, { useState } from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft,faCheck } from "@fortawesome/free-solid-svg-icons";
import { Card, CardBody, Input, Button, Typography } from "@material-tailwind/react";
import Logo from "../../components/Logo";
import axios from "../../api/axios";
import { useSnackbar } from "notistack";

function CrearRecordatorio() {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const [titulo,setTitulo]=useState('');
  const [subtitulo,setSubtitulo]=useState('');
  const [fecha,setFecha]=useState('');
  const token_codesafio = localStorage.getItem("token_codesafio");

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token_codesafio}`,
  };

  const crear_recordatorio=()=>{
    axios.post('recordatorios/crear',{titulo,subtitulo,fecha},{headers:headers}).
    then((response)=>{
      if(response.data.mensaje){
        enqueueSnackbar("Recordatorio creado con exito", { variant: "success" });
        setTitulo('')
        setSubtitulo('')
        setFecha('')
        navigate("../panel");
      }else{
        enqueueSnackbar(response.data.error, { variant: "error" });
      }

    })
  }

  return (
    <>
    <div className="bg-gray-100 min-h-screen" >
      <Logo />
      <div className="bg-gray-100 min-h-screen relative flex flex-col justify-center items-center">
        <div className="mx-auto container relative">
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Crear Recordatorio
          </Typography>

          <Card>
            <CardBody>
              <div className="mb-4">
                <Input
                  onChange={(e)=>{setTitulo(e.target.value)}}
                  type="text"
                  id="titulo"
                  label="Título"
                  placeholder=""
                  color="teal"
                  size="regular"
                />
              </div>
              <div className="mb-4">
                <Input
                  onChange={(e)=>{setSubtitulo(e.target.value)}}
                  type="text"
                  id="subtitulo"
                  label="Subtítulo"
                  placeholder=""
                  color="teal"
                  size="regular"
                />
              </div>
              <div className="mb-4">
                <Input
                  onChange={(e)=>{setFecha(e.target.value)}}
                  type="datetime-local"
                  id="fecha"
                  label="Fecha"
                  color="teal"
                  size="regular"
                />
              </div>
            </CardBody>
          </Card>
          {/* Botones */}
          <div className="flex justify-between mt-4 space-x-4">
          <NavLink to="/panel">
          <Button color="red"><FontAwesomeIcon icon={faArrowLeft} /></Button>
          </NavLink>
          <Button color="teal" onClick={()=>{crear_recordatorio()}}><FontAwesomeIcon icon={faCheck} /></Button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default CrearRecordatorio;

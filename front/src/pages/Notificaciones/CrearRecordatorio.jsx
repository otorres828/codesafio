import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft,faCheck } from "@fortawesome/free-solid-svg-icons";
import { Card, CardBody, Input, Button, Typography } from "@material-tailwind/react";
import Logo from "../../components/Logo";
function CrearRecordatorio() {

  const [titulo,setTitulo]=useState('');
  const [subtitulo,setiSubtulo]=useState('');
  const [fecha,setFecha]=useState('');
  
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
                  type="date"
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
            <NavLink to="/crearNotificacion">
              <Button color="teal"><FontAwesomeIcon icon={faCheck} /></Button>
            </NavLink>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default CrearRecordatorio;

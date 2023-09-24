import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCheck } from "@fortawesome/free-solid-svg-icons";
import { Card, CardBody, Input, Button, Typography } from "@material-tailwind/react";
import Logo from "../../components/Logo";
import axios from "../../api/axios";
import { useSnackbar } from "notistack";

function CrearLapso() {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [nombre,setNombre]=useState('');
  const token_codesafio = localStorage.getItem("token_codesafio");

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token_codesafio}`,
  };
  const crear_lapso=()=>{
    axios.post('lapsos/crear_lapsos',{nombre_lapso:nombre},{headers:headers}).
    then((response)=>{
      if(response.data.mensaje){
        enqueueSnackbar("Lapso creado con exito", { variant: "success" });
        setNombre('')
        navigate("../panel");
      }else{
        enqueueSnackbar(response.data.error, { variant: "error" });
      }

    })
  }
  return (
    <>
      <div className="bg-gray-100 min-h-screen relative">
        <Logo />
        <div className="mx-auto container relative">
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Crear Lapso
          </Typography>

          <Card>
            <CardBody>
                <Input
                  onChange={(e)=>{setNombre(e.target.value)}}
                  type="text"
                  id="nombre"
                  label="Nombre"
                  color="teal"
                  size="regular"
                  className="mb-4"
                />
            </CardBody>
          </Card>
          {/* Botones */}
          <div className="flex justify-between mt-4 space-x-4">
            <NavLink to="/panel">
              <Button color="red">
                <FontAwesomeIcon icon={faArrowLeft} />
              </Button>
            </NavLink>
              <Button color="teal" onClick={crear_lapso}>
                <FontAwesomeIcon icon={faCheck} />
              </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CrearLapso;

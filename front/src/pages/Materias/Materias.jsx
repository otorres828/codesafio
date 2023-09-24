import React, { useEffect, useState } from "react";
import LapsoCard from "../../components/LapsoCard";
import axios from "../../api/axios";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

function Materias(props) {
  const token_codesafio = localStorage.getItem("token_codesafio");
  const { id } = props.match.params;

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token_codesafio}`,
  };

  function obtener_lapsos() {
    // axios
    //   .get("lapsos/obtener", { headers: headers})
    //   .then((response) => {
    //     setLapsos(response.data);
    //   });
  }

  function agregar_lapso() {
    // axios
    // .post("lapsos/actualizar",{nombre}, { headers: headers})
    // .then((response) => {
    //   obtener_lapsos()
    // });
    // navigate('./editar/Materia/',lapso_id)
  }

  function actualizar() {
    axios
      .post("lapsos/actualizar/" + lapso_id, { nombre }, { headers: headers })
      .then((response) => {
        obtener_lapsos();
      });
  }

  useEffect(() => {
    // obtener_lapsos();
  }, []);

  return (
    <>
      <LapsoCard
        Materia="Semestre I"
      />
    </>
  );
}

export default Materias;

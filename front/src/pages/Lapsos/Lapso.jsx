import React, { useEffect, useState } from "react";
import LapsoCard from "../../components/LapsoCard";
import axios from "../../api/axios";
import { NavLink } from "react-router-dom";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

function Lapso() {
  const [lapsos, setLapsos] = useState(null);
  const [lapso, setLapso] = useState(null);
  const token_codesafio = localStorage.getItem("token_codesafio");
  const [nombre, setNombre] = useState("");
  const [lapso_id, setLapso_id] = useState("");

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
    // navigate('./editar/lapso/',lapso_id)
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
      {/* <NavLink to={`/lapso/${lapso_id}`}> */}
        <LapsoCard lapso="Semestre I" />
      {/* </NavLink> */}
    </>
  );
}

export default Lapso;

import React, { useEffect, useState } from "react";
import LapsoCard from "../../components/LapsoCard";
import axios from "../../api/axios";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

function Lapso() {
  const [lapsos, setLapsos] = useState(null);
  const token_codesafio = localStorage.getItem("token_codesafio");

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token_codesafio}`,
  };

  function obtener_lapsos() {
    axios
      .get("lapsos/obtener_lapsos", { headers: headers})
      .then((response) => {
        setLapsos(response.data.lapsos);
      });
  }

  useEffect(() => {
    obtener_lapsos();
  }, []);

  return (
    <>
      {lapsos &&
        lapsos.map((lapso, index) => (
        <LapsoCard
          key={index}
          nombre_lapso={lapso.nombre_lapso}
        />
      ))}
    </>
  );
}

export default Lapso;

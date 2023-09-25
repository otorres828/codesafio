import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import { Card, CardBody, Typography } from "@material-tailwind/react";

function Recordatorio({ titulo, materia, fecha_hora }) {
  function formatoFecha(fecha) {
    const fechaObj = new Date(fecha);
    const opciones = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const fechaFormateada = fechaObj.toLocaleDateString('es-ES', opciones).replace('/', '-').replace('/', '-');
    const horaFormateada = fechaObj.toLocaleTimeString('es-ES', { hour12: true });
    return `${fechaFormateada} - ${horaFormateada}`;
  }

  function dias_diferencia(fecha){
    // Crear un objeto Date con la fecha proporcionada
    let fechaProporcionada = new Date(fecha);
    // Crear un objeto Date para la fecha actual
    let fechaActual = new Date();
    // Calcular la diferencia en milisegundos
    let diferencia = fechaProporcionada.getTime() - fechaActual.getTime();
    // Calcular la diferencia en días
    let dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24));
    return dias;
  }
  return (
    <Card className="mb-3">
      <CardBody className="flex">
        {/* Columna 1: Título */}
        <div className="mr-4 flex items-center">
          <FontAwesomeIcon
            size="2x"
            color="#00A896"
            className="flex justify-center items-center"
            icon={faCheckCircle}
          />
        </div>
        {/* Columna 2: Subtítulo dividido en 3 filas, alineado a la izquierda */}
        <div className="w-1/2 flex items-start">
          <div className="flex flex-col">
            <Typography variant="h6" className="text-left">
              {titulo}
            </Typography>
            <Typography variant="paragraph" className="text-left">
              {materia}
            </Typography>
            <Typography variant="paragraph" className="text-left">
              {formatoFecha(fecha_hora)}
            </Typography>
          </div>
        </div>
        {/* Columna 3: Días alineados a la derecha */}
        <div className="w-1/2 flex justify-end items-center">
          <div className="text-right">
            <Typography variant="h5" className="px-3">
             {dias_diferencia(fecha_hora)}
            </Typography>
          </div>
        </div>
      </CardBody>
    </Card>
  );
  
}

export default Recordatorio;

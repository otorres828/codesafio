import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Navigate } from "react-router-dom";
import { Card, CardBody, Typography } from "@material-tailwind/react";

function TarjetaRecordatorio({ recordatorio}) {
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
    if(dias==0)
      return "Hoy";
    if(dias==1)
      return "mañana"
    
    return "en "+ dias + " días";
  }

  function editar(recordatorio){
    return <Navigate to={'./crear-notificacion/'+recordatorio} />;
  }

  return (
    <Card className="mb-3" onClick={()=>{editar(recordatorio)}}>
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
              {recordatorio.titulo}
            </Typography>
            <Typography variant="paragraph" className="text-left">
              {recordatorio.materia}
            </Typography>
            <Typography variant="paragraph" className="text-left">
              {formatoFecha(recordatorio.fecha_hora)}
            </Typography>
          </div>
        </div>
        {/* Columna 3: Días alineados a la derecha */}
        <div className="w-1/2 flex justify-end items-center">
          <div className="text-right">
            <h6 className="text-md  text-ellipsis text-gray-600">
             {dias_diferencia(recordatorio.fecha_hora)}
            </h6>
          </div>
        </div>
      </CardBody>
    </Card>
  );
  
}

export default TarjetaRecordatorio;

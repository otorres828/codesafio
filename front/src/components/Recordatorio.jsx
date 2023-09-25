import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import { Card, CardBody, Typography } from "@material-tailwind/react";

function Recordatorio({ titulo, materia, fecha }) {

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
              {fecha}
            </Typography>
          </div>
        </div>
        {/* Columna 3: Días alineados a la derecha */}
        <div className="w-1/2 flex justify-end items-center">
          <div className="text-right">
            <Typography variant="h5" className="px-3">
             5
            </Typography>
          </div>
        </div>
      </CardBody>
    </Card>
  );
  
}

export default Recordatorio;

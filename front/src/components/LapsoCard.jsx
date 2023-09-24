import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import { Card, CardBody, Typography } from "@material-tailwind/react";

function LapsoCard({ lapso }) {
  return (
    <Card>
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
        <div className="w-1/2 flex items-start items-center">
          <div className="flex flex-col">
            <Typography variant="h6" className="flex text-left">
              {lapso}
            </Typography>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default LapsoCard;

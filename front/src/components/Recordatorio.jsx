import React from 'react';
import {
  Card,
  CardBody,
  Typography,
} from '@material-tailwind/react';

function Recordatorio({ title, subtitle, days }) {
  return (
    <Card>
      <CardBody className="flex">
        {/* Columna 1: Título */}
          <Typography variant="h6" color="blue-gray" className="text-center">
            hola
          </Typography>
        {/* Columna 2: Subtítulo */}
          <Typography variant="paragraph" className=" text-center">
            {subtitle}
          </Typography>
        {/* Columna 3: Días (Centrada verticalmente) */}
        <div className="w-1/3 flex justify-center items-center">
          <div className="text-center">
          <Typography variant="paragraph" color="black" className="px-3">
              {days}
          </Typography>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default Recordatorio;

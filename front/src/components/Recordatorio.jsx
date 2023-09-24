import React from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';

function Recordatorio({ title, subtitle, days }) {
  return (
    <Card className="mt-6">
      <CardBody className="flex">
        {/* Columna 1: Título */}
        <div className="w-1/3">
          <Typography variant="h6" color="blue-gray" className="text-center">
            {/* {title} */}
          </Typography>
        </div>
        {/* Columna 2: Subtítulo */}
        <div className="w-1/3">
          <Typography variant="subtitle2" className=" text-center">
            {subtitle}
          </Typography>
        </div>
        {/* Columna 3: Días (Centrada verticalmente) */}
        <div className="w-1/3 flex justify-center items-center">
          <div className="text-center">
            <Typography variant="subtitle2">
              {days}
            </Typography>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default Recordatorio;

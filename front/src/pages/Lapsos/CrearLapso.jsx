import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCheck } from "@fortawesome/free-solid-svg-icons";
import { Card, CardBody, Input, Button, Typography } from "@material-tailwind/react";
import Logo from "../../components/Logo";

function CrearLapso() {
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
              <div className="mb-4">
                <Input
                  type="text"
                  id="nombre"
                  label="Nombre"
                  color="teal"
                  size="regular"
                />
              </div>
            </CardBody>
          </Card>
          {/* Botones */}
          <div className="flex justify-between mt-4 space-x-4">
            <NavLink to="/panel">
              <Button color="red">
                <FontAwesomeIcon icon={faArrowLeft} />
              </Button>
            </NavLink>
            <NavLink to="/CrearLapso">
              <Button color="teal">
                <FontAwesomeIcon icon={faCheck} />
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default CrearLapso;

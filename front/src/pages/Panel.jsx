import React, { useState } from "react";
import Dropdown from "../components/Dropdown";
import Logo from "../components/Logo";
import { Button } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import Notificacion from "./Notificaciones/Notificacion";
import Lapso from "./Lapsos/Lapso";

function Panel() {
  const options = ["Notificaciones", "Lapsos"];
  const [selectedOption, setSelectedOption] = useState("Notificaciones");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen relative">
        <Logo />
        <div className="container mx-auto mt-4">
          <Dropdown options={options} onSelect={handleOptionSelect} />
        </div>
        <div className="mx-auto container relative">
          {selectedOption === "Notificaciones" ? <Notificacion /> : <Lapso />}
          <div className="fixed right-0 bottom-0 mt-4 mx-6 mb-6">
            <NavLink
              to={
                selectedOption === "Notificaciones"
                  ? `/crearNotificacion`
                  : "/crearLapso"
              }
            >
              <Button>
                {selectedOption === "Notificaciones"
                  ? "crear notificacion"
                  : "crear lapso"}
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Panel;

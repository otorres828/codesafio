import React, { useState } from "react";
import Dropdown from "../components/Dropdown";
import Recordatorio from "../components/Recordatorio";
import Logo from "../components/Logo";
import Lapso from "../components/Lapso";
import { Button } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import Notificacion from "../components/Notificacion";


function Panel() {
  const options = ["Notificaciones", "Lapsos"];
  const [selectedOption, setSelectedOption] = useState("Notificacion");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <Logo />
        {process.env.REACT_APP_API_URL}
        <div className="container mx-auto mt-4">
          <Dropdown options={options} onSelect={handleOptionSelect} />
        </div>
        <div className="mx-auto container">
          {selectedOption==='Notificaciones' ? <Notificacion />:<Lapso />}
          <NavLink to={selectedOption==='Notificaciones' ? 'crear-notificacion':'crear-lapso'}>
            <Button>
            {selectedOption==='Notificaciones' ? 'crear-notificacion':'crear-lapso'}
            </Button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Panel;

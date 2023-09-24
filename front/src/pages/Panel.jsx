import React, { useState } from "react";
import Dropdown from "../components/Dropdown";
import Recordatorio from "../components/Recordatorio";
import Logo from "../components/Logo";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function Panel() {
  const options = ["Notificaciones", "Lapsos"];
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <Logo />
        <div className="container mx-auto mt-4">
          <Dropdown options={options} onSelect={handleOptionSelect} />
          <p className="mt-2">Has seleccionado: {selectedOption}</p>
        </div>
        <div className="mx-auto container mt-4">
        <Recordatorio
        title="Título del recordatorio"
        subtitle="Subtítulo del recordatorio"
        text="Este es el texto del recordatorio. Puedes personalizarlo aquí."
        days="3 días"
        />
        </div>
      </div>
    </>
  );
}

export default Panel;

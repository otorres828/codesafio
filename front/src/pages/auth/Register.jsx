import {
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import React, { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { useSnackbar } from 'notistack';
import login from './../../images/lago.webp';

export function Register() {
  const navigate = useNavigate();
  const nickRef = useRef();
  const [nick, setNick] = useState("");
  const [password, setPassword] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const cabecera = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Custom-Header": "Custom-Value"
  };

  const enviarFormularioRegister = async e => {
    e.preventDefault();
    try {
      const res = await axios.post("register",{nick,password},{ headers: cabecera }
      );
    
      if (res.data.error) {;
        enqueueSnackbar(res.data.error, { variant: res.data.error });
      } else {
        localStorage.setItem("token_codesafio", res.data.token_codesafio);
        enqueueSnackbar("Gracias por volver :D ", { variant: "success" });
        navigate("../panel");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        enqueueSnackbar("Credenciales inválidas", { variant: "error" });
      } else {
        enqueueSnackbar("Error en la autenticación de usuario", { variant: "error" });
      }
    }
  };
  
  return (
    <>
      <img
        src={login}
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div>
        <form onSubmit={enviarFormularioRegister}>
          <div className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
            <CardHeader
              variant="gradient"
              color="blue"
              className="mb-4 grid h-28 place-items-center"
            >
              <Typography variant="h4" color="white" className="px-3">
                  CONTROL DE NOTAS
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <Input type="text" label="Nick" size="lg" className="text-gray-400"
                          ref={nickRef}
                          onChange={e => setNick(e.target.value)}
                          value={nick}
                          autoComplete="off"/>
              <Input type="password" label="Password" size="lg"  className="text-gray-400"
                          onChange={e => setPassword(e.target.value)}
                          value={password}
                          autoComplete="off"
                          required/>
              
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" type="submit" fullWidth>
              Registrarse
              </Button>
              <NavLink to={`/login`}>
                <Typography  className="mt-3 text-gray-400
                text-right">
                  Ya tengo cuenta
                </Typography>
              </NavLink>
            </CardFooter>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;

import { Routes, Route, Navigate } from "react-router-dom";
import { RedirectLogin, RedirectPanel } from "./components/ProtectedRoute.jsx";
import { Login,Register } from "./pages/auth";
import  Panel  from "./pages/Panel";
import CrearRecordatorio from "./pages/Notificaciones/CrearRecordatorio.jsx";
import EditarNotificacion from "./pages/Notificaciones/EditarNotificacion.jsx";

import CrearLapso from "./pages/Lapsos/CrearLapso.jsx";
import EditarLapso from "./pages/Lapsos/EditarLapso.jsx";
import Materias from "./pages/Materias/Materias.jsx";


function App() {
  return (
    <Routes>
        {/* REDIRIGE AL  SI HAY UN USUARIO LOGUEADO */}
      <Route element={<RedirectPanel/>}>
        <Route path="login" element={<Login />} />
        <Route path="registrarse" element={<Register />} />
      </Route>
              
      {/* PARA ACCEDER DEBE DE EXISTIR UN UNSUARIO LOGUEADO */}
      <Route element={<RedirectLogin />}> 
        <Route path="/panel" element={<Panel />} />
        <Route path="crear-recordatorio/:recordatorio?" element={<CrearRecordatorio />} />
        <Route path="editarNotificacion" element={<EditarNotificacion />} />

        <Route path="crear-lapso" element={<CrearLapso />} />
        <Route path="editarLapso" element={<EditarLapso />} />

        <Route path="lapso/:id" element={<Materias /> } />
      </Route>

      {/* RUTAS DE ERRORES */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;

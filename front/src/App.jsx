import { Routes, Route, Navigate } from "react-router-dom";
import { RedirectLogin, RedirectPanel } from "./components/ProtectedRoute.jsx";
import { Login,Register } from "./pages/auth";
import  Panel  from "./pages/Panel";

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
        <Route path="panel" element={<Panel />} />
      </Route>

      {/* RUTAS DE ERRORES */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;

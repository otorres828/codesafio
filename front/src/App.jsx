import { Routes, Route, Navigate } from "react-router-dom";
import { RedirectLogin, RedirectPanel } from "./components/ProtectedRoute.jsx";
import { Login } from "./pages/auth";
import  Panel  from "./pages/Panel";

function App() {
  return (
    <Routes>
        {/* REDIRIGE AL  SI HAY UN USUARIO LOGUEADO */}
      <Route element={<RedirectPanel/>}>
          <Route path="login" element={<Login />} />
      </Route>
              
      {/* PARA ACCEDER DEBE DE EXISTIR UN UNSUARIO LOGUEADO */}
      <Route element={<RedirectLogin />}> 
      </Route>
      <Route path="panel" element={<Panel />} />

      {/* RUTAS DE ERRORES */}
      <Route path="*" element={<Navigate to="/panel" replace />} />
    </Routes>
  );
}

export default App;

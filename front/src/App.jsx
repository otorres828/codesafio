import { Routes, Route, Navigate } from "react-router-dom";
import { RedirectLogin, RedirectPanel } from "./components/ProtectedRoute.jsx";
import { Login } from "./pages/auth";

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
      
      {/* RUTAS DE ERRORES */}
      <Route path="*" element={<Navigate to="/panel-control" replace />} />
    </Routes>
  );
}

export default App;

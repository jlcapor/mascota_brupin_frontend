import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layout/PageLayout/AuthLayout";
import PageLayout from "./layout/PageLayout/PageLayout";
import Login from "./pages/auth/Login";
import CrearCuenta from "./pages/auth/CrearCuenta";
import OlvidePassword from "./pages/auth/OlvidePassword";
import NuevoPassword from "./pages/auth/NuevoPassword";
import ConfirmarCuenta from "./pages/auth/ConfirmarCuenta";
import Inicio from "./pages/Home/Inicio";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Inicio />} />
        </Route>

        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="registrar" element={<CrearCuenta />} />
          <Route path="olvide-password" element={<OlvidePassword />} />
          <Route path="olvide-password/:token" element={<NuevoPassword />} />
          <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

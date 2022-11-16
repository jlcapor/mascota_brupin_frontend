import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./router/PrivateRoute/PrivateRoute";
import HomeLayout from "./layout/PageLayout/PageLayout";
import DashboardLayout from "./layout/Dashboard/DefaultLayout";

///Public
import Inicio from "./pages/Home/Inicio";
import Login from "./pages/auth/Login";
import CrearCuenta from "./pages/auth/CrearCuenta";
import OlvidePassword from "./pages/auth/OlvidePassword";
import NuevoPassword from "./pages/auth/NuevoPassword";
import ConfirmarCuenta from "./pages/auth/ConfirmarCuenta";
import ProfilePage from "./pages/profile";

//Privado
import Dashboard from "./modules/home/index";

//User
import ListUser from "./modules/security/user/ListUser";
import CreateUser from "./modules/security/user/CreateUser";
import EditUser from "./modules/security/user/EditUser";
import SingleUserPage from "./modules/security/user/SingleUserPage";

import PetList from "./modules/pets/PetList";
import CreatePet from "./modules/pets/CreatePet";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Inicio />} />
        </Route>

        <Route path="/cuenta" element={<HomeLayout />}>
          <Route element={<PrivateRoute />}>
            <Route path='user-profile' element={<ProfilePage />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="registrar" element={<CrearCuenta />} />
          <Route path="olvide-password" element={<OlvidePassword />} />
          <Route path="olvide-password/:token" element={<NuevoPassword />} />
          <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
        </Route>

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="crear-usuario" element={<CreateUser />} />
          <Route path="editar-usuario/:userId" element={<EditUser />} />
          <Route path="lista-usuarios" element={<ListUser />} />
          <Route path="lista-usuarios/:userId" element={<SingleUserPage />} />

          <Route path="crear-mascota" element={<CreatePet />} />
          <Route path="lista-mascotas" element={<PetList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

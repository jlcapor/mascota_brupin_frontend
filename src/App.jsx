import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./layout/PageLayout/RutaProtegida";

import HomeLayout from "./layout/PageLayout/PageLayout";
import DashboardLayout from "./layout/Dashboard/DefaultLayout";


///Customer
import Inicio from "./modules/Home/HomeDefault/Inicio";
import Login from "./modules/Auth/Login";
import CrearCuenta from "./modules/Auth/CrearCuenta";
import OlvidePassword from "./modules/Auth/OlvidePassword";
import NuevoPassword from "./modules/Auth/NuevoPassword";
import ConfirmarCuenta from "./modules/Auth/ConfirmarCuenta";
import ProfilePage from "./modules/Auth/Profile/PerfilPage";
import CreateAddress from "./modules/Address/CreateAddress";
import RevisarSolicitudes from "./modules/AfilicionMascota/RevisarSolicitudes";
import SolicitarAfiliacion from "./modules/AfilicionMascota/SolicitarAfiliacion";
import CreateContact from "./modules/contact/CreateContact";
//Mascotas
import PetList from "./modules/Admin/Pets/PetList";



//Privado
import Dashboard from "./modules/Home/HomeAdmin/index";

//Admin
import ListUser from "./modules/Security/user/ListUser";
import CreateUser from "./modules/Security/user/CreateUser";
import EditUser from "./modules/Security/user/EditUser";
import SingleUserPage from "./modules/Security/user/SingleUserPage";


//Asesor
 import ListadoSolicitudes from "./modules/EvaluarSolicitudes/ListadoSolicitudes";
 import ResolucionSolicitud from "./modules/EvaluarSolicitudes/ResolucionSolicitud";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Inicio />} />
          <Route path="contact" element={<CreateContact/>}/>
        </Route>

        <Route path="/cuenta" element={<HomeLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="registrar" element={<CrearCuenta />} />
          <Route path="olvide-password" element={<OlvidePassword />} />
          <Route path="olvide-password/:token" element={<NuevoPassword />} />
          <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
          <Route element={<PrivateRoute />}>
            <Route path="user-profile" element={<ProfilePage />} />
            <Route path="crear-mascota" element={<SolicitarAfiliacion />} />
            <Route path="ver-solicitudes" element={<RevisarSolicitudes />} />
            <Route path="addresses" element={<CreateAddress />} />
          </Route>
        </Route>

        <Route path="/admin" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="crear-usuario" element={<CreateUser />} />
          <Route path="editar-usuario/:userId" element={<EditUser />} />
          <Route path="lista-usuarios" element={<ListUser />} />
          <Route path="lista-usuarios/:userId" element={<SingleUserPage />} />
          <Route path="lista-mascotas" element={<PetList />} />
          <Route path="solicitud-afiliaciones" element={<ListadoSolicitudes />} />
          <Route path="resolucion-solicitud/:petId" element={<ResolucionSolicitud />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

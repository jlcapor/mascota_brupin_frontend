import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
    const userInfo = useSelector(
        (state) => state.auth
      );

      const { user: currentUser } = userInfo
  return currentUser && currentUser.datos.rol ==='Administrador' ? children : <Navigate to="/signin" />;
};

export default AdminRoute;

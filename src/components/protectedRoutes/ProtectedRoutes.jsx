import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutes = () => {
  const navigate = useNavigate();
  const confirm = useSelector(state => state.confirm)
  console.log(confirm)
  // Aquí va la condición. Puede ser una condición de cualquier tipo. Lo que
  // Importa es que valide si el usuario está loggeado o no
  if (confirm) {
    return navigate("/Home");
  } else {
    return <Outlet />;
  } // Aquí le debemos decir la ruta a la que queremos llevar
}; // al usuario si no está autenticado

export default ProtectedRoutes;
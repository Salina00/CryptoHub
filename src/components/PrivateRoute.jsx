import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();


  if (loading) {
    return children;
  }

  return currentUser ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

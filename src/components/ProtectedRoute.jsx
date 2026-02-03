import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { isLoggedIn } = useAuth();

    if (!isLoggedIn) {
        // Redirigir al login si no está autenticado
        return <Navigate to="/login" replace />;
    }

    // Si está autenticado, mostrar el contenido
    return children;
};

export default ProtectedRoute;
